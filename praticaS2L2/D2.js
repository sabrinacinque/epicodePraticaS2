/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* RISPOSTA 1*/
   let a = 10;
   let b = 5;
   
   if(a > b){
    document.getElementById("risposta1").innerHTML= "il numero " + a + " è maggiore del numero " + b;
   }else if (a < b){
    document.getElementById("risposta1").innerHTML=  "il numero " + a + " è minore del numero " + b;
   }else{
    document.getElementById("risposta1").innerHTML= "i due numeri sono uguali";
   }





/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* RISPOSTA 2 */
  let c = 15;
  if( c!== 5){
    document.getElementById("risposta2").innerHTML = "Not equal";
  }






/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* RISPOSTA 3 */
let d = 15;
if(d % 5 == 0){
  document.getElementById("risposta3").innerHTML = "Il numero " + d + " è divisibile per 5";
}else{
  document.getElementById("risposta3").innerHTML = "Il numero " + d + " non è divisibile per 5";
}




/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* RISPOSTA 4*/

let e = 12;
let f = 4;

if ( (e === 8) || (f ===8) || ( (e + f) ===8) || ((e - f) === 8 )){
  document.getElementById("risposta4").innerHTML  = "Uno dei due numeri è 8 oppure la loro differenza o sottrazione è 8";
}else{
  document.getElementById("risposta4").innerHTML  = "Nessuno dei due numeri è 8 e nè la loro somma nè la loro differenza è 8";
}





/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* RISPOSTA 5 */

let totalShoppingCart = 47;
let spedizione = 10;

if(totalShoppingCart > 50){
   document.getElementById("risposta5").innerHTML = "Complimenti! hai superato i 50 euro quindi la tua spedizione è gratuita. Il totale del tuo carrello resta " + totalShoppingCart + " euro."
}else{
  document.getElementById("risposta5").innerHTML = "Al tuo carrello vanno aggiunte le spese di spedizione.<br>Il tuo carrello è di " + totalShoppingCart + " euro. La spedizione costa " + spedizione + 
                                                    " euro. Quindi il costo totale del tuo carrello sarà : " + (totalShoppingCart+spedizione) + " euro";
}





/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* RISPOSTA 6 */
let totalShoppingCartScontato = totalShoppingCart * 0.8;

if(totalShoppingCartScontato > 50){
   document.getElementById("risposta6").innerHTML = "Complimenti!Hai superato i 50 euro quindi hai diritto alla spedizione gratuita.Il totale del tuo carrello al netto dello sconto del 20% per il black Friday è " + totalShoppingCartScontato + "euro" ;
}else{
  document.getElementById("risposta6").innerHTML =  "Al tuo carrello vanno aggiunte le spese di spedizione.<br>.Il tuo carrello è di " + totalShoppingCartScontato + " euro. La spedizione costa " + 
                                                   spedizione + " euro.Il totale del tuo carrello sarà quindi " + (totalShoppingCartScontato + spedizione ) + " euro";
}




/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* RISPOSTA 7 */
 let x = 15;
 let y = 1;
 let z = 20;

 if((x > y) && ( x > z)){
    if( y > z){
      document.getElementById("risposta7").innerHTML = " i numeri dal più grande al più piccolo sono così disposti " + x + ", " + y + " , " + z;
    }else{
      document.getElementById("risposta7").innerHTML = " i numeri dal più grande al più piccolo sono così disposti " + x + ", " + z + " , " + y;
  }
 }else if((y > z) && ( y > x)){
    if( x > z ){
      document.getElementById("risposta7").innerHTML = " i numeri dal più grande al più piccolo sono così disposti " + y + " , " + x + " , " + z;
    }else{
      document.getElementById("risposta7").innerHTML = " i numeri dal più grande al più piccolo sono così disposti " + y + " , " + z + " , " + x;
    }

 }else if ((z > x) && (z > y)){
    if( x > y){
      document.getElementById("risposta7").innerHTML = " i numeri dal più grande al più piccolo sono così disposti " + z + " , " + x + " ," + y;
    }else{
      document.getElementById("risposta7").innerHTML = " i numeri dal più grande al più piccolo sono così disposti " + z + " , " + y + " ," + x;
    }
 }





