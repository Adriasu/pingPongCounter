const section = document.createElement("section")
const img = document.createElement("img")
const divResult = document.createElement("div")
const h1 = document.createElement("h1")
const labelPoints = document.createElement("label")
const inputSelect = document.createElement("select")
const option3 = document.createElement("option")
const option5 = document.createElement("option")
const option7 = document.createElement("option")
const option10 = document.createElement("option")
const option15 = document.createElement("option")
const divBtnContain = document.createElement("div")
const btnCounterPlayer1 = document.createElement("button")
const btnCounterPlayer2 = document.createElement("button")
const btnReset = document.createElement("button")

document.querySelector("body").appendChild(section);

section.appendChild(img)
section.appendChild(divResult)
divResult.appendChild(h1)
divResult.appendChild(labelPoints)
divResult.appendChild(inputSelect)
inputSelect.appendChild(option3)
inputSelect.appendChild(option5)
inputSelect.appendChild(option7)
inputSelect.appendChild(option10)
inputSelect.appendChild(option15)
section.appendChild(divBtnContain)
divBtnContain.appendChild(btnCounterPlayer1)
divBtnContain.appendChild(btnCounterPlayer2)
divBtnContain.appendChild(btnReset)

img.src = "https://i.gifer.com/GAve.gif"
h1.innerHTML = "0 to 0"
labelPoints.innerHTML = "Max points"
option3.innerHTML = 3
option5.innerHTML = 5
option7.innerHTML = 7
option10.innerHTML = 10
option15.innerHTML = 15
option3.value = 3
option5.value = 5
option7.value = 7
option10.value = 10
option15.value = 15
btnCounterPlayer1.innerHTML = "+1 Player 1"
btnCounterPlayer2.innerHTML = "+1 Player 2"
btnReset.innerHTML = "Reset"


