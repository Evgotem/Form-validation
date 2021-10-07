const FORM = document.getElementById('telegram-register');
const PSWRD_INPUTS = document.querySelectorAll('.password-input');
const RESULT = document.getElementById('result');

// проверка на совпадение паролей
const checkPasswordParameters = () => {
  if (PSWRD_INPUTS[0].value !== PSWRD_INPUTS[1].value) {
    RESULT.innerHTML = '';
    return false;
  } 
  return true;
}

// при нажатии на кнопку sumbit
FORM.addEventListener('submit', (event) => {
  event.preventDefault();

  const isValid = checkPasswordParameters();

  // если пароли не совпадают, делаем return
  if (!isValid) return;
  
  // если пароли совпадают, выводим Success! и наши данные из формы в RESULT
  const SURVEY = `<p>Name: ${document.getElementById('name-input').value}</p>
                  <p>Email: ${document.getElementById('email-input').value}</p>
                  <p>Country: ${document.getElementById('country-select').value}</p>
                  <p>Language: ${document.getElementById('language-select').value}</p>
                  <p>Chat background: 
                    <span style='height: 14px; width: 14px; background: ${document.getElementById('background-select').value}; display: inline-block;'></span>
                  </p>`

  RESULT.innerHTML = 'Success!' + SURVEY;
});

// обработчик события ввода данных в инпут
PSWRD_INPUTS.forEach(i => {
  i.addEventListener("change", (event) => {
    const PSWRD = event.target.value;
    // проверяем с помощью метода test, есть ли в value нашего инпута буквы с верхним регистром, возвращает true/false
    const hasUpperCase = /[A-Z]/.test(PSWRD);
    // проверка на наличие нижнего регистра
    const hasLowerCase = /[a-z]/.test(PSWRD);
    // проверак на наличие цифр
    const hasDigital = /\d/.test(PSWRD);
  
    // проверка на несоответствие длины пароля && наличие верхнего регистра && нижнего регистра && цифры
    if ((PSWRD.length < 8) || !hasUpperCase || !hasLowerCase || !hasDigital) {
      // если пароль не соответствует условиям
     event.target.classList.add('invalid');
    } else {
      // если соответствует, убираем красный бордер
      event.target.classList.remove('invalid');
    }
  });
})


const PSWD_EYE_BTNS = document.querySelectorAll('.eye');
const PSWD_EYE_SLASH_BTNS = document.querySelectorAll('.eye-slash');

// при нажатии на иконку перечеркнутого глаза, показываем пароль и меняем иконку на простой глаз
PSWD_EYE_SLASH_BTNS.forEach(b => {
  b.addEventListener('click', (e) => {
    const BTN = e.target;
    BTN.classList.add('hidden');
    BTN.parentElement.querySelector('.eye').classList.remove('hidden');
    BTN.parentElement.querySelector('.password-input').type = 'text';
  });
})


// скрываем пароль и меняем иконку обратно
PSWD_EYE_BTNS.forEach(b => {
  b.addEventListener('click', (e) => {
    const BTN = e.target;
    BTN.classList.add('hidden');
    BTN.parentElement.querySelector('.eye-slash').classList.remove('hidden');
    BTN.parentElement.querySelector('.password-input').type = 'password';
  });
})