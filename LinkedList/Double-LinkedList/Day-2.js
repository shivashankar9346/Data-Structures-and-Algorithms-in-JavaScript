class doubleLinkedList{
    deleteHead(){
        if(!this.head)return
            let current =this.head;
            if(this.head === this.tail){
                this.head=this.tail=null;
        }else{
            current.next.prev=null;
            this.head=current.next;
            current.next=null;
        }
    }
    deleteTail(){
        if(!this.tail)  return;
       let temp=this.tail;
       if(this.head===this.tail){
        this.head=this.tail=null;
       }else{
        this.tail=temp.prev;
        this.tail.next=null
        temp.prev=null;
       }
    }
    deleteAtPosition(pos){
        if(pos<=0|| !this.head)return;
        let current=this.head;
        let count=1;
        while(current && count<pos){
            current=current.next;
            count++
        }
        if(!current)return;
        if(current ===this.head){
            this.deleteHead()
        }else if( current === this.tail){
            this.deleteTail();
        }else{

            let temp=current.prev;
            temp.next=current.next;
            current.next.prev=temp;
            current.next=null;
            current.prev=null;
        }


    }

}