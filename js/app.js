const cards = document.querySelectorAll(".card");
const cardContent = document.getElementsByClassName("card-content");
let currentCardContent;

const hide = () => currentCardContent.classList.add("is-hidden");
const show = () => currentCardContent.classList.remove("is-hidden");

const toggle = (e) => {
  currentCardContent = e.currentTarget.children[0].children[1];
  if (window.innerWidth < 768 || window.innerHeight < 400) {
    if (currentCardContent.classList.contains("is-hidden")) {
      show();
    } else {
      hide();
    }
  }
};

const hideCardText = () => {
  // if browser width is less than 415px
  if (window.innerWidth < 415) {
    for (let i = 0; i < cards.length; i++) {
      // add hide class to the content of the clicked card
      cardContent[i].classList.add("is-hidden");
    }
  }
};

hideCardText();

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", toggle);
}

// GRID FUNCTIONS

function imagenClickeada(id) {
  alert("Clickeaste la imagen con ID: " + id);
  // Aquí puedes agregar la lógica que desees cuando se haga clic en la imagen con el ID específico
}

// Crear el grid con imágenes
// const gridContainer = document.get('grid');

// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     const cell = document.createElement('div');
//     const image = document.createElement('img');
//     const cellId = i * 10 + (j + 1);
//     image.src = 'https://via.placeholder.com/50x50';
//     image.alt = 'Imagen';
//     cell.appendChild(image);
//     cell.classList.add('grid-item');
//     cell.onclick = function() {
//       imagenClickeada(cellId);
//     };
//     gridContainer.appendChild(cell);
//   }
// }
