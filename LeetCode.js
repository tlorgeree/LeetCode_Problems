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