class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}
class circularLinkedList{
    constructor(){
        this.head=null,
        this.tail=null

    }
    insertAtHead(data){
        let newNode =new Node(data)
        //if list is empty
        if(!this.head){
            this.head=this.tail=newNode;
            newNode.next =newNode
        }else{
            //my list is not empty
            newNode.next=this.head;
            this.head=newNode;
            this.tail.next=this.head;
        }
    }
    insertAtTail(data){
        let newNode=new Node(data);
        if(!this.head){
             this.head=this.tail=newNode;
            newNode.next=newNode

        }else{
            this.tail.next=newNode;
            this.tail=newNode;
            this.tail.next=this.head;
        }

    }

    traverse(){
        let result=[];
        if(!this.head) return result;
        
        let current =this.head;

        do{

            result.push(current.data);
            current=current.next
        }while(current !==this.head){
            return result

        }
    }

    insertAtPosition(data,position){
        if (position < 1) {
            console.log("Invalid position");
            return;
        }

        let newNode = new Node(data);

        if (position === 1) {
            this.insertAtHead(data);
            return;
        }

        let current = this.head;
        let count = 1;
        while (count < position - 1 && current.next !== this.head) {
            current = current.next;
            count++;
        }

        if (current.next === this.head) {
            this.insertAtTail(data);
        } else {
            newNode.next = current.next;
            current.next = newNode;
        } 
    }


    deleteNode(data){

        if(){
            console.log();
            
        }


        let temp=this.tail;
        let current=temp.next;

        if(this.head==this.tail &&this.head.data==data){
            this.head=null;
            this.tail=null;
        }
        do{
            if(current.data==data){
                temp.next=current.next
            }

        }while(current !== this.head){

        }
    }
}

let ride =new circularLinkedList();
ride.insertAtHead(10)
ride.insertAtTail(20)
ride.insertAtTail(30);
ride.insertAtPosition(15, 2); 
ride.insertAtPosition(5, 1);
console.log(ride.traverse());