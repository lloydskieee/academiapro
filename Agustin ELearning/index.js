const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent default form submission behavior

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // perform your authentication logic here
  // ...

  // redirect to home page if authentication succeeds
  window.location.href = 'home.html';
});
