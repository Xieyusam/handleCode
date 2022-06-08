class Observer{
    update(Observerd){
        console.log(`${Observerd.name}正在${Observerd.state}。`)
    }

}

class Observerd{
    constructor(name){
        this.name = name
        this.state = '走路'
        this.ObserverArray = []
    }
    setObserver(Observer){
        this.ObserverArray.push(Observer)

    }
    setState(state){
        this.state = state
        this.ObserverArray&&this.ObserverArray.forEach(Observer => {
            Observer.update(this)
        })
    }
}

let newObserverd = new Observerd('小明')
let Observer1 = new Observer()
let Observer2 = new Observer()
let Observer3 = new Observer()
newObserverd.setObserver(Observer1)
newObserverd.setObserver(Observer2)
newObserverd.setObserver(Observer3)


newObserverd.setState('喝水')
