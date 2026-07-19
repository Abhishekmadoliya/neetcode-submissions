class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        // Count frequency
        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        // Sort by frequency (highest first)
        const result = [...map.entries()]
            .sort((a, b) => b[1] - a[1]);

        // Return only the numbers
        return result.slice(0, k).map(entry => entry[0]);
    }
}