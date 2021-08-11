/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    output = [];
    for(var i = 0; i < nums.length; ++i)
        {
            for(var j = 0; j < nums.length; ++j)
                {
                    if (!(i==j))
                    {
                        if (nums[i] + nums[j] == target)
                            {
                                output[0] = i;
                                output[1] = j;
                                return output;
                            }
                    }
                }
            
        }
};

/*For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. 
The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where 
subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.*/
/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    sym = ["I", "V", "X","L","C","D","M"];
    val = [1,5,10,50,100,500,1000];
    output = 0;
    for(var i = 0; i < s.length; ++i)
    {
        find = sym.indexOf(s[i]);
        find_next = sym.indexOf(s[i+1]);
        if (!(find < find_next))
        {
            output += val[find];
        }
        else
        {
            switch (sym[find_next])
            {
                case "V": output += 4;
                    ++i;
                    break;
                case "X": output += 9;
                    ++i;
                    break;
                case "L": output += 40;
                    ++i;
                    break;
                case "C": output +=90;
                    ++i;
                    break;
                case "D": output += 400;
                    ++i;
                    break;
                case "M": output += 900;
                    ++i;
                    break;
                case "I": output++;
                    break;
                default: output++;
                    break;
            }
        }
    }
    return output;
};

/*Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".*/

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    current_i = "";
    current_j = "";
    current_j_last = "";
    output = "";
    if (strs.length == 1) return strs[0];
    for (var i = 0; i < strs.length; ++i)
        {
            
            for (var j = 0; j < strs.length; ++j)
                {
                    if (strs[j] == "") return "";
                    var max = Math.min(strs[i].length, strs[j].length);
                    if (!(i == j))
                    {
                        for (var k = 0; k < max; k++)
                            {

                                if (strs[i][k] == strs[j][k]) current_j += strs[i][k];
                                else
                                    {
                                        if (k == 0) return "";
                                        else 
                                            {
                                                if (k == 0) return "";
                                                else break;
                                            }
                                    }

                                
                                
                            }
                        if (current_j_last == "") current_j_last = current_j;
                        else 
                            {
                                if ((current_j.length < current_j_last.length) && (current_j != "")) current_j_last = current_j;
                            }

                        current_j = "";
                    }
                }
            if (current_j_last.length > current_i.length) current_i = current_j_last;
        }
    return current_i;
};

/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    parenthesis = 0;
    bracket = 0;
    curley = 0;
    arr = [];
    let l = s.length
    for (let i = 0; i < l; i++)
        {
            switch (s[i])
                {
                    case "(": parenthesis++;
                        arr.push("po");
                        break;
                    case ")":
                        if (arr[arr.length-1] == "po") 
                        {
                            parenthesis--;
                            arr.splice(arr.length-1);
                        }
                        else return false;
                        break;
                    case "[": bracket++;
                        arr.push("bo");
                        break;
                    case "]": 
                        if (arr[arr.length-1] == "bo") 
                        {
                            bracket--;
                            arr.splice(arr.length-1);
                        }
                        else return false;
                        break;
                    case "{": curley++;
                        arr.push("co")
                        break;
                    case "}":
                        if (arr[arr.length-1] == "co") 
                        {
                            curley--;
                            arr.splice(arr.length-1);
                        }
                        else return false;
                        break;
                    
                }
            
                
        }
    if ((parenthesis == 0) && (bracket == 0) && (curley == 0)) return true;
    else return false;
};
/* WEEKLY CHALLENGE INCOMPLETED Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    let output = new Array();
    output.push([]);
    nums.sort();
    let ref = new Array([]);
    n = 0;
    let max = nums.length;
    while (n < max)
        {
            for (let i = 0; i < max; ++i)
                {        
                    let sub_output = new Array();
                    let sub_ref = "";
                    let j = i;
                    while (j < max)
                        {
                            if ((j<=i)||(j>i+n)) 
                                {
                                    sub_output.push(nums[j]);
                                    let n_sub_output = []
                                    for (let k = 0; k < sub_output.length; ++k) //need to clone array or nothing works right
                                        {
                                            n_sub_output.push(sub_output[k]);
                                        }
                                    console.log(n_sub_output)
                                    sub_ref += nums[j].toString();
                                    if ((ref.indexOf(sub_ref)<0) )
                                    {
                                        ref.push(sub_ref);                      
                                        output.push(n_sub_output); 
                                    }




                                }
                            j++;

                        }     
                }
            n++;
        }
    
    return output;
};

/*Merge two sorted linked lists and return it as a sorted list. 
The list should be made by splicing together the nodes of the first two lists*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 var mergeTwoLists = function(l1, l2) {
    if(l1 === null && l2 === null) return null;
    if(l1 === null && l2 !== null) return l2;
    if(l1 !== null && l2 === null) return l1;
    let output = new ListNode();
    let temp = output;
    while (l1 && l2)
        {
            if (l1.val < l2.val)
                {
                    temp.next = l1;
                    l1 = l1.next;
                }
            else
                {
                    temp.next = l2;
                    l2 = l2.next;
                }
            temp = temp.next;
        }
    temp.next = l1 || l2;
    return output.next;

};

/*Given an integer array nums sorted in non-decreasing order, remove the duplicates 
in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
Since it is impossible to change the length of the array in some languages, 
you must instead have the result be placed in the first part of the array nums. More formally,
if there are k elements after removing the duplicates, then the first k elements of nums 
should hold the final result. It does not matter what you leave beyond the first k elements.
Return k after placing the final result in the first k slots of nums.
Do not allocate extra space for another array. You must do this by modifying the input 
array in-place with O(1) extra memory.*? */
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    console.log(nums);
    return i + 1;
};

