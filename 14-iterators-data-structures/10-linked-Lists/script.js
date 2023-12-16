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

    // Get at index

    // Remove at index

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

}

const list =new Linkedlist();
list.insetFirst(3)
list.insetFirst(5)
list.insetLast(44);
list.insetFirst(4)
list.printListData();
// console.log(list)
