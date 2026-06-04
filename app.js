const FIELD_ORDER = ['elt','elf','intelligibility','ai','esp','digital','ethics','heritage'];
const PIN_HASH = '461793e3030d9b0b42b3817baa110038130d4b9b5cee157d977c748ec2ea1e3f';
const STORE_KEY = 'gln_monument_integrated_v3';
const SESSION_KEY = 'gln_admin_unlocked';

const defaultLead = 'A professional monument learning platform where every symbolic part of the Garuda–Nusantara design becomes a connected route for language education, pronunciation, intelligibility, AI literacy, ESP, digital learning, research ethics, and cultural heritage.';

const defaultModules = {
  elt: {
    title: 'English Language Teaching',
    short: 'ELT',
    anchor: 'Open manuscript pages: pedagogy, curriculum design, assessment literacy, and reflective teaching.',
    focus: 'Learning focus: classroom pedagogy and teacher agency.',
    summary: 'This route helps visitors understand English Language Teaching as a professional practice that combines learning objectives, learner needs, classroom interaction, feedback, assessment, and reflective improvement.',
    outcomes: ['Explain ELT as a cycle of planning, interaction, assessment, and reflection.', 'Identify how feedback and classroom tasks support learner agency.', 'Design one inclusive classroom activity based on a communicative goal.'],
    lesson: 'Effective ELT begins with a clear learning purpose, not with a textbook page. A teacher identifies learners’ needs, selects meaningful input, creates guided practice, observes performance, gives formative feedback, and uses evidence to improve the next lesson. The open manuscript in the monument represents this cycle of knowledge design and classroom transformation.',
    materials: ['Communicative lesson objective', 'Learner profile and need analysis note', 'Input text or speaking model', 'Feedback checklist', 'Reflection journal'],
    process: ['Orient learners to the communicative goal.', 'Activate prior knowledge through a short question or image.', 'Provide input and model the language use.', 'Guide learners through pair or group practice.', 'Give formative feedback using criteria.', 'Ask learners to reflect and transfer the skill to a new situation.'],
    practice: 'Design a 20-minute micro lesson that teaches one academic communication skill. Include the objective, input, interaction pattern, feedback method, and reflection prompt.',
    reflection: 'How can an ELT classroom become a space where learners build confidence, voice, identity, and academic participation?',
    questions: [
      {q:'Which element is the strongest starting point for a professional ELT lesson?', options:['A decorative classroom theme','A clear communicative learning purpose','A long grammar explanation only','A test score without feedback'], answer:1},
      {q:'Formative feedback is most useful when it helps learners...', options:['memorize teacher comments','understand current performance and next steps','avoid speaking in class','compare themselves with native speakers only'], answer:1},
      {q:'The open manuscript symbolizes ELT because it represents...', options:['knowledge design and reflective teaching','a fixed script that never changes','decoration without learning value','only printed textbooks'], answer:0}
    ]
  },
  elf: {
    title: 'ELF Pronunciation',
    short: 'ELF',
    anchor: 'Left wing sound waves: accent diversity, intelligible pronunciation, and meaningful speech.',
    focus: 'Learning focus: intelligible pronunciation beyond native-likeness.',
    summary: 'This route reframes pronunciation as intelligibility, confidence, and intercultural communication. It values accents as part of identity while helping speakers make meaning clear for diverse listeners.',
    outcomes: ['Differentiate accent difference from intelligibility breakdown.', 'Identify pronunciation features that support clarity.', 'Practice listener-aware speaking without erasing identity.'],
    lesson: 'English as a Lingua Franca communication involves speakers with different linguistic backgrounds. The goal is not to imitate one native accent but to make meaning understandable. Pronunciation teaching therefore emphasizes segmental clarity, word stress, rhythm, repair strategies, and audience awareness. The left wing represents voice diversity moving outward across Nusantara and the world.',
    materials: ['Short speaking script', 'Pronunciation clarity checklist', 'Word stress examples', 'Repair strategy phrases', 'Peer-listener feedback form'],
    process: ['Listen to two different accented samples and identify meaning.', 'Notice which sounds or stress patterns support clarity.', 'Practice a short statement using clear pausing and stress.', 'Exchange peer feedback on intelligibility, not accent imitation.', 'Repeat with a new listener and apply repair strategies.', 'Reflect on how identity and clarity can work together.'],
    practice: 'Record a 45-second introduction of your academic field. Ask a peer to mark which words were clear, unclear, and important for meaning.',
    reflection: 'What pronunciation features should be prioritized when communication involves international listeners?',
    questions: [
      {q:'In ELF pronunciation, the main goal is...', options:['sounding exactly native','removing all local identity','being intelligible to diverse listeners','avoiding interaction'], answer:2},
      {q:'A pronunciation issue becomes important when it...', options:['creates misunderstanding','sounds different from one accent','uses local rhythm','shows speaker identity'], answer:0},
      {q:'A good listener-aware strategy is...', options:['speaking faster','checking understanding and repairing meaning','using only complex vocabulary','ignoring the audience'], answer:1}
    ]
  },
  intelligibility: {
    title: 'Global Intelligibility',
    short: 'GI',
    anchor: 'Luminous knowledge orb: clear meaning, global reach, and international scholarly communication.',
    focus: 'Learning focus: clarity, audience awareness, and global academic participation.',
    summary: 'This route develops the ability to make ideas understandable across linguistic, cultural, and disciplinary boundaries. It connects language clarity with scholarly visibility and international collaboration.',
    outcomes: ['Revise academic messages for clarity and audience fit.', 'Identify barriers to understanding in intercultural communication.', 'Use structure, signposting, and examples to support global readers or listeners.'],
    lesson: 'Global intelligibility is the ability of a message to be understood by audiences beyond one local context. It requires clear organization, precise vocabulary, audience awareness, and examples that reduce ambiguity. The luminous orb symbolizes knowledge that travels because it is ethically, linguistically, and conceptually clear.',
    materials: ['Academic statement', 'Clarity checklist', 'Audience profile', 'Signposting phrases', 'Revision template'],
    process: ['Identify the main idea of a message.', 'Remove unnecessary ambiguity or overloaded wording.', 'Add structure using signposting.', 'Include an example or context cue.', 'Ask an international peer to restate the message.', 'Revise based on what was misunderstood.'],
    practice: 'Rewrite a dense research sentence into two clear sentences for an international conference audience while preserving the original meaning.',
    reflection: 'How can clarity become a form of scholarly generosity and international inclusion?',
    questions: [
      {q:'Global intelligibility means...', options:['using only simple ideas','making meaning clear across audiences','avoiding academic vocabulary completely','speaking with one standardized accent'], answer:1},
      {q:'Which strategy improves intelligibility most?', options:['adding signposting and examples','making every sentence longer','using unexplained jargon','removing all structure'], answer:0},
      {q:'The monument orb represents...', options:['global clarity and scholarly connection','silence','decoration only','a single national language'], answer:0}
    ]
  },
  ai: {
    title: 'AI Literacy',
    short: 'AI',
    anchor: 'Right wing circuit lines: responsible AI use, human judgment, and digital ethics.',
    focus: 'Learning focus: critical, ethical, and pedagogical AI use.',
    summary: 'This route trains visitors to use AI as a learning partner while maintaining accuracy, authorship, fairness, transparency, and academic responsibility.',
    outcomes: ['Evaluate AI output using accuracy, transparency, bias, and originality criteria.', 'Design a responsible prompt for learning or teaching.', 'Explain how human judgment remains central in AI-supported education.'],
    lesson: 'AI literacy is not simply the ability to operate a tool. It is the ability to ask appropriate questions, evaluate generated output, detect bias and error, cite or disclose assistance when required, and protect human agency. The right wing represents future-oriented technology guided by ethical knowledge.',
    materials: ['Prompt design template', 'AI output evaluation checklist', 'Bias detection questions', 'Disclosure statement model', 'Human revision log'],
    process: ['Define the learning purpose before using AI.', 'Write a focused prompt with context and constraints.', 'Evaluate the output for accuracy and relevance.', 'Check for bias, missing evidence, and unsupported claims.', 'Revise using human judgment and disciplinary knowledge.', 'Document how AI was used and what humans changed.'],
    practice: 'Create a prompt for generating a speaking activity, then evaluate the AI response using five criteria: accuracy, relevance, inclusiveness, originality, and transparency.',
    reflection: 'When does AI support learning, and when does it weaken responsibility or authorship?',
    questions: [
      {q:'AI literacy requires...', options:['copying outputs directly','critical evaluation and responsible use','using AI without disclosure','removing human judgment'], answer:1},
      {q:'A responsible AI learning process begins with...', options:['a clear learning purpose','a random prompt','automatic trust','ignoring sources'], answer:0},
      {q:'The right wing circuit lines symbolize...', options:['technology guided by ethics','technology replacing all teachers','decoration only','silence in learning'], answer:0}
    ]
  },
  esp: {
    title: 'English for Specific Purposes',
    short: 'ESP',
    anchor: 'Manuscript route: disciplinary language, professional genres, and needs-based communication.',
    focus: 'Learning focus: language for real academic and professional purposes.',
    summary: 'This route shows how English learning becomes meaningful when connected to a specific discipline, profession, audience, genre, and task.',
    outcomes: ['Conduct a simple ESP needs analysis.', 'Match language features with professional tasks and genres.', 'Design a field-specific communication product.'],
    lesson: 'ESP begins with the question: what do learners need English for? The answer may involve pharmacy labels, engineering reports, research abstracts, tourism service interactions, business emails, clinical explanations, or academic presentations. The manuscript route symbolizes language moving into real disciplinary practice.',
    materials: ['Needs analysis table', 'Professional scenario', 'Genre model', 'Disciplinary glossary', 'Task rubric'],
    process: ['Identify the professional or academic setting.', 'Define the audience and communication purpose.', 'Collect examples of the target genre.', 'Analyze vocabulary, structure, and tone.', 'Practice producing a short genre-based text or speech.', 'Assess the product using field-specific criteria.'],
    practice: 'Choose one discipline and create a mini glossary of ten terms, one target genre, and one authentic communication task.',
    reflection: 'How does ESP make English learning more relevant, purposeful, and professionally empowering?',
    questions: [
      {q:'ESP is strongest when it is based on...', options:['learner and field-specific needs','random vocabulary lists','only general grammar drills','one textbook for all professions'], answer:0},
      {q:'An ESP task should include...', options:['purpose, audience, genre, and field vocabulary','only translation practice','unrelated topics','no assessment criteria'], answer:0},
      {q:'The manuscript route symbolizes...', options:['language connected to disciplinary practice','one universal method only','decoration','a closed knowledge system'], answer:0}
    ]
  },
  digital: {
    title: 'Digital Learning',
    short: 'DL',
    anchor: 'AR and digital layer: QR routes, mobile learning, feedback loops, and blended pedagogy.',
    focus: 'Learning focus: designing meaningful technology-supported learning.',
    summary: 'This route connects the physical monument to digital learning design through QR access, AR interpretation, mobile tasks, LMS integration, feedback, and reflective analytics.',
    outcomes: ['Design a blended learning activity connected to a physical learning object.', 'Explain how QR, AR, LMS, and mobile tools support learning cycles.', 'Evaluate whether technology adds pedagogical value.'],
    lesson: 'Digital learning is effective when technology serves pedagogy. QR codes, AR layers, mobile tasks, and LMS spaces should help learners access content, practice skills, receive feedback, collaborate, and reflect. The digital layer of the monument turns public art into an interactive learning environment.',
    materials: ['QR route plan', 'Mobile task sheet', 'LMS discussion prompt', 'Feedback checklist', 'Reflection analytics note'],
    process: ['Identify the learning objective.', 'Choose the digital tool that supports the objective.', 'Connect the tool to a physical or social activity.', 'Provide clear learner instructions.', 'Collect evidence of learning through a task or reflection.', 'Use feedback to revise the next activity.'],
    practice: 'Design a QR-based learning station for one monument spot, including content, activity, evidence of learning, and feedback method.',
    reflection: 'How can digital learning make a monument active, dialogic, and assessable?',
    questions: [
      {q:'Digital learning is strongest when technology...', options:['serves a clear learning objective','replaces all pedagogy','is used only for decoration','has no feedback'], answer:0},
      {q:'A QR learning route should include...', options:['content, task, evidence, and feedback','only a link','only a picture','no learner action'], answer:0},
      {q:'The AR layer represents...', options:['physical-digital learning integration','technology without purpose','a locked museum label','only entertainment'], answer:0}
    ]
  },
  ethics: {
    title: 'Research Ethics',
    short: 'RE',
    anchor: 'Foundation stone: consent, integrity, participant protection, and responsible scholarship.',
    focus: 'Learning focus: ethical research and academic responsibility.',
    summary: 'This route places ethics as the foundation of scholarship. Visitors learn how research protects participants, respects data, clarifies authorship, and communicates benefits responsibly.',
    outcomes: ['Identify ethical risks in a research scenario.', 'Explain informed consent, confidentiality, and data responsibility.', 'Connect publication integrity with public trust.'],
    lesson: 'Research ethics is not a formality after a study is designed. It shapes the research question, recruitment, consent, data collection, analysis, authorship, and dissemination. The monument foundation represents the principle that knowledge must stand on integrity.',
    materials: ['Research scenario', 'Consent checklist', 'Risk-benefit table', 'Data protection plan', 'Authorship responsibility note'],
    process: ['Define who may be affected by the study.', 'Identify potential risks and benefits.', 'Plan informed consent and voluntary participation.', 'Protect privacy and data security.', 'Clarify authorship, originality, and transparency.', 'Report findings responsibly without overstating claims.'],
    practice: 'Read a short classroom research scenario and list three risks, three protections, and one responsible dissemination statement.',
    reflection: 'Why should ethics be visible in a public monument of knowledge?',
    questions: [
      {q:'Research ethics should be considered...', options:['from the beginning of research design','only after publication','only when problems appear','only by administrators'], answer:0},
      {q:'Informed consent requires...', options:['voluntary participation and clear information','hidden data collection','pressure to join','unclear purpose'], answer:0},
      {q:'The foundation stone symbolizes...', options:['integrity as the base of knowledge','decoration only','speed over responsibility','research without participants'], answer:0}
    ]
  },
  heritage: {
    title: 'Nusantara Heritage',
    short: 'NH',
    anchor: 'Archipelagic base: multilingual memory, cultural plurality, and Indonesian knowledge routes.',
    focus: 'Learning focus: heritage as a living source of global education.',
    summary: 'This route connects Nusantara heritage with multilingualism, local wisdom, cultural identity, educational values, and Indonesia’s contribution to global knowledge.',
    outcomes: ['Explain how local heritage can support global learning.', 'Connect cultural symbols with educational values.', 'Create a respectful heritage-based learning activity.'],
    lesson: 'Nusantara heritage is not a static ornament. It is a living knowledge system shaped by languages, oral traditions, maritime routes, scripts, rituals, arts, and community practices. The archipelagic base shows that global scholarship can rise from local identity and cultural dignity.',
    materials: ['Local cultural symbol', 'Heritage interpretation guide', 'Multilingual phrase sample', 'Community knowledge prompt', 'Cultural respect checklist'],
    process: ['Select one local cultural symbol or story.', 'Identify its educational value.', 'Connect the value to language learning or communication.', 'Design a respectful learning task.', 'Invite comparison with another region or language.', 'Reflect on how local identity supports global participation.'],
    practice: 'Create a short heritage-based English learning activity that introduces one Nusantara cultural value to international learners.',
    reflection: 'How can Indonesian heritage become a source of future-oriented global scholarship?',
    questions: [
      {q:'Nusantara heritage in this platform is treated as...', options:['a living source of knowledge','decoration only','a single uniform culture','something unrelated to learning'], answer:0},
      {q:'A respectful heritage-based task should...', options:['connect culture, learning, and ethical interpretation','stereotype a community','remove local meaning','avoid reflection'], answer:0},
      {q:'The archipelagic base symbolizes...', options:['plural identity and knowledge routes','one isolated island','a closed border','decoration without meaning'], answer:0}
    ]
  }
};

