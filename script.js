const btnPrev = document.getElementById('btnprev');
const btnNext = document.getElementById('btnnext');
const { body } = document;


alert('connected');

btnPrev.addEventListener('click', e => {
  e.preventDefault;
  body.classList.remove('second');
  body.classList.add('first');
})

btnNext.addEventListener('click', e => {
  e.preventDefault;
  body.classList.remove('first');
  body.classList.add('second');
})