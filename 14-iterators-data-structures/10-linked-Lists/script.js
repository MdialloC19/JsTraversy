class Node{
    constructor(value){
        this._value=value;
        this.next=null;
    }
}

class Linkedlist{

    constructor(){
        this._head=null;
        this._length=0;
    }

    // Insert first node (Head)
    insetFirst(value){
        const newNode=new Node(value)
        newNode.next=this._head;
        this._head=newNode;
        this._length++;
    }

    //Insert last node (Tail)
    insetLast(value){
        const newNode=new Node(value)
        let current=this._head;
        while(current.next){
            current=current.next;
        }
        current.next=newNode;
        this._length++;
    }

    // Insert at index
    insertAt(value,index){
        if(index>this._length)
            return ;

        if(index===0){
            this.insetFirst(value);
            return ;
        }

        if(index===this._length){
            this.insetLast(value);
            return ;
        }

        const newNode=new Node(value);
        let count=0;
        let current, previous;
        current=this._head;

        while(count<index){
            previous=current;
            current=current.next;
            count++;
        }

        newNode.next=current;
        previous.next=newNode;
        this._length++;
    }

    // Get at index

    getAt(index){
        if(index>=this._length || index<0)
            throw new RangeError('Index out of range');

        if (index === 0) {
            return this._head._value;
         }

        if (index === this._length - 1) {
            let current = this._head;
            while (current.next !== null) {
                current = current.next;
            }
            return current._value;
        }

        let current=this._head;
        let count=0;
        while(count<index){
            current=current.next;
            count++;
        }
        return current._value;
    }

    // Remove at index

   RemoveAt(index) {
    if (index >= this._length || index < 0) {
        throw new RangeError('Index out of range');
    }

   
    let current = this._head;
    let count = 0;
    let previous = null;

    if (index === 0) {
        this._head = this._head.next;
    } else {
        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }
        previous.next = current.next;
    }
    current = null;
    this._length--;
}



    // Print list data

    printListData(){
        let current =this._head;
        let list ='';

        while(current){
            list+=current._value +' ';
            current=current.next;
        }
        
        console.log(list);
    }


    // clear list 
    clearList(){
        this._head=null;
        this._length=0;
    }

}

const list =new Linkedlist();
list.insetFirst(3)
list.insetFirst(5)
list.insetLast(44);
list.insetFirst(4)
list.insetLast(40);
list.insetFirst(1);

list.insertAt(10,3);
list.printListData();


console.log(list.RemoveAt(2));
console.log(list.RemoveAt(2));

list.printListData();
list.clearList();
list.insetFirst(1);


list.printListData();

// console.log(list)