const defaultProvinces = [
  ['aceh','Aceh','Banda Aceh',5.5483,95.3238,'heritage'],
  ['north-sumatra','North Sumatra','Medan',3.5952,98.6722,'elf'],
  ['west-sumatra','West Sumatra','Padang',-0.9471,100.4172,'intelligibility'],
  ['riau','Riau','Pekanbaru',0.5071,101.4478,'esp'],
  ['jambi','Jambi','Jambi',-1.6101,103.6131,'ethics'],
  ['south-sumatra','South Sumatra','Palembang',-2.9761,104.7754,'digital'],
  ['bengkulu','Bengkulu','Bengkulu',-3.7928,102.2608,'elt'],
  ['lampung','Lampung','Bandar Lampung',-5.3971,105.2668,'ai'],
  ['bangka-belitung-islands','Bangka Belitung Islands','Pangkal Pinang',-2.1316,106.1169,'heritage'],
  ['riau-islands','Riau Islands','Tanjung Pinang',0.9186,104.4665,'esp'],
  ['jakarta','Jakarta','Jakarta',-6.2088,106.8456,'digital'],
  ['west-java','West Java','Bandung',-6.9175,107.6191,'elt'],
  ['central-java','Central Java','Semarang',-6.9667,110.4167,'ethics'],
  ['yogyakarta','Yogyakarta','Yogyakarta',-7.7956,110.3695,'intelligibility'],
  ['east-java','East Java','Surabaya',-7.2575,112.7521,'elf'],
  ['banten','Banten','Serang',-6.1201,106.1503,'ai'],
  ['bali','Bali','Denpasar',-8.6705,115.2126,'heritage'],
  ['west-nusa-tenggara','West Nusa Tenggara','Mataram',-8.5833,116.1167,'esp'],
  ['east-nusa-tenggara','East Nusa Tenggara','Kupang',-10.1772,123.607,'intelligibility'],
  ['west-kalimantan','West Kalimantan','Pontianak',-0.0263,109.3425,'elt'],
  ['central-kalimantan','Central Kalimantan','Palangka Raya',-2.2096,113.9108,'digital'],
  ['south-kalimantan','South Kalimantan','Banjarbaru',-3.4424,114.8325,'ethics'],
  ['east-kalimantan','East Kalimantan','Samarinda',-0.5022,117.1537,'ai'],
  ['north-kalimantan','North Kalimantan','Tanjung Selor',2.8375,117.3653,'esp'],
  ['north-sulawesi','North Sulawesi','Manado',1.4748,124.8421,'elf'],
  ['central-sulawesi','Central Sulawesi','Palu',-0.8917,119.8707,'digital'],
  ['south-sulawesi','South Sulawesi','Makassar',-5.1477,119.4327,'elt'],
  ['southeast-sulawesi','Southeast Sulawesi','Kendari',-3.9985,122.512,'intelligibility'],
  ['gorontalo','Gorontalo','Gorontalo',0.5435,123.0568,'heritage'],
  ['west-sulawesi','West Sulawesi','Mamuju',-2.6748,118.8869,'ethics'],
  ['maluku','Maluku','Ambon',-3.6554,128.1907,'elf'],
  ['north-maluku','North Maluku','Sofifi',0.7324,127.5594,'heritage'],
  ['papua','Papua','Jayapura',-2.5489,140.719,'intelligibility'],
  ['west-papua','West Papua','Manokwari',-0.8615,134.062,'esp'],
  ['southwest-papua','Southwest Papua','Sorong',-0.8762,131.2558,'ai'],
  ['central-papua','Central Papua','Nabire',-3.3667,135.5,'digital'],
  ['highland-papua','Highland Papua','Wamena',-4.1025,138.947,'ethics'],
  ['south-papua','South Papua','Merauke',-8.4932,140.4018,'elt']
].map(([slug,name,capital,lat,lng,field]) => ({
  slug,name,capital,lat,lng,field,
  prompt:`Read this clearly and naturally: From ${name}, a local voice enters global learning through clarity, respect, and shared meaning.`,
  task:`Connect ${name}'s voice and cultural context with ${defaultModules[field].title}. Produce one short spoken explanation, then reflect on clarity, audience, and identity.`,
  assessment:`Can an international listener identify the main message, key words, and local-cultural reference after one listening?`
}));

