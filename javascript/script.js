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
        
        // Variabili
        let nome = document.getElementById("name").value;
        console.log("Il tuo nome è:" , nome);

        let distanza = document.getElementById("distance").value;
        console.log("Km da percorrere:", distanza);

        let età = document.getElementById("age").value;
        console.log("Età:", età);
    
        //calcolo prezzo
        let prezzo = (distanza * 0.21);
        let sconto;
        let tipoOfferta;

        // calcolo sconto per età
        if (età == "minorenne") {
                sconto = ((prezzo * 20) / 100); 
                tipoOfferta = "Offerta Minorenni";
            } else if (età =="over65") {
                sconto = ((prezzo * 40) / 100);
                tipoOfferta = "Offerta Over 65";
            } else {
                sconto = 0;
                tipoOfferta = "Nessuna offerta";
            }

        let prezzoFinale=(prezzo - sconto).toFixed(2);

        //carrozza
        let carrozza = Math.floor(Math.random() * 10) + 1;
        //codice cp
        function randomNumber(min, max) {
                return Math.floor(Math.random() * (max - min) ) + min;
        }
        let codice = randomNumber(90000, 100000)
            
        //generazione dati sulla pagina
        document.getElementById("dato_nome_utente").innerHTML = nome;
        document.getElementById("carrozza").innerHTML = carrozza;
        document.getElementById("codice").innerHTML = codice;
        document.getElementById("costo").innerHTML = prezzoFinale + "€";
})

 //click su annulla
 let btnAnnulla = document.getElementById("annulla");
 btnAnnulla.addEventListener("click" , function(){
     //dati biglietto
//      document.getElementById("carrozza").innerHTML = "";
//      document.getElementById("codice").innerHTML = "";
//      document.getElementById("dato_nome_utente").innerHTML = "";
//      document.getElementById("offerta").innerHTML = "";
//      document.getElementById("costo").innerHTML = "";
     //dati utente
     document.getElementById("name").value = "";
     document.getElementById("distance").value = "";
     document.getElementById("age").value = "";
 })
