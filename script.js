let body = document.querySelector('body');
let [computer_score,user_score]=[0,0];
let result_ref = document.getElementById("result");
let choices_object = {
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose'
    },
    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win'
    },
    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw'
    }

}



var numberOfDrumButton = document.querySelectorAll(".click").length;
for (var i = 0 ; i<numberOfDrumButton; i++){
    document.querySelectorAll(".click")[i].addEventListener("click", function() {
       
        var key = this.textContent;
        console.log(key);
        checker(key);
        buttonAnimation(key)
        
});
}

//? When you lose this function get sound
function playSound(name){
    var audio = new Audio(name+".mp3");
    audio.play();

}

//? To check your choice and get result
function checker(input){
    var choices = ["rock", "paper", "scissor"];
    var num = Math.floor(Math.random()*3);

    document.getElementById("comp_choice").innerHTML = 
    ` Computer choose <span> ${choices[num].toUpperCase()} </span>`;

    document.getElementById("user_choice").innerHTML = 
    ` You choose <span> ${input.toUpperCase()} </span>`;

    let computer_choice = choices[num];

    // console.log(choices_object[input][computer_choice])
    switch(choices_object[input][computer_choice]){
        case 'win':
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = "YOU WIN";
            user_score++;
            break;
        case 'lose':
            playSound("wrong");
            body.style.background = "red"
            setTimeout(function(){
            body.style.background = "linear-gradient(135deg,#e0a9e6,#3e0894)"
            },200);
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "YOU LOSE";
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "DRAW";
            break;
    }

    document.getElementById("computer_score").textContent = computer_score;
    document.getElementById("user_score").textContent = user_score;
}

//? To get animation for button
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);



}