let state = loadState();
let modules = mergeModules(defaultModules, state.modules || {});
let provinces = mergeProvinces(defaultProvinces, state.provinces || {});
let currentField = 'elt';
let currentProvince = 'aceh';
let map, markers = {};
let mediaRecorder, audioChunks = [];

function loadState(){
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch { return {}; }
}
function saveState(){
  localStorage.setItem(STORE_KEY, JSON.stringify({ lead: state.lead || defaultLead, modules: diffModules(), provinces: diffProvinces() }));
}
function mergeModules(base, overrides){
  const out = (typeof structuredClone === 'function') ? structuredClone(base) : JSON.parse(JSON.stringify(base));
  Object.entries(overrides || {}).forEach(([slug,patch]) => { if(out[slug]) Object.assign(out[slug], patch); });
  return out;
}
function mergeProvinces(base, overrides){
  return base.map(p => Object.assign({}, p, overrides[p.slug] || {}));
}
function diffModules(){
  const d = {};
  FIELD_ORDER.forEach(slug => {
    const m = modules[slug], b = defaultModules[slug];
    ['summary','lesson','reflection'].forEach(k => { if(m[k] !== b[k]) { d[slug] ||= {}; d[slug][k]=m[k]; } });
  });
  return d;
}
function diffProvinces(){
  const d = {};
  provinces.forEach(p => {
    const b = defaultProvinces.find(x => x.slug === p.slug);
    ['prompt','field'].forEach(k => { if(p[k] !== b[k]) { d[p.slug] ||= {}; d[p.slug][k]=p[k]; } });
  });
  return d;
}

