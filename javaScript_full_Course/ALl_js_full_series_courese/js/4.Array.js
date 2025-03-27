

//string are immutable
let str = "Rahul";
str[0] = "Kumar";
console.log(str);

//Array are mutable
let arr = ["Rahul", "Raj", "Rohan"];

arr[0] = "Kumari";
console.log(arr[0]);



// Array in javaScript
// Array is a collection of elements
// Array can store multiple values in a single variable
// Array can store different data types
// Array can store same data types
// Array can store objects
// Array can store functions
// Array can store arrays
// Array can store arrays of objects
// Array can store arrays of functions
// Array can store arrays of arrays

let heros =
    [
        "Superman",
        "Batman",
        "ironman"
    ];
console.log(heros);

let marks =
    [
        1,
        2,
        3,
        4,
    

    ];
console.log(marks);
console.log(marks.length); //property of array

let info = [
    "Rahul",
    25,
    "Delhi"
];
console.log(info);

// Arrays indices
// Arrays indices start from 0
// Arrays indices are integer
// Arrays indices are positive
// Arrays indices are negative
// Arrays indices are floating point
// Arrays indices are strings
// Arrays indices are boolean
// Arrays indices are objects
// Arrays indices are functions
// Arrays are function


/*
arr[0], arr[1], arr[2].....

arr[-1], arr[-2], arr[-3].....

arr[1.1], arr[2.2], arr[3.3].....

arr["name"], arr["age"], arr["city"].....

arr[true], arr[false].....

arr[{}], arr[{}], arr[{}].....

arr[function], arr[function], arr[function].....


*/


let hero = ["Superman", "Batman", "ironman"];
console.log(hero[0]);
console.log(hero[1]);
console.log(hero[2]);
console.log(hero[3]); //undefined


let marks1 = [1, 2, 3, 4, 5];
console.log(marks1[0]);
console.log(marks1[1]);
console.log(marks1[2]);
console.log(marks1[3]);
console.log(marks1[4]);
console.log(marks1[5]); //undefined


let marks2 = [1, 2, 3, 4, 5];
marks2[0] = 10;
console.log(marks2);  // console.log(marks2[0]);


//looping over an array
// print all the elements of an array



// using for loop 

let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for of loop

for (let fruit of fruits) {
    console.log(fruit);
}
{
    for (let fruit of fruits) {
      console.log(fruit.toUpperCase());
    }
}

// let practice 
/* 
Qs. for a given array with marks of students --> [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] find the average marks of entire class.

Answer :

let marks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let sum = 0;
for (let mark of marks) {
    sum += mark;
}
let avg = sum / marks.length;
console.log(`This is avg marks of the class ${avg}`);

*/
{
    let marks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    let sum = 0;
    for (let mark of marks) {
        sum += mark;
    }
    let avg = sum / marks.length;
    console.log(`This is avg marks of the class ${avg}`);
}

/*

lets Practice 
QS. for a given with prices of 5 items => [250,645,300,900,50] All items have an offer 10% off on them . change the array to store final price after applying the offer.

let prices = [250, 645, 300, 900, 50];
for (let i = 0; i < prices.length; i++) {
    prices[i] = prices[i] - prices[i] * 0.1;
}
console.log(prices);

*/

{
    let items = [250, 645, 300, 900, 50];

    // let i = 0;

    // for (let val of items) {
     
    //     let offer = val / 10;
    //     items[i] = items[i] - offer;
    //     console.log(`Value of index = ${items[i]}`);
    //     i++;
    // }
    
    for (let i = 0; i < items.length; i++) {
        let offer = items[i] / 10;
        items[i] -= offer;
    }
    console.log(items);

}



// Array Methods 
// push() : add to end
// pop() : delete from end & return
// toString() : converts array to string

let foodItems = ["popo", "hero", "hudh"];
foodItems.push("chips", "kando");
console.log(foodItems);


{
    let foodItems = ["popo", "hero", "hudh"];
     console.log(foodItems);
    let deleteItems = foodItems.pop();
    console.log("deleted", deleteItems);
    console.log(foodItems);
     console.log(foodItems.toString());
}


// Array in js 

// concat() : join multiple arrays & returns result

//unshift() : add to start

//  shift() : delete from start & return

// slice() : returns a piece of the array
//slice( startldx, endldx )
       
// splice() :change original array (add, remove, replace)
 // splice( startldx, delCount, newEl1... )





{   // concat()
    let heroMarvel = ["kando", "mando"]
    let monkryMarvel = ["terobau"]
    let indiaDoti = ["kapra"]
    let heros = heroMarvel.concat(monkryMarvel, indiaDoti);
    console.log(heros);
}

{
    //unshift()
    let heroMarvel = ["kando", "mando"];
    heroMarvel.unshift("ironman");
    console.log(heroMarvel);
}

{
  //shift()
  let heroMarvel = ["kando", "mando"];
  let hero = heroMarvel.shift();
  console.log("deleted", hero);
}

{  // slice()

    let heroMarvel = ["kando", "mando",  "sungur", "bungur", "jungle", "mangal"];
  
    console.log(heroMarvel.slice(1, 3));

}

{   //splice()

    let heroMarvel = ["kando", "mando",  "sungur", "bungur", "jungle", "mangal"];
  
     heroMarvel.splice(2, 2, 101, 101);   // another also

    // Add lement
    // heroMarvel.splice(2, hero);

    // Delete Elment
    // heroMarvel.splice(3, mando);

    // Replace Element 
    // heroMarvel(3, 1, jubbbfdf);
    console.log(heroMarvel);

}


// Lets practice 
/*

Qs. Create an array to store companies -> "Bloomberg", "Microsoft", "ubher", "google", "IBM", "Netffix"

a. Remove the first company from the array
b. Remove uber & Add ola in its place 
c. Add Amazon at the end 

*/

{
  //splice()

  let heroMarvel = ["kando", "mando", "sungur", "bungur", "jungle", "mangal"];

//heroMarvel.shift();   // Qa Answer  // shift()
//heroMarvel.splice(2, 1, "kando");    // Qb Answer  // splice()
 heroMarvel.push("aman"); // Qc // push
  console.log(heroMarvel);
}




