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

  /* валідація */
  var fEmail=document.getElementById('fEmail'), email=document.getElementById('email');
  var fPw=document.getElementById('fPw'), pw=document.getElementById('pw');
  var emailRe=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function mark(f,ok){ f.classList.toggle('invalid',!ok); return ok; }

  document.getElementById('loginForm').addEventListener('submit',function(e){
    e.preventDefault();
    var okE=mark(fEmail, emailRe.test(email.value.trim()));
    var okP=mark(fPw, pw.value.length>0);
    if(okE&&okP){
      var a=document.getElementById('okAlert');
      a.classList.add('show'); a.scrollIntoView({behavior:'smooth',block:'nearest'});
    }
  });
})();
