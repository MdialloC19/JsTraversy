class Queue{

    constructor(){
        this._items=[];
        this._count=0;
        this._front=0;
    }

    enqueue(item){
        this._items[this._count++]=item;
    }

    dequeue(){
        if(this.isEmpty()){
            return 'No value in the queue';
        }

        const item=this._items[this._front];

        for(let i=this._front; i<this._count-1;i++){
            this._items[i]=this._items[i+1];
        }
        this._items.length=--this._count;

        return item
    }

     peek(){
        if(this.isEmpty())
            return 'No items in the stack!!!';

        return this._items[this._front];

    }

    length(){
        return this._count;
    }
    clear(){
        this._count=0;
        this._items=[];
    }

    isEmpty(){
        return this._count===0;
    }
}

const qu= new Queue();

qu.enqueue(2);
qu.enqueue(0);
qu.enqueue(1);
qu.enqueue(3);

console.log(qu.dequeue());

console.log(qu)
