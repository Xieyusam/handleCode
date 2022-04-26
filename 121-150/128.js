// 方法一：两次遍历
var sortArrayByParityII = function(nums) {
    const n  = nums.length;
    const ans = new Array(n);
    let i = 0;
    for (const x of nums) {
        if (!(x & 1)) {
            ans[i] = x;
            i += 2;
        } 
    }

    i = 1;
    for (const x of nums) {
        if (x & 1) {
            ans[i] = x;
            i += 2;
        }
    }

    return ans;
};
// 方法二：双指针

const swap = (nums, i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
};
var sortArrayByParityII = function(nums) {
    const n  = nums.length;
    let j = 1;
    for (let i = 0; i < n; i += 2) {
        if (nums[i] & 1) {
            while (nums[j] & 1) {
                j += 2;
            }
            swap(nums, i, j);
        }
    }   
    return nums;
};
