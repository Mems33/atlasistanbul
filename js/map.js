/* ================= CONSTELLATION ================= */
const domains=[
  {id:'train', x:240,y:70},
  {id:'nutri', x:412,y:150},
  {id:'longe', x:430,y:320},
  {id:'brand', x:295,y:428},
  {id:'mind',  x:130,y:410},
  {id:'circle',x:48,y:255},
  {id:'match', x:110,y:120},
];
const NODE_LBL={
  en:{train:'Training',nutri:'Nutrition',longe:'Longevity',brand:'Presence',mind:'Mind',circle:'Circle',match:'Connection'},
  tr:{train:'Antrenman',nutri:'Beslenme',longe:'Uzun Ömür',brand:'Duruş',mind:'Zihin',circle:'Çevre',match:'Bağ'}
};
const links=[
  ['train','nutri'],['train','longe'],['train','circle'],['train','mind'],
  ['nutri','longe'],['nutri','mind'],
  ['longe','mind'],
  ['brand','circle'],['brand','match'],['brand','mind'],
  ['mind','circle'],
  ['circle','match'],['circle','longe'],
  ['match','mind'],
];
const CAPT={
en:{
  train:['Training','Consistency in the gym depends on recovery, fuel and someone waiting for you at the track. Training pulls in Nutrition, Longevity, Mind and your Circle.'],
  nutri:['Nutrition','What you eat follows how you sleep and how you feel. Nutrition pulls in Training, Longevity and Mind.'],
  longe:['Longevity','The long game is sleep, stress and steady habits — kept by people, not willpower. Longevity pulls in Training, Nutrition, Mind and Circle.'],
  brand:['Presence','How you carry yourself is confidence made visible — built in rooms, with people. Presence pulls in Mind, Circle and Connection.'],
  mind:['Mind','Cortisol undoes diets, sleep and patience alike. The mind steadies fastest in good company. Mind connects to nearly everything.'],
  circle:['Circle','The company you keep sets your defaults — your pace, your plate, your standards. Circle pulls in Training, Longevity, Presence and Connection.'],
  match:['Connection','Real connection begins as friendship inside a shared pursuit. Connection pulls in Circle, Presence and Mind.']
},
tr:{
  train:['Antrenman','Salondaki süreklilik toparlanmaya, yakıta ve piste seni bekleyen birine bağlıdır. Antrenman; Beslenme, Uzun Ömür, Zihin ve Çevre\u0027yi peşinden getirir.'],
  nutri:['Beslenme','Ne yediğin, nasıl uyuduğuna ve nasıl hissettiğine bağlıdır. Beslenme; Antrenman, Uzun Ömür ve Zihin\u0027i peşinden getirir.'],
  longe:['Uzun Ömür','Uzun oyun uyku, stres ve istikrarlı alışkanlıklardır — iradeyle değil insanlarla korunur. Uzun Ömür; Antrenman, Beslenme, Zihin ve Çevre\u0027yi çeker.'],
  brand:['Duruş','Kendini taşıma biçimin, görünür kılınmış özgüvendir — odalarda, insanlarla kurulur. Duruş; Zihin, Çevre ve Bağ\u0027ı çeker.'],
  mind:['Zihin','Kortizol diyeti de uykuyu da sabrı da bozar. Zihin en hızlı iyi bir çevrede durulur. Zihin neredeyse her şeye bağlıdır.'],
  circle:['Çevre','Kimlerle vakit geçirdiğin varsayılanlarını belirler — temponu, tabağını, standartlarını. Çevre; Antrenman, Uzun Ömür, Duruş ve Bağ\u0027ı çeker.'],
  match:['Bağ','Gerçek bağ, ortak bir uğraşın içindeki dostlukla başlar. Bağ; Çevre, Duruş ve Zihin\u0027i çeker.']
}};
const svgNS='http://www.w3.org/2000/svg';
const gE=document.getElementById('edges'),gN=document.getElementById('nodes');
let activeNode=null;
links.forEach(([a,b])=>{
  const A=domains.find(d=>d.id===a),B=domains.find(d=>d.id===b);
  const l=document.createElementNS(svgNS,'line');
  l.setAttribute('x1',A.x);l.setAttribute('y1',A.y);l.setAttribute('x2',B.x);l.setAttribute('y2',B.y);
  l.setAttribute('class','edge');l.dataset.a=a;l.dataset.b=b;gE.appendChild(l);
});
domains.forEach(d=>{
  const g=document.createElementNS(svgNS,'g');
  g.setAttribute('class','node');g.dataset.id=d.id;g.setAttribute('tabindex','0');
  g.setAttribute('role','button');
  const c=document.createElementNS(svgNS,'circle');
  c.setAttribute('cx',d.x);c.setAttribute('cy',d.y);c.setAttribute('r',10);
  const t=document.createElementNS(svgNS,'text');
  t.setAttribute('x',d.x);t.setAttribute('y',d.y + (d.y>240?28:-20));
  t.setAttribute('text-anchor','middle');t.dataset.node=d.id;
  g.appendChild(c);g.appendChild(t);gN.appendChild(g);
  const act=()=>{userTouched=true;activate(d.id);};
  g.addEventListener('mouseenter',act);
  g.addEventListener('click',act);
  g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();act();}});
});
function paintNodeLabels(){
  document.querySelectorAll('svg text[data-node]').forEach(t=>{
    t.textContent=NODE_LBL[lang][t.dataset.node];
    const g=t.closest('.node');
    g.setAttribute('aria-label',NODE_LBL[lang][t.dataset.node]);
  });
}
function activate(id){
  activeNode=id;
  document.querySelectorAll('.node').forEach(n=>n.classList.remove('active','linked'));
  document.querySelectorAll('.edge').forEach(e=>e.classList.remove('lit'));
  const linked=new Set();
  document.querySelectorAll('.edge').forEach(e=>{
    if(e.dataset.a===id||e.dataset.b===id){e.classList.add('lit');linked.add(e.dataset.a===id?e.dataset.b:e.dataset.a);}
  });
  document.querySelectorAll('.node').forEach(n=>{
    if(n.dataset.id===id)n.classList.add('active');
    else if(linked.has(n.dataset.id))n.classList.add('linked');
  });
  const cap=document.getElementById('const-caption');
  cap.innerHTML='<span class="cap-body"><span class="serif">'+CAPT[lang][id][0]+'</span>'+CAPT[lang][id][1]+'</span>';
}
let userTouched=false, ambientTimer=null, ambientIdx=0;
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
const mapSec=document.getElementById('map');
document.querySelectorAll('.edge').forEach(e=>{
  const len=Math.hypot(e.x2.baseVal.value-e.x1.baseVal.value, e.y2.baseVal.value-e.y1.baseVal.value);
  e.style.strokeDasharray=len;
  e.style.strokeDashoffset=reduceMotion?0:len;
});
const mapIO=new IntersectionObserver(es=>{
  es.forEach(en=>{
    if(!en.isIntersecting)return;
    mapSec.classList.add('drawn');
    document.querySelectorAll('.edge').forEach((e,i)=>{
      setTimeout(()=>{e.style.strokeDashoffset=0;}, i*70);
    });
    if(!reduceMotion){
      setTimeout(()=>{
        if(userTouched)return;
        const order=['train','nutri','mind','circle','longe','brand','match'];
        activate(order[0]);
        ambientTimer=setInterval(()=>{
          if(userTouched){clearInterval(ambientTimer);return;}
          ambientIdx=(ambientIdx+1)%order.length;
          activate(order[ambientIdx]);
        },3400);
      },1300);
    }
    mapIO.disconnect();
  });
},{threshold:.35});
mapIO.observe(mapSec);

