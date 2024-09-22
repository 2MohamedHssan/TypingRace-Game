import * as All from "./selectors.js";

All.input.onpaste = function () {
    return false
}

All.button.disabled = true
All.input.disabled = true
All.button.onclick = _ => {
    All.button.remove()
    All.input.focus()
    generating()
    document.querySelector(".secondtimer").innerHTML = All.titletime + 2
}

export function generating() {
    let roundom = All.word[Math.floor(Math.random() * All.word.length)]
    let indexword = All.word.indexOf(roundom)
    All.theword.append(roundom)
    All.theAllword.innerHTML=""
    All.word.splice(indexword,1)
    for (let i = 0; i < All.word.length; i++){
        let div = document.createElement("div")
        let text = document.createTextNode(All.word[i])
        div.append(text)
        All.theAllword.append(div)
    }
    All.play()
}