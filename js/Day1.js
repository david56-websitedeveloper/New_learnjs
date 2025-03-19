
// Uniray Operators

// 1. Increment ( a ++  ( another is post or pre increment a=a+1 , or , a++ , ++a )  ) 
// 2. Decrement ( a -- ( another is post or pre increment a=a-1 , or , a-- , --a ))

let x = 4;
let y = 6;
x++;
y++;
console.log("x++ = ", x++);
console.log("y++ = ", y++);

let a = 5;
let b = 8;
a++;
b++;
console.log("a++ = ", a++);    //this a++ is give 1 extra number add 5 + 1 = 6
console.log("b++ = ", b++)       //this b++ is give 1 extra number add 8 + 1 = 9

{
    let a = 20;
    let b = 56;
    ++a;
    ++b;

    console.log("++a = ", ++a);  //this ++a is give 2 extra number add 20 + 2 = 22
    console.log("++b = ", ++b);   // //this ++b is give 2 extra number add 56 + 2 = 58
}

{
    let a = 20;
    let b = 56;
    --a;
    --b;

    console.log("--a = ", --a);  //this --a is give 2 extra minus number add 20 - 2 = 18
    console.log("--b = ", --b);   // //this --b is give 2 extra minus number add 56 - 2 = 54
}

{
    let a = 20;
    let b = 56;
    a--;
    b--;

    console.log("a-- = ", a--);  //this a-- is give 1 extra minus number add 20 - 1 = 19
    console.log("b-- = ", b--);   // //this b-- is give 1 extra minus number add 56 - 1 = 55
}

{
    let a = 9;
    let b = 10;

    a = a - 1;
    console.log("a =", a, "b =", b);
}

{
    let a = 47;
    let b = 46;
     a = a + 1;
     console.log("a =", a, "b =", b);
}

{
    let a = 47;
    let b = 46;
     a = a - 1;
     b = b - 1;
     console.log("a =", a, "b =", b);
}

// Arithmetic Operators
// +, -, *, /

{
    let a = 47;
    let b = 46;
    console.log("a + b" , a + b);
}
{
    let a = 47;
    let b = 46;
    console.log("a - b" , a - b);
}

{
    let a = 47;
    let b = 46;
    console.log("a * b" , a * b);
}

{
    let a = 47;
    let b = 46;
    console.log("a / b" , a / b);
}

{
    let a = 47;
    let b = 46;
    console.log("a % b" , a % b);
}

{
    let a = 47;
    let b = 46;
    console.log("a ** b" , a ** b);
}

//  Assignment Operatiors  
      //  = , += , -= , *= , %= , **= 

{
    let x = 5;
    let y = 8;
    x += 4;
    y += 4;
    console.log("x = ", x);
    console.log("y = ", y);
}

{
     let a = 4;
     let b = 5;
     a *= 8;
     b *= 9;
     console.log("a =", a); 
     console.log("b =", b);
}

 //   Comparison Operators   ( To OCmpare two value )
//  Equal to (==) , Not equal to (!=) , Equal to & type (===) this is Strick version , Not equal to & type (!==)
    //  > , >= , < , =<


{
    let x = 7;
    let y = 23;
    console.log("x >= y", x >= y);
}


