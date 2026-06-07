/* BookNest — New password page logic: тема, показ пароля, надійність, валідація, перевірка токена */
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

  /* Перевірка токена з листа.
     У реальному застосунку валідність токена перевіряє сервер, а відсутній токен = недійсне посилання.
     Для статичного прототипу показуємо стан помилки лише за ?token=expired|invalid,
     щоб за замовчуванням відкривалася робоча форма. */
  var token=new URLSearchParams(location.search).get('token');
  if(token==='expired'||token==='invalid'){
    document.getElementById('formState').hidden=true;
    document.getElementById('badToken').hidden=false;
    return;
  }

  /* показ пароля */
  document.querySelectorAll('.pwtoggle').forEach(function(t){
    t.addEventListener('click',function(){
      var inp=document.getElementById(t.dataset.target);
      var show=inp.type==='password';
      inp.type=show?'text':'password';
      t.firstElementChild.setAttribute('href', show?'../icons.svg#i-eye-off':'../icons.svg#i-eye');
    });
  });

  var pw=document.getElementById('pw'), pw2=document.getElementById('pw2');
  var fPw=document.getElementById('fPw'), fPw2=document.getElementById('fPw2');
  var strength=document.getElementById('strength'), bars=strength.querySelectorAll('.bar');

  /* короткий блок-лист поширених паролів */
  var COMMON=['12345678','password','password1','qwerty123','11111111','booknest','iloveyou','11111111'];

  /* вимоги до паролю (чек-лист) */
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
  function pwValid(v){ return evalPw(v)===4 && COMMON.indexOf(v.toLowerCase())===-1; }
  function matchValid(){ return pw2.value.length>0 && pw2.value===pw.value; }
  function mark(f,ok,msg){ f.classList.toggle('invalid',!ok); if(!ok&&msg) f.querySelector('.err').textContent=msg; return ok; }

  /* живий перерахунок під час набору */
  pw.addEventListener('input',function(){
    evalPw(pw.value);
    if(fPw.classList.contains('invalid')) mark(fPw, pwValid(pw.value));
    if(fPw2.classList.contains('invalid')) mark(fPw2, matchValid());
  });
  pw2.addEventListener('input',function(){
    if(fPw2.classList.contains('invalid')) mark(fPw2, matchValid());
  });

  document.getElementById('pwForm').addEventListener('submit',function(e){
    e.preventDefault();
    var common=COMMON.indexOf(pw.value.toLowerCase())>-1;
    var okP=mark(fPw, pwValid(pw.value), common?'Цей пароль надто поширений — оберіть інший':'Пароль не відповідає вимогам безпеки');
    var okC=mark(fPw2, matchValid(), 'Паролі не збігаються');
    if(!okP){ pw.focus(); return; }
    if(!okC){ pw2.focus(); return; }

    /* Успіх. Тут виконується реальний запит на бекенд (зі збереженням нового паролю за токеном).
       Після успіху бажано завершити всі активні сесії на сервері. */
    var a=document.getElementById('okAlert');
    a.classList.add('show');
    document.getElementById('pwForm').hidden=true;
    document.getElementById('toLogin').hidden=false;
    a.scrollIntoView({behavior:'smooth',block:'nearest'});
  });
})();
