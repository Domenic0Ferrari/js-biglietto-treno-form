/*
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/



/*
chiedere nome del passeggero e inserirlo nella costante 'name'
chiedere numero kilometri e metterli nella costante 'distanza'
chiedere l'età e metterla nella costante 'età'

basePrice = distance * 0.21

SE (age < 18)
	discountPercent = 20
ALTRIMENTI SE (age > 65)
	discountPercent = 40
ALTRIMENTI
	discountPercent = 0
FINE SE

discount = prezzoBase * discountPercent / 100

finalPrice = basePrice - discount

formattare finalPrice a due cifre decimali con .toFixed(2)
*/

const btnGenera = document.getElementById("genera");

btnGenera.addEventListener("click" , function(){

        let distanza = document.getElementById("distance").value;
        console.log("Km da percorrere:", distanza);

        let età = document.getElementById("age").value;
        console.log("Età:", età);
    
        let priceKm = 0.21;
        let basePrice = (distanza * priceKm).toFixed(2);
        console.log(basePrice);

        const scontoVenti = (basePrice - (basePrice / 100 * 20)).toFixed(2);

        console.log(scontoVenti);

        const scontoQuaranta = (basePrice - (basePrice / 100 * 40)).toFixed(2);

        console.log(scontoQuaranta);

        if (età < 18){
        document.getElementById("price").innerHTML = scontoVenti;
        } else if (userAge > 65){
        document.getElementById("price").innerHTML = scontoQuaranta;
        } else{
        document.getElementById("price").innerHTML = basePrice;
        }
})

// let distanza = document.getElementById('distance');
// let età = document.getElementById('age');

// let priceKm = 0.21;
// let basePrice = (distanza * priceKm);

// let discountChildren = 20;
// let discountSenior = 40;
// let discountPercent = 0;

// if (età < 18) {
// 	discountPercent = discountChildren;
// } else if (age > 65) {
// 	discountPercent = discountSenior;
// }

// let discount = basePrice * discountPercent / 100;
// let finalPrice = basePrice - discount;
// console.log(finalPrice);
