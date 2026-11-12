class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     * 
     * constraints
     * is uppercase and lowercase mixed? -> yes
     * is number mixed? -> yes
     * is the input always consist of more than 1 character?
     * do we ignore the spaces and punctuations
     * comparison is case-insensitive?
     * only English letters and digits
     * 
     * testcase
     * "Was it a car or a cat I saw?" -> true
     * "tab a cat" -> false
     * 
     */
    isPalindrome(s: string): boolean {
        // early return for one character
        // if (s.length === 1) return true;

        // // sanitize the s
        // const sanitized = s.toLowerCase().replace('?', '')

        // // brute force solution: prepare a reversed string and compare with the input
        // const reversed = s.toLowerCase().split('').reverse().join()
        // return s === reversed
        const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        return cleaned === cleaned.split('').reverse().join('');
        
    }
}
