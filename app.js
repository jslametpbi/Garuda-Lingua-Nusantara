const MODULES = {
  elt: {
    title: 'English Language Teaching', short: 'ELT', part: 'Manuscript / Open Book', qr: 'assets/qrs/module-elt.png',
    text: 'The open manuscript represents pedagogy, curriculum design, assessment literacy, reflective teaching, and classroom knowledge creation.',
    tags: ['Pedagogy', 'Curriculum', 'Feedback', 'Assessment'],
    summary: 'This route helps learners and lecturers connect teaching principles with classroom practice, feedback cycles, inclusive participation, and research-informed instruction.',
    outcomes: ['Design a learner-centered English lesson.', 'Apply formative feedback to improve learning.', 'Connect assessment criteria with classroom outcomes.'],
    materials: ['Lesson-plan framework', 'Classroom interaction checklist', 'Formative feedback guide', 'ELT assessment rubric'],
    tasks: [
      ['Listening', 'Listen to a classroom interaction and identify teacher feedback moves.'],
      ['Speaking', 'Explain one teaching strategy for mixed-ability learners.'],
      ['Reading', 'Read a lesson plan and identify objectives, materials, procedures, and assessment.'],
      ['Writing', 'Write a 150-word reflective teaching note.'],
      ['Vocabulary', 'Match ELT terms with classroom examples.'],
      ['Grammar / Discourse', 'Revise teacher instructions for clarity and sequencing.'],
      ['Intercultural / Pragmatic', 'Choose inclusive classroom expressions for diverse learners.']
    ],
    assessments: [
      ['Multiple Choice', 'Which element should align with learning outcomes?', 'Materials, tasks, and assessment criteria.'],
      ['True / False', 'Feedback should only be given at the end of a course.', 'False. Feedback should support learning during the process.'],
      ['Short Answer', 'Describe one way to make an English lesson more inclusive.', 'Expected: specific strategy and reason.'],
      ['Rubric Checklist', 'Check objectives, activity sequence, feedback, and assessment alignment.', '4-point criteria.'],
      ['Teaching Microtask', 'Prepare a 3-minute mini explanation for a target learner group.', 'Performance-based.']
    ],
    prompt: 'Explain one English teaching strategy that supports learner participation and meaningful feedback.',
    coach: 'Use one objective, one learner action, one feedback move, and one evidence of learning.'
  },
  elf: {
    title: 'ELF Pronunciation', short: 'ELF', part: 'Left Voice Wing', qr: 'assets/qrs/module-elf.png',
    text: 'The left wing symbolizes diverse accents, pronunciation awareness, rhythm, stress, intelligibility, and respect for global English users.',
    tags: ['Accent', 'Stress', 'Rhythm', 'Speaking'],
    summary: 'This route trains pronunciation for global intelligibility rather than native-like imitation. Learners practice clarity, listener support, and communication confidence.',
    outcomes: ['Produce clearer word stress and sentence stress.', 'Use pausing and emphasis to support listener comprehension.', 'Evaluate pronunciation using intelligibility-based criteria.'],
    materials: ['ELF pronunciation chart', 'Stress and rhythm drills', 'Intelligibility rubric', 'Real conversation audio pack'],
    tasks: [
      ['Listening', 'Listen to three international speakers and identify words that remain intelligible across accents.'],
      ['Speaking', 'Record a 60-second self-introduction for an international audience.'],
      ['Reading', 'Read a pronunciation transcript and mark stress, pause, and emphasis.'],
      ['Writing', 'Write a speaking script with clear signposting and listener support.'],
      ['Vocabulary', 'Practice discipline-related terms with stress marking.'],
      ['Grammar / Discourse', 'Use discourse markers to make spoken explanation easier to follow.'],
      ['Intercultural / Pragmatic', 'Respond politely when a listener asks for clarification.']
    ],
    assessments: [
      ['Multiple Choice', 'In ELF pronunciation, the main priority is...', 'Intelligibility and successful communication.'],
      ['True / False', 'A speaker must sound native-like to be internationally understandable.', 'False.'],
      ['Short Answer', 'Write two strategies for improving listener comprehension.', 'Possible: slow down, pause, stress key words, rephrase.'],
      ['Pronunciation Rubric', 'Assess stress, rhythm, clarity, pausing, and repair strategy.', 'Performance-based.'],
      ['Speaking Task', 'Record a 90-second explanation and check intelligibility with a peer.', 'Peer feedback.']
    ],
    prompt: 'Introduce yourself for an international academic setting. Focus on clarity, stress, and pausing.',
    coach: 'Focus on clear key words, slower rhythm, signposting, and checking listener understanding.'
  },
  intelligibility: {
    title: 'Global Intelligibility', short: 'GI', part: 'Luminous Orb', qr: 'assets/qrs/module-intelligibility.png',
    text: 'The luminous orb represents shared meaning, listener understanding, intercultural awareness, and global academic communication.',
    tags: ['Meaning', 'Clarity', 'Audience', 'Collaboration'],
    summary: 'This route helps learners communicate ideas across linguistic and cultural boundaries through audience awareness, paraphrasing, checking understanding, and clarity.',
    outcomes: ['Explain ideas clearly to international listeners.', 'Use repair strategies when communication breaks down.', 'Adapt language to audience and purpose.'],
    materials: ['Audience-analysis card', 'Repair strategy list', 'Global communication scenarios', 'Clarity checklist'],
    tasks: [
      ['Listening', 'Identify clarification requests in an international conversation.'],
      ['Speaking', 'Explain a complex idea using simple signposting.'],
      ['Reading', 'Read an academic abstract and identify difficult phrases.'],
      ['Writing', 'Rewrite a dense paragraph for broader international readers.'],
      ['Vocabulary', 'Paraphrase academic terms in accessible English.'],
      ['Grammar / Discourse', 'Use connectors to show cause, contrast, and sequence.'],
      ['Intercultural / Pragmatic', 'Practice clarification and confirmation politely.']
    ],
    assessments: [
      ['Multiple Choice', 'A repair strategy is used when...', 'Meaning is unclear and needs support.'],
      ['True / False', 'Simplifying language can strengthen communication without reducing academic quality.', 'True.'],
      ['Short Answer', 'Write one phrase for checking listener understanding.', 'Example: Does that make sense so far?'],
      ['Communication Rubric', 'Rate clarity, organization, audience support, and repair strategy.', '4-point criteria.'],
      ['Oral Task', 'Explain one research topic to a non-specialist audience.', 'Performance-based.']
    ],
    prompt: 'Explain one academic idea in simple, respectful English for an international audience.',
    coach: 'Define terms, sequence your points, and invite confirmation from listeners.'
  },
  ai: {
    title: 'AI Literacy', short: 'AI', part: 'Right Digital Wing', qr: 'assets/qrs/module-ai.png',
    text: 'The right digital wing represents responsible AI use, prompt design, verification, authorship, transparency, and human judgment.',
    tags: ['Prompting', 'Verification', 'Ethics', 'Creativity'],
    summary: 'This route develops critical AI literacy for language education: prompt design, output evaluation, bias awareness, source checking, and transparent use.',
    outcomes: ['Write a clear educational AI prompt.', 'Evaluate AI output for accuracy and bias.', 'Explain ethical and transparent AI-supported learning.'],
    materials: ['Prompt-design template', 'AI output review checklist', 'Disclosure models', 'Bias and accuracy card'],
    tasks: [
      ['Listening', 'Listen to peer feedback on an AI-generated activity and note revision points.'],
      ['Speaking', 'Explain how AI can support learning without replacing human judgment.'],
      ['Reading', 'Analyze an AI-generated text and identify unsupported claims.'],
      ['Writing', 'Revise an AI draft using evidence and your own voice.'],
      ['Vocabulary', 'Define prompt, hallucination, bias, transparency, and verification.'],
      ['Grammar / Discourse', 'Improve cohesion in an AI-generated explanation.'],
      ['Intercultural / Pragmatic', 'Check whether AI output is culturally appropriate.']
    ],
    assessments: [
      ['Multiple Choice', 'Responsible AI literacy requires...', 'Critical evaluation and human revision.'],
      ['True / False', 'AI output should be verified before academic use.', 'True.'],
      ['Short Answer', 'Write one AI disclosure sentence for a learning product.', 'Expected: transparent, specific, concise.'],
      ['Prompt Rubric', 'Check purpose, context, audience, criteria, and verification plan.', 'Rubric-based.'],
      ['Design Task', 'Create an AI-supported speaking activity with assessment criteria.', 'Product-based.']
    ],
    prompt: 'Explain how AI can support English learning without replacing teacher judgment or learner responsibility.',
    coach: 'Prompt with purpose, evaluate the output, verify facts, revise ethically, and disclose support.'
  },
  esp: {
    title: 'English for Specific Purposes', short: 'ESP', part: 'Manuscript Route', qr: 'assets/qrs/module-esp.png',
    text: 'The manuscript route represents discipline-specific language, professional genres, needs analysis, and field-based communication.',
    tags: ['Needs Analysis', 'Genre', 'Vocabulary', 'Profession'],
    summary: 'This route connects English learning with specific academic and professional fields through needs analysis, genre study, terminology, and workplace communication.',
    outcomes: ['Conduct a simple ESP needs analysis.', 'Analyze professional genres and terminology.', 'Design a field-specific English task.'],
    materials: ['Needs-analysis form', 'Genre-analysis worksheet', 'Discipline glossary template', 'Professional scenario card'],
    tasks: [
      ['Listening', 'Listen to a professional scenario and identify key information.'],
      ['Speaking', 'Give a one-minute professional explanation for a non-specialist.'],
      ['Reading', 'Analyze a field text for purpose, audience, and structure.'],
      ['Writing', 'Write a field-specific email, abstract, or report paragraph.'],
      ['Vocabulary', 'Create a ten-term discipline glossary with plain-English meanings.'],
      ['Grammar / Discourse', 'Compare formal and informal professional expressions.'],
      ['Intercultural / Pragmatic', 'Choose appropriate tone for a professional audience.']
    ],
    assessments: [
      ['Multiple Choice', 'ESP begins with...', 'Learner and field-specific needs.'],
      ['True / False', 'ESP tasks should connect English with authentic professional use.', 'True.'],
      ['Short Answer', 'Choose one discipline and identify one target genre.', 'Expected: discipline, genre, audience.'],
      ['Genre Rubric', 'Evaluate purpose, structure, vocabulary, and audience awareness.', 'Rubric-based.'],
      ['Project Task', 'Design one ESP activity and assessment criteria.', 'Product-based.']
    ],
    prompt: 'Describe one professional situation where English is needed and explain the vocabulary, genre, and audience.',
    coach: 'Start with discipline, audience, purpose, genre, language features, and criteria.'
  },
  digital: {
    title: 'Digital Learning', short: 'DL', part: 'AR Digital Layer', qr: 'assets/qrs/module-digital.png',
    text: 'The AR and QR layer represents mobile learning, digital participation, feedback loops, multimodal content, and learning analytics.',
    tags: ['QR', 'AR', 'Mobile', 'Feedback'],
    summary: 'This route transforms the monument into an active learning system through QR stations, AR interpretation, mobile tasks, evidence collection, and feedback.',
    outcomes: ['Design a digital learning activity with clear pedagogical value.', 'Connect QR/AR access with learner action.', 'Evaluate a digital task using evidence and feedback.'],
    materials: ['QR learning-station plan', 'Mobile task sheet', 'LMS prompt template', 'Feedback-loop checklist'],
    tasks: [
      ['Listening', 'Listen to peer feedback on a digital task design.'],
      ['Speaking', 'Pitch a QR learning station in one minute.'],
      ['Reading', 'Identify objective, tool, learner action, and evidence in a digital task.'],
      ['Writing', 'Write clear QR station instructions for visitors.'],
      ['Vocabulary', 'Define QR route, AR layer, blended learning, feedback loop, and analytics.'],
      ['Grammar / Discourse', 'Revise digital instructions for sequence and clarity.'],
      ['Intercultural / Pragmatic', 'Design inclusive access instructions for diverse visitors.']
    ],
    assessments: [
      ['Multiple Choice', 'Technology adds learning value when it...', 'Serves a clear objective.'],
      ['True / False', 'A digital tool should be selected after the learning objective is clear.', 'True.'],
      ['Short Answer', 'Write one QR learning instruction with action and evidence.', 'Expected: content, task, evidence.'],
      ['Design Rubric', 'Check objective, tool fit, learner action, evidence, and feedback.', 'Rubric-based.'],
      ['Prototype Task', 'Create a QR station plan for one monument spot.', 'Product-based.']
    ],
    prompt: 'Explain how a QR or AR station can transform a monument into an active learning environment.',
    coach: 'Avoid tool-first design. Define the objective, action, evidence, feedback, and reflection.'
  },
  ethics: {
    title: 'Research Ethics', short: 'RE', part: 'Foundation Layer', qr: 'assets/qrs/module-ethics.png',
    text: 'The foundation represents integrity, informed consent, data responsibility, transparency, respect for participants, and accountable scholarship.',
    tags: ['Integrity', 'Consent', 'Data', 'Transparency'],
    summary: 'This route guides ethical research practice in language education, including participant protection, consent, privacy, data handling, transparent reporting, and responsible AI use.',
    outcomes: ['Identify key ethical issues in language-education research.', 'Write a clear consent explanation.', 'Apply data-protection principles to classroom research.'],
    materials: ['Consent checklist', 'Anonymization guide', 'Ethics scenario cards', 'Responsible reporting guide'],
    tasks: [
      ['Listening', 'Listen to a research scenario and identify ethical risks.'],
      ['Speaking', 'Explain a study to participants using accessible language.'],
      ['Reading', 'Read a consent form and identify missing elements.'],
      ['Writing', 'Write a participant information paragraph.'],
      ['Vocabulary', 'Define consent, confidentiality, anonymity, risk, and withdrawal.'],
      ['Grammar / Discourse', 'Rewrite consent information in clear, non-coercive language.'],
      ['Intercultural / Pragmatic', 'Choose respectful language when inviting participants.']
    ],
    assessments: [
      ['Multiple Choice', 'Informed consent means participants...', 'Understand and voluntarily agree to participate.'],
      ['True / False', 'Participants should be allowed to withdraw according to the approved procedure.', 'True.'],
      ['Short Answer', 'Write one sentence explaining confidentiality to participants.', 'Expected: clear and respectful.'],
      ['Ethics Checklist', 'Check consent, privacy, risk, storage, and reporting.', 'Checklist-based.'],
      ['Scenario Task', 'Identify ethical issues in a classroom data-collection plan.', 'Case-based.']
    ],
    prompt: 'Explain why research ethics is the foundation of responsible educational innovation.',
    coach: 'Protect people first: informed consent, privacy, risk reduction, transparent reporting, and respectful communication.'
  },
  heritage: {
    title: 'Nusantara Heritage', short: 'NH', part: 'Archipelagic Base', qr: 'assets/qrs/module-heritage.png',
    text: 'The archipelagic base represents Indonesia’s multilingual heritage, cultural memory, local wisdom, and the many voices that support global knowledge.',
    tags: ['Culture', 'Multilinguality', 'Identity', 'Local Wisdom'],
    summary: 'This route connects language education with Nusantara heritage through local voices, province routes, cultural knowledge, and multilingual respect.',
    outcomes: ['Explain how local heritage can enrich English learning.', 'Connect multilingual identity with global communication.', 'Design a heritage-based learning activity.'],
    materials: ['Province voice-map guide', 'Cultural narrative template', 'Heritage vocabulary list', 'Local wisdom reflection card'],
    tasks: [
      ['Listening', 'Listen to a province voice prompt and identify key cultural references.'],
      ['Speaking', 'Share one local heritage idea in accessible English.'],
      ['Reading', 'Read a short cultural note and identify values, places, and practices.'],
      ['Writing', 'Write a bilingual heritage description for international visitors.'],
      ['Vocabulary', 'Build a list of heritage terms with English explanations.'],
      ['Grammar / Discourse', 'Use descriptive language to explain cultural objects.'],
      ['Intercultural / Pragmatic', 'Compare respectful ways to introduce local culture.']
    ],
    assessments: [
      ['Multiple Choice', 'Heritage-based learning helps learners...', 'Connect identity with meaningful communication.'],
      ['True / False', 'Local culture can become a legitimate source for global English communication.', 'True.'],
      ['Short Answer', 'Describe one local cultural practice in two English sentences.', 'Expected: clarity and respect.'],
      ['Heritage Rubric', 'Assess accuracy, clarity, cultural respect, and audience awareness.', 'Rubric-based.'],
      ['Voice Task', 'Record a short heritage explanation for international visitors.', 'Performance-based.']
    ],
    prompt: 'Introduce one Nusantara cultural value in English so international visitors can understand it respectfully.',
    coach: 'Use place, meaning, value, and audience. Explain local knowledge without oversimplifying it.'
  }
};

