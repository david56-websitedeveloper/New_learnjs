/*
Dom Manuplation 

1. Attributes
.getAttribute( attr ) // to get the value of an attribute
.setAttribute( attr, value ) // to set the value of an attribute
.hasAttribute( attr ) // to check if an attribute exists
.removeAttribute( attr ) // to remove an attribute
.attributes // to get all attributes of an element


2. Classes
.className // to get the class name of an element
.classList // to get all classes of an element
.classList.add( class ) // to add a class to an element
.classList.remove( class ) // to remove a class from an element
.classList.toggle( class ) // to toggle a class on an element
.classList.contains( class ) // to check if an element has a class

3. Styles
1. node.stylw // to get the style of an element
.style // to get the style of an element
.style.property // to get the value of a style property
.style.property = value // to set the value of a style property



4. Insert Elements   // let el = document.createElement('div')
1. node.innerHTML // to get the HTML content of an element
2. node.innerHTML = content // to set the HTML content of an element
3. node.innerText // to get the text content of an element
4. node.innerText = content // to set the text content of an element
5. node.insertAdjacentHTML( position, content ) // to insert HTML content in an element
6. node.append (el) //adds an element at the end of the list of children of a node
7. node.prepend (el) //adds an element at the beginning of the list of children of a node
8. node.before (el) //adds an element before a node
9. node.after (el) //adds an element after a node
10. node.replaceWith (el) //replaces a node with another node
11. node.appendChild (el) //adds an element as the last child of a node
12. node.insertBefore (el, ref) //adds an element before another
13. node.insertAdjacentElement (position, el) //inserts an element

5. delete Elements
1. node.remove() // to remove an element
2. node.removeChild( child ) // to remove a child element
3. node.replaceChild( newChild, oldChild ) // to replace a child element
4. node.cloneNode( deep ) // to clone an element

*/


   /*
Qs. create a new button element . give it tex "click me" and add background color green and text color white.
    insert the button as the first element inside the body tag.

    qs 2. create a <p>tag in html give it a class & some styling 
         // Now create a new class in css and try to append this class to the <p> element.
          // Did you Notice , how you overwrite the class name when you add a new one ?
              solve this problem using classlist.
   */
// LEts practice 

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
newBtn.style.color = "white";
newBtn.style.cursor = "pointer";
newBtn.style.backgroundColor = "green";
newBtn.style.height = "40px";
newBtn.style.width = "100px";
newBtn.style.border = "none";
newBtn.style.borderRadius = "5px";
newBtn.style.margin = "10px";
newBtn.style.fontSize = "16px";
newBtn.style.fontWeight = "bold";
newBtn.style.textTransform = "uppercase";
newBtn.style.outline = "none";
newBtn.style.boxShadow = "0 0 5px rgba(0,0,0,0.5)";
newBtn.style.transition = "all 0.2s ease"; // Shortened for real-time feel
document.body.appendChild(newBtn);

// Add "down" effect on click
newBtn.addEventListener("mousedown", () => {
  newBtn.style.transform = "scale(0.95)";
  newBtn.style.boxShadow = "0 0 2px rgba(0,0,0,0.3)";
});

// Reset to "up" state
newBtn.addEventListener("mouseup", () => {
  newBtn.style.transform = "scale(1)";
  newBtn.style.boxShadow = "0 0 5px rgba(0,0,0,0.5)";
});

// Optionally handle the mouse leaving the button area
newBtn.addEventListener("mouseleave", () => {
  newBtn.style.transform = "scale(1)";
  newBtn.style.boxShadow = "0 0 5px rgba(0,0,0,0.5)";
});
 {
  newBtn.style.transform = "scale(0.95)";
  newBtn.style.boxShadow = "0 0 2px rgba(0,0,0,0.3)";
});



let newDiv = document.createElement("div"); // Removed quotes around the method
newDiv.innerHTML = "I am the boss";

newDiv.style.color = "white";
newDiv.style.backgroundColor = "green";
newDiv.style.height = "70px";
newDiv.style.width = "150px";
newDiv.style.padding = "10px";
newDiv.style.textAlign = "center";
newDiv.style.lineHeight = "70px";
newDiv.style.border = "none";
newDiv.style.borderRadius = "5px";
newDiv.style.margin = "10px";
newDiv.style.fontSize = "16px";
newDiv.style.fontWeight = "bold";
newDiv.style.textTransform = "uppercase";
newDiv.style.outline = "none";
newDiv.style.boxShadow = "0 0 5px rgba(0,0,0,0.5)";
newDiv.style.transition = "all 0.2s ease"; // Shortened for real-time feel
document.body.prepend(newDiv);




// q2. 

// para.getAttribute("class");
// para.setAttribute("class", "ki");

let para = document.querySelector("p");

para.classList.add("ki");

