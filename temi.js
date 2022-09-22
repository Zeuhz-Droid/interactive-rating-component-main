const btnRatings = document.querySelectorAll('.btn-rating');
const btnsContainer = document.querySelector('.btns-container');
const btnSubmit = document.querySelector('.btn-submit');
const selectedRating = document.querySelector('.selectedRating');
const cardGreet = document.querySelector('.card-greet');
const cardThankYou = document.querySelector('.card-thankyou');

let rating;

btnsContainer.addEventListener('click', pickRating);
btnSubmit.addEventListener('click', submitRating);

function pickRating(e) {
  if (e.target.classList.contains('btn-rating')) {
    rating = e.target.value;
    selectedRating.textContent = rating;
  }
}

function submitRating() {
  if (rating) {
    cardGreet.style.display = 'none';
    cardThankYou.style.display = 'flex';
  } else return;
}

// make it in such a way that only button 2 and 4 (even nos) return a value i.e get the value, and allows the user to submit, if you select/click button 1, 3 and 5, nothing should happen, the user shouldn't be able to submit(even though he as clicked a button which could be 1,3 or 5) and you should (console.log('I am not doing')) for each of the odd numbers clicked.

// [1, 2, 3, 4, 5]
// 2.) get value from event generated