const SPOT_ORDER = ['elt','elf','intelligibility','ai','esp','digital','ethics','heritage'];
const SPOT_ICONS = {elt:'📖',elf:'〽',intelligibility:'◉',ai:'⌁',esp:'▣',digital:'▦',ethics:'⚖',heritage:'✺'};


const QR_SLUGS = {
  'Aceh':'aceh','Sumatera Utara':'north-sumatra','Sumatera Barat':'west-sumatra','Riau':'riau','Kepulauan Riau':'riau-islands','Jambi':'jambi','Sumatera Selatan':'south-sumatra','Kep. Bangka Belitung':'bangka-belitung-islands','Bengkulu':'bengkulu','Lampung':'lampung',
  'Banten':'banten','DKI Jakarta':'jakarta','Jawa Barat':'west-java','Jawa Tengah':'central-java','DI Yogyakarta':'yogyakarta','Jawa Timur':'east-java','Bali':'bali','Nusa Tenggara Barat':'west-nusa-tenggara','Nusa Tenggara Timur':'east-nusa-tenggara',
  'Kalimantan Barat':'west-kalimantan','Kalimantan Tengah':'central-kalimantan','Kalimantan Selatan':'south-kalimantan','Kalimantan Timur':'east-kalimantan','Kalimantan Utara':'north-kalimantan',
  'Sulawesi Utara':'north-sulawesi','Gorontalo':'gorontalo','Sulawesi Tengah':'central-sulawesi','Sulawesi Barat':'west-sulawesi','Sulawesi Selatan':'south-sulawesi','Sulawesi Tenggara':'southeast-sulawesi',
  'Maluku Utara':'north-maluku','Maluku':'maluku','Papua Barat Daya':'southwest-papua','Papua Barat':'west-papua','Papua Tengah':'central-papua','Papua Pegunungan':'highland-papua','Papua':'papua','Papua Selatan':'south-papua'
};

