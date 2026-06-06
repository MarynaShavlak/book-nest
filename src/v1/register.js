/* BookNest — Register page logic: тема, показ пароля, надійність+вимоги пароля, жанри, валідація */
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

  /* жанри (мультивибір) */
  document.getElementById('genres').addEventListener('click',function(e){
    var g=e.target.closest('.genre'); if(g) g.classList.toggle('is-on');
  });

  /* згода -> активна кнопка */
  var terms=document.getElementById('terms'), submitBtn=document.getElementById('submitBtn');
  terms.addEventListener('change',function(){ submitBtn.disabled=!terms.checked; });

  /* ===== Валідація ===== */
  var fName=document.getElementById('fName'),   name=document.getElementById('name');
  var fEmail=document.getElementById('fEmail'), email=document.getElementById('email');
  var fPw=document.getElementById('fPw'),       pw=document.getElementById('pw');
  var fPw2=document.getElementById('fPw2'),     pw2=document.getElementById('pw2');
  var fNick=document.getElementById('fNick'),   nick=document.getElementById('nick');
  var fBday=document.getElementById('fBday'),   bday=document.getElementById('bday');
  var strength=document.getElementById('strength'), bars=strength.querySelectorAll('.bar');

  var emailRe=/^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;
  var nameRe=/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ' ’\-]{2,50}$/;
  var letterRe=/[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]/;
  var nickRe=/^(?!.*[._]{2})[A-Za-z0-9][A-Za-z0-9._]{1,18}[A-Za-z0-9]$/;
  var COMMON=['12345678','password','password1','qwerty123','11111111','booknest','iloveyou'];

  /* межі дати народження: від (сьогодні − 120 років) до сьогодні */
  (function(){
    function iso(d){ return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
    var t=new Date();
    bday.max=iso(t);
    bday.min=iso(new Date(t.getFullYear()-120, t.getMonth(), t.getDate()));
  })();

  function setErr(f,inp,msg){
    var ok=!msg;
    f.classList.toggle('invalid',!ok);
    if(msg){ var e=f.querySelector('.err'); if(e) e.textContent=msg; }
    if(ok) inp.removeAttribute('aria-invalid'); else inp.setAttribute('aria-invalid','true');
    return ok;
  }

  /* вимоги до пароля (живий чек-лист + бари надійності) */
  var reqs=[
    {id:'rqLen',  test:function(v){ return v.length>=8 && v.length<=64; }},
    {id:'rqCase', test:function(v){ return /[a-zа-яёіїєґ]/.test(v) && /[A-ZА-ЯЁІЇЄҐ]/.test(v); }},
    {id:'rqNum',  test:function(v){ return /\d/.test(v); }},
    {id:'rqSpec', test:function(v){ return /[^A-Za-zА-Яа-яЁёІіЇїЄєҐґ0-9]/.test(v); }}
  ];
  function evalPw(v){
    var passed=0;
    reqs.forEach(function(r){
      var li=document.getElementById(r.id), ok=r.test(v);
      li.classList.toggle('ok',ok);
      li.querySelector('use').setAttribute('href', ok?'../icons.svg#i-check':'../icons.svg#i-circle');
      if(ok) passed++;
    });
    bars.forEach(function(b,i){ b.classList.toggle('on', i<passed); });
    strength.classList.toggle('full', passed===4);
    return passed;
  }

  function nameError(){
    var v=name.value.trim();
    if(!v) return "Введіть ваше ім'я";
    if(v.length<2) return "Ім'я має містити щонайменше 2 символи";
    if(v.length>50) return "Ім'я задовге (максимум 50 символів)";
    if(!nameRe.test(v) || !letterRe.test(v)) return "Ім'я може містити лише літери, апостроф та дефіс";
    return '';
  }
  function emailError(){
    var v=email.value.trim().toLowerCase();
    if(!v) return 'Введіть ваш e-mail';
    if(v.length>254) return 'E-mail задовгий';
    if(v.indexOf('..')>-1) return 'Невірний формат e-mail';
    if(!emailRe.test(v)) return 'Невірний формат e-mail';
    return '';
  }
  function pwError(){
    var v=pw.value;
    if(evalPw(v)!==4) return 'Пароль не відповідає вимогам безпеки';
    if(COMMON.indexOf(v.toLowerCase())>-1) return 'Цей пароль надто поширений — оберіть інший';
    return '';
  }
  function pw2Error(){
    if(!pw2.value) return 'Повторіть пароль';
    if(pw2.value!==pw.value) return 'Паролі не збігаються';
    return '';
  }
  function nickError(){
    var v=nick.value.trim();
    if(!v) return '';
    if(!nickRe.test(v)) return 'Нікнейм: 3–20 символів, латиниця, цифри, _ або .';
    return '';
  }
  function bdayError(){
    var v=bday.value;
    if(!v) return '';
    var d=new Date(v+'T00:00:00');
    if(isNaN(d.getTime())) return 'Невірна дата';
    var t=new Date(); t.setHours(0,0,0,0);
    if(d>t) return 'Дата народження не може бути в майбутньому';
    var age=t.getFullYear()-d.getFullYear();
    if(t.getMonth()<d.getMonth() || (t.getMonth()===d.getMonth() && t.getDate()<d.getDate())) age--;
    if(age<13) return 'Реєстрація доступна з 13 років';
    return '';
  }

  function checkName(){ return setErr(fName,name,nameError()); }
  function checkEmail(){ return setErr(fEmail,email,emailError()); }
  function checkPw(){ evalPw(pw.value); return setErr(fPw,pw,pwError()); }
  function checkPw2(){ return setErr(fPw2,pw2,pw2Error()); }
  function checkNick(){ return setErr(fNick,nick,nickError()); }
  function checkBday(){ return setErr(fBday,bday,bdayError()); }

  /* бари надійності оновлюються завжди; помилки прибираються одразу після виправлення */
  pw.addEventListener('input',function(){
    evalPw(pw.value);
    if(fPw.classList.contains('invalid')) checkPw();
    if(fPw2.classList.contains('invalid')) checkPw2();
  });
  pw2.addEventListener('input',function(){ if(fPw2.classList.contains('invalid')) checkPw2(); });

  /* нормалізація + перевірка при втраті фокусу (тільки якщо поле заповнене) */
  name.addEventListener('blur',function(){ name.value=name.value.trim().replace(/\s+/g,' '); if(name.value) checkName(); });
  email.addEventListener('blur',function(){ if(email.value.trim()){ email.value=email.value.trim().toLowerCase(); checkEmail(); } });
  nick.addEventListener('blur',function(){ nick.value=nick.value.trim(); if(nick.value) checkNick(); });
  bday.addEventListener('change',function(){ if(bday.value) checkBday(); });

  /* прибирання помилки під час набору */
  name.addEventListener('input',function(){ if(fName.classList.contains('invalid')) checkName(); });
  email.addEventListener('input',function(){ if(fEmail.classList.contains('invalid')) checkEmail(); });
  nick.addEventListener('input',function(){ if(fNick.classList.contains('invalid')) checkNick(); });

  document.getElementById('signupForm').addEventListener('submit',function(e){
    e.preventDefault();
    name.value=name.value.trim().replace(/\s+/g,' ');
    email.value=email.value.trim().toLowerCase();
    nick.value=nick.value.trim();

    /* викликаємо всі перевірки (щоб підсвітити всі невалідні поля), потім дивимось результат */
    var ok=[checkName(),checkEmail(),checkPw(),checkPw2(),checkNick(),checkBday()].every(Boolean);
    if(ok){
      var a=document.getElementById('okAlert');
      a.classList.add('show'); a.scrollIntoView({behavior:'smooth',block:'nearest'});
      /* тут виконується реальний запит на бекенд */
    } else {
      var firstBad=document.querySelector('.field.invalid .input');
      if(firstBad) firstBad.focus();
    }
  });
})();
