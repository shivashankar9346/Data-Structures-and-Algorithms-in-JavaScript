class Node{
    constructor(data){
        this.data= data;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null
    }

    addLast(data){
        let newNode = new Node(data);

    if(!this.head){
        this.head = newNode;
        return
    }

    let current = this.head

    while(current.next){
        current = current.next;
    }
    current.next = newNode;
    
    }

    print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const linkedlist = new linkedList();

linkedlist.addLast(5)
linkedlist.addLast(4)
linkedlist.addLast(3)

linkedlist.print()