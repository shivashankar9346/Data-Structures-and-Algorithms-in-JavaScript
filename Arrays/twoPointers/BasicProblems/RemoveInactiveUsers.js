// 🔹 2. Remove Inactive Users 
// 👥 Problem:
// You are building a social media cleanup tool.
//  Given an array of user accounts with an isActive boolean flag, remove all users who are inactive.



//ITERATIVE APPROCH

// let users=[
//   { username: "ali", isActive: true },
//   { username: "sara", isActive: false },
//   { username: "john", isActive: true }
// ]

// let activeUsers = users.filter((e)=>{
//      return e.isActive === true
// }, [])
// console.log(activeUsers);





//TWO POINTERS




let users=[
  { username: "ali", isActive: true },
  { username: "sara", isActive: false },
  { username: "john", isActive: true }
]



function RemoveInactiveUsers(users){

    let left = 0 ;
    let right = users.length-1
    

    let FilteredUsers = [];

    while(left <= right){
        if(users[left].isActive){
            FilteredUsers.push(users[left]);
        }

        if(left !==right  && users[right].isActive ){
            FilteredUsers.push(users[right]);
        }
        left++;
        right--
    }
    return FilteredUsers;
}
console.log(RemoveInactiveUsers(users));