const PROVINCES = [
 ['Aceh','Sumatra',7,30,'Banda Aceh','Acehnese, Gayo, Indonesian'],['Sumatera Utara','Sumatra',12,35,'Medan','Batak, Malay, Indonesian'],['Sumatera Barat','Sumatra',16,47,'Padang','Minangkabau, Indonesian'],['Riau','Sumatra',21,43,'Pekanbaru','Malay, Indonesian'],['Kepulauan Riau','Sumatra',28,39,'Tanjung Pinang','Malay, Indonesian'],['Jambi','Sumatra',25,53,'Jambi','Jambi Malay, Indonesian'],['Sumatera Selatan','Sumatra',30,59,'Palembang','Palembang Malay, Indonesian'],['Kep. Bangka Belitung','Sumatra',35,55,'Pangkalpinang','Malay, Indonesian'],['Bengkulu','Sumatra',23,64,'Bengkulu','Rejang, Malay, Indonesian'],['Lampung','Sumatra',34,70,'Bandar Lampung','Lampung, Indonesian'],
 ['Banten','Java',39,76,'Serang','Sundanese, Bantenese, Indonesian'],['DKI Jakarta','Java',43,76,'Jakarta','Betawi, Indonesian'],['Jawa Barat','Java',46,78,'Bandung','Sundanese, Indonesian'],['Jawa Tengah','Java',52,79,'Semarang','Javanese, Banyumasan, Indonesian'],['DI Yogyakarta','Java',55,82,'Yogyakarta','Javanese, Indonesian'],['Jawa Timur','Java',60,80,'Surabaya','Javanese, Madurese, Indonesian'],
 ['Bali','Bali–Nusa Tenggara',66,84,'Denpasar','Balinese, Indonesian'],['Nusa Tenggara Barat','Bali–Nusa Tenggara',72,84,'Mataram','Sasak, Samawa, Mbojo, Indonesian'],['Nusa Tenggara Timur','Bali–Nusa Tenggara',80,86,'Kupang','Tetun, Dawan, Indonesian'],
 ['Kalimantan Barat','Kalimantan',42,42,'Pontianak','Malay, Dayak, Indonesian'],['Kalimantan Tengah','Kalimantan',49,51,'Palangka Raya','Dayak, Indonesian'],['Kalimantan Selatan','Kalimantan',54,58,'Banjarbaru','Banjar, Indonesian'],['Kalimantan Timur','Kalimantan',58,39,'Samarinda','Kutai, Dayak, Indonesian'],['Kalimantan Utara','Kalimantan',58,28,'Tanjung Selor','Tidung, Dayak, Indonesian'],
 ['Sulawesi Utara','Sulawesi',76,35,'Manado','Minahasan, Manado Malay, Indonesian'],['Gorontalo','Sulawesi',72,42,'Gorontalo','Gorontalo, Indonesian'],['Sulawesi Tengah','Sulawesi',69,50,'Palu','Kaili, Indonesian'],['Sulawesi Barat','Sulawesi',65,56,'Mamuju','Mandar, Indonesian'],['Sulawesi Selatan','Sulawesi',68,64,'Makassar','Makassarese, Bugis, Indonesian'],['Sulawesi Tenggara','Sulawesi',73,63,'Kendari','Tolaki, Buton, Indonesian'],
 ['Maluku Utara','Maluku',84,46,'Sofifi','Ternate, Tidore, Indonesian'],['Maluku','Maluku',85,57,'Ambon','Ambonese Malay, Indonesian'],
 ['Papua Barat Daya','Papua',91,49,'Sorong','Papuan Malay, Indonesian'],['Papua Barat','Papua',93,52,'Manokwari','Papuan Malay, Indonesian'],['Papua Tengah','Papua',96,54,'Nabire','Mee, Moni, Indonesian'],['Papua Pegunungan','Papua',97,58,'Jayawijaya','Dani, Yali, Indonesian'],['Papua','Papua',98,62,'Jayapura','Papuan Malay, Indonesian'],['Papua Selatan','Papua',96,71,'Merauke','Marind, Indonesian']
].map(([name,region,x,y,capital,langs]) => ({name,region,x,y,capital,langs, slug: QR_SLUGS[name] || slugify(name)}));

