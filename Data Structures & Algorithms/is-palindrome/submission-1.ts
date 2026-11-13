class Solution {
    // check alphanumeric
    isAlphanumeric(char: string): boolean {
        return /^[a-zA-Z0-9]$/.test(char);
    } 
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
        // const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        // return cleaned === cleaned.split('').reverse().join('');
        
        // two pointer solution
        // radar
        // Step 1: initialize the two pointer
        // track the position from the first character and the last character
        const normalized = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
        let left = 0;
        let right = normalized.length - 1;

        while (left < right) {
            if (normalized[left] !== normalized[right]) {
                return false
            }

            left++;
            right--;
        }

        return true
    }
}
