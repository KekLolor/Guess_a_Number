const input = document.querySelector("input"),
    guess = document.querySelector(".guess"),
    checkbutton = document.querySelector("button"),
    remainChances = document.querySelector(".chances");

input.focus();

let randomNum = Math.floor(Math.random() * 100);
chance = 10;
checkbutton.addEventListener("click", ()=> {
    chance--;
    let inputValue = input.value;

    if(inputValue == randomNum){
        [guess.textContent, input.disabled] = ["Congratulations!", true];
        [checkbutton.textContent, guess.stylr.color] = ["Replay", "#ff9090"];
    } else if(inputValue > randomNum && inputValue < 100){
        [guess.textContent, remainChances.textContent] = ["You number is too high", chance];
        guess.style.color ="#333"
    } else if(inputValue < randomNum && inputValue > 0){
        [guess.textContent, remainChances.textContent] = ["Your number is too  low", chance];
        guess.style.color ="#333"
    } else {
        [guess.textContent, remainChances.textContent] = ["Please, write number again", chance];
        guess.style.color ="#ff0000"
    }

    if(chance == 0){
        [checkbutton.textContent, input.disabled, inputValue] = ["Replay", true, ""];
        [guess.textContent, remainChances.textContent] = ["You lose", "#ff0000"];
    }
    if (chance < 0){
        window.location.reload();
    }
})
