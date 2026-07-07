/* ================= APPLICATION ================= */
const GOALS={
en:[{id:'weight',label:'Lose weight'},{id:'strength',label:'Get stronger'},{id:'energy',label:'Sleep & energy'},{id:'presence',label:'Sharpen my presence'},{id:'mind',label:'Quiet my mind'},{id:'friends',label:'Meet my people'},{id:'partner',label:'Find a partner'}],
tr:[{id:'weight',label:'Kilo vermek'},{id:'strength',label:'Güçlenmek'},{id:'energy',label:'Uyku ve enerji'},{id:'presence',label:'Duruşumu keskinleştirmek'},{id:'mind',label:'Zihnimi susturmak'},{id:'friends',label:'İnsanlarımı bulmak'},{id:'partner',label:'Bir eş bulmak'}]};
const OS={
en:{
  weight:{title:'Weight',rows:[['Training','Three sessions a week, built around your schedule and current level.'],['Nutrition','A deficit you can hold at an Istanbul dinner table. Dietitian on call.'],['Mind','Stress work — because cortisol quietly cancels deficits.'],['Circle','A weekly member run or class. Accountability you look forward to.']],why:'Members who came for weight loss keep it off when the circle around them changes too.'},
  strength:{title:'Strength',rows:[['Training','Progressive programme, form checks with a coach in the room.'],['Nutrition','Eating to build — protein targets that survive real life.'],['Longevity','Recovery and sleep tracked, so progress compounds.'],['Circle','Training partners at your level, found inside the club.']],why:'Strength is a long game. The club makes the long game social.'},
  energy:{title:'Sleep & energy',rows:[['Longevity','Sleep protocol, bloodwork, a clinician reading the results with you.'],['Mind','Evening wind-down and stress work, guided daily.'],['Nutrition','Caffeine, timing, and what your afternoons run on.'],['Training','Movement dosed for energy, not exhaustion.']],why:'Energy is the multiplier — every other domain moves faster once it returns.'},
  presence:{title:'Presence',rows:[['Presence','Manners, image, how you speak about your work — coached weekly.'],['Mind','Confidence work underneath the surface polish.'],['Circle','Rooms to practise in: dinners, salons, member events.'],['Training','Posture and bearing — presence starts physical.']],why:'Presence is a skill rehearsed in rooms. The club is the room.'},
  mind:{title:'Mind',rows:[['Mind','Daily reflective practice; licensed therapists when it should be human.'],['Longevity','Sleep first — most anxious minds are tired minds.'],['Training','Movement as medicine, prescribed gently.'],['Circle','Fewer, better people. Loneliness is a stressor; we treat it like one.']],why:'A quiet mind is rarely built alone. That is the point of the club.'},
  friends:{title:'Circle',rows:[['Circle','Weekly events matched to your interests — runs, tables, galleries, trips.'],['Presence','Light social coaching, if you want it. Arrive at ease.'],['Mind','The confidence work that makes new rooms feel smaller.'],['Training','Shared pursuits bond fastest — pick one with us.']],why:'Friendship forms around shared effort. We build the effort; the friendship follows.'},
  partner:{title:'Connection',rows:[['Circle','You meet people as people first — at events, not on a screen.'],['Presence','How you show up, refined.'],['Mind','Patterns and standards, worked through honestly.'],['Training','The version of you that walks in matters. We build it.']],why:'Introductions open after your first season — matches come from inside the community, made carefully.'}
},
tr:{
  weight:{title:'Kilo',rows:[['Antrenman','Haftada üç seans; programına ve seviyene göre kurulur.'],['Beslenme','İstanbul sofrasında sürdürülebilir bir açık. Diyetisyen hattın açık.'],['Zihin','Stres çalışması — çünkü kortizol açığı sessizce iptal eder.'],['Çevre','Haftalık üye koşusu ya da dersi. Beklediğin bir hesap verebilirlik.']],why:'Kilo için gelenler, çevreleri de değişince verdiklerini koruyor.'},
  strength:{title:'Güç',rows:[['Antrenman','İlerleyen program; salonda form kontrolü.'],['Beslenme','İnşa etmek için yemek — gerçek hayata dayanan protein hedefleri.'],['Uzun Ömür','Toparlanma ve uyku takipte; ilerleme birikir.'],['Çevre','Kulüp içinden seviyene uygun antrenman ortakları.']],why:'Güç uzun oyundur. Kulüp uzun oyunu sosyalleştirir.'},
  energy:{title:'Uyku ve enerji',rows:[['Uzun Ömür','Uyku protokolü, kan tahlili, sonuçları seninle okuyan klinisyen.'],['Zihin','Akşam sakinleşmesi ve stres çalışması, her gün.'],['Beslenme','Kafein, zamanlama ve öğleden sonranın yakıtı.'],['Antrenman','Tüketen değil enerji veren dozda hareket.']],why:'Enerji çarpandır — geri gelince her alan hızlanır.'},
  presence:{title:'Duruş',rows:[['Duruş','Adab, imaj, işini anlatma biçimin — haftalık koçluk.'],['Zihin','Cilanın altındaki özgüven çalışması.'],['Çevre','Prova odaları: yemekler, salonlar, etkinlikler.'],['Antrenman','Postür ve taşıyış — duruş bedenden başlar.']],why:'Duruş odalarda prova edilen bir beceridir. Kulüp o odadır.'},
  mind:{title:'Zihin',rows:[['Zihin','Günlük derinleşme; insan gerektiğinde lisanslı terapist.'],['Uzun Ömür','Önce uyku — kaygılı zihinlerin çoğu yorgun zihinlerdir.'],['Antrenman','İlaç niyetine hareket, nazikçe.'],['Çevre','Daha az, daha iyi insan. Yalnızlık bir stresördür; öyle ele alırız.']],why:'Sakin zihin nadiren yalnız kurulur. Kulübün anlamı bu.'},
  friends:{title:'Çevre',rows:[['Çevre','İlgi alanlarına göre haftalık etkinlikler — koşu, sofra, galeri, gezi.'],['Duruş','İstersen hafif sosyal koçluk. Rahat gel.'],['Zihin','Yeni odaları küçülten özgüven çalışması.'],['Antrenman','Ortak uğraş en hızlı bağlar — birlikte seçelim.']],why:'Dostluk ortak emeğin etrafında kurulur. Emeği biz kurarız; dostluk gelir.'},
  partner:{title:'Bağ',rows:[['Çevre','İnsanlarla önce insan olarak tanışırsın — ekranda değil, etkinlikte.'],['Duruş','Kendini gösterme biçimin, incelmiş.'],['Zihin','Kalıplar ve standartlar, dürüstçe.'],['Antrenman','İçeri giren hâlin önemli. Onu birlikte kurarız.']],why:'Tanıştırmalar ilk sezondan sonra açılır — eşleşmeler topluluğun içinden, özenle.'}
}};
const OBT={
en:{i1:"The intake · 01",q1:"What do you want to change first?",q1sub:"One honest answer. We'll take it from there.",cont:"Continue",
i2:"The intake · 02",spineT:"Your programme spine — ",spineSub:"This is what your goal actually depends on. Your season is built on these four.",me:"This is me — continue",back:"← Back",
i3:"The intake · 03",app:"The application",appSub:"Six questions, read by a person — not a queue. We select for movement, not status.",
fname:"Full name",age:"Age",occ:"Occupation",dist:"District",elsewhere:"Elsewhere in Istanbul",
div:"The six questions · your first answer is already in",
q2:"What have you already tried, and what did it teach you?",q3:"Tell us about the last promise you kept to yourself.",
q4:"A season asks for five to seven hours a week. Which hours are they?",q5:"What would the other 119 members get from having you in the room?",
q6:"What are you not willing to change?",submit:"Submit application",
i4:"The intake · 04",hold:"Hold a founding place",holdSub:"Ninety-seven of the founding 120 remain. A deposit holds yours while your application is read.",
plno:"Founding place № 24",dep:"Refundable deposit — ₺X,XXX",
depP:"<b>Credited in full</b> against your first season on admission. If your application isn't accepted, or you withdraw before opening, it returns to you entirely. Founding members keep their season price for life.",
skip:"Submit without holding a place",reserve:"Reserve place № 24",
heldT:"Place № 24 is held.",heldP:"Your application will be read by a person within the week. If your season and ours align, your intake conversation is with your programme director — and your deposit becomes your first season. If not, it returns to you in full.",
recT:"Application received.",recP:"Every application is read by a person. If your season and ours align, you'll hear from us within a week — and your intake conversation will be with your programme director, not a form.",
ret:"Return to the club"},
tr:{i1:"Kabul · 01",q1:"Önce neyi değiştirmek istiyorsun?",q1sub:"Tek dürüst cevap. Gerisini biz alırız.",cont:"Devam",
i2:"Kabul · 02",spineT:"Program omurgan — ",spineSub:"Hedefinin gerçekte bağlı olduğu şeyler. Sezonun bu dördü üzerine kurulur.",me:"Bu benim — devam",back:"← Geri",
i3:"Kabul · 03",app:"Başvuru",appSub:"Altı soru, bir insan okur — kuyruk değil. Statüye değil harekete bakarız.",
fname:"Ad soyad",age:"Yaş",occ:"Meslek",dist:"Semt",elsewhere:"İstanbul içinde başka",
div:"Altı soru · ilk cevabın zaten içeride",
q2:"Şimdiye dek ne denedin, sana ne öğretti?",q3:"Kendine verdiğin ve tuttuğun son sözü anlat.",
q4:"Bir sezon haftada beş-yedi saat ister. Bu saatler hangileri?",q5:"Diğer 119 üye, senin odada olmandan ne kazanır?",
q6:"Neyi değiştirmeye razı değilsin?",submit:"Başvuruyu gönder",
i4:"Kabul · 04",hold:"Kurucu yerini tut",holdSub:"Kurucu 120 yerin doksan yedisi duruyor. Başvurun okunurken depozito yerini tutar.",
plno:"Kurucu yer № 24",dep:"İade edilebilir depozito — ₺X.XXX",
depP:"Kabulde <b>ilk sezonundan eksiksiz düşülür</b>. Başvurun kabul edilmez ya da açılıştan önce çekilirsen tamamı iade edilir. Kurucu üyeler sezon fiyatını ömür boyu korur.",
skip:"Yer tutmadan gönder",reserve:"№ 24'ü ayırt",
heldT:"№ 24 tutuldu.",heldP:"Başvurunu bu hafta içinde bir insan okuyacak. Sezonun bizimkiyle örtüşürse kabul görüşmen program direktörünle olur — depoziton ilk sezonun olur. Örtüşmezse eksiksiz iade edilir.",
recT:"Başvuru alındı.",recP:"Her başvuruyu bir insan okur. Sezonun bizimkiyle örtüşürse bir hafta içinde haber alırsın — kabul görüşmen bir formla değil, program direktörünle olur.",
ret:"Kulübe dön"}};
let obStep=0, selGoal=null, deposited=false;
const overlay=document.getElementById('overlay');
const box=document.getElementById('obBox');
function openOB(){obStep=0;selGoal=null;deposited=false;overlay.classList.add('open');document.body.style.overflow='hidden';render();}
function closeOB(){overlay.classList.remove('open');document.body.style.overflow='';}
overlay.addEventListener('click',e=>{if(e.target===overlay)closeOB();});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    if(document.body.classList.contains('menu-open'))toggleMenu();
    else if(nomOverlay.classList.contains('open'))closeNom();
    else if(dashEl.classList.contains('open'))closeDash();
    else closeOB();
  }
});
function prog(n){
  let h='<div class="ob-progress">';
  for(let i=0;i<5;i++)h+='<i class="'+(i<=n?'done':'')+'"></i>';
  return h+'</div>';
}
function render(){
  box.scrollTop=0;
  const T=OBT[lang], G=GOALS[lang];
  if(obStep===0){
    box.className='ob';
    box.innerHTML=prog(0)+
    '<button class="ob-close" data-act="closeOB" aria-label="Close">×</button>'+
    '<span class="eyebrow">'+T.i1+'</span>'+
    '<h3>'+T.q1+'</h3>'+
    '<p class="sub">'+T.q1sub+'</p>'+
    '<div class="chips">'+G.map(g=>'<button class="chip'+(selGoal===g.id?' sel':'')+'" data-act="pick" data-arg="'+g.id+'">'+g.label+'</button>').join('')+'</div>'+
    '<div class="ob-nav"><span></span><button class="btn btn-solid" '+(selGoal?'':'disabled style="opacity:.35;pointer-events:none"')+' data-act="go" data-arg="1">'+T.cont+'</button></div>';
  }
  if(obStep===1){
    const T2=OBT[lang], s=OS[lang][selGoal];
    box.className='ob';
    box.innerHTML=prog(1)+
    '<button class="ob-close" data-act="closeOB" aria-label="Close">×</button>'+
    '<span class="eyebrow">'+T2.i2+'</span>'+
    '<h3>'+T2.spineT+s.title+'</h3>'+
    '<p class="sub">'+T2.spineSub+'</p>'+
    '<div class="spine">'+s.rows.map(r=>'<div class="spine-row"><span class="serif">'+r[0]+'</span><p>'+r[1]+'</p></div>').join('')+'</div>'+
    '<p class="spine-why">'+s.why+'</p>'+
    '<div class="ob-nav"><button class="ob-back" data-act="go" data-arg="0">'+T2.back+'</button><button class="btn btn-solid" data-act="go" data-arg="2">'+T2.me+'</button></div>';
  }
  if(obStep===2){
    box.className='ob';
    box.innerHTML=prog(2)+
    '<button class="ob-close" data-act="closeOB" aria-label="Close">×</button>'+
    '<span class="eyebrow">'+T.i3+'</span>'+
    '<h3>'+T.app+'</h3>'+
    '<p class="sub">'+T.appSub+'</p>'+
    '<div class="form-grid">'+
      '<div class="field"><label for="f-name">'+T.fname+'</label><input id="f-name" autocomplete="off" placeholder="—"></div>'+
      '<div class="field"><label for="f-age">'+T.age+'</label><input id="f-age" inputmode="numeric" placeholder="—"></div>'+
      '<div class="field"><label for="f-work">'+T.occ+'</label><input id="f-work" placeholder="—"></div>'+
      '<div class="field"><label for="f-dist">'+T.dist+'</label><select id="f-dist"><option>Bebek</option><option>Arnavutköy</option><option>Etiler</option><option>Nişantaşı</option><option>'+T.elsewhere+'</option></select></div>'+
    '</div>'+
    '<div class="form-divider">'+T.div+'</div>'+
    '<div class="field"><label class="q-label"><span class="q-num">II</span>'+T.q2+'</label><textarea rows="2" placeholder="—"></textarea></div>'+
    '<div class="field"><label class="q-label"><span class="q-num">III</span>'+T.q3+'</label><textarea rows="2" placeholder="—"></textarea></div>'+
    '<div class="field"><label class="q-label"><span class="q-num">IV</span>'+T.q4+'</label><textarea rows="2" placeholder="—"></textarea></div>'+
    '<div class="field"><label class="q-label"><span class="q-num">V</span>'+T.q5+'</label><textarea rows="2" placeholder="—"></textarea></div>'+
    '<div class="field"><label class="q-label"><span class="q-num">VI</span>'+T.q6+'</label><textarea rows="2" placeholder="—"></textarea></div>'+
    '<div class="ob-nav"><button class="ob-back" data-act="go" data-arg="1">'+T.back+'</button><button class="btn btn-solid" data-act="go" data-arg="3">'+T.submit+'</button></div>';
  }
  if(obStep===3){
    box.className='ob';
    box.innerHTML=prog(3)+
    '<button class="ob-close" data-act="closeOB" aria-label="Close">×</button>'+
    '<span class="eyebrow">'+T.i4+'</span>'+
    '<h3>'+T.hold+'</h3>'+
    '<p class="sub">'+T.holdSub+'</p>'+
    '<div class="dep-card">'+
      '<span class="dep-no">'+T.plno+'</span>'+
      '<span class="serif">'+T.dep+'</span>'+
      '<p>'+T.depP+'</p>'+
    '</div>'+
    '<div class="ob-nav"><button class="dep-skip" data-act="dep" data-arg="0">'+T.skip+'</button><button class="btn btn-solid" data-act="dep" data-arg="1">'+T.reserve+'</button></div>';
  }
  if(obStep===4){
    box.className='ob center';
    box.innerHTML=prog(4)+
    '<button class="ob-close" data-act="closeOB" aria-label="Close">×</button>'+
    '<div class="done-mark">A</div>'+
    (deposited
      ? '<h3>'+T.heldT+'</h3><p class="sub" style="max-width:42ch;margin:0 auto 34px">'+T.heldP+'</p>'
      : '<h3>'+T.recT+'</h3><p class="sub" style="max-width:40ch;margin:0 auto 34px">'+T.recP+'</p>')+
    '<button class="btn" data-act="closeOB">'+T.ret+'</button>';
  }
}
function pick(id){selGoal=id;render();}
function go(n){obStep=n;render();}

