// 22. 实现字符串的repeat方法

// 输入字符串s，以及其重复的次数，输出重复的结果，例如输入abc，2，输出abcabc。

function repeat(s,n){
    return (new Array(n+1)).join(s)
}

// test

console.log(repeat('123456789',4))

// 递归：

function repeat2(s, n) {
    return n > 0 ? s.concat(repeat2(s,--n)) : '' 
}

console.log(repeat('123456789',2))
