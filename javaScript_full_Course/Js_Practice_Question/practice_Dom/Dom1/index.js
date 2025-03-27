const dropdown = document.createElement('select');
const options = ['Option 1', 'Option 2',];

options.forEach(option => {

    const item = document.createElement('option');
    item.textContent = option;
    item.value = option;
    dropdown.appendChild(item);
});


document.body.appendChild(dropdown);

dropdown.addEventListener('change', () => {
    console.log(dropdown.value);
});




//
function findNestedDivs(parentElement) {
  const nestedDivs = parentElement.querySelectorAll("div"); // Find all <div> elements
  nestedDivs.forEach((div) => console.log(div)); // Log each <div>
}

const parent = document.getElementById("parentDiv"); // Parent container
findNestedDivs(parent);


//
let timer; // Variable to store the interval
let startTime; // Variable to track the start time

const startButton = document.getElementById("startTimer");
const stopButton = document.getElementById("stopTimer");

// Start timer
startButton.addEventListener("click", () => {
  startTime = Date.now(); // Record the start time
  timer = setInterval(() => {
    const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2); // Calculate time in seconds
    document.getElementById(
      "timerDisplay"
    ).textContent = `Elapsed Time: ${elapsedTime}s`; // Update display
  }, 100); // Update every 100ms
});

// Stop timer
stopButton.addEventListener("click", () => {
  clearInterval(timer); // Clear the interval
});


//
const toggleButton = document.getElementById('themeToggle');

// Toggle dark theme
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme'); // Add/remove the class
});

// CSS (Add this to your style sheet or <style> section)
/*
.dark-theme {
  background-color: black;
  color: white;
}
*/



//
try {
  const element = document.getElementById("nonExistentId");
  if (!element) throw new Error("Element not found!"); // Custom error message
  console.log(element.textContent);
} catch (error) {
  console.error(error.message); // Log the error without breaking the code
}

//
const container = document.getElementById("container");

container.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log(`Button clicked: ${event.target.textContent}`);
  }
});

// Dynamically add a button
const button = document.createElement("button");
button.textContent = "Dynamic Button";
container.appendChild(button);


//
const table = document.getElementById('myTable');

// Function to add a row
function addRow() {
  const row = table.insertRow(); // Add a new row
  const cell = row.insertCell(); // Add a new cell to the row
  cell.textContent = 'New Cell'; // Set cell content
}

// Function to update a specific cell
function updateCell(rowIndex, cellIndex, newValue) {
  const row = table.rows[rowIndex];
  if (row && row.cells[cellIndex]) {
    row.cells[cellIndex].textContent = newValue; // Update cell content
  }
}

// Function to delete a specific row
function deleteRow(rowIndex) {
  if (table.rows[rowIndex]) {
    table.deleteRow(rowIndex); // Remove the row from the table
  }
}

// Example Usage
addRow(); // Adds a new row
updateCell(0, 0, 'Updated Value'); // Updates the first cell in the first row
deleteRow(0); // Deletes the first row


//
const container = document.getElementById('container');

// Delegate click events to the container
container.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    console.log(`Button clicked: ${event.target.textContent}`);
  }
});

// Add buttons dynamically
const button = document.createElement('button');
button.textContent = 'Dynamic Button';
container.appendChild(button); // Button added dynamically


//

const elements = document.querySelectorAll('.track');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(`${entry.target.id} is in view.`);
      entry.target.style.backgroundColor = 'lightgreen'; // Highlight element in view
    } else {
      entry.target.style.backgroundColor = ''; // Reset background
    }
  });
});

elements.forEach(element => observer.observe(element)); // Start observing elements


//
const draggableItems = document.querySelectorAll(".draggable");

// Add dragstart event listener
draggableItems.forEach((item) => {
  item.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  });

  item.addEventListener("dragover", (event) => {
    event.preventDefault(); // Allow drop
  });

  item.addEventListener("drop", (event) => {
    const draggedId = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(draggedId);
    event.target.insertAdjacentElement("beforebegin", draggedElement); // Reorder item
  });
});


//
const links = document.querySelectorAll('.nav-link');
const contentDiv = document.getElementById('content');

const pages = {
  home: '<h1>Welcome to Home Page</h1>',
  about: '<h1>About Us</h1>',
  contact: '<h1>Contact Us</h1>',
};

links.forEach(link => {
  link.addEventListener('click', event => {
    const page = event.target.dataset.page; // Fetch the page name from data attributes
    contentDiv.innerHTML = pages[page]; // Update content dynamically
  });
});


//
const items = document.querySelectorAll('.item');
const filterInput = document.getElementById('filterInput');
const sortButton = document.getElementById('sortButton');

// Filter items based on input
filterInput.addEventListener('input', () => {
  const filterValue = filterInput.value.toLowerCase();
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(filterValue) ? 'block' : 'none'; // Show/hide items
  });
});

// Sort items alphabetically
sortButton.addEventListener('click', () => {
  const parent = document.getElementById('itemContainer');
  const sortedItems = Array.from(items).sort((a, b) =>
    a.textContent.localeCompare(b.textContent)
  );
  sortedItems.forEach(item => parent.appendChild(item)); // Reorder in DOM
});


//
const formContainer = document.getElementById("formContainer");
const addFieldButton = document.getElementById("addField");

addFieldButton.addEventListener("click", () => {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter value";
  formContainer.appendChild(input);
});


//
const targetNode = document.getElementById('observableContainer');
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    console.log(`Mutation detected: ${mutation.type}`);
  });
});

observer.observe(targetNode, { childList: true, subtree: true }); // Monitor for additions/removals


//
function showModal(content) {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <p>${content}</p>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector(".close-button").addEventListener("click", () => {
    document.body.removeChild(modal); // Close modal
  });
}

// Example Usage
showModal("This is a dynamic modal dialog!");


//
const lazyImages = document.querySelectorAll("img.lazy");

const lazyLoad = (image) => {
  image.src = image.dataset.src; // Load the actual source
  image.classList.remove("lazy");
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      lazyLoad(entry.target); // Load image when it comes into view
      observer.unobserve(entry.target); // Stop observing after loading
    }
  });
});

lazyImages.forEach((image) => observer.observe(image));


//

const searchInput = document.getElementById("searchInput");
const listItems = document.querySelectorAll(".list-item");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  listItems.forEach((item) => {
    item.style.display = item.textContent.toLowerCase().includes(query)
      ? "block"
      : "none";
  });
});


//


// html 
const dropdownn = document.getElementById("myDropdown");
dropdownn.style.fontSize = '20px';

dropdownn.addEventListener("change", (event) => {
  const selectedValue = dropdownn.value;
  const selectedText = dropdownn.options[dropdownn.selectedIndex].text;
  console.log(`You selected: ${selectedText} (${selectedValue})`);
});