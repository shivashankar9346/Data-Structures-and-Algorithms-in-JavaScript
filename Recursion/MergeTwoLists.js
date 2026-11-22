
// Linked List Node
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Merge Two Sorted Lists using Recursion
var mergeTwoLists = function(list1, list2) {

    // Base conditions
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    // Compare both nodes
    if (list1.val <= list2.val) {

        list1.next = mergeTwoLists(list1.next, list2);

        return list1;

    } else {

        list2.next = mergeTwoLists(list1, list2.next);

        return list2;
    }
};

// Create first linked list: 1 -> 2 -> 4
let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

// Create second linked list: 1 -> 3 -> 4
let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

// Merge both lists
let result = mergeTwoLists(list1, list2);

// Print merged linked list
let current = result;

while (current !== null) {
    console.log(current.val);
    current = current.next;
}
