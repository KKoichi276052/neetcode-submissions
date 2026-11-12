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
        // for (let i = 0; i < nums.length; i++) {
        //     for (let j = i + 1; j < nums.length; j++) {
        //         if (nums[i] + nums[j] === target) {
        //             return [i, j];
        //         }
        //     }
        // }

        // create a map to track the previously seen number
        // const seen = new Map<number, number>();

        // for(let i = 0; i < nums.length; i++) {
        //     const complement = target - nums[i]
        //     const previousIndex = seen.get(complement)
        //     console.log(previousIndex)

        //     if (previousIndex !== undefined) return [previousIndex, i]

        //     seen.set(nums[i], i)
        // }

        // return null;
        // create a Map to track the previous
        const prevMap = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            // calculate the diff that will satisfy the target with the first element of nums
            // first loop
            // i = 0
            //     4        7       3
            // second loop
            // i = 1
            //     3        7       4
            const diff = target - nums[i]
            
            // check if the diff exists in the nums array
            // if yes will return those indices
            if (prevMap.has(diff)) {
                return [prevMap.get(diff), i]
            }

            // For the first loop
            // 3 -> 0
            prevMap.set(nums[i], i)
        }
    }
}
