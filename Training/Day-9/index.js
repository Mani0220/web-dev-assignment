let Value = Math.floor(1 + Math.random() * 20); // Range is something b/w 1 & 20
let attemps = 1;
function guess(){
    const guessedNumber = document.getElementById("number").value;
    const Content = document.getElementById("Content");
    if(guessedNumber == Value){
        Content.innerText = `Congrats! You have guessed it right after ${attemps} time!!`;
        Content.style.color = "green";
        Content.style.fontWeight = 600;
    }
    else if(guessedNumber > Value){
        attemps++

        Content.innerText = "Sorry, Your guess is too high!";
        Content.style.color = "red";
        Content.style.fontWeight = 600;
    }
    else{
        attemps++;
        Content.innerText = "Sorry, Your guess is too low!";
        Content.style.color = "red";
        Content.style.fontWeight = 600;
    }
}