/*Implement strStr(). Return the index of the first 
occurrence of needle in haystack, or -1 if needle is not part of haystack.
Clarification: What should we return when needle is an empty 
string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle 
is an empty string. This is consistent to C's strstr() and Java's indexOf().*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    return haystack.indexOf(needle); //"Hey, I've seen this befrore"
};
//same problem but without cheating and using indexOF()
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if ((needle.length === 0) || (needle == haystack)) return 0;
    if ((haystack.length === 0) ||(needle.length > haystack.length)) return -1;
    
    
    count = 0;
    for (let n = 0; n < needle.length; n++)
        {
            if (haystack.includes(needle[n])) count++;
        }
    if (count < needle.length) return -1;
    else
        {
            found = 0 ;
            start = false;
            for(let i = 0; i < haystack.length; ++i)
                {
                    if (start == true)
                    {
                        if (haystack[i] == needle[0+found])
                        {
                            found++;
                            if (found == count) return i +1 - found;
                        }
                        else 
                        {
                            i -= found - 1;
                            found = 0;
                            start = false;
                        }
                    }
                    if ((haystack[i] == needle[0]) && (start == false))
                    {
                        found++;
                        start = true;
                        console.log("started: " + i);
                        if (needle.length == 1) return i;
                    }
                    
                    
                }
        }
    return -1;
    
};

/*Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.*/
//Basically, just write a binary search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    //Binary Search algorithm O(log(n)) time
    let l = 0;
    let r = nums.length - 1;
    
    while(l<=r)
        {
            m = (Math.floor((l + r) / 2));
            if (nums[m] < target)
                {
                    l = m + 1;
                }
            else if (nums[m] > target)
                {
                    r = m - 1;
                }
            else return m;
        }
    return l;
};

/*Given an integer array nums, find the contiguous subarray 
(containing at least one number) which has the largest sum and return its sum.
A subarray is a contiguous part of an array.*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {//bad solution O(n^2)
    let max = nums.length;
    let last_highest = new Array();
    let curr_highest = new Array();
    let output = 0;
    let sum = 0;
    for (let i = 0; i < max; i++)
        {
            for(let j = i; j < max; j++)
                {
                    sum += nums[j];
                    curr_highest.push(sum);
                }
            if ((Math.max.apply(Math,curr_highest)) > (Math.max.apply(Math,last_highest)))
                {
                    last_highest = curr_highest;
                    
                }
            curr_highest = [];
            sum = 0;
        }
    output = Math.max.apply(Math, last_highest);
    return output;
    
};

/*Given a string s consisting of some words separated by some 
number of spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.*/
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    const s_arr = s.trim().split(" ");
    return s_arr[s_arr.length-1].length;
};

/*Given a non-empty array of decimal digits representing 
a non-negative integer, increment one to the integer.
The digits are stored such that the most significant digit is at the
head of the list, and each element in the array contains a single digit.
You may assume the integer does not contain any leading zero, 
except the number 0 itself.*/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    for(let i = (digits.length - 1); i >=0; i--)
        {
            if (!(digits[i] == 9))
            {
                digits[i]++;
                return digits;
            }
            else
                {
                    digits[i] = 0;              
                    if (i == 0) 
                    {
                        digits.splice(0,0,1);
                        return digits;
                    }
                }
        }
};