// 直角三角形
let triangle = document.querySelector('.triangle');
let str = ''
for (let i = 1; i < 4; i++) {
    for (let j = 0; j < i; j++) {
        str += '*'
    }
    str += '<br />'
}
triangle.innerHTML = str