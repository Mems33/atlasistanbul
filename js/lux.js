/* ================= LUX LAYER ================= */
document.body.classList.add('preloading');

/* ---------- delegated actions (no inline handlers: CSP-safe) ---------- */
document.addEventListener('click', e=>{
  const el = e.target.closest('[data-act]');
  if(!el) return;
  const arg = el.dataset.arg;
  switch(el.dataset.act){
    case 'openOB': openOB(); break;
    case 'closeOB': closeOB(); break;
    case 'openNom': openNom(); break;
    case 'closeNom': closeNom(); break;
    case 'sendNom': sendNom(); break;
    case 'openDash': openDash(); break;
    case 'closeDash': closeDash(); break;
    case 'menu': toggleMenu(); break;
    case 'menuNav': if(document.body.classList.contains('menu-open')) toggleMenu(); break;
    case 'menuApply': e.preventDefault(); if(document.body.classList.contains('menu-open')) toggleMenu(); openOB(); break;
    case 'lang': setLang(lang==='en' ? 'tr' : 'en'); break;
    case 'go': go(+arg); break;
    case 'pick': pick(arg); break;
    case 'dep': deposited = (arg === '1'); go(4); break;
    case 'task': el.classList.toggle('done'); break;
  }
});

const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE = matchMedia('(hover:hover) and (pointer:fine)').matches;

/* ---------- hero split-text ---------- */
function splitHero(){
  const h = document.getElementById('heroH1');
  if(!h) return;
  h.classList.remove('ld','ld2');
  h.style.opacity = 1;
  const frag = document.createDocumentFragment();
  let wi = 0;
  const wrapWords = (text, styled) => {
    text.split(/(\s+)/).forEach(part=>{
      if(!part) return;
      if(/^\s+$/.test(part)){ frag.appendChild(document.createTextNode(' ')); return; }
      const mask = document.createElement('span'); mask.className = 'wsplit';
      const w = document.createElement('span'); w.textContent = part;
      if(styled) w.style.color = 'var(--copper)';
      w.style.transitionDelay = (0.15 + wi*0.075) + 's';
      if(splitHero.replay && !RM) w.style.transform = 'translateY(118%)';
      mask.appendChild(w); frag.appendChild(mask); wi++;
    });
  };
  [...h.childNodes].forEach(n=>{
    if(n.nodeType === 3) wrapWords(n.textContent, false);
    else if(n.nodeType === 1) wrapWords(n.textContent, true);
  });
  h.textContent = ''; h.appendChild(frag);
  if(splitHero.replay && !RM){
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      h.querySelectorAll('.wsplit>span').forEach(w=>{ w.style.transform = ''; });
    }));
  }
}
splitHero();
splitHero.replay = true;
const _setLangLux = setLang;
setLang = function(l){
  _setLangLux(l);
  splitHero();
  document.title = (l === 'tr') ? 'ATLAS — İstanbul' : 'ATLAS — Istanbul';
};
/* open in Turkish for Turkish-language devices */
try{
  if(typeof navigator !== 'undefined' && (navigator.language||'').toLowerCase().startsWith('tr') && lang === 'en'){
    setLang('tr');
  }
}catch(e){}

/* ---------- preloader sequence ---------- */
(function(){
  const pl = document.getElementById('preloader');
  const finish = ()=>{
    pl.classList.add('done');
    document.body.classList.remove('preloading');
    document.body.classList.add('loaded');
    setTimeout(()=>pl.remove(), 1400);
  };
  if(RM){ pl.remove(); document.body.classList.remove('preloading'); document.body.classList.add('loaded'); return; }
  setTimeout(finish, 2150);
})();

