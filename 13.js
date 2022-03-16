// 深拷贝（考虑到复制 Symbol 类型）

function isObject(val) {
	return typeof val === 'object' && val != null;
}

function deepClone(obj, hash = new WeakMap()) {
    if(!isObject(obj)) {
        return obj
    }
    if(hash.has(obj)){
        return hash.get(obj);
    }
    let target = Array.isArray(obj) ? [] : {}
    hash.set(obj,target)
    Reflect.ownKeys(obj).forEach(item=>{
        if(isObject(obj[item])){
            target[item] = deepClone(obj[item],hash)
        }else{
            target[item] = obj[item]
        }
    })
    return target
}


let obj = {a:1,b:2,c:3}
let clone = deepClone(obj)
console.log(clone)
