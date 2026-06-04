const spotData = {
  elt: {
    title: 'English Language Teaching',
    symbol: 'Open manuscript pages and pedagogical wing feathers.',
    route: 'Pedagogy, curriculum design, classroom interaction, assessment literacy, and teacher innovation.',
    activity: 'Analyze how a language classroom can move from knowledge transmission to learner agency, feedback, assessment, and reflective practice.',
    qr: 'assets/qrs/elt.png',
    hash: '#elt'
  },
  elf: {
    title: 'ELF Pronunciation',
    symbol: 'Sound-wave feathers representing accent diversity and meaningful speech.',
    route: 'Pronunciation, accent diversity, intelligibility, speaking confidence, and English as a Lingua Franca communication.',
    activity: 'Compare accent difference with intelligibility difference, then reflect on why clarity matters more than imitation.',
    qr: 'assets/qrs/elf.png',
    hash: '#elf'
  },
  intelligibility: {
    title: 'Global Intelligibility',
    symbol: 'The luminous knowledge orb at the Garuda chest.',
    route: 'Clear meaning, audience awareness, intercultural communication, and inclusive international scholarship.',
    activity: 'Revise one complex academic statement so that it becomes clearer for international readers without losing scholarly depth.',
    qr: 'assets/qrs/intelligibility.png',
    hash: '#intelligibility'
  },
  ai: {
    title: 'AI Literacy',
    symbol: 'Circuit-like feather lines and digital constellation paths.',
    route: 'Responsible AI use, prompting, bias awareness, academic integrity, and human judgment in learning.',
    activity: 'Evaluate an AI-generated paragraph by checking accuracy, transparency, originality, fairness, and educational value.',
    qr: 'assets/qrs/ai.png',
    hash: '#ai'
  },
  esp: {
    title: 'English for Specific Purposes',
    symbol: 'Manuscript routes connecting disciplines, professions, and knowledge fields.',
    route: 'Needs analysis, disciplinary vocabulary, professional genres, academic communication, and task-based language use.',
    activity: 'Match a professional scenario with its communicative purpose, expected genre, vocabulary demand, and audience.',
    qr: 'assets/qrs/esp.png',
    hash: '#esp'
  },
  digital: {
    title: 'Digital Learning',
    symbol: 'QR, AR, 360-degree digital twin, and mobile learning layer.',
    route: 'Digital pedagogy, AR interpretation, LMS design, mobile access, feedback loops, and blended learning.',
    activity: 'Design one digital learning activity that connects a physical monument spot with an online reflection or assessment.',
    qr: 'assets/qrs/digital.png',
    hash: '#digital'
  },
  ethics: {
    title: 'Research Ethics',
    symbol: 'The lower foundation where knowledge stands on integrity.',
    route: 'Consent, participant protection, data care, authorship responsibility, transparency, and social benefit.',
    activity: 'Read a short research scenario and identify risks, protections, consent needs, and responsible publication decisions.',
    qr: 'assets/qrs/ethics.png',
    hash: '#ethics'
  },
  heritage: {
    title: 'Nusantara Heritage',
    symbol: 'Archipelagic base, batik geometry, maritime contours, and multilingual memory.',
    route: 'Nusantara identity, cultural plurality, local wisdom, multilingual heritage, and Indonesia’s contribution to global knowledge.',
    activity: 'Connect one local cultural symbol to a global learning value, then explain how heritage can support future education.',
    qr: 'assets/qrs/heritage.png',
    hash: '#heritage'
  }
};

const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

const revealItems = document.querySelectorAll('.reveal');
const io = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.11 }) : null;
revealItems.forEach(item => io ? io.observe(item) : item.classList.add('is-visible'));

const titleEl = document.getElementById('spotTitle');
const symbolEl = document.getElementById('spotSymbol');
const routeEl = document.getElementById('spotRoute');
const activityEl = document.getElementById('spotActivity');
const qrEl = document.getElementById('spotQr');
const linkEl = document.getElementById('spotLink');

function selectSpot(slug, updateHash = true) {
  const data = spotData[slug];
  if (!data) return;
  titleEl.textContent = data.title;
  symbolEl.textContent = data.symbol;
  routeEl.textContent = data.route;
  activityEl.textContent = data.activity;
  qrEl.src = data.qr;
  qrEl.alt = `QR code for ${data.title} hotspot`;
  linkEl.href = data.hash;
  linkEl.textContent = `Open ${data.title} route`;
  document.querySelectorAll('.hotspot').forEach(btn => btn.classList.toggle('active', btn.dataset.spot === slug));
  document.querySelectorAll('.field-card').forEach(card => card.classList.toggle('active-card', card.dataset.card === slug));
  if (updateHash && history.replaceState) history.replaceState(null, '', data.hash);
}

document.querySelectorAll('.hotspot').forEach(btn => {
  btn.addEventListener('click', () => selectSpot(btn.dataset.spot));
});

document.querySelectorAll('.field-ribbon a, .qr-card a').forEach(link => {
  link.addEventListener('click', () => {
    const slug = link.getAttribute('href').replace('#','');
    if (spotData[slug]) selectSpot(slug, false);
  });
});

function selectFromHash() {
  const slug = location.hash.replace('#','');
  if (spotData[slug]) selectSpot(slug, false);
}
window.addEventListener('hashchange', selectFromHash);
selectFromHash();

const img = document.getElementById('viewerImage');
const slider = document.getElementById('tiltSlider');
let angle = 0;
let auto = null;
function renderViewer(){
  if (!img) return;
  const tilt = Number(slider?.value || 0);
  img.style.transform = `rotateY(${angle}deg) rotateX(${tilt / 3}deg) scale(1.015)`;
}
document.getElementById('rotateLeft')?.addEventListener('click', () => { angle -= 7; renderViewer(); });
document.getElementById('rotateRight')?.addEventListener('click', () => { angle += 7; renderViewer(); });
slider?.addEventListener('input', renderViewer);
document.getElementById('autoRotate')?.addEventListener('click', (e) => {
  if (auto) {
    clearInterval(auto); auto = null; e.currentTarget.setAttribute('aria-pressed','false'); e.currentTarget.textContent = 'Auto Rotate';
  } else {
    auto = setInterval(() => { angle += 1.6; renderViewer(); }, 70);
    e.currentTarget.setAttribute('aria-pressed','true'); e.currentTarget.textContent = 'Stop Auto';
  }
});

const viewer = document.getElementById('viewer');
let dragging=false, startX=0, startAngle=0;
viewer?.addEventListener('pointerdown', (e) => { dragging=true; startX=e.clientX; startAngle=angle; viewer.setPointerCapture(e.pointerId); });
viewer?.addEventListener('pointermove', (e) => { if(!dragging) return; angle = startAngle + (e.clientX - startX) / 6; renderViewer(); });
viewer?.addEventListener('pointerup', () => { dragging=false; });
viewer?.addEventListener('keydown', (e) => { if(e.key==='ArrowLeft'){ angle-=7; renderViewer(); } if(e.key==='ArrowRight'){ angle+=7; renderViewer(); } });

const back = document.getElementById('backToTop');
function handleScroll(){
  if (!back) return;
  back.classList.toggle('is-visible', window.scrollY > 520);
}
window.addEventListener('scroll', handleScroll, { passive: true });
back?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
handleScroll();
