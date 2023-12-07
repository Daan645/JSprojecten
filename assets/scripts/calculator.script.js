// numbers
let een = 0;
let twee = 0;


// mathmetical booleans
let math = false;
let plus = false;

// answer
let answer;
let answerBoolean = false;

// het getal 1
// select element
const cijfer = document.querySelector('.cijfer');
// add an eventlistener on click, in the brackets i tell what the button has to do when its clicked
cijfer.addEventListener('click', function (){
    een++;
    console.log(een);
});

// het getal 2
// select element
const cijferTwee = document.querySelector('.cijferTwee');
// add an eventlistener on click, in the brackets i tell what the button has to do when its clicked
cijferTwee.addEventListener('click', function (){
   twee = twee + 2;
    
    console.log(twee);
});

// multiplier set on true
// select element
const multiply = document.querySelector('.multiply');
// add an eventlistener on click, in the brackets i tell what the button has to do when its clicked
multiply.addEventListener('click', function (){
    math = true;

    console.log(math);
});

// plus set on true
// select element
const plusButton = document.querySelector('.plusButton');
// add an eventlistener on click, in the brackets i tell what the button has to do when its clicked
plusButton.addEventListener('click', function (){
    plus = true;

    console.log(plus);
});
// optel functie
function sum() {
    return een + twee;
}


// answer
// select element
const equals = document.querySelector('.equals');
// add an eventlistener on click, in the brackets i tell what the button has to do when its clicked
equals.addEventListener('click', function (){
    if (math=== true) {
        answer = een * twee;
    }
    if (plus===true) {
        answer = sum(een,twee);
    }
    answerBoolean = true;
    if (answerBoolean===true) {
        answerparagraph.innerHTML = 'het antwoord is ' + answer;
    }

    console.log(answer);
});









function multiplier () {
    if (math === true){
        let antwoord = een * twee;
    }
}