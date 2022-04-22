//სავარჯიშო#1

// let user = {
//     firstName: 'giorgi',
//     lastName: 'smith',
//     age: 25,
//     studentStatus: 'active'
// };
//  console.log(user.studentStatus);
// console.log(user['studentStatus']);
 
//სავარჯიშო#2

// let numbers = [3, 6, 25, 59, 63];

// for(let x = 0; x < numbers.length; x++) {
//     console.log(numbers[x]);
// }

// for(let x of numbers) {
//     console.log(x);
// }

// let x = 0;
// while (x < numbers.length) {
//     console.log(numbers[x]);
//     x++;
// }

//სავარჯიშო#3

// let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

// for (let x of numbers) {
//     if (x > 5) {
//         console.log(x);
//     }   
// }

//სავარჯიშო#4

// let user = {
//     name: 'giorgi',
//     age: 20,
//     studentstatus: 'Active'
// }
// if (user.age < 18 && user.studentstatus == 'active') {
//     console.log('hello');
// } else if (user.name =='giorgi') {
//     console.log('hello giorgi')
// } else if (user.studentstatus == active || user.age < 25) {
//     console.log('hello world')
// }
// else {
//     console.log('error');
// }

//სავარჯიშო#5

// let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas'];
// for (let x of array) {
//     if (typeof x == 'string') {
//     console.log(x);    
//     }   
// }

//სავარჯიშო#6

// let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]
// for (let x of array) {
//     for (let y of x) {
//         if (y > 0) {
//             console.log(y);
//         }
//     }
// }

//სავარჯიშო#7

let array = [32, 10, 'hello', null, 'hello2', 50 ]
for (let x of array) {
   if (typeof x == 'number' && x % 5 === 0){
       console.log(x);
   }
}