let currentModule = 'elt';
let currentProvince = PROVINCES.find(p=>p.name==='Jawa Tengah') || PROVINCES[0];
let utterance = null;
let mediaRecorder = null;
let autoRotating = false;
let rotation = 0;
let autoTimer = null;

function slugify(str){return str.toLowerCase().replace(/[().]/g,'').replace(/&/g,'and').replace(/\s+/g,'-').normalize('NFD').replace(/[\u0300-\u036f]/g,'');}
function qs(sel,root=document){return root.querySelector(sel)}
function qsa(sel,root=document){return [...root.querySelectorAll(sel)]}

function init(){
  qs('#year').textContent = new Date().getFullYear();
  setupNav(); setupReveal(); setupBackToTop(); setupAmbient(); renderSpots(); renderModules(); renderVoiceMap(); setupViewer(); setupLearning(); setupSpeaker(); setupCoach(); setupAdmin(); setupQr(); selectSpot('elt'); selectModule('elt'); selectProvince(currentProvince.name); setupGlobalButtons();
}

function setupNav(){
  const nav = qs('.nav'); const toggle = qs('.nav-toggle');
  toggle?.addEventListener('click',()=>{const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', open ? 'true':'false')});
  const links = qsa('.nav a');
  const sections = links.map(a => qs(a.getAttribute('href'))).filter(Boolean);
  window.addEventListener('scroll',()=>{
    const y = window.scrollY + 180;
    let active = '#home'; sections.forEach(sec=>{ if(sec.offsetTop <= y) active = '#'+sec.id; });
    links.forEach(a=>a.classList.toggle('active', a.getAttribute('href')===active));
  }, {passive:true});
  links.forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
}
function setupReveal(){
  const io = new IntersectionObserver(entries=>entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); }),{threshold:.12});
  qsa('.reveal').forEach(el=>io.observe(el));
}
function setupBackToTop(){
  const b=qs('#backToTop'); window.addEventListener('scroll',()=>b.classList.toggle('show', scrollY>480),{passive:true}); b.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
}
function setupGlobalButtons(){
  qsa('[data-module-button]').forEach(btn=>btn.addEventListener('click',()=>{ selectModule(btn.dataset.moduleButton); location.hash='learning-studio'; }));
  qsa('[data-admin-jump]').forEach(btn=>btn.addEventListener('click',()=>{ location.hash='admin'; if(!qs('#adminDashboard').classList.contains('hidden')) showAdminPanel(btn.dataset.adminJump); }));
}
function setupAmbient(){
  const c=qs('#ambientCanvas'), ctx=c.getContext('2d'); let w,h,particles=[];
  function resize(){w=c.width=innerWidth;h=c.height=innerHeight;particles=Array.from({length:Math.min(120,Math.floor(w*h/16000))},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.8+.3,v:Math.random()*.3+.05,a:Math.random()*.45+.15}));}
  resize(); addEventListener('resize',resize);
  (function draw(){ctx.clearRect(0,0,w,h);particles.forEach(p=>{p.y-=p.v;if(p.y<0){p.y=h;p.x=Math.random()*w}ctx.beginPath();ctx.fillStyle=`rgba(235,178,65,${p.a})`;ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();});requestAnimationFrame(draw);})();
}

