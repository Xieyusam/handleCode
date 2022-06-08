class Cat{
    walk(){
        console.log('walking')
    }
}

class Decorater {
    constructor(cat){
        this.cat = cat
    }
    walk(){
        this.cat.walk()
        this.talk()
    }
    talk(){
        console.log('喵喵喵')
    }
}

let cat = new Cat()
cat.walk()

let cat2 = new Decorater(cat)
cat2.walk()

// walking
// walking
// 喵喵喵
