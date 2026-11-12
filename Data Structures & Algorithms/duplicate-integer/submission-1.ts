// constraints
// input
// 0 <= nums.length <= 10^5
// 
// test cases
// [1,2,3,3] contains duplicate -> return true
// [1,2,3,4] doesn't contain duplicate -> return false

class Solution {
    hasDuplicate(nums) {
        return new Set(nums).size < nums.length;
    }
}