/* ================= NAV ================= */
const nav=document.getElementById('nav');
addEventListener('scroll',()=>{nav.classList.toggle('scrolled',scrollY>40)},{passive:true});
function toggleMenu(){
  const open=document.body.classList.toggle('menu-open');
  document.querySelector('.burger').setAttribute('aria-expanded',open);
  document.body.style.overflow=open?'hidden':'';
}

/* ================= SCROLL REVEAL ================= */
const io=new IntersectionObserver(es=>{
  es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
},{threshold:.16,rootMargin:'0px 0px -6% 0px'});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));

