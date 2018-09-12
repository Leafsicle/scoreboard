const main = () => {
  let clickNum = 0;

  const clicky = event => {
    clickNum += 1;
  };
  let message = `hey, we clicked ${clickNum} times`;
  console.log(event.target);
  event.target.textcontent = message;

  let matchingElements = document.querySelectorAll(".add");

  let lastElement = matchingElements[1];

  lastElement.textContent += "?";

  let button = document.querySelector("button.first");

  button.addEventListener("click", clicky);

  let button2 = document.querySelector("button.second");
  button2.addEventListener("click", clicky);

  let button3 = document.querySelector("button.third");
  button3.addEventListener("click", clicky);
};
document.addEventListener("DOMContentLoaded", main);