function renderSpots(){
  const list = qs('#spotList');
  list.innerHTML = SPOT_ORDER.map(k=>`<button type="button" data-spot="${k}"><i>${SPOT_ICONS[k]}</i><span><strong>${MODULES[k].title}</strong><small>${MODULES[k].part}</small></span></button>`).join('');
  qsa('[data-spot]').forEach(el=>el.addEventListener('click',()=>selectSpot(el.dataset.spot)));
}
function selectSpot(key){
  currentModule = key; const m = MODULES[key];
  qsa('[data-spot]').forEach(el=>el.classList.toggle('active', el.dataset.spot===key));
  qs('#spotTitle').textContent = m.title;
  qs('#spotPart').textContent = m.part;
  qs('#spotText').textContent = m.text;
  qs('#spotTags').innerHTML = m.tags.map(t=>`<span>${t}</span>`).join('');
  qs('#spotQr').src = m.qr;
  qs('#spotQrBtn').onclick = () => openQr(m.title, m.qr, `Scan to access the ${m.title} monument route.`);
  qs('#spotModuleBtn').onclick = () => {selectModule(key); location.hash='learning-studio'};
}
function setupViewer(){
  const stage=qs('#monumentStage'), slider=qs('#zoomSlider'); let startX=0, dragging=false, startRot=0;
  const apply=()=>stage.style.setProperty('--rot', rotation+'deg');
  qs('#rotateLeft').addEventListener('click',()=>{rotation-=10;apply()});
  qs('#rotateRight').addEventListener('click',()=>{rotation+=10;apply()});
  qs('#resetRotate').addEventListener('click',()=>{rotation=0;stage.style.setProperty('--scale',1);slider.value=100;apply()});
  qs('#autoRotate').addEventListener('click',()=>{autoRotating=!autoRotating;qs('#autoRotate').classList.toggle('active',autoRotating); if(autoRotating){autoTimer=setInterval(()=>{rotation+=.8;apply()},30)} else clearInterval(autoTimer)});
  slider.addEventListener('input',()=>stage.style.setProperty('--scale', slider.value/100));
  stage.addEventListener('pointerdown',e=>{dragging=true;startX=e.clientX;startRot=rotation;stage.setPointerCapture(e.pointerId)});
  stage.addEventListener('pointermove',e=>{if(!dragging)return; rotation=startRot+(e.clientX-startX)*.12; apply();});
  stage.addEventListener('pointerup',()=>dragging=false); stage.addEventListener('pointercancel',()=>dragging=false);
}

