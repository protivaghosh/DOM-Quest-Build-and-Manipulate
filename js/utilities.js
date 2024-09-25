const donateBtn = document.getElementById('btn-donate');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

donateBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});


// -----------------------------
const donate = document.getElementById('donate-button');
const modalAdd = document.getElementById('modal');
const close = document.getElementById('closeBtn');

donate.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

close.addEventListener('click', () => {
  modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modalAdd.classList.add('hidden');
  }
});

// -----------------------
const buttonDonate = document.getElementById('donate-now');
const addModal = document.getElementById('modal');
const buttonClose = document.getElementById('closeBtn');

buttonDonate.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

buttonClose.addEventListener('click', () => {
  modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    addModal.classList.add('hidden');
  }
});