/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/*RISPOSTA 8 */

let valoreFornito = "10";
let tipoValore = typeof valoreFornito;
console.log(typeof valoreFornito); 

if(tipoValore == "number"){
  document.getElementById("risposta8").innerHTML = "il valore fornito è un valore numerico";
}else{
  document.getElementById("risposta8").innerHTML = "il valore fornito non è un valore numerico";
}




/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* RISPOSTA 9 */
 let numeroFornito = 52;

 if( numeroFornito % 2 == 0){
  document.getElementById("risposta9").innerHTML = "Il numero " + numeroFornito + " è un numero pari";
 }else if ( numeroFornito % 2 == 1){
  document.getElementById("risposta9").innerHTML = "Il numero " + numeroFornito + " è un numero dispari";
 }else{
  document.getElementById("risposta9").innerHTML = "Il valore fornito " + numeroFornito + " è un numero negativo oppure non è un numero";
 }



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* RISPOSTA 10 */

let val = 6
if ( ( val >= 5) && (val < 10) ) {
    console.log("Meno di 10");
    document.getElementById("risposta10").innerHTML = "Meno di 10";
  } else if (val < 5) {
    console.log("Meno di 5");
    document.getElementById("risposta10").innerHTML = "Meno di 5";
  } else {
    console.log("Uguale a 10 o maggiore");
    document.getElementById("risposta10").innerHTML = "Uguale a 10 o maggiore";
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* RISPOSTA 11*/
 me.city = "Toronto";//dentro all'oggetto che si chiama me, gli metto una chiave city con un valore "Toronto";
 console.log(me);//il console.log mi stamperà {name: 'John', lastName: 'Doe', skills: Array(3), city: 'Toronto'}
 //stampandolo su html diventa
 document.getElementById("risposta11").innerHTML= JSON.stringify(me); //per visualizzare un ooggetto sull'html bisogna usare questa sintassi




/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* RISPOSTA 12 */
 delete me.lastName;
 console.log(me); //ora dentro l'oggetto , non configurerà più la proprietà lastName
                  //il console.log mi stamperà {name: 'John', skills: Array(3), city: 'Toronto'}
  //stampandolo sull'html viene:
  document.getElementById("risposta12").innerHTML= JSON.stringify(me);




/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* RISPOSTA 13*/
//dato che skills è un array dentro l'oggetto me, per rimuovere l'ultimo elemento di un array si usa la proprietà pop();
 me.skills.pop();
 console.log(me); //ora il console log mi stamperà che ci sono due elementi nell'array {name: 'John', skills: Array(2), city: 'Toronto'}
 //se lo voglio vedere sull'html sarà
 document.getElementById("risposta13").innerHTML= JSON.stringify(me);





/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* RISPOSTA 14 */

//il modo più corretto da fare è con il for...
 let arrayVuoto = [];
 for (let i = 1 ; i <= 10; i++){
  arrayVuoto.push(i);
 }
 console.log(arrayVuoto);
 
 //volendo fare uno ad uno possiamo fare così:
 let arrayVuoto2 = [];
 /* si pu fare uno alla volta 
 arrayVuoto2.push(1);
 arrayVuoto2.push(2);
 arrayVuoto2.push(3);
 arrayVuoto2.push(4);
 arrayVuoto2.push(5);
 arrayVuoto2.push(6);
 arrayVuoto2.push(7);
 arrayVuoto2.push(8);
 arrayVuoto2.push(9);
 arrayVuoto2.push(10);*/
 arrayVuoto2.push(1,2,3,4,5,6,7,8,9,10); //più velocemente così (anche se il modo più corretto a mio avviso è con il for)

 console.log(arrayVuoto2);

 //se lo vogliamo vedere sull'html
 document.getElementById("risposta14").innerHTML = arrayVuoto2;





/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* RISPOSTA 15 */
arrayVuoto2[9] = 100;//do un nuovo valore all'ultima posizione dell'array(essendo un array di 10, l'ultima posizione sarà la 9, e gli metto il valore 100)
console.log(arrayVuoto2);
//se lo voglio vedere sull'html sarà:
document.getElementById("risposta15").innerHTML = arrayVuoto2;