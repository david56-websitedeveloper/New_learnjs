
// Lecture 3 Loops & Strings


//  Loops are used to execute a piece of code again & again 
    // for  loop 
    // for(let i = 1; i <= 5; i++) {
    // console.log("apna colleage");
    // }


    // for loop
    // while loop
    // do while loop


    // (1)  for loop
    {
        for(let i = 1; i <= 1000; i++) {
         console.log("apple");
        }
 
        for(count=1; count<=5; count++){
         console.log("apna college");
      }
      console.log("loop has been ended");
     }
 
 
     {
       let sum = 0;
       for(let i = 1; i <= 5; i++) {
         sum = sum + i;
       }
       console.log("sum = ", sum);
     }
 
     {
       let sum = 0;
       let n = 5;
       for(let i = 1; i <= n; i++) {
         sum = sum + i;
       }
       console.log("sum = ", sum);
     }
 
     {
       let sum = 0;
       let n = 6;
       for(let i = 1; i <= n; i++) {
         sum = sum + i;
       }
       console.log("sum = ", sum);
     }
 
     {
       let sum = 100;
       for(let i = 1; i <= 5; i++) {
         sum = sum + i;
       }
       console.log("sum = ", sum);
     }
 
     {
       // for(let i = 1; i <= 1000; i++) {
       //   console.log("i love you", i);
       //  }
 
     }
 
     {
       for(let i = 1; i <= 10; i++) {
         console.log("i love you", i);
        }
        console.log(i);
     }
 
     {
       for(var i = 1; i <= 10; i++) {
         console.log("i love you", i);
        }
        console.log(i);
     }
 
 
 
     // Loop in js 
     // Infinite loop : A loop that never ends.
 
     /*
     {
       for(let i = 1; i => 10; i++) {
         console.log("i love you", i);
        }
        console.log(i);
     }
     */
 
 
 
   //  while loop : while (condition){// do some work}
           // there is same for loop and while loop only defrente is writing code 
           {
           let i = 0;
            while(i <= 5) {
 
             
             console.log("i=", i);
             i++;
 
            }
            }
 
 
           
           
           
           
           
            //  do while loop
 
           /* 
           
 do{
 //do some work
 }while(condition);
 
 
           */
 
 {
 let i = 1;
 do {
   console.log("i=", i);
   i++;
 }while(i <= 10);
 }
 
 
 // FOr-of loop

/* 
for (let val of strVar) {
// do some work
}
*/

{
let str = "ApnaColle";
for (let i of str){  //iterllateral
  console.log("i=", i);
};
}

{
let str = "teroBauMuji";

for(let val of str){
  console.log("val=", val)
};

}

{
  let str = "Kando";
  let size = 0;

  for (let i of str) {
    console.log("i=", i);
    size++;
  };
  console.log("string size =", size);
}

{
  let str = "teroBauMuji";
  height = 0;
   
  for(let val of str) {
    console.log("val=", val);
    height++;
  };

  console.log("str height =", height);
}


// for in loop

/* 
for(let key in objVar) {
// DO some work
}
*/
{
let card = {
  age:87,
  name: "prashant",
  rollNum: 45,
  isPass: true,
};

for (let key in card) {
  console.log("key=", key);
}
}

{
  let card = {
    age:87,
    name: "prashant",
    rollNum: 45,
    isPass: true,
  };
  
  for (let key in card) {
    console.log("key=", key, " value=", card[key]);
  }
  }



  // pratcice

  //  Q1. print all even numbers from 0 to 100.
{
  for(num = 0; num <= 100; num++) {
    console.log(num);
  }
  }

  {
    for(num = 0; num <= 200; num++) {
    if(num%2 === 0) {
      // even number
      console.log("num =", num);
    } /*  else { */

    // }
    }
  }

  {
    for(num = 0; num <= 200; num++) {
    if(num%2 !== 0) {
      // odd number
      console.log("num =", num);
    } /*  else { */

    // }
    }
  }




  //   Q2. Create a game where you start any random game number. Ask the user to keep guessing the game number until the user enters correct value

      // let gameNum = 100;
      // let userNum = prompt("Guess your Faviorite Number");

      // while(userNum != gameNum) {
      //   userNum = prompt("You ENter the wrong number ! Please Guess the right number");
      // }
      // console.log("COngrats Muji NUmber right vo");


      // {
      //   let favNum = 34;
      //   let iceNum = prompt("GUess your PhoneNumber Last ");
      //   while(iceNum != favNum) {
      //     iceNum = prompt("You entered Wrong Number");

      //   }
      //   console.log("vyo")
      // }








      // strings in js 
      // string is a sequence of characters used to represented text

      // 1. create string
          //   let str = "apna colle";

      //  2. string length
          //  str.length

      // 3. string indices
        //  str[0], str[1], str[2]

