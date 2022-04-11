// _Object.freeze
// 本题考点：defineProperty

// 根据题目要求，实现一个仿Object.freeze功能的"_objectFreeze"函数，该函数可以冻结一个对象，
// 一个被冻结的对象不能被修改、不能添加新的属性、不能删除已有属性，核心步骤有：

// 进入对象参数的遍历体中
// 判断当前对象参数是否为普通对象或数组
// 如果是普通对象或数组，则递归调用该函数，函数参数为当前遍历项
// 如果不是，则直接设置该参数的可写性为false
// 最后通过Object.seal函数封闭该对象，阻止添加新属性并将所有现有属性标记为不可配置

const _objectFreeze = object => {
	// 补全代码
    for( prop in object ){
        const type = Object.prototype.toString.call(object[prop])
        if(type === '[Object object]' || type === '[Object array]') {
            _objectFreeze(object[prop])
        }else{
            Object.defineProperty(object,prop,{
                writable:false
            })

        }
    }
    Object.seal(object)
};

let test = { a: 1, b: { c: 1 }, d: [1, 2, 3] };
_objectFreeze(test)
test.a = 2

console.log(test)