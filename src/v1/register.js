/* BookNest — Register page logic: тема, показ пароля, надійність пароля, жанри, валідація */
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

        /* надійність пароля */
        var pw=document.getElementById('pw'), strength=document.getElementById('strength');
        var bars=strength.querySelectorAll('.bar');
        function score(v){
            var s=0;
            if(v.length>=8) s++;
            if(/[a-zа-яіїєґ]/.test(v)&&/[A-ZА-ЯІЇЄҐ]/.test(v)) s++;
            if(/\d/.test(v)) s++;
            if(/[^A-Za-zА-Яа-я0-9]/.test(v)) s++;
            return Math.min(s,4);
        }
        pw.addEventListener('input',function(){
            var sc=score(pw.value);
            bars.forEach(function(b,i){ b.classList.toggle('on', i<sc); });
            strength.classList.toggle('full', sc===4);
        });

        /* жанри (мультивибір) */
        document.getElementById('genres').addEventListener('click',function(e){
            var g=e.target.closest('.genre'); if(g) g.classList.toggle('is-on');
        });

        /* згода -> активна кнопка */
        var terms=document.getElementById('terms'), submit=document.getElementById('submitBtn');
        terms.addEventListener('change',function(){ submit.disabled=!terms.checked; });

        /* валідація */
        var fName=document.getElementById('fName'), name=document.getElementById('name');
        var fEmail=document.getElementById('fEmail'), email=document.getElementById('email');
        var fPw=document.getElementById('fPw');
        var fPw2=document.getElementById('fPw2'), pw2=document.getElementById('pw2');
        var emailRe=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        function mark(f,ok,msg){ f.classList.toggle('invalid',!ok); if(!ok&&msg) f.querySelector('.err').textContent=msg; return ok; }

        document.getElementById('signupForm').addEventListener('submit',function(e){
            e.preventDefault();
            var okN=mark(fName, name.value.trim().length>0, "Введіть ваше ім'я");
            var okE=mark(fEmail, emailRe.test(email.value.trim()), 'Невірний формат e-mail');
            var okP=mark(fPw, pw.value.length>=8, 'Мінімум 8 символів');
            var okC=mark(fPw2, pw2.value.length>0 && pw2.value===pw.value, 'Паролі не збігаються');
            if(okN&&okE&&okP&&okC){
                var a=document.getElementById('okAlert');
                a.classList.add('show'); a.scrollIntoView({behavior:'smooth',block:'nearest'});
            }
        });
    })();