/* ---------- scroll: progress + hero parallax + nav ---------- */
const progFill = document.getElementById('progFill');
const heroInner = document.querySelector('.hero-inner');
const scrollHint = document.querySelector('.scroll-hint');
const sfEls = [...document.querySelectorAll('.sec-head,.band,.final,.house')];
const plxEls = [...document.querySelectorAll('[data-plx]')];
let ticking = false;
function onLuxScroll(){
  const vh = innerHeight;
  const max = document.documentElement.scrollHeight - vh;
  progFill.style.transform = 'scaleX(' + (max>0 ? scrollY/max : 0) + ')';
  if(!RM && heroInner && scrollY < vh*1.2){
    heroInner.style.transform = 'translateY(' + scrollY*0.22 + 'px)';
    heroInner.style.opacity = Math.max(0, 1 - scrollY/(vh*0.8));
    if(scrollHint) scrollHint.style.opacity = Math.max(0, 1 - scrollY/220);
  }
  /* headlines dissolve slowly as they leave the top of the screen */
  if(!RM){
    const start = vh*0.40, end = vh*0.06;
    sfEls.forEach(el=>{
      const r = el.getBoundingClientRect();
      if(r.bottom > start + 80 && !el._sf) return;
      let o = (r.bottom - end)/(start - end);
      o = Math.max(0, Math.min(1, o));
      if(o < 1){
        el.style.opacity = o;
        el.style.transform = 'translateY(' + (-(1-o)*28) + 'px)';
        el.style.filter = 'blur(' + ((1-o)*5).toFixed(2) + 'px)';
        el._sf = true;
      } else if(el._sf){
        el.style.opacity = ''; el.style.transform = ''; el.style.filter = '';
        el._sf = false;
      }
    });
    /* depth layers drift at their own speed */
    plxEls.forEach(el=>{
      const s = parseFloat(el.dataset.plx);
      const r = el.getBoundingClientRect();
      const cur = el._plx || 0;
      const off = ((r.top + r.height/2 - cur) - vh/2) * s;
      el.style.transform = 'translateY(' + off.toFixed(1) + 'px)';
      el._plx = off;
    });
  }
  ticking = false;
}
addEventListener('scroll', ()=>{ if(!ticking){ requestAnimationFrame(onLuxScroll); ticking = true; } }, {passive:true});
addEventListener('resize', ()=>{ if(!ticking){ requestAnimationFrame(onLuxScroll); ticking = true; } }, {passive:true});

/* ---------- marquee leans with scroll velocity ---------- */
if(!RM){
  const strip = document.querySelector('.strip');
  if(strip){
    let lastY = scrollY, vel = 0;
    (function lean(){
      const dy = scrollY - lastY; lastY = scrollY;
      vel += (dy - vel)*0.1;
      const skew = Math.max(-6, Math.min(6, vel*0.4));
      strip.style.transform = 'skewX(' + (-skew).toFixed(2) + 'deg)';
      requestAnimationFrame(lean);
    })();
  }
}

/* ---------- custom cursor ---------- */
if(FINE && !RM){
  document.body.classList.add('cursor-on');
  const dot = document.getElementById('cur'), ring = document.getElementById('curRing');
  let mx = innerWidth/2, my = innerHeight/2, rx = mx, ry = my;
  addEventListener('pointermove', e=>{
    mx = e.clientX; my = e.clientY;
    dot.style.transform = 'translate(' + (mx) + 'px,' + (my) + 'px) translate(-50%,-50%)';
    const t = e.target;
    ring.classList.toggle('hov', !!t.closest('a,button,.node,.chip,.goal-tab,input,select,textarea,label,.tier,.wrow,.marker,.linklike'));
  }, {passive:true});
  addEventListener('pointerdown', ()=>ring.classList.add('press'));
  addEventListener('pointerup', ()=>ring.classList.remove('press'));
  document.documentElement.addEventListener('mouseleave', ()=>document.body.classList.remove('cursor-on'));
  document.documentElement.addEventListener('mouseenter', ()=>document.body.classList.add('cursor-on'));
  (function follow(){
    rx += (mx-rx)*0.16; ry += (my-ry)*0.16;
    ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) translate(-50%,-50%)';
    requestAnimationFrame(follow);
  })();
}

/* ---------- magnetic buttons ---------- */
if(FINE && !RM){
  document.querySelectorAll('.btn').forEach(b=>{
    b.addEventListener('pointermove', e=>{
      const r = b.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width/2), dy = e.clientY - (r.top + r.height/2);
      b.classList.remove('unmag');
      b.style.transform = 'translate(' + dx*0.18 + 'px,' + dy*0.28 + 'px)';
    });
    b.addEventListener('pointerleave', ()=>{ b.classList.add('unmag'); b.style.transform = ''; });
  });
}

/* ---------- card spotlight ---------- */
if(FINE){
  document.querySelectorAll('.tier,.pillar,.marker').forEach(c=>{
    c.addEventListener('pointermove', e=>{
      const r = c.getBoundingClientRect();
      c.style.setProperty('--mx', (e.clientX-r.left)+'px');
      c.style.setProperty('--my', (e.clientY-r.top)+'px');
    }, {passive:true});
  });
}

/* ---------- dossier tilt ---------- */
if(FINE && !RM){
  const d = document.getElementById('dossier');
  if(d){
    d.addEventListener('pointermove', e=>{
      const r = d.getBoundingClientRect();
      const px = (e.clientX-r.left)/r.width - .5, py = (e.clientY-r.top)/r.height - .5;
      d.style.transform = 'perspective(1100px) rotateX(' + (-py*2.4) + 'deg) rotateY(' + (px*2.8) + 'deg)';
    }, {passive:true});
    d.addEventListener('pointerleave', ()=>{ d.style.transform = ''; });
  }
}
