# Aantekeningen
In deze file maak ik aantekeningen over wat ik leer van javascript

## Handige JS Attributen
* innerHTML</br>
Past de inhoud van een html element aan.</br>
Voorbeeld code:</br>
`x = 5;
y = 6;
z = x + y;
document.getElementById("demo").innerHTML =
"The value of z is: " + z;`


## Variabelen
Handige notitie is dat je in javascript letters en cijfers kunt combineren en je deze niet hoeft aanteroepen met string maar ze gewoon in alle variabelen kunnen.
* **var**</br>
kan buiten een functie gebruikt worden, deze variabelen kunnen veranderd worden.</br>
* **let**</br>
De waarde van let kan veranderen, let blijft binnen de functie.
* **const**</br>
construct is voor variabelen die constant blijven, deze veranderen dus niet.</br>
Voorbeeld:</br>
Je kunt wel twee verchillende const variabelen bij elkaar optellen, maar je kunt niet zeggen const1= const2. Dit houdt in dat ze dus niet direct veranderd kunnen worden.

## Functies
* **sum**</br>
sum telt verschillende variabelen met elkaar op.</br>
Voorbeeld:
```
  function sum(a, b) {
  return a + b;
  }
let resultaat = sum(3, 5);
console.log(resultaat); 
//resultaat = 8
```
