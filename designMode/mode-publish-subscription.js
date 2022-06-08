// 实现发布-订阅模式

class EventEmitter {
	constructor() {
		this.events = {};
	}
	on(type, callback) {
        if (!this.events) this.events = Object.create(null);
        if(this.events[type]){
            this.events[type].push(callback)
        }else{
            this.events[type] = [callback]
        }
    }
	off(type, callback) {
        if(!this.events[type]){
            return
        }
        this.events[type] = this.events[type].filter(fn => fn !== callback)
    }
	once(type, callback) {
        function fn(){
            callback()
            this.off(type,fn)
        }
        this.on(type,fn)
    }
	emit(type, ...rest) {
        this.events[type] && this.events[type].forEach(fn => {
            fn.apply(this,rest)
        });
    }
}

// test
const eventInstance = new EventEmitter();

const handle = (...rest) => {
	console.log(rest);
};

eventInstance.on('click', handle);

eventInstance.emit('click', 1, 2, 3, 4);

eventInstance.off('click', handle);

eventInstance.emit('click', 1, 2);

eventInstance.once('dbClick', () => {
	console.log(123456);
});
eventInstance.emit('dbClick');
eventInstance.emit('dbClick');
