// numbers
// maak nummers aan om hiermee te kunnen rekenen
let een = 0;
let twee = 0;

// icons
// maak de icons aan om hier de + en * in te kunnen doen zodat deze op het scherm worden weergegeven
let icon = "";


// booleans
// maak booleans aan zodat deze op true en false gezet worden, op die manier kan ik meegeven of iets * of + moet 
let math = false;
let plus = false;

// answer
// maak variabele answer zodat ik daar de uitkomst in kan stoppen om deze op het scherm te tonen, en de boolean zodat de rekenmachine weet wanneer er een antwoord is.
let answer;
let answerBoolean = false;

// het getal 1
// selecteer element (knop) cijfer doormiddal van css selector(class)
const cijfer = document.querySelector('.cijfer');
// voeg een eventListener toe aan het element cijfer. Ook wordt er een function toegekend. Je zegt dus eigenlijk voer de functie uit wanneer er op cijfer wordt geklikt door type click
cijfer.addEventListener('click', function () {
    // wanneer er op cijfer wordt geklikt tel je 1 op bij de variabele een
    een++;
    // wanneer twee gelijk is aan 0 wordt alleen de tekst met een + de icon vermeld
    if (twee === 0) {
        displayParagraph.innerText = een + " " + icon;
//Als dat niet zo is laat je een + icon + twee zien
    } else {
        displayParagraph.innerText = een + " " + icon + " " + twee
    }
    // console logs staan erbij zodat ik in het console kan checken of het goed gaat
    console.log(een);
});

// het getal 2
// select element
const cijferTwee = document.querySelector('.cijferTwee');
// add an eventlistener on click, in the brackets i tell what the button has to do when its clicked
cijferTwee.addEventListener('click', function () {
    //  wanneer er op de knop wordt geklikt wordt variabele 2 opgeteld met 2
    twee++;
    // wanneer een gelijk is aan 0 wordt alleen de tekst met twee + de icon vermeld
    if (een === 0) {
        displayParagraph.innerText = twee;
//Als dat niet zo is laat je een + icon + twee zien
    } else {
        displayParagraph.innerText = een + " " + icon + " " + twee;
    }
    console.log(twee);
});

// multiplier true
const multiply = document.querySelector('.multiply');
multiply.addEventListener('click', function () {
    // wanneer er op de knop multiply wordt geklikt wordt de variabele math true
    math = true;
    // als math op true staat wordt icon de string *
    if (math === true) {
        icon = "*";
    }
    console.log(math);
});

// plus true
const plusButton = document.querySelector('.plusButton');
// add an eventlistener on click, in the brackets i tell what the button has to do when its clicked
plusButton.addEventListener('click', function () {
    // wanneer er op de knop plusButton wordt geklikt wordt de variabele plus true
    plus = true;
    // als plus op true staat wordt icon de string +
    if (plus === true) {
        icon = "+";
    }
    console.log(plus);
});

// optel functie
function sum() {
    // geef de waarde van de variabelen een + twee terug
    return een + twee;
}


// answer
const equals = document.querySelector('.equals');
equals.addEventListener('click', function () {
    // als de variabele math op true staat wordt de variabele answer de uitkomst van een * twee
    if (math === true) {
        // anwer wordt een * twee
        answer = een * twee;
    }
    // als de variabele plus op true staat wordt de functie som aangeroepen met de variabele een en twee. Deze functie telt ze bij elkaar op
    if (plus === true) {
        // answer wordt de uitkomst van functie sum die een en twee bij elkaar optelt
        answer = sum(een, twee);
    }

    answerBoolean = true;
    // wanneer de answerboolean op true staat wordt het html element answerParagraph veranderd in een + icon + twee = antwoord
    if (answerBoolean === true) {
        displayParagraph.innerText = een + " " + icon + " " + twee + " " + "= " + answer;
    }

    console.log(answer);
});


// function multiplier () {
//     if (math === true){
//         let antwoord = een * twee;
//     }
// }