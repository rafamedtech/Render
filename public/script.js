const open_btn = document.querySelector('.open-btn');
const nav_close_btn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');
const links = document.querySelectorAll('.list li a');
const submitForm = document.querySelector('#send-message');
const modal = document.querySelector('#modal');
const formName = document.getElementById('name');
const formEmail = document.getElementById('email');
const formPhone = document.getElementById('phone');
const formMessage = document.getElementById('comment');
const formError = document.getElementById('formError');
const inputs = document.querySelectorAll('.input-validation');
const invalidEmail = document.querySelector('.invalid-email');
const invalidPhone = document.querySelector('.invalid-phone');

const scriptURL =
  'https://script.google.com/macros/s/AKfycbxZBDBlx1_NR_u1daUZyw6LaFmuIA0sjlU9WYYOizKKlnGvA8xWcfsAbrkbVSqNSpTB5Q/exec';
const form = document.forms['google-sheet'];

const openNav = () => {
  nav.forEach((nav_el) => {
    nav_el.style.transform = 'translateX(0)';
  });
};

const closeNav = () => {
  nav.forEach((nav_el) => {
    nav_el.style.transform = 'translateX(400%)';
    open_btn.style.opacity = 1;
  });
};

open_btn.addEventListener('click', openNav);
nav_close_btn.addEventListener('click', closeNav);

if (document.documentElement.clientWidth < 768) {
  links.forEach((link) => {
    link.addEventListener('click', closeNav);
  });
}

//Modal message
form.addEventListener('submit', (e) => {
  e.preventDefault();

  emailValidation();
  phoneValidation();

  inputs.forEach((input) => {
    if (input.value === '' || input.value == null) {
      formError.innerText = 'Favor de llenar todos los campos';
      return false;
    } else {
      console.log('si funciono');
      input.classList.add('success');
      return true;
    }
  });

  if (
    formName.classList.contains('success') &&
    formEmail.classList.contains('success') &&
    formPhone.classList.contains('success') &&
    formMessage.classList.contains('success')
  ) {
    console.log('esto tambien funciono');
    modal.classList.remove('hidden-modal');
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => location.assign('/index.html'))
      .catch((error) => console.error('Error!', error.message));
  }
});

function emailValidation() {
  const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
  const regexo = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;

  if (regex.test(formEmail.value) || regexo.test(formEmail.value)) {
    invalidEmail.innerText = '';
  } else {
    invalidEmail.innerText = 'Email inválido';
    invalidEmail.classList.add('text-red-500');
    formEmail.value = '';
    return false;
  }
}

function phoneValidation() {
  const regexn = /^[0-9]{10}$/;

  if (regexn.test(formPhone.value)) {
    invalidPhone.innerText = '';
  } else {
    invalidPhone.innerText = 'Teléfono inválido';
    invalidPhone.classList.add('text-red-500');
    formPhone.value = '';
    return false;
  }
}

// Send form to Google Sheets
// const scriptURL =
//   'https://script.google.com/macros/s/AKfycbxZBDBlx1_NR_u1daUZyw6LaFmuIA0sjlU9WYYOizKKlnGvA8xWcfsAbrkbVSqNSpTB5Q/exec';
// const form = document.forms['google-sheet'];

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//     .then((response) => location.assign('/'))
//     .catch((error) => console.error('Error!', error.message));
// });

// .then((response) => alert('You have successfully submitted.'))
