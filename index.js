// find departmental friend
function findFriend(friends,searchDept){
    const find = [];
    for(const friend of friends){
       if(friend.dept.includes(searchDept)){
           find.push(friend);
       }
    }
    return find;
}
const friends = [
    {name:'Sojol', dept:'CSE', id: 01},
    {name:'Khair', dept:'CSE', id: 02},
    {name:'Bappy', dept:'CSE', id: 03},
    {name:'Sataj', dept:'BBA', id: 04},
    {name:'Mehedi', dept:'Social Science', id: 05},
    {name:'Naim', dept:'Civil', id: 06},
    {name:'Hamim', dept:'Agriculture Engineer', id: 07},
    {name:'Shaon', dept:'CSE', id: 08}
];
const result = findFriend(friends,'CSE');
console.log(result);


// find largest item
function largest(numbers){
    let large = numbers[0];
    for(const number of numbers){
        if(number > large){
            large = number;
        }
    }
    return large;
}
const numbers = [14,5,13,18,24];
const findNumber = largest(numbers);
console.log(findNumber);


// find odd index element
function oddFriend(odd){
    const oddFrnd = [];
    for(const frnd of odd){
        if(odd.indexOf(frnd) % 2 != 0){
            oddFrnd.push(frnd);
        }
    }
    return oddFrnd;
}
const friendsName = ['bappy','khair','hamim','sojol','badsha','akash','mehedi'];
const search = oddFriend(friendsName);
console.log(search);