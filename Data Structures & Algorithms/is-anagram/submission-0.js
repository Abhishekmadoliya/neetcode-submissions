class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const str1 = s.split("").sort().toString();
        const str2 = t.split("").sort().toString();

        if(str1==str2){
            return true
        }else{
            return false
        }
    }
}
