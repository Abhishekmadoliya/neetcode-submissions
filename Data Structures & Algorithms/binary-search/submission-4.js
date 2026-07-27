class Solution {
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2);

            if (nums[mid] === target) {
                return mid;
            }

            if (target > nums[mid]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return -1;
    }
}