function renderModules(){
  qs('#modulePicker').innerHTML = SPOT_ORDER.map(k=>`<button type="button" data-module="${k}"><strong>${MODULES[k].short}</strong><br><small>${MODULES[k].title}</small></button>`).join('');
  qsa('[data-module]').forEach(b=>b.addEventListener('click',()=>selectModule(b.dataset.module)));
}
function selectModule(key){
  currentModule = key; const m=MODULES[key]; selectSpot(key);
  qsa('[data-module]').forEach(b=>b.classList.toggle('active', b.dataset.module===key));
  qs('#moduleIcon').textContent = m.short;
  qs('#modulePart').textContent = m.part;
  qs('#moduleTitle').textContent = m.title;
  qs('#moduleSummary').textContent = m.summary;
  qs('#speakerText').textContent = m.prompt;
  qs('#coachOutput').textContent = m.coach;
  renderTab(qs('.tabs button.active')?.dataset.tab || 'outcomes');
}
function setupLearning(){
  qsa('.tabs button').forEach(btn=>btn.addEventListener('click',()=>{qsa('.tabs button').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); renderTab(btn.dataset.tab); }));
}
function renderTab(tab){
  const m=MODULES[currentModule], el=qs('#tabContent');
  if(tab==='outcomes') el.innerHTML = `<div class="content-grid"><div class="content-card"><h4>Learning Outcomes</h4><ul>${m.outcomes.map(x=>`<li>${x}</li>`).join('')}</ul></div><div class="content-card"><h4>Learning Process</h4><ol><li>Explore the monument spot.</li><li>Study the core material.</li><li>Practice English skills through tasks.</li><li>Complete assessment and reflection.</li><li>Scan or share QR evidence.</li></ol></div></div>`;
  if(tab==='materials') el.innerHTML = `<div class="materials-grid">${m.materials.map((x,i)=>`<div class="material-card"><h4>${x}</h4><p>Field-based material connected to ${m.part}. Includes text, prompt, task instructions, and self-check criteria.</p><button>Open Material ${i+1}</button></div>`).join('')}</div>`;
  if(tab==='tasks') el.innerHTML = `<div class="skills-grid">${m.tasks.map(([skill,task],i)=>`<div class="task-card"><h4>${i+1}. ${skill} Task</h4><p>${task}</p><button>${skill==='Speaking'?'Start Recording':skill==='Listening'?'Play Audio':skill==='Writing'?'Start Writing':'Open Task'}</button></div>`).join('')}</div>`;
  if(tab==='assessments') el.innerHTML = `<div class="assessment-grid">${m.assessments.map(([type,prompt,answer],i)=>`<div class="assessment-card"><h4>${i+1}. ${type}</h4><p>${prompt}</p><details><summary>View expected response / criterion</summary><p>${answer}</p></details><button>Save Response</button></div>`).join('')}</div>`;
  if(tab==='speaker') el.innerHTML = `<div class="content-card"><h4>Speaker Practice</h4><p>${m.prompt}</p><p>Use Play, Pause, and Stop on the Speaker panel. The Stop button cancels speech immediately so audio will not continue.</p></div>`;
  if(tab==='coach') el.innerHTML = `<div class="content-card"><h4>AI Coach Guidance</h4><p>${m.coach}</p><p>Use the AI Coach panel to request task ideas, feedback language, pronunciation guidance, material design, and varied assessment formats.</p></div>`;
  if(tab==='reflection') el.innerHTML = `<div class="reflection-card"><h4>Reflection Journal</h4><p>Write a short reflection after completing the module.</p><textarea placeholder="What did I learn? What was difficult? How can I improve?" style="width:100%;min-height:180px;border:1px solid rgba(229,176,74,.28);background:rgba(0,0,0,.3);color:#eee;border-radius:16px;padding:14px"></textarea><br><br><button>Save Reflection</button></div>`;
}

