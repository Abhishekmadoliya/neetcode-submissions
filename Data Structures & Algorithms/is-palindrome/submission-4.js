class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const t = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let l=0;
        let r= t.length-1;


        while(l<r){
            if(t[l] != t[r]){

                return false
            }
            l++;
            r--;
        }

        return true
    }
}
