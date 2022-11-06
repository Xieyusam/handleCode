function ramdomHTML(){
    let num = getRamdomNumber(html_wt.length)
    console.log(num)

    document.getElementById('showText').innerHTML = `<div>HTML:</div>${html_wt[num-1]}`
}

function ramdomCSS(){
    let num = getRamdomNumber(css_wt.length)
    console.log(num)

    document.getElementById('showText').innerHTML = `<div>CSS:</div>${css_wt[num-1]}`
}

function getRamdomNumber(num){
    return Math.floor(num * Math.random()+1) 
}

const html_wt = [
    '1. src 和 href 的区别',
    '2. 对 HTML 语义化的理解',
    '3. DOCTYPE(⽂档类型) 的作⽤',
    '4. script 标签中 defer 和 async 的区别',
    '5. 常⽤的 meta 标签有哪些',
    '6. HTML5 有哪些更新',
    '7. img 的 srcset 属性的作⽤？',
    '8. 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？',
    '9. 说一下 web worker',
    '10. HTML5 的离线储存怎么使用，它的工作原理是什么--了解即可',
    '11. 浏览器是如何对 HTML5 的离线储存资源进行管理和加载？',
    '12. title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别？---了解即可',
    '13. iframe 有那些优点和缺点？',
    '14. label 的作用是什么？如何使用？---了解即可',
    '15. Canvas 和 SVG 的区别',
    '16. head 标签有什么作用，其中什么标签必不可少？',
    '17. 文档声明（Doctype）和<!Doctype html>有何作用? 严格模式与混杂模式如何区分？它们有何意义?',
    '18. 浏览器乱码的原因是什么？如何解决？---了解即可',
    '19. 渐进增强和优雅降级之间的区别',
    '20. 说一下 HTML5 drag API---了解即可'
]

const css_wt = [
    '1. CSS 选择器及其优先级',
    '2. CSS 中可继承与不可继承属性有哪些---了解即可',
    '3. display 的属性值及其作用',
    '4. display 的 block、inline 和 inline-block 的区别',
    '5. 隐藏元素的方法有哪些',
    '6. link 和@import  的区别 ',
    '7. transition 和 animation 的区别---了解即可',
    '8. display:none 与 visibility:hidden 的区别',
    '9. 伪元素和伪类的区别和作用？',
    '10. 对 requestAnimationframe 的理解',
    '11. 对盒模型的理解',
    '12. 为什么有时候⽤translate来改变位置⽽不是定位？',
    '13. li 与 li 之间有看不见的空白间隔是什么原因引起的？如何解决？',
    '14. CSS3 中有哪些新特性',
    '15. 替换元素的概念及计算规则---不需要看',
    '16. 常见的图片格式及使用场景',
    '17. 对 CSSSprites 的理解---了解即可',
    '18. 什么是物理像素，逻辑像素和像素密度，为什么在移动端开发时需要用到@3x, @2x 这种图片？',
    '19. margin 和 padding 的使用场景',
    '20. 对line-height 的理解及其赋值方式',
    '21. CSS 优化和提高性能的方法有哪些？',
    '22. CSS 预处理器/后处理器是什么？为什么要使用它们？',
    '23. ::before 和 :after 的双冒号和单冒号有什么区别？',
    '24. display:inline-block 什么时候会显示间隙？',
    '25. 单行、多行文本溢出隐藏',
    '26. Sass、Less 是什么？为什么要使用他们？',
    '27. 对媒体查询的理解？',
    '28. 对 CSS 工程化的理解',
    '29. 如何判断元素是否到达可视区域',
    '30. z-index 属性在什么情况下会失效',
    '31. CSS3 中的 transform 有哪些属性',
    '1. 常见的 CSS 布局单位',
    '2. px、em、rem 的区别及使用场景',
    '3. 两栏布局的实现',
    '4. 三栏布局的实现',
    '5.水平垂直居中的实现',
    '6. 如何根据设计稿进行移动端适配？',
    '7. 对 Flex 布局的理解及其使用场景',
    '8. 响应式设计的概念及基本原理',
    '1. 为什么需要清除浮动？清除浮动的方式',
    '2. 使用 clear 属性清除浮动的原理？',
    '3. 对 BFC 的理解，如何创建 BFC',
    '4. 什么是 margin 重叠问题？如何解决？',
    '5. 元素的层叠顺序',
    '6. position 的属性有哪些，区别是什么',
    '7. display、float、position 的关系',
    '8. absolute 与 fixed 共同点与不同点',
    '9. 对 sticky 定位的理解---了解即可',
    '1. 实现一个三角形',
    '2. 实现一个扇形',
    '3. 实现一个宽高自适应的正方形',
    '4. 画一条 0.5px 的线',
    '5. 设置小于 12px 的字体',
    '6. 如何解决 1px 问题？',
]


const js_wt = [
    '1. JavaScript有哪些数据类型，它们的区别？',
    '2. 数据类型检测的方式有哪些',
    '3. 判断数组的方式有哪些',
    '4. null和undefined区别',
    '5. typeof null 的结果是什么，为什么？',
    '6. intanceof 操作符的实现原理及实现',
    '7. 为什么0.1+0.2 ! == 0.3，如何让其相等',
    '8. 如何获取安全的 undefined 值？',
    '9. typeof NaN 的结果是什么？',
    '10. isNaN 和 Number.isNaN 函数的区别？',
    '11. == 操作符的强制类型转换规则？',
    '12. 其他值到字符串的转换规则？',
    '13. 其他值到数字值的转换规则？',
    '14. 其他值到布尔类型的值的转换规则？',
    '15. || 和 && 操作符的返回值？',
    '16. Object.is() 与比较操作符 “===”、“==” 的区别？',
    '17. 什么是 JavaScript 中的包装类型？',
    '18. JavaScript 中如何进行隐式类型转换？',
    '19. + 操作符什么时候用于字符串的拼接？',
    '20. 为什么会有BigInt的提案？',
    '21. object.assign和扩展运算法是深拷贝还是浅拷贝，两者区别',
    '1. let、const、var的区别',
    '2. const对象的属性可以修改吗',
    '3. 如果new一个箭头函数的会怎么样',
    '4. 箭头函数与普通函数的区别',
    '5. 箭头函数的this指向哪⾥？',
    '6. 扩展运算符的作用及使用场景',
    '7. Proxy 可以实现什么功能？',
    '8. 对对象与数组的解构的理解',
    '9. 如何提取高度嵌套的对象里的指定属性？',
    '10. 对 rest 参数的理解',
    '11. ES6中模板语法与字符串处理',
    '1. new操作符的实现原理',
    '2. map和Object的区别---了解即可',
    '3. map和weakMap的区别---了解即可',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

]