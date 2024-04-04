const starWarsCharacters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 277,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    height: 167,
    mass: 75,
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
  },
  {
    name: 'R2-D2',
    height: 96,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
  },
  {
    name: 'Owen Lars',
    height: 178,
    mass: 120,
    hair_color: 'brown, grey',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '52BBY',
    gender: 'male',
  },
  {
    name: 'Beru Whitesun lars',
    height: 165,
    mass: 75,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '47BBY',
    gender: 'female',
  },
  {
    name: 'R5-D4',
    height: 97,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, red',
    eye_color: 'red',
    birth_year: 'unknown',
    gender: 'n/a',
  },
  {
    name: 'Biggs Darklighter',
    height: 183,
    mass: 84,
    hair_color: 'black',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '24BBY',
    gender: 'male',
  },
  {
    name: 'Obi-Wan Kenobi',
    height: 182,
    mass: 77,
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male',
  },
]

/* ESERCIZIO 1
  Crea una variabile chiamata "charactersNames" e assegnale un array vuoto
*/

//RISPOSTA ESERCIZIO 1
let charactersNames = [];
console.log(charactersNames);

/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "charactersNames" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
//RISPOSTA ESERCIZIO 2

for (let i = 0 ; i < starWarsCharacters.length ; i++){
  charactersNames.push(starWarsCharacters[i].name);
  
}
console.log(charactersNames);




/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/
//RISPOSTA ESERCIZIO 3
let femaleCharacters = [];

for ( let i = 0 ;  i < starWarsCharacters.length ; i++){
  if(starWarsCharacters[i].gender === 'female'){
    femaleCharacters.push(starWarsCharacters[i]);
  }
}
console.log(femaleCharacters);



/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/

//RISPOSTA ESERCIZIO 4 (tra apici perchè blue-gray ha il caratter speciale)
let eyeColor = {"blue": [],"yellow": [],"brown": [],"red": [],"blue-gray": []};


 
/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/

//RISPOSTA ESERCIZIO 5

for( let i = 0 ;  i < starWarsCharacters.length ; i++){
  switch(starWarsCharacters[i].eye_color){
    case "blue":
      eyeColor["blue"].push(starWarsCharacters[i]);
      break;
    case "yellow":  
      eyeColor["yellow"].push(starWarsCharacters[i]);
      break;
    case "brown":  
      eyeColor["brown"].push(starWarsCharacters[i]);
      break;  
    case "red":  
      eyeColor["red"].push(starWarsCharacters[i]);
      break;
    case "blue-gray":  
      eyeColor["blue-gray"].push(starWarsCharacters[i]);
      break;

  }

}

console.log(eyeColor);


/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/

let crewMass = 0;
let i = 0;
while(i < starWarsCharacters.length){
  crewMass += starWarsCharacters[i].mass  ;
  i++;
}
console.log(crewMass);



/* ESERCIZIO 7
  Crea uno if/else o uno switch statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 e inferiore a 700 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 e inferiore a 900 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 e inferiore a 1000 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.

  appunti per me:
uno switch statement di JavaScript non può direttamente gestire espressioni complesse come crewMass <= 500, crewMass > 500 && crewMass <= 700, ecc.

Quindi, per simulare la valutazione di queste condizioni, utilizzo switch(true) in modo che l'espressione nel case possa essere una qualsiasi condizione booleana, e ciascun caso verrà valutato in base alla verità o alla falsità di quella condizione.

In sostanza, si valuta ogni caso in base al valore booleano della condizione specificata, che può essere true o false in base al valore di crewMass. Questo ti consente di creare casi che eseguono codice in base alle varie condizioni che desideri controllare.


*/

//RISPOSTA 7
let messaggio = "";
switch(true){
  case crewMass <= 500 : 
       messaggio = "Ship is under loaded";
       break;
  case (crewMass > 500) && (crewMass <= 700) : 
       messaggio = "Ship is half loaded";
       break;
  case (crewMass > 700) && (crewMass <= 900) : 
       messaggio = "Warning: Load is over 700";
       break;
  case (crewMass > 900) && (crewMass <= 1000) : 
       messaggio = "Critical Load: Over 900";
       break;
  case crewMass > 1000 : 
       messaggio = "DANGER! OVERLOAD ALERT: escape from ship now!";
       break;     
}
console.log(messaggio);

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/

for(  let i = 0 ; i < starWarsCharacters.length ; i++){
  if(starWarsCharacters[i].gender === 'n/a'){
    starWarsCharacters[i].gender = 'robot';
  }
}
console.log(starWarsCharacters);

/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "charactersNames" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "charactersNames" prima e dopo l'operazione.
*/

/*NON me lo fa, devo capire perchè
console.log(charactersNames.length);

for ( let i = 0 ; i < charactersNames.length ; i ++){
  if ( femaleCharacters.includes(charactersNames[i])){
      charactersNames.splice(i);
    
  }
}
console.log(charactersNames.length);*/




/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*///fare random di un numero intero

let indiceRandom = Math.floor(Math.random() * starWarsCharacters.length);
  
let personaggioCasuale = starWarsCharacters[indiceRandom];

let htmlString = `
  <h2>Hai selezionato casualmente il personaggio ${personaggioCasuale.name}.</h2>
  <p>Ecco alcune informazioni su di lui/lei:</p>
  <ul>
    <li>Altezza: ${personaggioCasuale.height} cm</li>
    <li>Massa: ${personaggioCasuale.mass} kg</li>
    <li>Colore dei capelli: ${personaggioCasuale.hair_color}</li>
    <li>Colore della pelle: ${personaggioCasuale.skin_color}</li>
    <li>Colore degli occhi: ${personaggioCasuale.eye_color}</li>
    <li>Anno di nascita: ${personaggioCasuale.birth_year}</li>
    <li>Genere: ${personaggioCasuale.gender}</li>
  </ul>
`;

// Assegna la stringa HTML all'elemento container
document.getElementById("risposta").innerHTML = htmlString;




