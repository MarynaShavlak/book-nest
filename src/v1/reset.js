/* BookNest — Reset password page logic: тема, валідація e-mail, надсилання інструкцій */
(function(){
  var root=document.documentElement;

  /* тема */
  var tBtn=document.getElementById('themeToggle'), tIcon=document.getElementById('ticon');
  function applyIcon(){ tIcon.firstElementChild.setAttribute('href', root.dataset.theme==='dark'?'../icons.svg#i-sun':'../icons.svg#i-moon'); }
  applyIcon();
  tBtn.addEventListener('click',function(){
    var n=root.dataset.theme==='dark'?'light':'dark';
    root.dataset.theme=n; localStorage.setItem('theme',n); applyIcon();
  });

  /* валідація e-mail */
  var form=document.getElementById('resetForm');
  var fEmail=document.getElementById('fEmail'), email=document.getElementById('email');
  var errBox=document.getElementById('emailErr');
  var emailRe=/^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;

  function emailError(){
    var v=email.value.trim().toLowerCase();
    if(!v) return 'Введіть ваш e-mail';
    if(v.length>254) return 'E-mail задовгий';
    if(v.indexOf('..')>-1) return 'Невірний формат e-mail';
    if(!emailRe.test(v)) return 'Невірний формат e-mail';
    return '';
  }
  function setError(msg){
    if(msg){ errBox.textContent=msg; fEmail.classList.add('invalid'); email.setAttribute('aria-invalid','true'); email.setAttribute('aria-describedby','emailErr'); }
    else { fEmail.classList.remove('invalid'); email.removeAttribute('aria-invalid'); email.removeAttribute('aria-describedby'); }
    return !msg;
  }

  /* нормалізація + перевірка при втраті фокусу */
  email.addEventListener('blur',function(){
    if(email.value.trim()){ email.value=email.value.trim().toLowerCase(); setError(emailError()); }
  });
  /* прибираємо помилку під час набору, якщо вона вже показана */
  email.addEventListener('input',function(){
    if(fEmail.classList.contains('invalid')) setError(emailError());
  });

  form.addEventListener('submit',function(e){
    e.preventDefault();
    if(!setError(emailError())){ email.focus(); return; }

    /* Успіх. Повідомлення нейтральне — не розкриваємо, чи існує акаунт із таким e-mail
       (захист від енумерації адрес). Реальний запит на бекенд додається тут. */
    var a=document.getElementById('okAlert');
    a.classList.add('show'); a.scrollIntoView({behavior:'smooth',block:'nearest'});
    form.querySelector('.btn-primary').disabled=true;
  });
})();
