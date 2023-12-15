class Stack{

    constructor(){
        this._items=[];
        this._count=0;
    }

    push(item){
        this._items[this._count++]=item;
    }

    pop(){
        if(this.isEmpty()){
            return 'underflow';
        }

        const item =this._items[this._count-1];
        this._count--;

        for(let i=this._count; i<this._items.length;i++){
            this._items[i]=this._items[i+1];
        }
        this._items.length=this._count;
        return item;
    }

    peek(){
        if(this.isEmpty())
            return 'No items in the stack!!!';

        return this._items[this._count-1];

    }
    
    isEmpty(){
        return this._count===0;
    }

    length(){
        return this._count;
    }
    clear(){
        this._count=0;
        this._items=[];
    }
}

const stack= new Stack();

stack.push(2);
stack.push(1);
stack.push(4);
stack.push (32);

// console.log(stack.pop());
console.log('Top items ' +stack.peek());

console.log('Stack length '+ stack.length());
console.log(stack);