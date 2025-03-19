// variables & data types

//   Our first JavaScript code
// console.log is used to log (print) a message to the console.

console.log("hello World");
console.log("I Love javascript");
console.log("hello papaaya");
console.log("muji");

// variables
//  varaibles are containers for storing data values

// variable Rules
//  1. Variable names are case-sensitive "a" and "A" are different variables.
// 2. Variable names must begin with a letter, an underscore (_) or a dollar sign ($).
// 3. Variable names can only contain letters, numbers, underscores, or dollar signs.
// 4. Variable names cannot contain spaces.
// 5. Variable names should be descriptive and meaningful.
// 6. Variable names should be written in camelCase.
// 7. Variable names should not be JS keywords.
// 8. Variable names should not start with numbers.
// 9. Variable names should not start with special characters.
// 10. Variable names should not start with capital letters.
// 11. Variable names should not be reserved words.
// 12. Variable names should not be predefined functions.
// 13. only letters,digits, underscore(_) and $ are allowed in variable names. (not even space)
//  14. Only a letter, underscore(_) or $ should be 1st character.
// 15. Reserved words cannot be variable names.




// Let, Const & var
    //  var: variables can be re-directed & updated. A global scope variable.
    //  Let: variable cannot be re-directed but can be updated. A block scope variable.
    //  const: variable cannot be re-declared or updated. A block scope variable.



// first code

    age = 89;
 num = 89;
 x = null;
 y = undefined;
 console.log(age);
 console.log(num); 
    console.log(x);
    console.log(y);



    // second code 

   var age = 25;
   console.log(age + 1);


// Third code

   var age = 100;
   console.log(age);

// fourth code

   var name = "David";
   var age = 27;
   var price = 30;
   console.log(`${name} is ${age} years old and the price is $${price}.`);


//    fifth code 

   var name = "Ramesh";
   var age = 100;
   var price = 1000;
//    console.log('My name is ' + name + ' and I am ' + age + ' years old and the price is $' + price + '.');
console.log('I am ' + name + ' and I am ' + age + ' years old and the price is nepali rupees ' + price + '.');



// sixth code

var name = "Ramesh";
var age = 100;
var price = 1000;
//    console.log('My name is ' + name + ' and I am ' + age + ' years old and the price is $' + price + '.');
console.log('I am ' + name + ' and I am ' + age + 1 + ' years old and the price is nepali rupees ' + price + 90 + '.');


// seventh code

var age = 67;
console.log(age - 23);


// eight code

var product = "apple, banena, oragne";
var price = 30;
console.log(`${product} costs $${price}.`);

// Nine code

var name = "micale";
var age = 34;
var price = 646;
console.log(`${name} age is ${age} and price is $${price}`);


// Ten code

var name = "tiger";
var age = 30;
var address = "kathmandu";
var people = 288;
var bike = "KTM";
var home = "bhaktapur";
console.log(`My name is ${name}. I am  ${age} years old. I am from ${address}. In our socitety there are  ${people} members. I have  ${bike} and now i am lived in ${home}.`);


// elevenc code 

var gun = "ak47";
var bullet = 47;
var price = 2000000000;
var country = "nepla";
console.log(`Our country ${gun} is Own of the latest version and there are  ${bullet} bullet and its price ${price}. My country name is  ${country}.`)


// twelve code

var fun = "joke";
var num = 56;
var hero = "Miclejackson";
var food = "momos";
 
console.log(`i can ${fun}. My favorite number is ${num}. Myb afvorite hero is ${hero}. My favorite food is ${food}.`)




//  var last code 

 var x = null;
 var y = undefined
 console.log(x);
 console.log(y);





//  const code practice 

 const myView = {
    age: 67,
    num: 89,
    x: null,
    y: undefined,
    isfollow: true  
  };
  
  console.log(myView.age);       // Output: 67
  console.log(myView.num);       // Output: 89
  console.log(myView.x);        // Output: null
  console.log(myView.y);        // Output: undefined
  console.log(myView.isfollow); // Output: true


// const second code 

 const myObject = {
    age: 89,
    num: 89,
    x: null,
    y: undefined,
    isfollow: true
    
  };
  
//   console.log(myObject.age); 
//   console.log(myObject.num);  
//   console.log(myObject.x);   
//   console.log(myObject.y);   

console.log(`my age is ${age}. my number is ${num}. my x is ${x}. my y is ${y}. ${myObject.isfollow}`)


// const third code 

const myFollowData = {
    
    age: 677,
    num: 8,
    isfollow: true

}

console.log(`${myFollowData.age} ${myFollowData.num} ${myFollowData.isfollow}`);



//   A Block Scope {  } is a block of const.

   {
    const myJungle = {
        age: 78,
        

    }
    console.log(myJungle);
   }

   {
    const myJungle = {
        age: 6745894365436,
        

    }
    console.log(myJungle);
   }



// const fourth code

const myHero = {
    age: 88,
    isfollow: true,
    num: 76
}

console.log(`${myHero.num} ${myHero.isfollow} ${myHero.age}`);


// const fifth code 

const perrson = {
    vanilaName: "vanila",
    vanilaAge: 45,
    isFriendss: true
  };
  
  const { vanilaName, vanilaAge, isFriendss } = perrson; 
  
  console.log(`my name is ${vanilaName} is ${vanilaAge} years old and is a friend: ${isFriendss}`);



// Let code start

let fullName = "Tony";
let fullAge = 56;
let isFollowing = true;


// console.log(fullName);
// console.log(fullAge);
// console.log(isFollowing);

console.log(`${fullName} ${fullAge} ${isFollowing}`);


// Let second code 

let myNewHero = {
    age: 56,
    isfollow: true
}

console.log(`${myNewHero.age} ${myNewHero.isfollow}`);


// third code 

let myHungle = {
    age: 67,
    num: 73456,
    isYouFollow: true
}
 console.log(`${myHungle.age} ${myHungle.num} ${myHungle.isYouFollow}`);


//  fourth code 
let myName = "Ton"; // Declare 'name' only once
let newAge = 45;
let isFriend = true;

let message = `${myName} is ${newAge} years old and is a friend: ${isFriend}`;

console.log(message); // Output: Ton is 45 years old and is a friend: true


// fifth code 

let myPerson = {
    firstName: "Tonuy",
    secondAge: 88,
    isFriends: true
  };
  
  let { firstName, secondAge, isFriends } = myPerson; 
  
  console.log(`${firstName} is ${secondAge} years old and is a friend ${isFriends}`);



//   A Block Scope {  } is a block of let.
  
  {
    let a = 46;
    console.log(a);
  }

  {
    let b = 374465;
    console.log(b);
  }





//   Next subject is Data types


// Data types

//  Data types have number, string, Boolean, Undefined, Null, Bigint, symbol.


// number
let vaar = 98;
console.log(vaar);

// typeof vaar 'number' (this is a string)


// string

let fullNaame = "Name";
console.log(fullNaame);

// typeof fullNaame  (this is string)

// Boolean
let isFolloww = true;
console.log(isFolloww);

//  true typeof isFolloww 'boolean'   (this is boolean)

// undefined
{
    let x;
console.log(x);
}

// undefined typeof z 'undefined'  (this is undefined )



//Null
 {
    let x = null;
 console.log(x);
 }

//  null typeof x 'object' is Null ( this is null)



// bigInt

{
    let x = BigInt("123");
    console.log(x);
}

//  Bigint typesof x "bigint" is bigint 123n {this is bigint}



// symbol

{
    let x = Symbol("Hello");
    console.log(x);
}

// Symbol typeof x "Symbol" is Symbol (this is Symbol "hello")





