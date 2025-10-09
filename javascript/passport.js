const btn = document.getElementById('change');
btn.addEventListener('click', changeLang);

let issuing = document.getElementById('issuing-passport');
let nm = document.getElementById('name');
let surname = document.getElementById('surname');
let patron = document.getElementById('patronymic');
let gender = document.getElementById('gender');
let city = document.getElementById('city');
let area = document.getElementById('area');

const eng = [
  'THE MINISTRY OF INTERNAL AFFAIRS <br> OF RUSSIA IN MOSCOW',
  'BEKETOVA',
  'ANASTASIA',
  'ALEXANDROVNA',
  'F',
  'MOSCOW',
  'MOSCOW REGION',
];

const rus = [
  'ГУ МВД РОССИИ ПО Г. МОСКВЕ',
  'БЕКЕТОВА',
  'АНАСТАСИЯ',
  'АЛЕКСАНДРОВНА',
  'ЖЕН.',
  'Г. МОСКВА',
  'МОСКОВСКАЯ ОБЛАСТЬ',
];

function changeLang() {
  if (btn.innerText == 'Click to show English version') {
    issuing.innerHTML = eng[0];
    surname.innerText = eng[1];
    nm.innerText = eng[2];
    patron.innerText = eng[3];
    gender.innerText = eng[4];
    city.innerText = eng[5];
    area.innerHTML = eng[6];

    btn.innerText = 'Вернуться к русской версии';
  } else {
    issuing.innerText = rus[0];
    surname.innerText = rus[1];
    nm.innerText = rus[2];
    patron.innerText = rus[3];
    gender.innerText = rus[4];
    city.innerText = rus[5];
    area.innerText = rus[6];

    btn.innerText = 'Click to show English version';
  }
}
