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