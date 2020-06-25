const btnPrev = document.getElementById('btnprev');
const btnNext = document.getElementById('btnnext');
const { body } = document;

// Button to go back to the previous image
btnPrev.addEventListener('click', e => {
  e.preventDefault;
  body.classList.remove('second');
  body.classList.add('first');
})

// btnPrev.addEventListener('mouseover' e => {
//   e.preventDefault;
//   btnPrev.autofocus;
// })

// Button to go to the next image: adding difference classes to get animation for the transition
btnNext.addEventListener('click', e => {
  e.preventDefault;
  body.classList.remove('first');
  body.classList.add('second');
})