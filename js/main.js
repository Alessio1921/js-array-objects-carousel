/**
 *
 *
 *
Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto oggi insieme a lezione, che troverete direttamente nella mia repository di github a questo link: [link github]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?

 *
 */

const photo=[
  {
    name: "Milano",
    image:"img/Milano.jpg",
  },
  {
    name: "NewYork",
    image:"img/NewYork.jpg",
  },
  {
    name: "Amsterdam",
    image:"img/Amsterdam.jpg",
  },
  {
    name: "London",
    image:"img/London.jpg",
  },
  {
    name: "Madrid",
    image:"img/Madrid.jpg",
  },
];

for (let i = 0; i < photo.length; i++) {
  document.querySelector(".my-carousel-images").innerHTML+=`
  <img src="${photo[i]['image']}" class=" d-none" id="${photo[i]['name']}" alt="${photo[i]['name']}"></img>`
  document.querySelector(".my-thumbnails").innerHTML+=`
  <img src="${photo[i]['image']}" class="opacity-75" id="${photo[i]['name']}-thumb" alt="${photo[i]['name']}"></img>`
  
}
document.getElementById("Milano").classList.remove("d-none");
document.getElementById("Milano-thumb").classList.remove("opacity-75")

