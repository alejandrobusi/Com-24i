// simulando db
const users = [
  {
    id: 1,
    name: 'Alejandro',
    lastName: 'Busi',
    email: 'ale@gmail.com',
    password: 'ale123',
  },
  {
    id: 2,
    name: 'Andrea',
    lastName: 'Menendez',
    email: 'andre@gmail.com',
    password: 'andre123',
  },
  {
    id: 3,
    name: 'Juan',
    lastName: 'Lopez',
    email: 'juan@gmail.com',
    password: 'juan123',
  },
];
const userJson = JSON.stringify(users);
window.localStorage.setItem('users', userJson);
// Login

const userLogin = (event) => {
  event.preventDefault()
  const emailInput = document.login.email.value.toLowerCase();
  const passwordInput = document.login.contrasena.value;
  const emailValidation = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  if (!emailValidation.test(emailInput)) {
    alert('El email no tiene un formato correcto');
    return;
  }
  const users = JSON.parse(localStorage.getItem('users'));
  let userLog;
  let trueUserFlag;
  users.map((user) => {
    if (emailInput === user.email.toLowerCase() && passwordInput === user.password) {
    trueUserFlag = true;
    userLog = user;
    }
  });
  if (trueUserFlag) {  
    alert('Bienvenido');
    delete userLog.password;
    localStorage.setItem('userLog', JSON.stringify(userLog));
    window.location = './index.html';
  } else {
    alert('Usuario o contraseña incorrecto.');
  }
};

document.oncontextmenu = function () {
  return false;
};