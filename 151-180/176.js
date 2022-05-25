// 【桶排序】高度检查器

/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
    // 记录桶值
    let bucket = new Array(101).fill(0);
    for (let i of heights) {
        bucket[i]++;
    }
    // 记录ans
    let ans = 0;
    for (let i = 1, j = 0; i < bucket.length; i++) {
        while (bucket[i]-- > 0) { // 从最靠前的桶开始
            if (heights[j++] !== i) ans++; //与桶值不对应，ans++
        }
    }
    return ans;
};