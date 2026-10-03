// 📦 Problem:
// You are managing a food delivery dashboard. Orders are stored in an array sorted by delivery time.
//  A new order comes in, and you need to insert it in the correct position to keep the array sorted by delivery time.


//ITERATIVE APPROCH

// let orders=[
//   { orderId: 1, deliveryTime: "12:00" },
//   { orderId: 2, deliveryTime: "12:30" }
// ]

// let newOrders={ orderId: 3, deliveryTime: "12:15" }

//     let insert = false;

//     for(let i =0 ; i<orders.length;i++){

//         if( newOrders.deliveryTime <orders[i].deliveryTime){
//             orders.splice(i , 0,  newOrders )
//             insert=true;
//             break
//         };
//     }

//     if(!insert){
//         orders.push(newOrders)
//     }

//     console.log(orders);




//TWO POINTERS      BINARY SEARCH


let orders = [
    { orderId: 1, deliveryTime: "12:00" },
    { orderId: 2, deliveryTime: "12:30" }
]

let newOrders = { orderId: 3, deliveryTime: "12:15" }

function sortArrayByTime(orders, newOrders) {

    let left = 0
    let right = orders.length - 1
    let initialLength = orders.length;

    let changeTimeIntoMin = (time) => {


        let [h, m] = time.split(":").map(Number)
        return h * 60 + m
    }

    let newTime = changeTimeIntoMin(newOrders.deliveryTime)

    while (left <= right) {

        let midIndex = Math.floor((left+right)/2)
        let midTime = changeTimeIntoMin(orders[midIndex].deliveryTime)

        if(newTime < midTime){
            initialLength= midIndex
            right = midIndex-1
        }else{
            left=midIndex+1
        }

    }
orders.splice(initialLength,0,newOrders)
return orders;

}
console.log(sortArrayByTime(orders,newOrders));


