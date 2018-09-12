let score = 0;
const add1team1 = event => {
  score += 1;
  let display = `${score}`;
  const team1score = document.querySelector(".team1 .score");
  team1score.textContent = display;
};
const add1team2 = event => {
  score += 1;
  let display = `${score}`;
  const team2score = document.querySelector(".team2 .score");
  team2score.textContent = display;
};
const sub1team1 = event => {
  score -= 1;
  let display = `${score}`;
  const team1score = document.querySelector(".team1 .score");
  team1score.textContent = display;
};
const sub1team2 = event => {
  score -= 1;
  let display = `${score}`;
  const team2score = document.querySelector(".team2 .score");
  team2score.textContent = display;
};
let score = document.querySelector("score").min;

const main = () => {
  const addbuttonteam1 = document.querySelector(".team1 .add");
  addbuttonteam1.addEventListener("click", add1team1);

  const addbuttonteam2 = document.querySelector(".team2 .add");
  addbuttonteam2.addEventListener("click", add1team2);

  const subbuttonteam1 = document.querySelector(".team1 .sub");
  subbuttonteam1.addEventListener("click", sub1team1);

  const subbuttonteam2 = document.querySelector(".team2 .sub");
  subbuttonteam2.addEventListener("click", sub1team2);
};

document.addEventListener("DOMContentLoaded", main);