/* ================= NOMINATION ================= */
const nomOverlay=document.getElementById('nomOverlay');
function openNom(){
  document.getElementById('nomForm').style.display='';
  document.getElementById('nomDone').style.display='none';
  nomOverlay.classList.add('open');document.body.style.overflow='hidden';
}
function closeNom(){nomOverlay.classList.remove('open');document.body.style.overflow='';}
nomOverlay.addEventListener('click',e=>{if(e.target===nomOverlay)closeNom();});
function sendNom(){
  document.getElementById('nomForm').style.display='none';
  document.getElementById('nomDone').style.display='';
}

/* ================= DASHBOARD ================= */
const DB={
en:{who:"<b>S.K.</b> · Season I — Body composition",week:"Week 7 of 12",prog:58,progL:"Season progress",progR:"Review in 35 days",
today:"Today",tasks:[["Strength B — 18:30, Etiler floor",true],["Protein target 152 g — 96 g so far",false],["Wind-down 22:45 — screens off",false]],
event:"Next event",eventName:"Thursday table",eventMeta:"Rooftop, Arnavutköy · 20:00 · <b>nine members · you're in</b>",
spec:"Specialists",s1:["Dietitian — Sat 11:00","Travel-week adjustments"],s2:["Therapist — fortnightly","Next session Tuesday"],
spine:"Spine status",bars:[["Training",100,true],["Nutrition",82,false],["Mind",55,false],["Circle",70,false]],
delta:"Season so far",dline:"<em>−4.6 kg</em> · resting HR −5 · sleep +41 min",
review:"Season review — Cohort I",reviewMeta:"35 days · measured deltas · witnessed",
note:"Demonstration only — static data, member preview.",close:"× "},
tr:{who:"<b>S.K.</b> · Sezon I — Vücut kompozisyonu",week:"12 haftanın 7.si",prog:58,progL:"Sezon ilerlemesi",progR:"Değerlendirmeye 35 gün",
today:"Bugün",tasks:[["Kuvvet B — 18:30, Etiler salonu",true],["Protein hedefi 152 g — şu ana dek 96 g",false],["Sakinleşme 22:45 — ekranlar kapalı",false]],
event:"Sıradaki etkinlik",eventName:"Perşembe sofrası",eventMeta:"Çatı katı, Arnavutköy · 20:00 · <b>dokuz üye · içeridesin</b>",
spec:"Uzmanlar",s1:["Diyetisyen — Cmt 11:00","Seyahat haftası ayarları"],s2:["Terapist — iki haftada bir","Sonraki seans Salı"],
spine:"Omurga durumu",bars:[["Antrenman",100,true],["Beslenme",82,false],["Zihin",55,false],["Çevre",70,false]],
delta:"Sezon şu ana dek",dline:"<em>−4,6 kg</em> · dinlenik nabız −5 · uyku +41 dk",
review:"Sezon değerlendirmesi — Kohort I",reviewMeta:"35 gün · ölçülmüş farklar · tanıklı",
note:"Yalnızca gösterim — statik veri, üye önizlemesi.",close:"× "}};
const dashEl=document.getElementById('dash');
function openDash(){dashEl.classList.add('open');document.body.style.overflow='hidden';renderDash();}
function closeDash(){dashEl.classList.remove('open');document.body.style.overflow='';}
function renderDash(){
  const D=DB[lang];
  document.getElementById('dashWho').innerHTML=D.who;
  document.getElementById('dashWeek').textContent=D.week;
  const b=document.getElementById('dashBody');
  b.innerHTML=`
    <div class="dash-prog"><i id="dashFill" data-w="${D.prog}"></i></div>
    <div class="dash-prog-lbl"><span>${D.progL}</span><span>${D.progR}</span></div>
    <div class="dash-grid">
      <div class="dcard"><h4>${D.today}</h4>
        ${D.tasks.map((t,i)=>`<div class="dtask${t[1]?' done':''}" data-act="task"><span class="box"></span><span>${t[0]}</span></div>`).join('')}
      </div>
      <div class="dcard devent"><h4>${D.event}</h4>
        <span class="serif">${D.eventName}</span>
        <p>${D.eventMeta}</p>
      </div>
      <div class="dcard"><h4>${D.spec}</h4>
        <div class="dspec">${D.s1[0]}<small>${D.s1[1]}</small></div>
        <div class="dspec">${D.s2[0]}<small>${D.s2[1]}</small></div>
      </div>
      <div class="dcard"><h4>${D.spine}</h4>
        ${D.bars.map(x=>`<div class="dbar"><div class="lbl"><span>${x[0]}</span><span>${x[1]}%</span></div><div class="rail"><div class="fill${x[2]?' copper':''}" data-w="${x[1]}"></div></div></div>`).join('')}
      </div>
      <div class="dcard" style="grid-column:1/-1"><h4>${D.delta}</h4>
        <div class="ddelta">${D.dline}</div>
      </div>
      <div class="dreview"><span class="serif">${D.review}</span><p>${D.reviewMeta}</p></div>
    </div>
    <div class="dash-note">${D.note}</div>`;
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    const f=document.getElementById('dashFill');
    f.style.width=f.dataset.w+'%';
    b.querySelectorAll('.dbar .fill').forEach((x,i)=>setTimeout(()=>{x.style.width=x.dataset.w+'%';},120+i*90));
  }));
}

