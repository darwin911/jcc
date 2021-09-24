const cards = document.querySelectorAll('.card');
const cardContent = document.getElementsByClassName('card-content');
let currentCardContent;

const hide = () => currentCardContent.classList.add('is-hidden');
const show = () => currentCardContent.classList.remove('is-hidden');

const toggle = e => {
  currentCardContent = e.currentTarget.children[0].children[1];
  if (window.innerWidth < 768 || window.innerHeight < 400) {
    if (currentCardContent.classList.contains('is-hidden')) {
      show();
    } else {
      hide();
    }
  }
}

const hideCardText = () => {
  // if browser width is less than 415px
  if (window.innerWidth < 415) {
    for (let i = 0; i < cards.length; i++) {
      // add hide class to the content of the clicked card
      cardContent[i].classList.add('is-hidden');
    }
  }
}

hideCardText();

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', toggle);
};
