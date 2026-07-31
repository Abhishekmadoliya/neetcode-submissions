class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        const bMap = {
            ')': '(',
            ']': '[',
            '}': '{'


        }

        for (let c of s) {
            if (bMap[c]) {
                if (stack.length > 0 && stack[stack.length - 1] === bMap[c]) {

                    stack.pop();
                } else {
                    return false;
                }

            } else {
                stack.push(c);
            }
        }

        return stack.length === 0;
    }
}
