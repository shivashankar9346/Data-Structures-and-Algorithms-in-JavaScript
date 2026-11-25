//By using ARRAY and Two pointers

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//     }

//     addFirst(data){
//         let newNode = new Node(data);
//         newNode.next = this.head;
//         this.head = newNode;
//     }


//     isPalindrome(){
//         let current = this.head;
//         let values = [];

//         while(current !== null){
//             values.push(current.data)
//             current=current.next;
//         }

//         let left = 0;
//         let right = values.length-1;

//         while(left<right){
//             if(values[left]!== values[right]){
//                 return false
//             }
//             left ++
//             right--
//         }
//         return true
//     }

//     print(){
//         let current = this.head;

//         while(current){
//             console.log(current.data);
//             current = current.next
            
//         }
//     }
// }

// let linkedlist = new LinkedList();

// linkedlist.addFirst(5)
// linkedlist.addFirst(4)
// linkedlist.addFirst(5)

// linkedlist.print()

// console.log(linkedlist.isPalindrome());



//Without Using array

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    isPalindrome() {
        if (!this.head || !this.head.next) {
            return true;
        }

        // Step 1: Find the middle
        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Step 2: Reverse the second half
        let prev = null;
        let current = slow;

        while (current !== null) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        // Step 3: Compare both halves
        let first = this.head;
        let second = prev;

        while (second !== null) {
            if (first.data !== second.data) {
                return false;
            }

            first = first.next;
            second = second.next;
        }

        return true;
    }

    print() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let linkedlist = new LinkedList();

linkedlist.addFirst(1);
linkedlist.addFirst(2);
linkedlist.addFirst(3);
linkedlist.addFirst(2);
linkedlist.addFirst(1);

console.log(linkedlist.isPalindrome()); // true