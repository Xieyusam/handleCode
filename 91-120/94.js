// 写一个去除制表符和换行符的方法

const removeSymbol = (str) => str.replace(/\t|\n|\r/g,'')

const str =
  "\t11122233\n_aaaaaaa\r\n_bbbbbb\t_3333333\r_4444444\n_555555";
  
console.log(removeSymbol(str))