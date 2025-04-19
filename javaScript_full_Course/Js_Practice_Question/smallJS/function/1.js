  /*  function myButton() {
    const btn = document.getElementById('king');
    btn.innerHTML = `<span class="time-text">${new Date().toLocaleString()}</span>`;
}   // .innerHTML = Date()  */




// let clockInterval;
// let isRunning = false;

// function myButton() {
//   if (!isRunning) {
//     // Start automatic updates
//     updateTime();
//     clockInterval = setInterval(updateTime, 1000);
//     isRunning = true;
//   }
// }

// function updateTime() {
//   const options = {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     hour12: true,
//   };

//   const currentDateTime = new Date().toLocaleString("en-US", options);
//   document.getElementById("king").innerHTML = `
//                 <span class="time-text">${currentDateTime}</span>
//             `;
// }

// Optional: If you want separate click functionality
// function myButton() {
//   const btn = document.getElementById("king");
//   btn.innerHTML = `<span class="time-text">${new Date().toLocaleString()}</span>`;
// }