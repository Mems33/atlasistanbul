/* ================= INIT ================= */
initI18n();
paintNodeLabels();
const _paint=paintNodeLabels;
const _setLang=setLang;
setLang=function(l){_setLang(l);_paint();};
renderJourney('weight');