function setupSpeaker(){
  qs('#playSpeech').addEventListener('click',()=>speak(MODULES[currentModule].prompt));
  qs('#pauseSpeech').addEventListener('click',()=>{ if(speechSynthesis.speaking && !speechSynthesis.paused) speechSynthesis.pause(); else speechSynthesis.resume(); });
  qs('#stopSpeech').addEventListener('click',stopSpeech);
}
function speak(text){ stopSpeech(); utterance = new SpeechSynthesisUtterance(text); utterance.lang='en-US'; utterance.rate=.92; speechSynthesis.speak(utterance); }
function stopSpeech(){ if('speechSynthesis' in window){speechSynthesis.cancel();} utterance=null; }
function setupCoach(){
  const responses = {
    pronunciation: 'Pronunciation feedback: mark key words, slow down slightly, use sentence stress, pause after main ideas, and check whether the listener understands.',
    speaking: 'Speaking feedback: begin with a clear purpose, organize ideas in three points, use examples, and finish by inviting questions.',
    materials: 'Material design: define objective, learner level, input text/audio, skill task, scaffolding, assessment evidence, and reflection prompt.',
    assessment: 'Assessment design: combine multiple choice, true/false, short answer, speaking performance, writing task, rubric, and self-assessment.'
  };
  qsa('[data-coach]').forEach(b=>b.addEventListener('click',()=>qs('#coachOutput').textContent=responses[b.dataset.coach]));
  qs('#coachSend').addEventListener('click',()=>{ const v=qs('#coachInput').value.trim(); qs('#coachOutput').textContent = v ? `Suggested design response: connect "${v}" with objective, input, learner action, feedback, evidence, and reflection. Add one assessment criterion for clarity and one for communicative effectiveness.` : MODULES[currentModule].coach; });
}

function renderVoiceMap(){
  const map=qs('#indonesiaMap'); const rail=qs('#provinceRail');
  map.innerHTML = PROVINCES.map(p=>`<button type="button" class="province-marker" style="--x:${p.x}%;--y:${p.y}%" data-province="${p.name}" title="${p.name}" aria-label="Select ${p.name}"></button>`).join('');
  rail.innerHTML = PROVINCES.map(p=>`<button type="button" data-province="${p.name}" data-region="${p.region}">${p.name}</button>`).join('');
  qsa('[data-province]').forEach(b=>b.addEventListener('click',()=>selectProvince(b.dataset.province)));
  qs('#provinceSearch').addEventListener('input', filterProvinces);
  qs('#islandFilter').addEventListener('change', filterProvinces);
  qs('#provinceListen').addEventListener('click',()=>speak(qs('#provincePrompt').textContent));
  qs('#provinceStop').addEventListener('click',()=>{stopSpeech(); stopRecording();});
  qs('#provinceRecord').addEventListener('click',toggleRecording);
  qs('#provinceQrBtn').addEventListener('click',()=>openQr(currentProvince.name, `assets/qrs/province-${currentProvince.slug}.png`, `Scan to open the ${currentProvince.name} Voice Map route.`));
}
function selectProvince(name){
  const p=PROVINCES.find(x=>x.name===name) || PROVINCES[0]; currentProvince=p;
  qsa('[data-province]').forEach(b=>b.classList.toggle('active', b.dataset.province===name));
  qs('#provinceName').textContent=p.name;
  qs('#provinceMeta').textContent=`${p.region} · ${p.capital} · ${p.langs}`;
  qs('#provincePrompt').textContent=`Welcome to ${p.name}. Listen, repeat, and explain one ${p.region} heritage idea in clear English for international visitors.`;
  const routes = ['ELF pronunciation route','Nusantara heritage note','ESP local-profession task','Digital QR activity'];
  qs('#provinceRoutes').innerHTML = routes.map((r,i)=>`<button type="button" onclick="selectModule('${SPOT_ORDER[(i+1)%SPOT_ORDER.length]}'); location.hash='learning-studio'">Route ${i+1}<br><small>${r}</small></button>`).join('');
}
function filterProvinces(){
  const q=qs('#provinceSearch').value.toLowerCase(); const region=qs('#islandFilter').value;
  let count=0;
  qsa('#provinceRail button, .province-marker').forEach(b=>{
    const p=PROVINCES.find(x=>x.name===b.dataset.province); const show = (!q || p.name.toLowerCase().includes(q)) && (region==='all'||p.region===region);
    b.style.display=show?'':'none'; if(show && b.classList.contains('province-marker')) count++;
  });
  qs('#provinceCount').textContent=count;
}
async function toggleRecording(){
  if(mediaRecorder && mediaRecorder.state==='recording'){stopRecording(); return;}
  try{ const stream=await navigator.mediaDevices.getUserMedia({audio:true}); const chunks=[]; mediaRecorder=new MediaRecorder(stream); mediaRecorder.ondataavailable=e=>chunks.push(e.data); mediaRecorder.onstop=()=>{stream.getTracks().forEach(t=>t.stop()); qs('#recordStatus').textContent='Voice recorded locally for this session. You can re-record or use it for reflection.';}; mediaRecorder.start(); qs('#recordStatus').textContent='Recording... click Stop to finish.'; }
  catch(e){qs('#recordStatus').textContent='Recording permission is needed. Browser security may require HTTPS after deployment.';}
}
function stopRecording(){ if(mediaRecorder && mediaRecorder.state==='recording') mediaRecorder.stop(); }

