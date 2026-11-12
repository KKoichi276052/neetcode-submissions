class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * 
     * constraints
     * every input has exactly one pair of indices that satisfy he condition
     * it should return the answer with the smaller index first
     * 
     * array has at least two elements
     * array sorted?
     * 
     * 
     * test case
     * nums = [3,4,5,6]
     * target = 7
     * return [0,1]
     * 
     */
    twoSum(nums: number[], target: number): number[] {
        // brute force
        // start the loop from the first element
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
    }
}
