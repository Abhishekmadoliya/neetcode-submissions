class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = new Map();

        for (let val of nums) {
            if (map.has(val)) {
                return true;
                continue;
            }
            map.set(val, 1);


        }

        return false;
    }
}