function setupAdmin(){
  const unlockBtn = qs('#unlockAdmin');
  const pinInput = qs('#adminPin');
  const lockBtn = qs('#lockAdmin');
  function unlockDashboard(){
    if(pinInput.value === 'JS2026') {
      qs('#adminGate').classList.add('hidden');
      qs('#adminDashboard').classList.remove('hidden');
      qs('#pinFeedback').textContent='';
      showAdminPanel('materials');
      pinInput.value='';
    } else {
      qs('#pinFeedback').textContent='Incorrect PIN.';
    }
  }
  function lockDashboard(){
    qs('#adminDashboard').classList.add('hidden');
    qs('#adminGate').classList.remove('hidden');
    pinInput.value='';
    qs('#pinFeedback').textContent='Dashboard locked. Enter PIN to unlock again.';
    stopSpeech();
  }
  unlockBtn.addEventListener('click', unlockDashboard);
  pinInput.addEventListener('keydown', e=>{ if(e.key==='Enter'){ e.preventDefault(); unlockDashboard(); } });
  if(lockBtn) lockBtn.addEventListener('click', lockDashboard);
  qsa('[data-admin-panel]').forEach(b=>b.addEventListener('click',()=>showAdminPanel(b.dataset.adminPanel)));
}
function showAdminPanel(panel){
  if(qs('#adminDashboard').classList.contains('hidden')) return;
  qsa('[data-admin-panel]').forEach(b=>b.classList.toggle('active', b.dataset.adminPanel===panel));
  const panels = {
    spots:['Monument Spots','Create or revise hotspot name, philosophy anchor, QR link, field connection, and visual position.'],
    modules:['Learning Modules','Create module outcomes, materials, tasks, assessments, speaker prompt, and AI-coach seed.'],
    materials:['Materials Builder','Design reading passages, vocabulary lists, listening scripts, speaking tasks, grammar lessons, video instructions, and downloadable handouts.'],
    assessment:['Assessment Builder','Create multiple choice, true/false, short answer, speaking task, writing task, pronunciation rubric, and self-assessment checklist.'],
    voice:['Voice Map Manager','Edit province voice prompts, route fields, local materials, recording instructions, and QR access.'],
    qr:['QR Manager','Connect every monument spot, province, module, and dossier item to compact QR access.'],
    coach:['Speaker / AI Coach','Control speaker prompts, sample texts, feedback style, and AI-coach guidance templates.'],
    dossier:['Dossier Content','Edit concept statement, academic rationale, international description, documentation, and copyright notes.']
  };
  qs('#adminPanelList').innerHTML = Object.entries(panels).map(([k,v])=>`<button type="button" data-admin-panel="${k}" class="${k===panel?'active':''}">${v[0]}</button>`).join('');
  qsa('#adminPanelList button').forEach(b=>b.addEventListener('click',()=>showAdminPanel(b.dataset.adminPanel)));
  const [title,desc]=panels[panel];
  qs('#builderArea').innerHTML = `<h3 style="font-family:var(--font-serif);font-size:34px;color:var(--gold2);margin:0 0 8px">${title}</h3><p style="color:#c9baa1;line-height:1.6">${desc}</p><form class="builder-form"><label>Title / Item Name<input placeholder="Enter title"></label><label>Connected Field<select>${SPOT_ORDER.map(k=>`<option>${MODULES[k].title}</option>`).join('')}</select></label><label>Content Type<select><option>Learning Material</option><option>Assessment</option><option>QR Route</option><option>Voice Prompt</option><option>Dossier Note</option></select></label><label>Level<select><option>Beginner</option><option>Intermediate</option><option>Advanced</option><option>Visitor Route</option></select></label><label>Learning Content / Instruction<textarea placeholder="Write learning content, material description, task instruction, or admin note..."></textarea></label><label>Assessment Criteria / Feedback<textarea placeholder="Write rubric criteria, answer key, or feedback guidance..."></textarea></label><div class="admin-actions"><button type="button" class="btn primary" onclick="saveAdminDraft('${panel}')">Save Draft</button><button type="button" class="btn" onclick="exportAdminBackup()">Export Backup</button><label class="btn"><input type="file" id="importBackup" accept="application/json" hidden onchange="importAdminBackup(event)">Import Backup</label></div><p class="status-text" id="adminStatus">Drafts are saved in this browser for GitHub Pages static hosting.</p></form>`;
}
window.saveAdminDraft = function(panel){ const data=JSON.parse(localStorage.getItem('gln-admin-drafts')||'[]'); data.push({panel, savedAt:new Date().toISOString(), note:'Admin / Lecturer draft saved from builder form.'}); localStorage.setItem('gln-admin-drafts',JSON.stringify(data)); qs('#adminStatus').textContent='Saved locally. Export backup after important edits.'; }
window.exportAdminBackup = function(){ const payload={platform:'Garuda Lingua Nusantara', exportedAt:new Date().toISOString(), drafts:JSON.parse(localStorage.getItem('gln-admin-drafts')||'[]')}; const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='garuda-lingua-nusantara-backup.json'; a.click(); URL.revokeObjectURL(a.href); }
window.importAdminBackup = function(e){ const file=e.target.files[0]; if(!file)return; const r=new FileReader(); r.onload=()=>{try{const p=JSON.parse(r.result); localStorage.setItem('gln-admin-drafts',JSON.stringify(p.drafts||[])); qs('#adminStatus').textContent='Backup imported successfully.';}catch(err){qs('#adminStatus').textContent='Import failed. Please use a valid JSON backup.';}}; r.readAsText(file); }

function setupQr(){ qs('#closeQr').addEventListener('click',()=>qs('#qrDialog').close()); }
function openQr(title, src, desc){ const img=qs('#qrDialogImg'); img.src=src; img.onerror=()=>{img.src='assets/qrs/home.png'}; qs('#qrTitle').textContent=title; qs('#qrDesc').textContent=desc; if(qs('#qrDialog').showModal) qs('#qrDialog').showModal(); }

document.addEventListener('DOMContentLoaded', init);
