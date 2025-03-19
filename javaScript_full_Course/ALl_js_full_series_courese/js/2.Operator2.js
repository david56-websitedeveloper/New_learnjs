
// New Lecture 2 
// Operators & Conditional statements

// Operators are used to perform operations on variables and values.
// Is used to perform some operation on data 

// Arithmetic Operators
// +, -, *, /
// 1. modulus(%)  2. Exponentiation(2 power 3)  3.Increment 4. Decrement

// Arthmetic Operators

let a = 5;
let b = 47;
let c = a + b
console.log("a + b" , a + b );
console.log("a - b" , a - b );
console.log("a * b" , a * b );
console.log("a / b" , a / b );
console.log(c);
console.log("a = ", a, " & b = ", b);

{
// second
let x = 6;
let y = 9;
console.log("x + y" , x + y );

// modulus  8/100*10 = 0.8 but in computer is not define decimal answer 8.
let a = 8; 
let b = 10;
let c = a % b;
let d = b % a;
console.log("a % b" , a % b );
console.log("b % a" , b % a );
console.log(c);
console.log(d);

// Exponentiation
let p = 2;
let q = 5;
console.log("p ** q" , p ** q );

}

// Uniray Operators

// 1. Increment ( a ++  ( another is post or pre increment a=a+1 , or , a++ , ++a )  ) 
// 2. Decrement ( a -- ( another is post or pre increment a=a-1 , or , a-- , --a ))


// unary operator
{

let a = 785;
let b = 4;

console.log("a = ", a, " & b = ", b);
a = a + 1;
a++;
++a;
console.log(a);
console.log("a = ", a);
console.log("++a = ", ++a);    //post increment
console.log("a++ = ", a++);      //pre increment
console.log("a = ", a);
}



{

  let a = 79;
  let b = 4;
  
  console.log("a = ", a, " & b = ", b);
  a = a - 1;
  a--;
  --a;
  console.log(a);
  console.log("a = ", a);
  console.log("--a = ", --a); //post increment
console.log("a-- = ", a--);    //pre increment
console.log("a = ", a);
}
  

//  Operators in js
    //  Assignment Operatiors  ( Means assign value )
      //  = , += , -= , *= , %= , **= 

      {
        let a = 9;
  let b = 4;
     a += 4;
        console.log("a = ", a);
      }

      {
        let a = 9;
  let b = 4;
     a -= 4;
        console.log("a = ", a);
      }
    
      {
        let a = 9;
  let b = 4;
     a *= 4;
        console.log("a = ", a);
      }
     
      {
        let a = 9;
  let b = 4;
     a %= 4;
        console.log("a = ", a);
      }


      {
        let a = 9;
  let b = 4;
     a **= 4;
        console.log("a = ", a);
      }

      {
        let a = 9;
  let b = 4;
     a /= 4;
        console.log("a = ", a);
      }




        //  Operators in js 
          //   Comparison Operators   ( To OCmpare two value )
