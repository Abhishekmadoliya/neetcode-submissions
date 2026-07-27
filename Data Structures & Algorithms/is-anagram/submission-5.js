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

    // other soluction

    // we can use hashmap here , put char in map in first loop of str1, delete char from map in second loop of str2
    // if map length ==0 return true

    // class Solution {
    // isAnagram(s, t) {
    //     if (s.length !== t.length) return false;

    //     const count = new Map();

    //     for (const ch of s) {
    //         count.set(ch, (count.get(ch) || 0) + 1);
    //     }

    //     for (const ch of t) {
    //         if (!count.has(ch)) return false;

    //         count.set(ch, count.get(ch) - 1);

    //         if (count.get(ch) === 0) {
    //             count.delete(ch);
    //         }
    //     }

    //     return count.size === 0;
    // }
// }
}
