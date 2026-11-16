class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     * 
     * constraints
     * is there always only one valid pair?
     * just pair is ok? or have to be in order -> yes
     * is input always only brackets? -> yes
     * is only brackets, parentheses is assumed for the input? -> yes
     * 
     * 
     * 
     * test cases
     * input: [] -> true
     * input: ([]) -> true
     * input: [(]) -> false. wrong bracket type
     * input: ()) -> false. unclosed open bracket exists
     * input: )( -> false. closing bracket comes first
     * 
     * for valid one have to start with opening one
     * at least there have to be one pair of parenthese
     * 
     * 
     */
    isValid(s: string): boolean {
        // // map the pair
        // const bracketsPair = new Map<string, string>();
        
        // // step. initialize the pointer
        // let left = 0;
        // let right = s.length - 1;

        // // compare the pointer
        // while (left < right) {
        //     // return false it's the pair
        //     return s[left] !== s[right];
        // }

        // brute force approach
        // approach:check the pair exists until every pair is gone
        // true: the input string becomes emtpy
        // false: no pair of the same type of parenthese exists anymore
        // loop the string and check valid parentheses exists
        // loop will end with resulting s to become empty -> valid paretheses
        // loop will end with still some character  -> unvalid parentheses
        // while (s.includes('()') || s.includes('{}') || s.includes('[]')) {
        //     // remove the pair
        //     s = s.replace('()', '');
        //     s = s.replace('{}', '');
        //     s = s.replace('[]', '');
        // }
        // // return true if string is empty and false if not
        // return s === ''

        // Stack solution
        // step 1. initialize the stack
        const stack: string[] = [];

        // step 2. Map the type of valid bracket type
        const matchingOpen = new Map<string, string>([
            [")", "("],
            ["]", "["],
            ["}", "{"],
        ]);

        // loop the input
        for (const char of s) {
            if (char === '(' || char === '[' || char === '{') {
                stack.push(char);
                continue;
            }

            const expectedOpen = matchingOpen.get(char);
            // removes the last element from an array and returns that element. This method changes the length of the array.
            const actualOpen =stack.pop();

            if (expectedOpen === undefined || actualOpen !== expectedOpen) {
                return false
            }
        }
        return stack.length === 0;
    }
}
