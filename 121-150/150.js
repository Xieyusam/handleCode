// 一行求解
const commonChars1 = (A) => A.reduce(([...prev], [...next]) => prev.filter((item) => next.indexOf(item) > -1 && next.splice(next.indexOf(item), 1).length));

// js写法
const getCommon = (a, b) => {

    // 设置哈希映射存储字母出现次数
    const map = new Map();
  
    // 遍历 a 字符串，并存储字母及其次数
    for (let i = 0; i < a.length; i++) {
      const aData = map.get(a[i]);
      if (!aData) {
        map.set(a[i], 1);
      } else {
        map.set(a[i], aData + 1);
      }
    }
  
    // 设置共同字符串
    const result = [];
  
    // 遍历 b 字符串，将其含有和 a 相同的取出来
    for (let i = 0; i < b.length; i++) {
      const bData = map.get(b[i]);
      if (bData) {
        result.push(b[i]);
        map.set(b[i], bData - 1);
      }
    }
  
    // 返回结果
    return result;
  };
  
  /**
   * @name 主函数
   * @param {string[]} A 需要判断的数组
   * @return {string[]} 返回相同字符串组成的数组
   */
  const commonChars = (A) => {
    return A.reduce((prev, next) => getCommon(prev, next))
  };
