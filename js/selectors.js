import { generating } from "./main.js"
let massglvl = document.querySelector(".lvl")
let massgtime = document.querySelector(".time")
let button = document.querySelector("button")
let theword = document.querySelector(".word")
let input = document.querySelector("input")
let theAllword = document.querySelector(".allword")
let secondtimer = document.querySelector(".secondtimer")
let curntword = document.querySelector(".curntword")
let totalword = document.querySelector(".totalword")
let finsh = document.querySelector(".finsh")
let resultText = document.querySelector(".resultText")
let option = document.querySelector("select")
let num = document.querySelector(".num")
let first = document.querySelector(".firts")
let secound = document.querySelector(".secound")
let third = document.querySelector(".third")
let last = document.querySelector(".last")
let choes;

const Hard = [
    "Programming",
    "Destructuring",
    "JavaScript",
    "Doumentation",
    "Depaindens", ,
    "Department"
]
const Easy = [
    "Test",
    "Hello",
    "Code",
    "Town",
    "Reset",
    "Task",
    "Roles",
    "Funy",
    "coding",
]
const Normal = [
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Pradim",
    "Styling",
    "Cascade",
    "Function",
    "Working",
    "Playing",
]

const lvels = {
    Easy: 5,
    Normal: 3,
    Hard: 2,
    Mex: 4
}
let word
export let titletime;
function handellevls(event) {
    
    const selectedValue = event.target.value;
    // Check if a value other than the default placeholder is selected
    if (selectedValue) {
        titletime = lvels[selectedValue]
        massgtime.innerHTML= titletime
        massglvl.innerHTML = selectedValue
        secondtimer.innerHTML = titletime
        document.querySelector(".secondtimer").innerHTML = titletime + 2
        if (selectedValue === "Easy") {
            word = Easy
        } else if (selectedValue === "Normal") {
            word = Normal
        } else if(selectedValue === "Hard"){
            word = Hard
        }
        else {
            word = [...Hard,...Normal,...Easy]
        }
        totalword.innerHTML = selectedValue.length
    }
    this.disabled = true
    button.disabled = false
    input.disabled = false
}
option.addEventListener('change', handellevls);

function play() {
    secondtimer.innerHTML = titletime
    let strat = setInterval(() => {
        secondtimer.innerHTML--
        if (secondtimer.innerHTML === "0") {
            clearInterval(strat)
            if (input.value.toLocaleLowerCase() === theword.innerHTML.toLocaleLowerCase()) {
                input.value = ''
                curntword.innerHTML++
                theword.innerHTML = ""
                if (word.length > 0) {
                        generating()
                    } else {
                        resultText.innerHTML = "congratilations"
                        resultText.className = "good"
                        input.remove()
                        theAllword.remove()
                        localStorage.scor = `${curntword.innerHTML} Date : ${new Date()}`
                    }
                } else {
                    resultText.innerHTML = "Game Over"
                    resultText.className = "bad"
                    input.disabled = true
                    console.log("finshed")
                    localStorage.scor = `${curntword.innerHTML} Date : ${new Date()}`
                    
                }
            }
        }, 1000);
    }
    
export {
    massglvl,
    massgtime,
    button,
    theword,
    play,
    choes,
    input,
    option,
    theAllword,
    secondtimer,
    curntword,
    totalword,
    finsh,
    resultText,
    word
}

num.innerHTML = `[ ${option.length - 1} ]`
first.innerHTML = `[ ${option[1].innerHTML} ] and Time spend is : [ ${lvels.Easy} sec ]`
secound.innerHTML = `[ ${option[2].innerHTML} ] and Time spend is : [ ${lvels.Normal} sec ]`
third.innerHTML = `[ ${option[3].innerHTML} ] and Time spend is : [ ${lvels.Hard} sec]`
last.innerHTML = `[ ${option[4].innerHTML} ] and Time spend is : [ ${lvels.Mex} sec]`