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
    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: "NewYork",
    image:"img/NewYork.jpg",
    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: "Amsterdam",
    image:"img/Amsterdam.jpg",
    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: "London",
    image:"img/London.jpg",
    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    name: "Madrid",
    image:"img/Madrid.jpg",
    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
];

for (let i = 0; i < photo.length; i++) {
  document.querySelector(".my-carousel-images").innerHTML+=`
  <img src="${photo[i]['image']}" class=" position-relative d-none" id="${photo[i]['name']}" alt="${photo[i]['name']}"></img>`
  document.querySelector(".my-thumbnails").innerHTML+=`
  <img src="${photo[i]['image']}" class="opacity-75" id="${photo[i]['name']}-thumb" alt="${photo[i]['name']}"></img>`
  document.querySelector(".my-carousel-images").innerHTML+=`
  <div class="position-absolute text-img d-none" id="${photo[i]['name']}-text"> 
    ${photo[i]['name']}<br>
    ${photo[i]['text']}
  </div>`
}
document.getElementById("Milano").classList.remove("d-none");
document.getElementById("Milano-thumb").classList.remove("opacity-75");
document.getElementById("Milano-text").classList.remove("d-none");


const prev=document.querySelector(".my-prev-hook");
const next=document.querySelector(".my-next-hook");
console.log(prev);
console.log(next);

let counter=0;
next.addEventListener('click', function () {
  if (counter==photo.length-1) {
    counter=photo.length-1;
    addClass(photo, counter);
    counter=0;
    removeClass(photo,counter);
  }
  else{
    addClass(photo, counter);
    counter++;
    removeClass(photo,counter);
  }
})
prev.addEventListener('click', function () {
  if (counter==0) {
    counter=0;
    addClass(photo, counter);
    counter=photo.length-1;
    removeClass(photo,counter);
  }
  else{
    addClass(photo, counter);
    counter--;
    removeClass(photo,counter);
  }
})

function addClass(photoTemp, counterTemp){
  document.getElementById(photoTemp[counterTemp]['name']).classList.add("d-none");
  document.getElementById(`${photoTemp[counterTemp]['name']}-thumb`).classList.add("opacity-75");
  document.getElementById(`${photoTemp[counterTemp]['name']}-text`).classList.add("d-none");
}
function removeClass(photoTemp, counterTemp){
  document.getElementById(photoTemp[counterTemp]['name']).classList.remove("d-none");
  document.getElementById(`${photoTemp[counterTemp]['name']}-thumb`).classList.remove("opacity-75");
  document.getElementById(`${photoTemp[counterTemp]['name']}-text`).classList.remove("d-none");
}
