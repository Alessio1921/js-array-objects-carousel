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
  <img src="${photo[i]['image']}" class="opacity-50" id="${photo[i]['name']}-thumb" alt="${photo[i]['name']}"></img>`
  document.querySelector(".my-carousel-images").innerHTML+=`
  <div class="position-absolute text-img d-none" id="${photo[i]['name']}-text"> 
    ${photo[i]['name']}<br>
    ${photo[i]['text']}
  </div>`
}
document.getElementById("my-after-carousel").innerHTML+=`
<button class="btn btn-primary" id="reverse">Inverti</button>
`
document.getElementById("Milano").classList.remove("d-none");
document.getElementById("Milano-thumb").classList.remove("opacity-50");
document.getElementById("Milano-text").classList.remove("d-none");


const prev=document.querySelector(".my-prev-hook");
const next=document.querySelector(".my-next-hook");
const reverse=document.getElementById("reverse");

let counter=0;
let towards=next;

// added functionality to the next button
next.addEventListener('click', function () {
  counter=nextFunc(photo,counter);
})
// added functionality to the prev button
prev.addEventListener('click', function () {
  counter=prevFunc(photo,counter)
})
reverse.addEventListener('click',function(){
  towards=prev;
})
// to simulate the click
setInterval(()=>{towards.click()},5000);

function nextFunc(photoTemporary, counterTemporary){
  if (counterTemporary==photoTemporary.length-1) {
    counterTemporary=photoTemporary.length-1;
    addClass(photoTemporary, counterTemporary);
    counterTemporary=0;
    removeClass(photoTemporary,counterTemporary);
  }
  else{
    addClass(photoTemporary, counterTemporary);
    counterTemporary++;
    removeClass(photoTemporary,counterTemporary);
  }
  return counterTemporary;
}

function prevFunc(photoTemporary, counterTemporary){
  if (counterTemporary==0) {
    counterTemporary=0;
    addClass(photoTemporary, counterTemporary);
    counterTemporary=photoTemporary.length-1;
    removeClass(photoTemporary,counterTemporary);
  }
  else{
    addClass(photoTemporary, counterTemporary);
    counterTemporary--;
    removeClass(photoTemporary,counterTemporary);
  }
  return counterTemporary;
}

// function to add classes
function addClass(photoTemp, counterTemp){
  document.getElementById(photoTemp[counterTemp]['name']).classList.add("d-none");
  document.getElementById(`${photoTemp[counterTemp]['name']}-thumb`).classList.add("opacity-50");
  document.getElementById(`${photoTemp[counterTemp]['name']}-text`).classList.add("d-none");
}
// function to remove classes
function removeClass(photoTemp, counterTemp){
  document.getElementById(photoTemp[counterTemp]['name']).classList.remove("d-none");
  document.getElementById(`${photoTemp[counterTemp]['name']}-thumb`).classList.remove("opacity-50");
  document.getElementById(`${photoTemp[counterTemp]['name']}-text`).classList.remove("d-none");
}