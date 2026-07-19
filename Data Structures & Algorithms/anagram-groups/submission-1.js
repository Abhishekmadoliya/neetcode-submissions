class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        let ans =[];


        for(let val of strs){
            let sorted = val.split("").sort().toString();
            if(map.has(sorted)){
                map.get(sorted).push(val);
            }

            if (!map.has(sorted)) {
                map.set(sorted, [val]);
            }
        }

        for(const [key,value] of map){
            ans.push(value);
        }

    return ans
    }
}