function init(){
  document.getElementById('year').textContent = new Date().getFullYear();
  const lead = state.lead || defaultLead;
  const leadEl = document.querySelector('.lead');
  if(leadEl) leadEl.textContent = lead;
  setupNav(); setupReveal(); setupBackTop(); setupFieldButtons();
  renderSpot(currentField); renderModuleNav(); renderModule(currentField); renderQrStation(currentField); setupQrButtons();
  setupMap(); renderProvinceList(); renderProvince(currentProvince); setupAdmin(); routeFromHash();
}

function setupNav(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open'); toggle?.setAttribute('aria-expanded','false');
  }));
}
function setupReveal(){
  const items = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){ items.forEach(i => i.classList.add('show')); return; }
  const obs = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('show'); }), {threshold:.08});
  items.forEach(i => obs.observe(i));
}
function setupBackTop(){
  const back = document.getElementById('backTop');
  const handler = () => back?.classList.toggle('visible', scrollY > 520);
  addEventListener('scroll', handler, {passive:true}); handler();
  back?.addEventListener('click', () => scrollTo({top:0, behavior:'smooth'}));
}
function setupFieldButtons(){
  document.querySelectorAll('[data-module-button]').forEach(btn => btn.addEventListener('click', () => {
    selectField(btn.dataset.moduleButton, true);
  }));
  document.querySelectorAll('.spot').forEach(btn => btn.addEventListener('click', () => selectField(btn.dataset.spot, false)));
  document.getElementById('spotAssessment')?.addEventListener('click', () => {
    location.hash = `module-${currentField}`;
    setTimeout(() => document.getElementById(`assessment-${currentField}`)?.scrollIntoView({behavior:'smooth', block:'start'}), 120);
  });
  document.getElementById('spotQrBtn')?.addEventListener('click', () => {
    const drawer = document.getElementById('qrDrawer'); if(drawer) drawer.hidden = !drawer.hidden;
  });
}
function selectField(slug, jump){
  if(!modules[slug]) return;
  currentField = slug;
  renderSpot(slug); renderModule(slug); renderQrStation(slug); setActiveModuleNav(slug); setActiveTopButtons(slug);
  if(jump) location.hash = `module-${slug}`;
}
function renderSpot(slug){
  const m = modules[slug]; if(!m) return;
  const set = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
  set('spotTitle', m.title); set('spotAnchor', m.anchor); set('spotFocus', m.focus); set('spotActivity', m.summary);
  const qr = document.getElementById('spotQr'); if(qr){ qr.src = `assets/qrs/module-${slug}.png`; qr.alt = `QR code for ${m.title} learning route`; }
  const open = document.getElementById('spotOpen'); if(open){ open.href = `#module-${slug}`; open.textContent = 'Open Module'; }
  document.querySelectorAll('.spot').forEach(b => b.classList.toggle('active', b.dataset.spot === slug));
}
function renderModuleNav(){
  const nav = document.getElementById('moduleNav'); if(!nav) return;
  nav.innerHTML = FIELD_ORDER.map(slug => `<button type="button" data-module-nav="${slug}"><strong>${modules[slug].short}</strong> ${modules[slug].title}</button>`).join('');
  nav.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => selectField(btn.dataset.moduleNav, false)));
  setActiveModuleNav(currentField);
}
function setActiveModuleNav(slug){
  document.querySelectorAll('[data-module-nav]').forEach(b => b.classList.toggle('active', b.dataset.moduleNav === slug));
}
function setActiveTopButtons(slug){
  document.querySelectorAll('[data-module-button]').forEach(b => b.classList.toggle('active', b.dataset.moduleButton === slug));
  document.querySelectorAll('[data-qr-button]').forEach(b => b.classList.toggle('active', b.dataset.qrButton === slug));
}
function renderModule(slug){
  const m = modules[slug]; const view = document.getElementById('moduleView'); if(!m || !view) return;
  currentField = slug;
  view.innerHTML = `
    <span id="module-${slug}" class="module-anchor" aria-hidden="true"></span>
    <div class="module-title">
      <div><p class="eyebrow">${m.short} Learning Route</p><h3>${m.title}</h3><p>${m.summary}</p></div>
      <img src="assets/qrs/module-${slug}.png" alt="QR code for ${m.title}">
    </div>
    <div class="module-grid">
      <section class="learn-box"><h4>Learning Outcomes</h4><ul>${m.outcomes.map(x=>`<li>${x}</li>`).join('')}</ul></section>
      <section class="learn-box"><h4>Core Materials</h4><ul>${m.materials.map(x=>`<li>${x}</li>`).join('')}</ul></section>
    </div>
    <section class="learn-box"><h4>Mini Lesson</h4><p>${m.lesson}</p></section>
    <div class="module-grid">
      <section class="learn-box"><h4>Learning Process</h4><ol class="process-list">${m.process.map(x=>`<li>${x}</li>`).join('')}</ol></section>
      <section class="learn-box"><h4>Practice and Transfer</h4><p>${m.practice}</p><h4>Reflection</h4><p>${m.reflection}</p></section>
    </div>
    <section class="assessment" id="assessment-${slug}">
      <p class="eyebrow">Formative Assessment</p>
      <h3>Check your understanding</h3>
      <form data-quiz="${slug}">
        ${m.questions.map((q,i)=>`<div class="question"><p>${i+1}. ${q.q}</p>${q.options.map((op,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${op}</label>`).join('')}</div>`).join('')}
        <button class="btn small primary" type="submit">Submit Assessment</button>
        <div class="score-box" id="score-${slug}"></div>
      </form>
    </section>`;
  view.querySelector('form')?.addEventListener('submit', (e) => gradeQuiz(e, slug));
  setActiveModuleNav(slug); setActiveTopButtons(slug);
}
function gradeQuiz(e, slug){
  e.preventDefault(); const m = modules[slug]; let score=0;
  m.questions.forEach((q,i) => { const checked = e.target.querySelector(`input[name="q${i}"]:checked`); if(checked && Number(checked.value) === q.answer) score++; });
  const box = document.getElementById(`score-${slug}`); if(!box) return;
  box.style.display = 'block';
  const pct = Math.round((score / m.questions.length) * 100);
  box.innerHTML = `<strong>Score: ${score}/${m.questions.length} (${pct}%).</strong><br>${pct >= 70 ? 'Good progress. Continue with the reflection and transfer task.' : 'Review the mini lesson and try again. Focus on the route concept and symbolic meaning.'}`;
  state.quiz = state.quiz || {}; state.quiz[slug] = {score, total:m.questions.length, date:new Date().toISOString()}; saveState();
}
function setupQrButtons(){
  const box = document.getElementById('qrButtons'); if(!box) return;
  box.innerHTML = FIELD_ORDER.map(slug => `<button type="button" data-qr-button="${slug}">${modules[slug].title}</button>`).join('');
  box.querySelectorAll('button').forEach(b => b.addEventListener('click', () => { selectField(b.dataset.qrButton,false); renderQrStation(b.dataset.qrButton); }));
  setActiveTopButtons(currentField);
}
function renderQrStation(slug){
  const m = modules[slug]; if(!m) return;
  const img = document.getElementById('qrStationImage'); if(img){ img.src = `assets/qrs/module-${slug}.png`; img.alt = `QR code for ${m.title}`; }
  const title = document.getElementById('qrStationTitle'); if(title) title.textContent = m.title;
  const text = document.getElementById('qrStationText'); if(text) text.textContent = `${m.focus} Scan or open this route to access materials, activities, assessment, and reflection.`;
  const open = document.getElementById('qrStationOpen'); if(open) open.href = `#module-${slug}`;
  setActiveTopButtons(slug);
}

function setupMap(){
  if(!document.getElementById('indonesiaMap')) return;
  if(!window.L){ document.getElementById('indonesiaMap').innerHTML = '<p style="padding:20px;color:#d9c8a4">Map service unavailable. Use the province buttons below.</p>'; return; }
  map = L.map('indonesiaMap', {scrollWheelZoom:false}).setView([-2.8,118], 5);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 9, attribution:'&copy; OpenStreetMap contributors'}).addTo(map);
  provinces.forEach(p => {
    const icon = L.divIcon({className:'', html:`<div class="custom-marker" data-marker="${p.slug}"></div>`, iconSize:[18,18], iconAnchor:[9,9]});
    const marker = L.marker([p.lat,p.lng], {icon}).addTo(map).bindTooltip(p.name, {direction:'top'});
    marker.on('click', () => selectProvince(p.slug, true));
    markers[p.slug] = marker;
  });
}
function renderProvinceList(){
  const list = document.getElementById('provinceList'); if(!list) return;
  list.innerHTML = provinces.map(p => `<button type="button" data-province="${p.slug}">${p.name}</button>`).join('');
  list.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => selectProvince(btn.dataset.province, true)));
}
function selectProvince(slug, move){
  if(!provinces.find(p=>p.slug===slug)) return;
  currentProvince = slug; renderProvince(slug);
  if(move && map && markers[slug]){ map.setView(markers[slug].getLatLng(), 6, {animate:true}); }
  if(history.replaceState) history.replaceState(null,'',`#province-${slug}`);
}
function renderProvince(slug){
  const p = provinces.find(x => x.slug === slug) || provinces[0]; const m = modules[p.field]; const panel = document.getElementById('provincePanel'); if(!panel) return;
  panel.innerHTML = `
    <p class="eyebrow">Province Voice Route</p><h3>${p.name}</h3>
    <p><strong>Capital station:</strong> ${p.capital}</p>
    <div class="province-meta"><span class="pill">${m.title}</span><span class="pill">Voice · Field · Heritage</span><span class="pill">Local-to-global learning</span></div>
    <div class="province-qr-row"><img src="assets/qrs/province-${p.slug}.png" alt="QR code for ${p.name} province route"><div><strong>Province QR</strong><p>Use this route for local voice recording, field connection, and reflection.</p></div></div>
    <section class="learn-box"><h4>Voice Prompt</h4><p>${p.prompt}</p></section>
    <section class="learn-box"><h4>Integrated Task</h4><p>${p.task}</p></section>
    <section class="learn-box"><h4>Assessment Check</h4><p>${p.assessment}</p></section>
    <div class="voice-recorder"><h4>Local Voice Recorder</h4><p>Record a short local voice sample for this province. The recording remains in this browser session.</p><div class="button-row"><button class="btn small primary" type="button" id="startRec">Start</button><button class="btn small" type="button" id="stopRec" disabled>Stop</button><button class="btn small" type="button" id="openProvinceModule">Open Field Module</button></div><audio id="audioPlayback" controls hidden></audio><p id="recStatus" class="admin-message"></p></div>`;
  document.querySelectorAll('[data-province]').forEach(b => b.classList.toggle('active', b.dataset.province === p.slug));
  document.querySelectorAll('.custom-marker').forEach(el => el.classList.toggle('active', el.dataset.marker === p.slug));
  document.getElementById('openProvinceModule')?.addEventListener('click', () => { selectField(p.field, true); });
  setupRecorder();
}
function setupRecorder(){
  const start = document.getElementById('startRec'), stop = document.getElementById('stopRec'), audio = document.getElementById('audioPlayback'), status = document.getElementById('recStatus');
  start?.addEventListener('click', async () => {
    try{
      const stream = await navigator.mediaDevices.getUserMedia({audio:true}); audioChunks=[]; mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = e => audioChunks.push(e.data);
      mediaRecorder.onstop = () => { const blob = new Blob(audioChunks, {type:'audio/webm'}); audio.src = URL.createObjectURL(blob); audio.hidden=false; stream.getTracks().forEach(t=>t.stop()); status.textContent='Recording ready for playback.'; };
      mediaRecorder.start(); start.disabled=true; stop.disabled=false; status.textContent='Recording...';
    }catch(err){ status.textContent='Microphone access is unavailable or was not allowed.'; }
  });
  stop?.addEventListener('click', () => { if(mediaRecorder && mediaRecorder.state !== 'inactive'){ mediaRecorder.stop(); start.disabled=false; stop.disabled=true; } });
}

