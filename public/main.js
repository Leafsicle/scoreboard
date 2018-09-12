let score = 0;
const add1team1 = event => {
  score += 1;
  let display = `${score}`;
  const team1score = document.querySelector(".team1 .score");
  team1score.textContent = display;
};

const main = () => {
  const addbuttonteam1 = document.querySelector(".team1 .add");
  addbuttonteam1.addEventListener("click", add1team1);
};

document.addEventListener("DOMContentLoaded", main);
