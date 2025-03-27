/*
1. Declare a variable and assign a value to it.

Question:

 1. Declare a variable named name and assign it the value "John".



 Explanation:

The let keyword is used to declare a variable.

"John" is a string assigned to the variable name.

console.log(name); prints "John" to the console.
*/

{
    let name = "john";
    console.log(name);  // practise basic question with answer
}

{
  let yumi = "yumi";
  console.log(yumi); // practise basic question with answer
}

{
    let yuki = "yuki";
    console.log(yuki); // practise basic question with answer
}

/*
2. Difference between var, let, and const
Question:
What is the difference between var, let, and const in JavaScript?



Explanation:

var is function-scoped and can be redeclared.

let is block-scoped and cannot be redeclared in the same block.

const is also block-scoped and cannot be reassigned after initialization.
*/

{
    var a = 45;
    //var a = 57;
    //let a = 67;
    let b = 67;
//   const a: 88; // error
    //const b = 89; // error

    if (true) {
        var a = 57;
        let b = 55;

} 
    console.log(a);
    console.log(b);

    
   // console.log(a); // practise basic question with answer
   // console.log(b); // practise basic question with answer
}

{
  var a = 10; // function-scoped, can be redeclared
  let b = 20; // block-scoped, cannot be redeclared in the same scope
  const c = 30; // block-scoped, cannot be reassigned

  if (true) {
    var a = 40; // Updates global `a`
    let b = 50; // New `b` inside this block
    // c = 60;   // ❌ Error: Cannot reassign a `const`
  }

  console.log(a); // 40
  console.log(b); // 20
  console.log(c); // 30
}

/* 
3. Hoisting with var
Question:
What will be the output of the following code?

  console.log(x);
var x = 5;
console.log(x);


Explanation:

var x; is hoisted (moved to the top) but not initialized.

console.log(x); before initialization prints undefined.

After x = 5;, console.log(x); prints 5.
*/

{
    console.log(x);
    var x = 5;
    console.log(x);
}

/*

4. Reassigning a variable
Question:
Which of the following statements will cause an error?


let x = 10;
x = 20;

const y = 30;
y = 40;  // Will this work?


Explanation:

let x = 10; can be reassigned (x = 20; works fine).

const y = 30; cannot be reassigned (y = 40; throws an error).

*/
{
    let x = 10;
    x = 30;
    console.log(x); // 30

   // const y = 45;
   // y = 45;
   // console.log(y); //error
}


