// 57. 寄生组合继承

function Parent(name) {
	this.name = name;
	this.say = () => {
		console.log('Parent say');
	};
}

Parent.prototype.play = ()=>{
    console.log('play');
}

// 寄生组合

function Children(name){
    Parent.call(this)
    this.name = name
}

Children.prototype = Object.create(Parent.prototype)
Children.prototype.constructor = Children

let child = new Children('111');
console.log(child.name);
child.say();
child.play();

// 111
// Parent say
// play 
