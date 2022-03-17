/**
 * Intro to Web API
 */

/**
 * setInterval
//  */
// let count = 0;
// const intervalID = setInterval(() => {
//   count++;
//   console.log(count);
// }, 1000);

/**
 * setTimeout
 */
// setTimeout(() => {
//   clearInterval(intervalID);
//   console.log("Stop");
// }, 5000);

/**
 * localStorage
 */
// const user = {
//   name: "Minh",
//   status: "single",
//   age: 18,
// };
// window.localStorage.setItem("user", JSON.stringify(user));
// window.localStorage.removeItem("classname");
// const username = JSON.parse(window.localStorage.getItem("user"));
// console.log(username.name);

/**
 * fetch
 */

/**
 * Example: Stopwatch
 */

// HTML & CSS
// Access output, btnStart, btnStop (querySelector)
const output = document.querySelector("#timer");
const btnStart = document.querySelector("#start");
const btnStop = document.querySelector("#stop");

// let timer = 0 ms
let timer = 0;
let intervalID;

// btnStart click -> setInterval delay=1 -> timer++
btnStart.addEventListener("click", () => {
  btnStart.disabled = true;
  intervalID = setInterval(() => {
    timer++;
    console.log(`Interval ID ${intervalID}: ${timer}`);
    output.textContent = timer;
  }, 1000);
});
// btnStop click -> clearInterval
btnStop.addEventListener("click", () => {
  clearInterval(intervalID);
  btnStart.disabled = false;
});

// garbage collection
