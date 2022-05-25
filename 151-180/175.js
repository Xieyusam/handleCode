/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var largestSumAfterKNegations = function(nums, k) {
    // 记录出现次数
    const freq = new Map();
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    // 求和
    let ans = _.sum(nums);
    // 从-100开始遍历，即最小的负数
    for (let i = -100; i < 0; ++i) {
        // 
        if (freq.has(i)) {
            // 取k与负数次数的最小值
            const ops = Math.min(k, freq.get(i));
            // 得抵消原来nums里的值，所以要x2
            ans += (-i) * ops * 2;
            // 减去次数
            freq.set(i, freq.get(i) - ops);
            // 设置新的数的次数
            freq.set(-i, (freq.get(-i) || 0) + ops);
            // 减去 k值
            k -= ops;
            // 如果刚刚好用完k就推出循环
            if (k === 0) {
                break;
            }
        }
    }
    // 如果剩下的k值是单数，而且num中不存在0
    // 这时候需要消耗一个最小的正数
    if (k > 0 && k % 2 === 1 && !freq.has(0)) {
        for (let i = 1; i <= 100; ++i) {
            if (freq.has(i)) {
                ans -= i * 2;
                break;
            }
        }
    }
    return ans;
};