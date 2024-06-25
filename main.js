const section = document.createElement("section");
const img = document.createElement("img");
const divResult = document.createElement("div");
const h1 = document.createElement("h1");
const labelPoints = document.createElement("label");
const inputSelect = document.createElement("select");
const option3 = document.createElement("option");
const option5 = document.createElement("option");
const option7 = document.createElement("option");
const option10 = document.createElement("option");
const option15 = document.createElement("option");
const divBtnContain = document.createElement("div");
const btnCounterPlayer1 = document.createElement("button");
const btnCounterPlayer2 = document.createElement("button");
const btnReset = document.createElement("button");

document.querySelector("body").appendChild(section);

section.appendChild(img);
section.appendChild(divResult);
divResult.appendChild(h1);
divResult.appendChild(labelPoints);
divResult.appendChild(inputSelect);
inputSelect.appendChild(option3);
inputSelect.appendChild(option5);
inputSelect.appendChild(option7);
inputSelect.appendChild(option10);
inputSelect.appendChild(option15);
section.appendChild(divBtnContain);
divBtnContain.appendChild(btnCounterPlayer1);
divBtnContain.appendChild(btnCounterPlayer2);
divBtnContain.appendChild(btnReset);

divBtnContain.id = "buttons";
btnCounterPlayer1.id = "btn1";
btnCounterPlayer2.id = "btn2";
btnReset.id = "btnReset";

img.src = "https://i.gifer.com/GAve.gif";
h1.innerHTML = "0 to 0";
labelPoints.innerHTML = "Max points: ";
inputSelect.name = "maxPoints";
inputSelect.id = "maxPoints";
option3.innerHTML = 3;
option5.innerHTML = 5;
option7.innerHTML = 7;
option10.innerHTML = 10;
option15.innerHTML = 15;
option3.value = 3;
option5.value = 5;
option7.value = 7;
option10.value = 10;
option15.value = 15;
btnCounterPlayer1.innerHTML = "+1 Player 1";
btnCounterPlayer2.innerHTML = "+1 Player 2";
btnReset.innerHTML = "RESTART GAME";

let counterPlayer1 = 0;
let counterPlayer2 = 0;
let points = 3;

inputSelect.addEventListener("change", () => {
  points = parseInt(maxPoints.value);
  counterPlayer1 = 0;
  counterPlayer2 = 0;
  h1.innerHTML = `${counterPlayer1} to ${counterPlayer2}`;
  btnCounterPlayer1.disabled = false;
  btnCounterPlayer2.disabled = false;
  img.src = "https://i.gifer.com/GAve.gif";
});

btnCounterPlayer1.addEventListener("click", () => {
  counterPlayer1++;
  if (counterPlayer1 === points) {
    btnCounterPlayer1.disabled = true;
    btnCounterPlayer2.disabled = true;
    img.src =
      "https://img.itch.zone/aW1hZ2UvNDc4NTkvMjExMjY5LmdpZg==/original/iEdCFj.gif";
  }
  h1.innerHTML = `${counterPlayer1} to ${counterPlayer2}`;
});

btnCounterPlayer2.addEventListener("click", () => {
  counterPlayer2++;
  if (counterPlayer2 === points) {
    btnCounterPlayer1.disabled = true;
    btnCounterPlayer2.disabled = true;
    img.src =
      "https://img.itch.zone/aW1hZ2UvNDc4NTkvMjExMjYyLmdpZg==/original/V5R6XE.gif";
  }
  h1.innerHTML = `${counterPlayer1} to ${counterPlayer2}`;
});

btnReset.addEventListener("click", () => {
  counterPlayer1 = 0;
  counterPlayer2 = 0;
  h1.innerHTML = `${counterPlayer1} to ${counterPlayer2}`;
  btnCounterPlayer1.disabled = false;
  btnCounterPlayer2.disabled = false;
  img.src = "https://i.gifer.com/GAve.gif";
});

document.addEventListener("keydown", (event) => {
  counterPlayer1 = 0;
  counterPlayer2 = 0;
  h1.innerHTML = `${counterPlayer1} to ${counterPlayer2}`;
  btnCounterPlayer1.disabled = false;
  btnCounterPlayer2.disabled = false;
  img.src = "https://i.gifer.com/GAve.gif";
});
