class Node{
    constructor(data){
        this.data=data,
        this.next=null
    }
}

class linkedList{
    constructor(){
        this.head=null,
        this.tail=null
    }

    insertHead(data){
        const newNode=new Node(data);
        newNode.next =this.head,//linking node
        this.head=newNode; //updating head

         this.printList();

    }

    insertAtTail(data){
        const newNode=new Node(data);
        this.tail.next=newNode,
        this.tail=newNode

        his.printList();

    }

    insertAtposition(){

if(position===0){
    newNode.next =this.head;
    this.head=newNode;
    this.printList();
    return
}

        const newNode=new Node(data)
        let current=this.head;
        for(let i=0; current !== null&&i<position-1;i++){
            current =current.next;
        }
        newNode.next=current.next;
        current.next=newNode
    }

    printList(){
        let current =this.head;
        let result ='';
        while(current){
            result += current.data+"->";
            current = current.next
        }
        console.log(result+'null');  
    }
}
let list = new linkedList();
list.insertHead(10),
list.insertHead(20)

