/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.*/

 /*RISPOSTA 1:
 In javascript, abbiamo diversi tipi di dati. Possiamo fare la distinzione tra primitivi e complessi.
 Tra i tipi di dati primitivi, possiamo avere 5 diversi tipi:
 1)Tipo di dato stringa: è una sequenza di caratteri delineati tra apici(che siano singoli o doppi,l'importante è che apertura e chiusura di apici siano uguali).
   es. let stringa = "questa qui è una stringa";

 2)Tipo di dato numerico: va scritto senza apici. 
   es. let numero = 3;
   in questo caso stiamo dicendo che alla variabile che si chiama numero è stato assegnato il valore 3 .
   che sia un numero decimale,negativo o intero, si dichiara sempre alla stessa maniera.

 3)Tipo di dato booleano: va scritto senza apici e riconosce solo due valori:true oppure false.  
   es. let varBooleana = true;
 
 4)tipo di dato null : prevede un solo tipo di valore possibile,ovvero null.
   es. let a = null;
   Questo tipo di dato indica l'assenza di un valore. Viene utilizzato quando si intende indicare che una variabile non ha un valore definito. 

 5)tipo di dato undefined : rappresenta un valore che non esiste (ancora);
   es. let esempio ;
   qui sto dicendo che ho instanziato una variabile di nome esempio, alla quale non ho assegnato al momento nessun valore.
   se quindi mi vado a fare la stampa di questa variabile:
   console.log(esempio); ---->l' output atteso sarà: undefined
*/





/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

 /*RISPOSTA 2:
 const myName = "Sabrina";
*/






/*ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/*
 RISPOSTA 3:
 posso fare in due modi volendo:

 -primo modo:
 let a = 12;
 let b = 20;

 console.log(a+b); --->output atteso 32

 secondo modo:
 let a = 12;
 let b = 20;
 let somma = a+b;

 console.log(somma); ---->output atteso sempre 32       */






/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.*/

 /*
 RISPOSTA 4:

 let x = 12;
*/



/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/*
  RISPOSTA 5:

  avendo sopra dichiarato la variabile:
  const myName = "Sabrina";
  se vado a fare console.log(myName); l'output atteso sarà Sabrina.

  volendo fare una riassegnazione,ovvero:

  myName = "Cinque";

  avendo dichiarato sopra la variabile come const,ovvero costante,non sovrascrivibile,nel momento in cui voglio 
  andare a fare la riassegnazione e stamparmi la console:
  console.log(myName); ------> output atteso sulla riassegnazione :Uncaught TypeError: Assignment to constant variable.


*/



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).*/


 /*RISPOSTA 6:
  data la variabile sopra dichiarata,ovvero let x = 12;
  per vedere la differenza tra il numero 4 e la variabile , possiamo fare in due modi:

  modo 1:
  console.log(4-x); ---->output atteso -8 ;(anche il contrario volendo ,dato che non è specificato quale mettere prima ,quindi potrebbe anche essere  console.log(x-4);)

  modo 2:
  let differenza = 4-x; (oppure let differenza = x-4;)
  e andiamo a stampare direttamente la variabile differenza
  console.log(differenza);

*/



/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).*/

 /*
 RISPOSTA 7:
 let name1 = "jhon";
 let name2 = "Jhon";
 
 console.log(name1==name2); ---->in questo primo caso ,l'output atteso sarà false,in quando NON E' VERO che name1 sia uguale a name2,in quanto una inizia con la j minuscola e una con la J maiuscola;
 console.log(name1!=name2);--->in questo secondo caso,l'output atteso sarà true, perchè è vero che name1 è diverso da name2;

 per le stringhe,abbiamo diversi metodi da applicare, tra cui toLowerCase() e toUpperCase().
 toLowerCase()trasforma la stringa in caratteri tutti minuscoli, toUpperCase() trasforma la stringa in caratteri tutti maiuscoli.
 

 quindi se io riscrivessi:
  console.log(name1==name2.toLowerCase()); oppure console.log(name1===name2.toLowerCase()); --->l'output atteso questa volta sarà true ,perchè name2 sarà stato trasformato tutto in minuscolo e quindi sarà uguale a name1.

  se vogliamo citare anche il toUpperCase,possiamo fare così per rendere le due variabili uguali:
  console.log(name1.toUpperCase === name2.toUpperCase); --->output atteso sempre true,in quanto le due stringhe sono state trasformate tutte in caratteri maiuscoli quindi l'uguaglianza è verificata

*/






