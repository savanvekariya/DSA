class Queue {
    constructor(initialArr) {
        this.items = [...initialArr]
    }

    enqueue(element) {
        this.items.push(element)
    }
    dequeue() {
        return this.items.shift()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty()
    {
        return this.items.length === 0
    }

}

class extendedQueue extends Queue{
    constructor(){
        super([6,7,8])
    }

    enqueue(element)
    {
        this.items.unshift(element)
    }

}

class Map{
    learningMap(){
        const map = new Map([['a',1],['b',2],['c',3]])
        console.log(map.set('d', 4))
        console.log( map.get('c'))
        console.log(map.has('b'))
        console.log(map)
       
    }
}

const m =new Map()
m.learningMap()