{
         let str = "lamoooooo";
         console.log(str);
}
{
         let str = "unfndj";
        let str1 = "juan";
        let str2 = "jdsn";
        console.log(str2.length);

}

{
  let str = "unfndj";
 let str1 = "juan";
 let str2 = "jdsn";
 console.log(str[4]); // let str = "unfndj"; answer is u of indics
 console.log(str1[0]); 
}






// template Literals in js 

//  A way to have embedded expressions in strings
    // this is a template literal

    // string Interpolation 
    // to create a strings by doing subdtitution os placeholders
        // `string text ${expression} string text`


{
      let socialMedia = `Hey Babee`;
      console.log(socialMedia);  
}

{
  let utiliesMuji = `hi mero Muji`;
  console.log(utiliesMuji);
}

{
  let kandoIcon = {
    userName: "hlo babee",
    price: 87,

  }
  console.log("this userName is ", kandoIcon.userName, "is", kandoIcon.price);
}

{
  let temlpate = {
    userName: "jungle",
    price: 89,

    
  };

  let output = `the cot of ${temlpate.userName} is ${temlpate.price} rupess`;

  console.log(output);
  
}

{
  let specialString = `this is book ${1 + 2 + 3}`;
  console.log(specialString);
}

{console.log("TERO BAU KO \n LADO KHA ")}   // \n and \t (tag escape) is are ecasepe character
{console.log("TERO BAU KO \t LADO KHA ")}



// String Methods in js   // Methods is block which give output of string to print like console.log
    // these are built-in functions to manipulate a string 
    //  str.toUppercase()
    // str.toLowerCase()
    // str.trim() //removes whitespaces
{
let str = "David Katuwal";
str = str.toUpperCase();
console.log(str);
}

{
  let str = "DAVID Katuwal";
str = str.toLowerCase();
console.log(str);
}

{   //str.trim() is used to remove 
  let str = "   David Katuwal    ";
  // str = str.trim();
  // console.log(str);
  console.log(str.trim());
}



// string Methpods in js 
 // 1. str.slice(start, end?) // MEans is Returns part of string
 // 2. str1.concat( str2 ) // means is joins str2 with str1
 // 3. str.replace( searchVal, newVal )
 // 4. str.charAt( idx ) 


// slice

 {
  let str = "0123456789";
  console.log(str.slice(5, 8));
 }


//  join str2 with str1
 {
  let str1 = "Apple";
  let str2 = "123";
  let result = str1.concat(str2)
  console.log(result);
 }

 {
  let str1 = "Apple";
  let str2 = "123";
  let result = str2.concat(str1);
  let resultPre = str1 + str2;
  console.log(result);
  console.log(resultPre);
 }


//  str repalce 

 {
  let str = "hello";
  console.log(str.replace("lo", "p"));
 }

//  charAt 
 {
  let str = "IlOveyou";
  console.log(str.charAt(0));
 }
 {
  let str = "IlOveyou";
  str = str.replace("I", "y");
  console.log(str);
 }














//  LEts pratcice 

/*  
    Q1. Prompt the user to enter thier full name . Generate a userNmae for them vbased on the input start username with @, followed by their full name and ending with the fullname length.

        eg. username = "shardha kaphara" , username should be "@shardhakaphra13"
*/

//  Answer :
   
{
  let fullName = prompt("enter your kando Name");

  let username = "@" +  fullName + fullName.length;

    console.log(username);

}



























         
