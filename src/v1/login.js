/* BookNest — Login page logic: тема, показ пароля, валідація */
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

  /* показ пароля */
  document.querySelectorAll('.pwtoggle').forEach(function(t){
    t.addEventListener('click',function(){
      var inp=document.getElementById(t.dataset.target);
      var show=inp.type==='password';
      inp.type=show?'text':'password';
      t.firstElementChild.setAttribute('href', show?'../icons.svg#i-eye-off':'../icons.svg#i-eye');
    });
  });

  /* ===== Валідація =====
     На вході перевірка м'якша, ніж під час реєстрації: пароль лише має бути непорожнім
     (ми звіряємо вже існуючий пароль, а не створюємо новий). E-mail перевіряємо за форматом. */
  var fEmail=document.getElementById('fEmail'), email=document.getElementById('email');
  var fPw=document.getElementById('fPw'), pw=document.getElementById('pw');
  var emailRe=/^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;

  function setErr(f,inp,msg){
    var ok=!msg;
    f.classList.toggle('invalid',!ok);
    if(msg){ var e=f.querySelector('.err'); if(e) e.textContent=msg; }
    if(ok) inp.removeAttribute('aria-invalid'); else inp.setAttribute('aria-invalid','true');
    return ok;
  }
  function emailError(){
    var v=email.value.trim().toLowerCase();
    if(!v) return 'Введіть ваш e-mail';
    if(v.length>254) return 'E-mail задовгий';
    if(v.indexOf('..')>-1) return 'Невірний формат e-mail';
    if(!emailRe.test(v)) return 'Невірний формат e-mail';
    return '';
  }
  function checkEmail(){ return setErr(fEmail,email,emailError()); }
  function checkPw(){ return setErr(fPw,pw,pw.value.length>0?'':'Введіть пароль'); }

  /* нормалізація + перевірка при втраті фокусу */
  email.addEventListener('blur',function(){ if(email.value.trim()){ email.value=email.value.trim().toLowerCase(); checkEmail(); } });
  /* прибирання помилки під час набору */
  email.addEventListener('input',function(){ if(fEmail.classList.contains('invalid')) checkEmail(); });
  pw.addEventListener('input',function(){ if(fPw.classList.contains('invalid')) checkPw(); });

  document.getElementById('loginForm').addEventListener('submit',function(e){
    e.preventDefault();
    email.value=email.value.trim().toLowerCase();
    var okE=checkEmail(), okP=checkPw();
    if(okE&&okP){
      var a=document.getElementById('okAlert');
      a.classList.add('show'); a.scrollIntoView({behavior:'smooth',block:'nearest'});
      /* тут виконується реальний запит на бекенд (перевірка облікових даних) */
    } else {
      var firstBad=document.querySelector('.field.invalid .input');
      if(firstBad) firstBad.focus();
    }
  });
})();
