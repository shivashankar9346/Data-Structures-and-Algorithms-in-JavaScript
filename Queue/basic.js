class Queue{
    constructor(){
        this.items=[];
    }
    //insert element
   enqueue(element){
    this.items.push(element)


   }
   //remove element
   dequeue(element){
    if(this.items.length === 0){
        return "Queue is empty"
    }else{

        this.items.shift(element)
    }

   }
   //check if queue is empty
   isEmpty(){
    return this.items.length ==0;

   }
   //view the front element
   peek(){
    if(this.isEmpty()){
        return "Queue is empty"
    }
    return this.items[0];

   }
   //size
   size(){
    return this.items.length;

   }
   //print
   printqueue(){
    let queueString='';
    for(let i=0;i<this.size();i++){
        queueString +=this.items[i]+ " "; 
    }
    console.log( 'Queues : ' , queueString);
   }
}
let myQueue=new Queue();

myQueue.enqueue(1)
myQueue.dequeue()
myQueue.enqueue(2)
myQueue.dequeue()
myQueue.enqueue(3)
myQueue.enqueue(4)
myQueue.enqueue(5)
myQueue.enqueue(6)
console.log(myQueue.peek());
console.log(myQueue.size());
console.log(myQueue.isEmpty());
myQueue.printqueue()