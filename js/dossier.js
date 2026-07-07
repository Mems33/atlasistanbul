/* ================= COUNTERS + DOSSIER ================= */
function countUp(el,to,dur){
  if(reduceMotion){el.textContent=to;return;}
  const t0=performance.now();
  function tick(t){
    const p=Math.min((t-t0)/dur,1);
    el.textContent=Math.round(to*(1-Math.pow(1-p,3)));
    if(p<1)requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const dossier=document.getElementById('dossier');
const dIO=new IntersectionObserver(es=>{
  es.forEach(en=>{
    if(!en.isIntersecting)return;
    dossier.querySelectorAll('.d-rail i').forEach((r,i)=>{
      setTimeout(()=>{r.style.width=r.dataset.w+'%';},250+i*140);
    });
    dIO.disconnect();
  });
},{threshold:.3});
dIO.observe(dossier);
const found=document.getElementById('found');
const fIO=new IntersectionObserver(es=>{
  es.forEach(en=>{
    if(!en.isIntersecting)return;
    countUp(found.querySelector('[data-count]'),23,1400);
    const fill=document.getElementById('foundFill');
    setTimeout(()=>{fill.style.width=fill.dataset.w+'%';},200);
    fIO.disconnect();
  });
},{threshold:.4});
fIO.observe(found);