async function sha256(text){
  const bytes = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2,'0')).join('');
}
function setupAdmin(){
  const form = document.getElementById('pinForm');
  form?.addEventListener('submit', async e => {
    e.preventDefault(); const pin = document.getElementById('pinInput').value || ''; const msg = document.getElementById('pinMessage');
    const ok = await sha256(pin) === PIN_HASH;
    if(ok){ sessionStorage.setItem(SESSION_KEY,'1'); showDashboard(); }
    else { msg.textContent = 'Incorrect PIN. Access remains locked.'; }
  });
  document.getElementById('lockAdmin')?.addEventListener('click', () => { sessionStorage.removeItem(SESSION_KEY); hideDashboard(); });
  if(sessionStorage.getItem(SESSION_KEY)==='1') showDashboard();
}
function showDashboard(){
  document.getElementById('adminLock').hidden = true; document.getElementById('adminDashboard').hidden = false; populateAdmin();
}
function hideDashboard(){
  document.getElementById('adminLock').hidden = false; document.getElementById('adminDashboard').hidden = true; document.getElementById('pinInput').value='';
}
function populateAdmin(){
  const modSel = document.getElementById('adminModuleSelect'), provSel = document.getElementById('adminProvinceSelect'), provField = document.getElementById('adminProvinceField');
  document.getElementById('adminLead').value = state.lead || defaultLead;
  modSel.innerHTML = FIELD_ORDER.map(slug => `<option value="${slug}">${modules[slug].title}</option>`).join('');
  provSel.innerHTML = provinces.map(p => `<option value="${p.slug}">${p.name}</option>`).join('');
  provField.innerHTML = FIELD_ORDER.map(slug => `<option value="${slug}">${modules[slug].title}</option>`).join('');
  const fillMod = () => { const m = modules[modSel.value]; document.getElementById('adminModuleSummary').value=m.summary; document.getElementById('adminModuleLesson').value=m.lesson; document.getElementById('adminModuleReflection').value=m.reflection; };
  const fillProv = () => { const p = provinces.find(x=>x.slug===provSel.value); document.getElementById('adminProvincePrompt').value=p.prompt; provField.value=p.field; };
  modSel.onchange = fillMod; provSel.onchange = fillProv; fillMod(); fillProv();
  document.getElementById('saveLead').onclick = () => { state.lead = document.getElementById('adminLead').value.trim() || defaultLead; saveState(); document.querySelector('.lead').textContent=state.lead; setStatus('Platform statement saved.'); };
  document.getElementById('saveModule').onclick = () => { const slug=modSel.value; modules[slug].summary=document.getElementById('adminModuleSummary').value.trim(); modules[slug].lesson=document.getElementById('adminModuleLesson').value.trim(); modules[slug].reflection=document.getElementById('adminModuleReflection').value.trim(); saveState(); renderSpot(currentField); renderModule(currentField); renderQrStation(currentField); setStatus('Learning module saved.'); };
  document.getElementById('saveProvince').onclick = () => { const slug=provSel.value; const p=provinces.find(x=>x.slug===slug); p.prompt=document.getElementById('adminProvincePrompt').value.trim(); p.field=provField.value; p.task=`Connect ${p.name}'s voice and cultural context with ${modules[p.field].title}. Produce one short spoken explanation, then reflect on clarity, audience, and identity.`; saveState(); renderProvince(currentProvince); setStatus('Province voice route saved.'); };
  document.getElementById('exportData').onclick = exportData;
  document.getElementById('importData').onchange = importData;
  document.getElementById('resetData').onclick = () => { if(confirm('Reset all local edits in this browser?')){ localStorage.removeItem(STORE_KEY); location.reload(); } };
}
function setStatus(text){ const s=document.getElementById('adminStatus'); if(s) s.textContent=text; }
function exportData(){
  saveState(); const blob = new Blob([localStorage.getItem(STORE_KEY)], {type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='garuda-lingua-nusantara-admin-backup.json'; a.click(); URL.revokeObjectURL(a.href); setStatus('Backup exported.');
}
function importData(e){
  const file = e.target.files?.[0]; if(!file) return; const reader = new FileReader();
  reader.onload = () => { try{ JSON.parse(reader.result); localStorage.setItem(STORE_KEY, reader.result); location.reload(); } catch{ setStatus('Import failed: invalid JSON file.'); } };
  reader.readAsText(file);
}
function routeFromHash(){
  const hash = location.hash.replace('#','');
  if(hash.startsWith('module-')){ const slug = hash.replace('module-',''); if(modules[slug]) selectField(slug,false); }
  if(hash.startsWith('province-')){ const slug = hash.replace('province-',''); if(provinces.find(p=>p.slug===slug)) { setTimeout(()=>selectProvince(slug,true),300); } }
}
addEventListener('hashchange', routeFromHash);

document.addEventListener('DOMContentLoaded', init);