//  Equal to (==) , Not equal to (!=) , Equal to & type (===) this is Strick version , Not equal to & type (!==)
    //  > , >= , < , =<

        {       
    let a = 9;
    let b = 4;
    console.log("9 == 4", a == b);
        }

        {       
          let a = 9;
          let b = 4;
          console.log("9 != 4", a != b);
              }

              {       
                let a = 9;
                let b = "4";  // String 
                console.log("9 != 4", a != b);
                    }

                    {       
                      let a = 9;
                      let b = 4;
                      console.log("9 === 4", a === b);
                          }

                          {       
                            let a = 9;
                            let b = 4;
                            console.log("9 !== 4", a !== b);
                                }

                                {       
                                  let a = 9;
                                  let b = 4;
                                  console.log("9 < 4", a < b);
                                      }

                                      {       
                                        let a = 9;
                                        let b = 4;
                                        console.log("9 <= 4", a <= b);
                                            }
                                            {       
                                              let a = 9;
                                              let b = 4;
                                              console.log("9 > 4", a > b);
                                                  }

                                                  {       
                                                    let a = 9;
                                                    let b = 4;
                                                    console.log("9 >= 4", a >= b);
                                                        }
      //  Operators in js 
        //   Logical Operators (multiple expression lai  evalute grdaxa  rw tesko final answer nikalxa )

          //  Logical AND &&   ( if we see conditional 1 is true and conditional 2 is true  then final answer is be true   (it means when i have same valaue then i will return same value) )
          // LOgical OR ||       ( if we see both cond is true it is also came two when both are true or false , false or true then also it came true but when both are false then it come false  )
          //  Logical Not !
           


          //  For example 

          {       
            let a = 9;
            let b = 4;
            let cond1 = a > b;  // true
            let cond2 = a === 9;  //true
            console.log("cond1 && cond2", cond1 && cond2);
            console.log("cond1 && cond2", a > b && a === 9);
                }


                 
          {       
            let a = 9;
            let b = 4;
            let cond1 = a > b;  // true
            let cond2 = a === 9;  //true
            console.log("cond1 || cond2", cond1 || cond2);
            console.log("cond1 || cond2", a > b || a === 9);
                }

                {       
                  let a = 9;
                  let b = 7;
                  let cond1 = a < b;  // true
                  let cond4 = a < b;  // true
                  let cond2 = a === 9;  //true
                  let cond3 = a === 6;  //true
                  console.log("cond1 || cond2", cond1 || cond2);
                  console.log("cond1 || cond4", a > b || a === 9);
                  console.log("cond1 || cond3", a < b || a === 6);
                      }


                      {       
                        let a = 9;
                        let b = 4;
                        // let cond1 = a > b;  // true
                        // let cond2 = a === 9;  //true
                       
                        console.log("!(a > b)", !(a > b));
                        console.log("!(a < b)", !(a < b));
                        console.log("!(a < b)", !(a === b));
                        console.log("!(a > b)", !(a !== b));
                        console.log("!(a === b)", !(a === b));
                        console.log("!(a !== b)", !(a !== b));
                            }




                            // Conditional Statements

                            //  To implement some condition in the code 
                           
               //   (1) if statement  

                            // {
                            //   let color;
                            //   if(
                            //     color === "dark-mode"
                            //   )
                            
                            //   {
                            //     color = "black";
                            //     console.log("black");
                            //   }
                            // }


                            {
                              let age = 16;

                              if (age >= 18) {
                                console.log("you can fuck");
                              }

                              if (age < 20) {
                                console.log("you cannot fuck");
                              }
                            }

                            {
                              let mode = "dark";
                              let color;

                              if(mode === "dark") {
                                color = "black";
                              }

                              if(mode === "light") {
                                color = "white";
                              }
                              console.log(color);
                            }



                        //   (2) if statement   
                        {    
                       let mode = "dark";
                        let color;

                        if(mode === "dark-mode"){
                          color = "black";
                        } else {
                          color = "white";
                        }
                        console.log(color);
                      }


                    {
                      let age = 45;
                       if(age >= 46) {
                        console.log("fuck");
                       } else {
                        console.log("not fuck");
                       }
                    }

                    // odd and enven 
                    {
                      let num = 41;

 if (num %2 === 0){
  console.log("even");
  console.log(num, "is even");
 }  else {
  console.log("odd");
  console.log(num, "is odd");
 }

                    }

                    {
 
                      let age = 50;

                      if(num %2) {
                        console.log("even");
                      } else {
                        console.log("odd");
                      }

                    }
                    

                    // syntax => rulesn 



                //COnditional Statements     // 
                    
                  //  else-if satments
                      {
                     let age = 49;

                     if(age < 16) {
                      console.log("junior");
                     } else if (age > 60) {
                      console.log("senior");
                     } else {
                      console.log("middle");
                     }



                      }

                      {
                        let age = 61;
   
                        if(age < 16) {
                         console.log("junior");
                        } else if (age > 60) {
                         console.log("senior");
                        } else {
                         console.log("middle");
                        }
   
   
   
                         }

                         {
                          let age = 12;
     
                          if(age < 16) {
                           console.log("junior");
                          } else if (age > 60) {
                           console.log("senior");
                          } else {
                           console.log("middle");
                          }
     
     
     
                           }

                           {

                            let mode = "blue";
                            let color;

                            if(mode === "dark") {
                                  color = "black";
                            } else if (mode === "blue") {
                              color = "blue";
                            } else if (mode === "white") {
                              color = "white";
                            } else {
                              color = "red";
                            }
                                    console.log(color);
                           }


                           {

                            let mode = "white";
                            let color;

                            if(mode === "dark") {
                                  color = "black";
                            } else if (mode === "blue") {
                              color = "blue";
                            } else if (mode === "white") {
                              color = "white";
                            } else {
                              color = "red";
                            }
                                    console.log(color);
                           }


                           {

                            let mode = "dark";
                            let color;

                            if(mode === "dark") {
                                  color = "black";
                            } else if (mode === "blue") {
                              color = "blue";
                            } else if (mode === "white") {
                              color = "white";
                            } else {
                              color = "red";
                            }
                                    console.log(color);


                                    // this is practice

                                    if (mode === "dark") { 
                                      console.log(mode);
                                    }
                           }

  

                           {

                            let mode = "yellow";
                            let color;

                            if(mode === "dark") {
                                  color = "black";
                            } else if (mode === "blue") {
                              color = "blue";
                            } else if (mode === "white") {
                              color = "white";
                            } else {
                              color = "red";
                            }
                                    console.log(color);
                           }



                          //  Ternary operators { condition ? true output: false output
                          //  "adult" : "no adult"; }
  {
                          let age = 20;
                             let result = age >= 18 ? "adult" : "not adult";
                             console.log(result);
   }

   {
    let age = 2;
       let result = age >= 18 ? "adult" : "not adult";
       console.log(result);
}




