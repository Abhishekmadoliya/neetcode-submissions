class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();

        for(let i=0; i<nums.length; i++){
            

            let targetWeWantFromMap = target-nums[i];

            if(map.has(targetWeWantFromMap)){
                return [i,map.get(targetWeWantFromMap)];
            }

            if(!map.has(nums[i])){
                map.set(nums[i], i);
                continue;
            }



        
        }
    }
}
