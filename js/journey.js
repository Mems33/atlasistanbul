/* ================= JOURNEY SPINES ================= */
const SP={
en:{
  weight:{title:"Season spine: Body composition",
    review:"<strong>Week-12 evidence:</strong> DEXA delta, bloodwork panel two, and one habit that survived twelve weeks.",
    vertebrae:[
      {dom:"Training",why:"Primary lever — progressive strength three times a week; muscle is the metabolic engine.",wt:"Primary domain",primary:true},
      {dom:"Nutrition",why:"Protein-anchored plan adjusted weekly against adherence, not ideals.",wt:"Heavy · weeks 1–12"},
      {dom:"Psychology",why:"Stress eating is a stress problem. Fortnightly sessions target the trigger, not the fork.",wt:"Moderate · from week 2"},
      {dom:"Longevity",why:"Baseline and week-12 bloodwork turn the season into evidence.",wt:"Bookends · weeks 0 & 12"},
      {dom:"Community",why:"Cohort training and shared tables — adherence is social before it is chemical.",wt:"Ambient · weekly"}],
    tracks:[
      {lbl:"Training",note:"3× weekly",start:0,width:100,copper:true},
      {lbl:"Nutrition",note:"adjusted weekly",start:0,width:100},
      {lbl:"Psychology",note:"fortnightly",start:10,width:90},
      {lbl:"Longevity",note:"bloodwork bookends",start:0,width:12},
      {lbl:"Community",note:"weekly events",start:0,width:100}]},
  presence:{title:"Season spine: Presence & personal brand",
    review:"<strong>Week-12 evidence:</strong> one recorded talk, before and after; a written positioning line; a resting heart rate that agrees with it.",
    vertebrae:[
      {dom:"Branding & presence",why:"Primary lever — voice, positioning, and a real audience of peers to practise on.",wt:"Primary domain",primary:true},
      {dom:"Psychology",why:"Stage fear and impostor noise are the actual bottleneck for most professionals.",wt:"Heavy · weeks 1–8"},
      {dom:"Training",why:"Posture and breath are physical skills; presence is a body problem.",wt:"Moderate · weeks 1–12"},
      {dom:"Community",why:"Monthly member salons are the rehearsal room — low stakes, honest feedback.",wt:"Core · from week 4"},
      {dom:"Relationships",why:"How you hold one difficult conversation is how you hold a room.",wt:"Light · from week 6"}],
    tracks:[
      {lbl:"Branding & presence",note:"weekly coaching",start:0,width:100,copper:true},
      {lbl:"Psychology",note:"front-loaded",start:0,width:66},
      {lbl:"Training",note:"posture & breath",start:0,width:100},
      {lbl:"Community",note:"salons",start:25,width:75},
      {lbl:"Relationships",note:"applied practice",start:45,width:55}]},
  sleep:{title:"Season spine: Sleep & energy",
    review:"<strong>Week-12 evidence:</strong> wearable trendline, morning HRV, and an evening that belongs to you again.",
    vertebrae:[
      {dom:"Longevity",why:"Primary lever — sleep architecture, HRV, light and caffeine protocol, tracked daily.",wt:"Primary domain",primary:true},
      {dom:"Psychology",why:"Rumination is the thief of the third hour. Sessions target the 2 a.m. mind.",wt:"Heavy · weeks 1–12"},
      {dom:"Relationships",why:"The evening is shared territory; the protocol has to survive a household.",wt:"Moderate · from week 3"},
      {dom:"Training",why:"Morning strength anchors circadian rhythm and burns off cortisol honestly.",wt:"Moderate · weeks 2–12"},
      {dom:"Nutrition",why:"Late meals and alcohol timing — small levers, outsized effect on deep sleep.",wt:"Light · weeks 1–6"}],
    tracks:[
      {lbl:"Longevity",note:"daily protocol",start:0,width:100,copper:true},
      {lbl:"Psychology",note:"weekly",start:0,width:100},
      {lbl:"Relationships",note:"household design",start:18,width:82},
      {lbl:"Training",note:"morning blocks",start:8,width:92},
      {lbl:"Nutrition",note:"timing levers",start:0,width:50}]}
},
tr:{
  weight:{title:"Sezon omurgası: Vücut kompozisyonu",
    review:"<strong>12. hafta kanıtı:</strong> DEXA farkı, ikinci kan paneli ve on iki haftayı sağ çıkaran bir alışkanlık.",
    vertebrae:[
      {dom:"Antrenman",why:"Ana kaldıraç — haftada üç ilerleyen kuvvet seansı; kas, metabolik motorun kendisi.",wt:"Ana alan",primary:true},
      {dom:"Beslenme",why:"İdeale değil uyuma göre her hafta ayarlanan, protein eksenli plan.",wt:"Yoğun · hafta 1–12"},
      {dom:"Psikoloji",why:"Stres yemesi bir stres sorunudur. İki haftada bir seans; çatala değil tetiğe odaklanır.",wt:"Orta · 2. haftadan"},
      {dom:"Uzun Ömür",why:"Başlangıç ve 12. hafta tahlilleri sezonu kanıta çevirir.",wt:"Uçlarda · hafta 0 ve 12"},
      {dom:"Topluluk",why:"Kohort antrenmanı ve ortak sofralar — bağlılık kimyadan önce sosyaldir.",wt:"Sürekli · haftalık"}],
    tracks:[
      {lbl:"Antrenman",note:"haftada 3×",start:0,width:100,copper:true},
      {lbl:"Beslenme",note:"haftalık ayar",start:0,width:100},
      {lbl:"Psikoloji",note:"iki haftada bir",start:10,width:90},
      {lbl:"Uzun Ömür",note:"tahlil uçları",start:0,width:12},
      {lbl:"Topluluk",note:"haftalık etkinlik",start:0,width:100}]},
  presence:{title:"Sezon omurgası: Duruş ve kişisel marka",
    review:"<strong>12. hafta kanıtı:</strong> kayıtlı bir konuşma, öncesi ve sonrası; yazılı bir konumlanma cümlesi; buna eşlik eden bir dinlenik nabız.",
    vertebrae:[
      {dom:"Marka ve duruş",why:"Ana kaldıraç — ses, konumlanma ve üzerinde çalışılacak gerçek bir akran topluluğu.",wt:"Ana alan",primary:true},
      {dom:"Psikoloji",why:"Sahne korkusu ve sahtekârlık hissi çoğu profesyonelin gerçek darboğazı.",wt:"Yoğun · hafta 1–8"},
      {dom:"Antrenman",why:"Postür ve nefes fiziksel becerilerdir; duruş bir beden meselesidir.",wt:"Orta · hafta 1–12"},
      {dom:"Topluluk",why:"Aylık üye salonları prova odasıdır — düşük risk, dürüst geri bildirim.",wt:"Çekirdek · 4. haftadan"},
      {dom:"İlişkiler",why:"Tek bir zor konuşmayı nasıl taşıdığın, bir odayı nasıl taşıdığındır.",wt:"Hafif · 6. haftadan"}],
    tracks:[
      {lbl:"Marka ve duruş",note:"haftalık koçluk",start:0,width:100,copper:true},
      {lbl:"Psikoloji",note:"öne yüklü",start:0,width:66},
      {lbl:"Antrenman",note:"postür ve nefes",start:0,width:100},
      {lbl:"Topluluk",note:"salonlar",start:25,width:75},
      {lbl:"İlişkiler",note:"uygulama",start:45,width:55}]},
  sleep:{title:"Sezon omurgası: Uyku ve enerji",
    review:"<strong>12. hafta kanıtı:</strong> giyilebilir cihaz eğrisi, sabah HRV değeri ve yeniden sana ait bir akşam.",
    vertebrae:[
      {dom:"Uzun Ömür",why:"Ana kaldıraç — uyku mimarisi, HRV, ışık ve kafein protokolü; günlük takip.",wt:"Ana alan",primary:true},
      {dom:"Psikoloji",why:"Ruminasyon üçüncü saatin hırsızıdır. Seanslar gece 02.00 zihnini hedefler.",wt:"Yoğun · hafta 1–12"},
      {dom:"İlişkiler",why:"Akşam ortak bölgedir; protokol bir haneyi de sağ çıkarmalı.",wt:"Orta · 3. haftadan"},
      {dom:"Antrenman",why:"Sabah kuvveti sirkadiyen ritmi sabitler, kortizolü dürüstçe yakar.",wt:"Orta · hafta 2–12"},
      {dom:"Beslenme",why:"Geç yemek ve alkol zamanlaması — küçük kaldıraç, derin uykuda büyük etki.",wt:"Hafif · hafta 1–6"}],
    tracks:[
      {lbl:"Uzun Ömür",note:"günlük protokol",start:0,width:100,copper:true},
      {lbl:"Psikoloji",note:"haftalık",start:0,width:100},
      {lbl:"İlişkiler",note:"hane tasarımı",start:18,width:82},
      {lbl:"Antrenman",note:"sabah blokları",start:8,width:92},
      {lbl:"Beslenme",note:"zamanlama",start:0,width:50}]}
}};
const jspineEl=document.getElementById('jspine');
const tracksEl=document.getElementById('tracks');
const titleEl=document.getElementById('season-title');
const reviewEl=document.getElementById('review');
const tabs=document.querySelectorAll('.goal-tab');
function renderJourney(key){
  const s=SP[lang][key];
  titleEl.textContent=s.title;
  reviewEl.innerHTML=s.review;
  jspineEl.innerHTML=s.vertebrae.map(v=>`
    <div class="vertebra${v.primary?' primary':''}">
      <div class="dom">${v.dom}</div>
      <p class="why">${v.why}</p>
      <span class="wt">${v.wt}</span>
    </div>`).join('');
  tracksEl.innerHTML=s.tracks.map(t=>`
    <div class="track">
      <div class="lbl"><span>${t.lbl}</span><span>${t.note}</span></div>
      <div class="rail"><div class="fill${t.copper?' copper':''}" data-w="${t.width}" style="left:${t.start}%"></div></div>
    </div>`).join('');
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    tracksEl.querySelectorAll('.fill').forEach((f,i)=>{
      setTimeout(()=>{f.style.width=f.dataset.w+'%';},80+i*90);
    });
  }));
}
tabs.forEach(tab=>tab.addEventListener('click',()=>{
  tabs.forEach(t=>t.setAttribute('aria-selected','false'));
  tab.setAttribute('aria-selected','true');
  renderJourney(tab.dataset.goal);
}));
const boxIO=new IntersectionObserver(es=>{
  es.forEach(en=>{
    if(!en.isIntersecting)return;
    renderJourney(document.querySelector('.goal-tab[aria-selected="true"]').dataset.goal);
    boxIO.disconnect();
  });
},{threshold:.3});
boxIO.observe(document.getElementById('seasonBox'));

