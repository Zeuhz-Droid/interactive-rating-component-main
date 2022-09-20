const btnRatings = document.querySelectorAll('.btn-rating');
const btnSubmit = document.querySelector('.btn-submit');
const selectedRating = document.querySelector('.selectedRating');
const cardGreet = document.querySelector('.card-greet');
const cardThankYou = document.querySelector('.card-thankyou');

let rating;

for (const btn of btnRatings) {
  btn.addEventListener('click', (e) => {
    rating = e.target.value;
    selectedRating.textContent = rating;
  });
}

btnSubmit.addEventListener('click', () => {
  if (rating) {
    cardGreet.style.display = 'none';
    cardThankYou.style.display = 'flex';
  } else return;
});
