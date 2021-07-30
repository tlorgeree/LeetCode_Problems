
class Solution(object):
    #Given a signed 32-bit integer x, return x with its digits reversed. 
    #If reversing x causes the value to go outside the signed 32-bit integer 
    #range [-231, 231 - 1], then return 0.
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        if x < 0:
            str_x = str(abs(x))
            output = int(str_x[::-1])
            if output < 2**31:
                return (-1* output)
            else: 
                return 0
            
        else:
            str_x = str(x)
            output = int(str_x[::-1])
            if output < 2**31:
                return output
            else: 
                return 0
    
    #Given an integer x, return true if x is palindrome integer.
    #An integer is a palindrome when it reads the same backward as forward. 
    #For example, 121 is palindrome while 123 is not.
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if x < 0:
            return False
        str_x = str(x)
        if str_x == str_x[::-1]:
            return True
        return False
                