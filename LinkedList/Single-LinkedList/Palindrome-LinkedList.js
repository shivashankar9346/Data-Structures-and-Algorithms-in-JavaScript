class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    addFirst(data){
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }


    isPalindrome(){
        let current = this.head;
        let values = [];

        while(current !== null){
            values.push(current.data)
            current=current.next;
        }

        let left = 0;
        let right = values.length-1;

        while(left<right){
            if(values[left]!== values[right]){
                return false
            }
            left ++
            right--
        }
        return true
    }

    print(){
        let current = this.head;

        while(current){
            console.log(current.data);
            current = current.next
            
        }
    }
}

let linkedlist = new LinkedList();

linkedlist.addFirst(5)
linkedlist.addFirst(4)
linkedlist.addFirst(5)

linkedlist.print()

console.log(linkedlist.isPalindrome());
