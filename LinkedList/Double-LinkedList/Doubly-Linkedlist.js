class Node{
    constructor(data){
        this.data=data;
        this.prev=null,
        this.next =null
    }
}
class DoubleLinkedList{
    constructor(){
        this.head=null,
        this.tail=null

    }
    insertAtHead(data){
        const newNode =new Node(data);
        if(!this.head){
            this.head =newNode
        }else{
            newNode.next =this.head,
            this.head.prev=newNode;
            this.head =newNode
            
        }
    }
    insertAtTail(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head=newNode;
            return
        }
        let current =this.head;
        while(current.next){
            current =current.next;
            
        }
        newNode.prev=current;
        current.next=newNode;

    }
    size(){
        let count=0;
         let current =this.head;
        while(current){
            count++
            current =current.next;
            
        }
        return count;

    }
    addAt(index,data){
        if(index<0|| index>this.size()){
            console.log("invalid");
            return;
        }
        const newNode=new Node(data);
        if(index === 0){
            if( this.head){
                this.head.prev=newNode;

            }
            this.head=newNode;
        }
        let current =this.head;
        for(let i=0;i<index;i++){
            current=current.next;
        }
        newNode.prev=current;
        newNode.next=current.next

        if(current.next){
            current.next.prev=newNode;

        }
        current.next=newNode
    }
    removeAtHead(){
        if(!this.head){
            return
        }
        this.head=this.head.next;
        if(this.head){
            this.head.prev=null;
        }
    }
    removeLast(){
        if(!this.head){
            return
        }
        if(!this.head.next){
            this.head=null;
            return;
            
        }
        let current =this.head;
        while(current.next.next){
            current=current.next;

        }
        current.next=null;
    }
    removeAtPosition(index){
         if(index<0|| index>this.size()){
            console.log("invalid");
            return;
        }

    }
}