// Lets practice 
{
// let name = prompt("hello!");
  //  console.log(name);  
}

{
  // let alert = alert("hello!");
  //    console.log(alert);

  // alert("david");
  }

{
  // let num = prompt("Enter a number:");
  //   if(num % 5 === 0) {
  //     console.log("yes", num, "is multiple of 5");
  //   } else {
  //     console.log("yes", num, "is not multiple of number");
    //}
}

{
  let score = 75;
   let grade;

   if (score >= 90 && score <=100) {
    grade = "A";
   } else if(score >= 80 && score <= 89) {
    grade = "B";
    
   } else if(score >= 70 && score <= 79) {
    grade = "c";
    
   } else if(score >= 60 && score <= 69) {
    grade = "D";
    
   } else if(score >= 50 && score <= 59) {
    grade = "fail";
    
   } else if(score >= 40 && score <= 49) {
    grade = "Fail";
    
   } else if(score >= 30 && score <= 0) {
    grade = "fail";
    
   }
   console.log(grade);
}


{
  // let score = prompt("Enter Your Grade:");
  //  let grade;

  //  if (score >= 90 && score <=100) {
  //   grade = "A";
  //  } else if(score >= 80 && score <= 89) {
  //   grade = "B";
    
  //  } else if(score >= 70 && score <= 79) {
  //   grade = "c";
    
  //  } else if(score >= 60 && score <= 69) {
  //   grade = "D";
    
  //  } else if(score >= 50 && score <= 59) {
  //   grade = "fail";
    
  //  } else if(score >= 40 && score <= 49) {
  //   grade = "Fail";
    
  //  } else if(score >= 30 && score <= 0) {
  //   grade = "fail";
    
  //  }
  //  console.log(grade);
}