class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     * 
     * constraints
     * length of each input
     * s.length >= 1
     * t.length <= 5 * 10^4
     * 
     * is doesn't have to be a valid word. jibberish is fine
     * 
     * test case
     * happy path: true
     * s = listen, t = silent
     * 
     * happy path: false
     * s = happy, t = sad
     * 
     * 
     */
    isAnagram(s: string, t: string): boolean {
        // early check to return
        // 1. check if t is a valid string
        if (t.length === 0) return false

        // 2. s and t length are not equal
        if (s.length !== t.length) return false

        // Solution1: sort two word and compare if they are equal
        // time O(n log n + m log m)
        let sortedS = s.split('').sort().join();
        let sortedT = t.split('').sort().join();
        return sortedS === sortedT
        


    }
}
