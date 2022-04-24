
// 100. leecode 495. 提莫攻击

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
 var findPoisonedDuration = function(timeSeries, duration) {
    let ans = duration
    for(let i = 1 ; i < timeSeries.length ; i++){
        let cut = timeSeries[i] - timeSeries[i-1] 
        if(cut >= duration ){
            ans += duration
        } else {
            ans = ans + duration - (duration - cut)
        }
    }
    return ans
};