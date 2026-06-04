const FIELD_COLORS = {
  elt: '#f1c96c',
  elf: '#ffab6b',
  intelligibility: '#76b8ff',
  ai: '#a891ff',
  esp: '#7dd8b3',
  digital: '#5dd6ff',
  ethics: '#f08777',
  heritage: '#d8a64a'
};

const FIELD_NAMES = {
  elt: 'English Language Teaching',
  elf: 'ELF Pronunciation',
  intelligibility: 'Global Intelligibility',
  ai: 'AI Literacy',
  esp: 'English for Specific Purposes',
  digital: 'Digital Learning',
  ethics: 'Research Ethics',
  heritage: 'Nusantara Heritage'
};

const DEFAULT_MODULES = {
  elt: {
    title: 'English Language Teaching', short: 'ELT',
    part: 'Open manuscript pages',
    anchor: 'Open manuscript pages: pedagogy, curriculum design, assessment literacy, and reflective teaching.',
    focus: 'Learning focus: classroom pedagogy, learner agency, feedback, and teacher professionalism.',
    summary: 'This route turns the manuscript pages into a learning studio for designing meaningful English lessons. Visitors learn how aims, materials, interaction, assessment, and reflection work together in a research-informed classroom.',
    outcomes: ['Explain lesson alignment among goals, input, practice, assessment, and reflection.', 'Design a short ELT activity that supports learner agency.', 'Evaluate how feedback improves English learning.'],
    input: 'English Language Teaching is not only the delivery of grammar or vocabulary. It is a design process that connects learning objectives, meaningful input, guided practice, learner interaction, feedback, assessment, and reflective improvement. In the monument, the open manuscript symbolizes curriculum, classroom research, publication, and the teacher as a knowledge designer.',
    keywords: ['lesson alignment', 'feedback', 'learner autonomy', 'classroom interaction', 'assessment literacy'],
    materials: ['Lesson alignment template', 'Feedback language bank', 'Classroom interaction checklist', 'Reflective teaching journal prompt'],
    process: ['Identify learner needs and lesson goals.', 'Select input texts, audio, or visuals that match the goals.', 'Move from guided practice to communicative production.', 'Use feedback that is specific, timely, and supportive.', 'Assess evidence of learning and revise the next lesson.'],
    skills: [
      {skill:'Listening', task:'Listen to the route narration and identify three principles of effective classroom feedback.'},
      {skill:'Speaking', task:'Explain a two-minute classroom activity that moves from input to learner production.'},
      {skill:'Reading', task:'Read a short lesson plan and mark whether goal, task, and assessment are aligned.'},
      {skill:'Writing', task:'Write a 120-word micro lesson plan for one English skill.'},
      {skill:'Vocabulary', task:'Create a five-term teaching glossary: scaffolding, feedback, autonomy, interaction, assessment.'},
      {skill:'Grammar / Discourse', task:'Revise teacher instructions so they are clear, sequential, and learner-friendly.'}
    ],
    assessment: [
      {type:'mcq', prompt:'The strongest ELT lesson design connects...', options:['topic, decoration, and homework only','objectives, input, practice, feedback, and assessment','teacher talk only','a test without learning activity'], answer:1},
      {type:'mcq', prompt:'Feedback is most useful when it is...', options:['general and late','specific, timely, and actionable','only a score','unrelated to goals'], answer:1},
      {type:'truefalse', prompt:'Learner agency means students participate actively in decisions, practice, reflection, and improvement.', answer:true},
      {type:'short', prompt:'Write one objective for an English lesson and one matching assessment task.'},
      {type:'rubric', prompt:'Self-check your micro lesson plan.', criteria:['The objective is clear and observable.', 'The task gives learners meaningful language use.', 'The feedback plan is specific.', 'The assessment collects evidence of learning.']}
    ],
    voicePrompt: 'Explain how a teacher can transform a textbook activity into a meaningful English learning experience.',
    coachSeed: 'For ELT, check alignment first: goal, input, learner action, feedback, and assessment. A strong answer should show what learners do with English, not only what the teacher explains.'
  },
  elf: {
    title: 'ELF Pronunciation', short: 'ELF',
    part: 'Left voice wing',
    anchor: 'Left voice wing: accent diversity, rhythm, stress, pronunciation awareness, and intelligible speaking.',
    focus: 'Learning focus: intelligible pronunciation without forcing native-like accent imitation.',
    summary: 'This route treats pronunciation as meaningful communication. Learners explore segmental clarity, word stress, rhythm, repair strategies, and listener-oriented speaking within English as a Lingua Franca contexts.',
    outcomes: ['Distinguish intelligibility from native-likeness.', 'Practice pronunciation features that support clarity.', 'Use repair strategies when communication breaks down.'],
    input: 'ELF pronunciation values clarity, listener understanding, and communicative success. Accents are not treated as errors simply because they differ from native-speaker models. The voice wing symbolizes diverse Indonesian voices participating confidently in international communication.',
    keywords: ['intelligibility', 'word stress', 'rhythm', 'repair strategy', 'accent diversity'],
    materials: ['Minimal-pair clarity sheet', 'Word-stress drill', 'Repair-strategy phrase bank', 'Pronunciation self-monitoring rubric'],
    process: ['Choose a short academic or professional message.', 'Mark key words that must be clear.', 'Practice stress, pausing, and rhythm.', 'Record your voice and listen for clarity.', 'Ask a listener what was understood.', 'Use repair phrases to improve communication.'],
    skills: [
      {skill:'Listening', task:'Listen to your recorded speech and identify unclear syllables, stress, or pausing.'},
      {skill:'Speaking', task:'Record a 45-second explanation about your field using clear stress and pausing.'},
      {skill:'Reading', task:'Read a transcript and underline words that carry the main message.'},
      {skill:'Writing', task:'Write three repair phrases for communication breakdowns.'},
      {skill:'Vocabulary', task:'List five high-frequency academic words and mark their stress.'},
      {skill:'Pragmatics', task:'Practice asking for clarification politely in an international group discussion.'}
    ],
    assessment: [
      {type:'mcq', prompt:'In ELF pronunciation, the main goal is...', options:['sounding exactly native','clear and successful communication','removing all accent identity','memorizing phonetic symbols only'], answer:1},
      {type:'mcq', prompt:'A useful repair strategy is...', options:['stop speaking immediately','repeat with clearer wording or ask for confirmation','ignore the listener','speak faster'], answer:1},
      {type:'truefalse', prompt:'An accent can be different from native models and still be highly intelligible.', answer:true},
      {type:'short', prompt:'Write two sentences you can use when a listener does not understand your point.'},
      {type:'rubric', prompt:'Self-check your speaking recording.', criteria:['Key words are stressed clearly.', 'Pauses help listeners follow the message.', 'Problem sounds do not block meaning.', 'Repair phrases are used when needed.']}
    ],
    voicePrompt: 'Read this sentence clearly: Indonesian voices can carry global meaning when speech is intelligible, confident, and respectful.',
    coachSeed: 'For ELF pronunciation, focus on listener understanding. Improve stress, pausing, key words, and repair strategies before worrying about native-like accent.'
  },
  intelligibility: {
    title: 'Global Intelligibility', short: 'GI',
    part: 'Luminous knowledge orb',
    anchor: 'Luminous knowledge orb: shared meaning, intercultural clarity, and international scholarly connection.',
    focus: 'Learning focus: making meaning clear across accents, cultures, disciplines, and audiences.',
    summary: 'This route uses the orb as a symbol of shared understanding. Learners practice organizing information, checking comprehension, adapting to listeners, and communicating across cultural and disciplinary contexts.',
    outcomes: ['Explain intelligibility as shared understanding.', 'Adapt messages for different audiences.', 'Use comprehension checks and clarification strategies.'],
    input: 'Global intelligibility is achieved when speakers and listeners co-construct meaning. It depends on pronunciation, vocabulary, discourse organization, cultural sensitivity, audience awareness, and willingness to negotiate meaning.',
    keywords: ['shared meaning', 'audience awareness', 'clarification', 'discourse clarity', 'intercultural communication'],
    materials: ['Audience adaptation matrix', 'Clarity checklist', 'Comprehension-check phrases', 'Intercultural scenario card'],
    process: ['Define the audience and purpose.', 'Select simple and precise wording.', 'Organize the message using clear signposting.', 'Check listener understanding.', 'Clarify or rephrase when needed.', 'Reflect on cultural assumptions.'],
    skills: [
      {skill:'Listening', task:'Listen for signposting words such as first, however, therefore, and in conclusion.'},
      {skill:'Speaking', task:'Explain one research idea to a non-specialist audience in one minute.'},
      {skill:'Reading', task:'Read a dense paragraph and rewrite its main idea in plain English.'},
      {skill:'Writing', task:'Write a 100-word abstract for a general international audience.'},
      {skill:'Vocabulary', task:'Replace five technical terms with audience-friendly explanations.'},
      {skill:'Intercultural', task:'Identify one possible cultural assumption in a communication scenario.'}
    ],
    assessment: [
      {type:'mcq', prompt:'Global intelligibility depends on...', options:['speaker clarity and listener negotiation','accent imitation only','complex vocabulary only','speed and volume only'], answer:0},
      {type:'mcq', prompt:'A comprehension check is...', options:['Do you follow this point?','You must understand me','I will not repeat','This is obvious'], answer:0},
      {type:'truefalse', prompt:'A message can be grammatically accurate but still difficult to understand if it is poorly organized.', answer:true},
      {type:'short', prompt:'Rewrite this idea for a wider audience: “Pedagogical mediation optimizes learner agency.”'},
      {type:'rubric', prompt:'Check your audience-friendly explanation.', criteria:['Main point is clear.', 'Technical terms are explained.', 'Organization is easy to follow.', 'Listener comprehension is checked.']}
    ],
    voicePrompt: 'Explain one academic idea in simple, respectful English for an international audience.',
    coachSeed: 'For intelligibility, simplify without weakening meaning. Define key terms, signpost your structure, and invite listeners to confirm understanding.'
  },
  ai: {
    title: 'AI Literacy', short: 'AI',
    part: 'Right digital wing',
    anchor: 'Right digital wing: responsible prompting, evaluation, authorship, transparency, and human judgment.',
    focus: 'Learning focus: using AI critically, ethically, and pedagogically in language education.',
    summary: 'This route supports AI literacy as a set of practices: asking purposeful prompts, evaluating outputs, checking sources, revising responsibly, and documenting AI-supported learning.',
    outcomes: ['Write a clear educational AI prompt.', 'Evaluate AI output for accuracy and bias.', 'Explain transparent and ethical AI use.'],
    input: 'AI literacy is not simply the ability to use tools. It involves purpose, prompt design, verification, human revision, ethics, transparency, and awareness of limitations. The digital wing symbolizes technology guided by scholarly responsibility.',
    keywords: ['prompting', 'verification', 'bias', 'transparency', 'human judgment'],
    materials: ['Prompt design template', 'AI output evaluation checklist', 'Disclosure sentence models', 'Bias and accuracy review card'],
    process: ['Define the learning purpose.', 'Write a precise prompt with context and criteria.', 'Evaluate the generated output.', 'Verify facts and improve language.', 'Disclose support when required.', 'Reflect on what human judgment added.'],
    skills: [
      {skill:'Reading', task:'Read an AI-generated paragraph and identify unsupported claims.'},
      {skill:'Writing', task:'Revise an AI draft so it matches your own purpose, voice, and evidence.'},
      {skill:'Speaking', task:'Explain your AI-use decision in a transparent way.'},
      {skill:'Listening', task:'Listen to peer feedback on an AI-supported activity and note revision points.'},
      {skill:'Vocabulary', task:'Define prompt, hallucination, bias, transparency, and verification.'},
      {skill:'Ethics', task:'Write one acceptable AI disclosure statement for a learning product.'}
    ],
    assessment: [
      {type:'mcq', prompt:'Responsible AI literacy requires...', options:['copying outputs directly','critical evaluation and human revision','using AI without purpose','hiding all AI use'], answer:1},
      {type:'mcq', prompt:'A strong prompt includes...', options:['purpose, context, audience, and criteria','one vague word','no learning aim','only “make it good”'], answer:0},
      {type:'truefalse', prompt:'AI output should be verified before being used for academic or educational purposes.', answer:true},
      {type:'short', prompt:'Write a prompt for creating a speaking activity and include audience, level, goal, and assessment criteria.'},
      {type:'rubric', prompt:'Check your AI-supported material.', criteria:['The prompt is clear.', 'The output is verified.', 'Bias and appropriateness are checked.', 'Human revision is visible.']}
    ],
    voicePrompt: 'Explain how AI can support English learning without replacing teacher judgment or learner responsibility.',
    coachSeed: 'For AI literacy, begin with purpose. Then prompt, evaluate, verify, revise, disclose, and reflect.'
  },
  esp: {
    title: 'English for Specific Purposes', short: 'ESP',
    part: 'Manuscript route',
    anchor: 'Manuscript route: disciplinary language, professional genres, needs analysis, and field-based communication.',
    focus: 'Learning focus: designing English learning for academic and professional purposes.',
    summary: 'This route connects English with real disciplines and professions. Learners analyze needs, target genres, vocabulary, audience, and field-specific tasks.',
    outcomes: ['Conduct a simple ESP needs analysis.', 'Connect language features with professional genres.', 'Create a field-specific communication task.'],
    input: 'ESP begins with learner needs and field demands. It asks what learners need English for, who they communicate with, which genres they use, and what vocabulary and discourse patterns are required. The manuscript route shows language moving into professional practice.',
    keywords: ['needs analysis', 'genre', 'disciplinary vocabulary', 'audience', 'professional communication'],
    materials: ['Needs analysis form', 'Genre sample', 'Disciplinary glossary template', 'Professional scenario card'],
    process: ['Identify the discipline or profession.', 'Define communication purposes and audiences.', 'Collect examples of target texts or interactions.', 'Analyze vocabulary, structure, and tone.', 'Design a field-specific task.', 'Assess with criteria from the field.'],
    skills: [
      {skill:'Reading', task:'Analyze a professional text and identify purpose, audience, and structure.'},
      {skill:'Writing', task:'Write a short field-specific email, abstract, explanation, or report section.'},
      {skill:'Speaking', task:'Deliver a one-minute professional explanation for a non-specialist.'},
      {skill:'Listening', task:'Listen to a professional scenario and identify key information.'},
      {skill:'Vocabulary', task:'Create a ten-term discipline glossary with plain-English explanations.'},
      {skill:'Genre', task:'Compare two genres from the same field and note differences in tone and organization.'}
    ],
    assessment: [
      {type:'mcq', prompt:'ESP is strongest when based on...', options:['learner and field-specific needs','random general topics','translation only','one textbook for every profession'], answer:0},
      {type:'mcq', prompt:'A professional genre includes...', options:['purpose, audience, structure, tone, and vocabulary','only word lists','only grammar drills','no audience'], answer:0},
      {type:'truefalse', prompt:'ESP tasks should connect English learning with authentic academic or professional use.', answer:true},
      {type:'short', prompt:'Choose one discipline and write one communication task, one target genre, and five key terms.'},
      {type:'rubric', prompt:'Check your ESP task.', criteria:['Needs are clearly identified.', 'The genre is authentic.', 'Vocabulary matches the discipline.', 'Assessment criteria fit the professional purpose.']}
    ],
    voicePrompt: 'Describe one professional situation where English is needed and explain the vocabulary, genre, and audience.',
    coachSeed: 'For ESP, start with needs: discipline, audience, purpose, genre, language features, and assessment criteria.'
  },
  digital: {
    title: 'Digital Learning', short: 'DL',
    part: 'AR and digital layer',
    anchor: 'AR and digital layer: QR routes, mobile learning, feedback loops, blended pedagogy, and digital participation.',
    focus: 'Learning focus: designing technology-supported learning with clear pedagogical value.',
    summary: 'This route connects the monument to QR access, AR interpretation, mobile tasks, LMS spaces, feedback, and reflective analytics.',
    outcomes: ['Design a blended learning activity connected to a physical learning object.', 'Explain how QR, AR, LMS, and mobile tools support a learning cycle.', 'Evaluate whether technology adds pedagogical value.'],
    input: 'Digital learning is effective when technology serves learning. QR codes, AR layers, mobile tasks, and LMS spaces should help learners access content, practice skills, receive feedback, collaborate, and reflect. The digital layer makes the monument active, dialogic, and assessable.',
    keywords: ['QR learning', 'AR interpretation', 'mobile learning', 'LMS', 'feedback loop'],
    materials: ['QR station plan', 'Mobile task sheet', 'LMS discussion prompt', 'Feedback loop checklist'],
    process: ['Define the learning objective.', 'Choose a digital tool that supports the objective.', 'Connect digital access with a learner action.', 'Collect evidence of learning.', 'Provide feedback and reflection.', 'Improve the next design cycle.'],
    skills: [
      {skill:'Reading', task:'Read a digital task instruction and identify objective, tool, action, and evidence.'},
      {skill:'Writing', task:'Write a QR station instruction for visitors in clear English.'},
      {skill:'Speaking', task:'Pitch a digital learning activity in one minute.'},
      {skill:'Listening', task:'Listen to peer feedback and revise your digital task.'},
      {skill:'Vocabulary', task:'Define QR route, AR layer, blended learning, feedback loop, and analytics.'},
      {skill:'Design', task:'Map a digital learning cycle: access, action, evidence, feedback, reflection.'}
    ],
    assessment: [
      {type:'mcq', prompt:'Technology adds value when it...', options:['serves a clear learning objective','is used only as decoration','removes all feedback','confuses the task'], answer:0},
      {type:'mcq', prompt:'A QR learning route should include...', options:['content, task, evidence, and feedback','only a picture','only a link with no task','no learner action'], answer:0},
      {type:'truefalse', prompt:'A digital tool should be selected after the learning objective is clear.', answer:true},
      {type:'short', prompt:'Design one QR learning station with content, task, evidence, and feedback.'},
      {type:'rubric', prompt:'Check your digital task.', criteria:['Objective is clear.', 'Tool supports the objective.', 'Learner action is meaningful.', 'Evidence and feedback are included.']}
    ],
    voicePrompt: 'Explain how a QR or AR station can transform a monument into an active learning environment.',
    coachSeed: 'For digital learning, avoid tool-first design. Begin with the learning problem, then choose technology that supports action, feedback, and reflection.'
  },
  ethics: {
    title: 'Research Ethics', short: 'RE',
    part: 'Foundation stone',
    anchor: 'Foundation stone: informed consent, participant protection, data responsibility, integrity, and publication ethics.',
    focus: 'Learning focus: building scholarship on responsibility and trust.',
    summary: 'This route positions ethics as the foundation of knowledge. Learners examine informed consent, confidentiality, risk-benefit thinking, authorship, data protection, and responsible dissemination.',
    outcomes: ['Identify ethical risks in research scenarios.', 'Explain informed consent and confidentiality.', 'Connect research integrity with public trust.'],
    input: 'Research ethics is not an administrative add-on. It shapes recruitment, consent, data collection, analysis, authorship, publication, and benefit to participants. The foundation stone reminds visitors that knowledge must stand on integrity.',
    keywords: ['informed consent', 'confidentiality', 'data protection', 'authorship', 'integrity'],
    materials: ['Consent checklist', 'Risk-benefit table', 'Data protection plan', 'Publication integrity note'],
    process: ['Identify affected participants or communities.', 'Assess risks and benefits.', 'Plan voluntary informed consent.', 'Protect privacy and data security.', 'Clarify authorship and originality.', 'Report findings responsibly.'],
    skills: [
      {skill:'Reading', task:'Read a research scenario and identify ethical risks.'},
      {skill:'Writing', task:'Write a participant-friendly consent explanation.'},
      {skill:'Speaking', task:'Explain why confidentiality matters in classroom research.'},
      {skill:'Listening', task:'Listen to a participant concern and propose an ethical response.'},
      {skill:'Vocabulary', task:'Define consent, anonymity, confidentiality, risk, benefit, and integrity.'},
      {skill:'Critical Thinking', task:'Balance potential benefit and risk in a proposed study.'}
    ],
    assessment: [
      {type:'mcq', prompt:'Research ethics should be considered...', options:['from the beginning of research design','only after publication','only if problems appear','only by administrators'], answer:0},
      {type:'mcq', prompt:'Informed consent requires...', options:['clear information and voluntary participation','hidden data collection','pressure to join','unclear purpose'], answer:0},
      {type:'truefalse', prompt:'Participant protection is connected to the credibility of research.', answer:true},
      {type:'short', prompt:'List two ethical risks and two protections for a classroom research project.'},
      {type:'rubric', prompt:'Check your ethics plan.', criteria:['Consent is clear.', 'Privacy is protected.', 'Risks and benefits are considered.', 'Reporting is responsible.']}
    ],
    voicePrompt: 'Explain why ethical research is the foundation of trustworthy knowledge.',
    coachSeed: 'For research ethics, ask who may be affected, what risks exist, how consent is obtained, how data are protected, and how findings are reported responsibly.'
  },
  heritage: {
    title: 'Nusantara Heritage', short: 'NH',
    part: 'Archipelagic base',
    anchor: 'Archipelagic base: multilingual memory, cultural plurality, local wisdom, and Indonesian knowledge routes.',
    focus: 'Learning focus: using heritage respectfully as a source of language learning and global understanding.',
    summary: 'This route connects Nusantara heritage with multilingualism, cultural identity, oral traditions, scripts, arts, maritime routes, and Indonesia’s contribution to global knowledge.',
    outcomes: ['Explain how local heritage can support global learning.', 'Connect cultural symbols with educational values.', 'Design a respectful heritage-based English activity.'],
    input: 'Nusantara heritage is a living knowledge system shaped by languages, oral traditions, arts, rituals, scripts, maritime routes, and community practices. The archipelagic base shows that global scholarship can rise from local identity and cultural dignity.',
    keywords: ['multilingual heritage', 'local wisdom', 'cultural interpretation', 'identity', 'respectful pedagogy'],
    materials: ['Heritage interpretation guide', 'Multilingual phrase prompt', 'Cultural respect checklist', 'Community knowledge task'],
    process: ['Select one local cultural symbol or story.', 'Identify its educational value.', 'Connect it to English learning.', 'Design a respectful learning task.', 'Compare it with another region or language.', 'Reflect on cultural dignity and global participation.'],
    skills: [
      {skill:'Reading', task:'Read a short cultural description and identify its values and learning potential.'},
      {skill:'Writing', task:'Write a 120-word English explanation of one Nusantara cultural symbol.'},
      {skill:'Speaking', task:'Tell a local heritage story for an international visitor.'},
      {skill:'Listening', task:'Listen to a province voice prompt and identify cultural keywords.'},
      {skill:'Vocabulary', task:'Build a bilingual glossary of heritage terms.'},
      {skill:'Intercultural', task:'Explain how to present heritage respectfully without stereotyping.'}
    ],
    assessment: [
      {type:'mcq', prompt:'Nusantara heritage in this platform is treated as...', options:['a living source of knowledge','decoration only','one uniform culture','unrelated to learning'], answer:0},
      {type:'mcq', prompt:'A respectful heritage task should...', options:['connect culture, learning, and ethical interpretation','stereotype a community','remove local meaning','avoid reflection'], answer:0},
      {type:'truefalse', prompt:'Local identity can support international communication when it is interpreted respectfully.', answer:true},
      {type:'short', prompt:'Create one English activity that introduces a local cultural value to international learners.'},
      {type:'rubric', prompt:'Check your heritage activity.', criteria:['Local meaning is respected.', 'English learning goal is clear.', 'Cultural comparison is thoughtful.', 'Stereotyping is avoided.']}
    ],
    voicePrompt: 'Introduce one Nusantara cultural value in English for an international visitor.',
    coachSeed: 'For heritage learning, connect local meaning with English communication. Avoid exoticizing or stereotyping; focus on respect, context, and educational value.'
  }
};

const DEFAULT_PROVINCES = [
  ['aceh','Aceh','Banda Aceh',5.55,95.32,'heritage'],
  ['north-sumatra','North Sumatra','Medan',3.59,98.67,'elf'],
  ['west-sumatra','West Sumatra','Padang',-0.95,100.35,'intelligibility'],
  ['riau','Riau','Pekanbaru',0.51,101.45,'esp'],
  ['riau-islands','Riau Islands','Tanjung Pinang',0.92,104.45,'digital'],
  ['jambi','Jambi','Jambi',-1.61,103.61,'ethics'],
  ['south-sumatra','South Sumatra','Palembang',-2.99,104.76,'elt'],
  ['bangka-belitung','Bangka Belitung Islands','Pangkal Pinang',-2.13,106.11,'heritage'],
  ['bengkulu','Bengkulu','Bengkulu',-3.80,102.26,'elf'],
  ['lampung','Lampung','Bandar Lampung',-5.43,105.26,'intelligibility'],
  ['banten','Banten','Serang',-6.12,106.15,'elt'],
  ['jakarta','Jakarta','Jakarta',-6.20,106.85,'ai'],
  ['west-java','West Java','Bandung',-6.91,107.61,'elf'],
  ['central-java','Central Java','Semarang',-6.99,110.42,'elt'],
  ['yogyakarta','Yogyakarta','Yogyakarta',-7.80,110.37,'heritage'],
  ['east-java','East Java','Surabaya',-7.25,112.75,'esp'],
  ['bali','Bali','Denpasar',-8.65,115.22,'heritage'],
  ['west-nusa-tenggara','West Nusa Tenggara','Mataram',-8.58,116.12,'digital'],
  ['east-nusa-tenggara','East Nusa Tenggara','Kupang',-10.18,123.58,'intelligibility'],
  ['west-kalimantan','West Kalimantan','Pontianak',-0.03,109.34,'heritage'],
  ['central-kalimantan','Central Kalimantan','Palangka Raya',-2.21,113.92,'ethics'],
  ['south-kalimantan','South Kalimantan','Banjarmasin',-3.32,114.59,'elt'],
  ['east-kalimantan','East Kalimantan','Samarinda',-0.50,117.15,'digital'],
  ['north-kalimantan','North Kalimantan','Tanjung Selor',2.84,117.37,'ai'],
  ['north-sulawesi','North Sulawesi','Manado',1.49,124.84,'intelligibility'],
  ['gorontalo','Gorontalo','Gorontalo',0.54,123.06,'elf'],
  ['central-sulawesi','Central Sulawesi','Palu',-0.90,119.87,'esp'],
  ['west-sulawesi','West Sulawesi','Mamuju',-2.68,118.89,'ethics'],
  ['south-sulawesi','South Sulawesi','Makassar',-5.14,119.41,'elt'],
  ['southeast-sulawesi','Southeast Sulawesi','Kendari',-3.99,122.51,'digital'],
  ['maluku','Maluku','Ambon',-3.70,128.18,'heritage'],
  ['north-maluku','North Maluku','Sofifi',0.73,127.56,'elf'],
  ['southwest-papua','Southwest Papua','Sorong',-0.88,131.25,'digital'],
  ['west-papua','West Papua','Manokwari',-0.86,134.06,'ethics'],
  ['papua','Papua','Jayapura',-2.53,140.72,'intelligibility'],
  ['central-papua','Central Papua','Nabire',-3.36,135.50,'esp'],
  ['highland-papua','Highland Papua','Wamena',-4.10,138.95,'elf'],
  ['south-papua','South Papua','Merauke',-8.49,140.40,'heritage']
].map(([id,name,capital,lat,lon,field]) => ({id,name,capital,lat,lon,field,
  prompt: `From ${name}, introduce a local voice, cultural insight, or professional context in clear English and connect it to ${FIELD_NAMES[field]}.`,
  visitorTask: `Record a 40-second message from the perspective of ${name}: identify one local knowledge resource and explain how it supports ${FIELD_NAMES[field]}.`
}));

const STORAGE_MODULES = 'gln_modules_v4';
const STORAGE_PROVINCES = 'gln_provinces_v4';
const STORAGE_ADMIN = 'gln_admin_unlocked_v4';
const ADMIN_PIN = 'JS2026';
let modules = loadJSON(STORAGE_MODULES, DEFAULT_MODULES);
let provinces = loadJSON(STORAGE_PROVINCES, DEFAULT_PROVINCES);
let selectedModuleKey = 'elt';
let selectedProvinceId = 'east-java';
let moduleTab = 'overview';
let adminTab = 'content';
let adminUnlocked = sessionStorage.getItem(STORAGE_ADMIN) === 'true';
let mediaRecorder = null;
let recordedChunks = [];
let autoTimer = null;
let rotateAngle = 0;

function loadJSON(key, fallback){
  try{
    const raw = localStorage.getItem(key);
    if(!raw) return structuredClone(fallback);
    const parsed = JSON.parse(raw);
    if(Array.isArray(fallback)) return Array.isArray(parsed) ? parsed : structuredClone(fallback);
    return {...structuredClone(fallback), ...parsed};
  }catch(e){ return structuredClone(fallback); }
}
function saveAll(){
  localStorage.setItem(STORAGE_MODULES, JSON.stringify(modules));
  localStorage.setItem(STORAGE_PROVINCES, JSON.stringify(provinces));
}
function $(sel, root=document){return root.querySelector(sel)}
function $$(sel, root=document){return Array.from(root.querySelectorAll(sel))}
function escapeHTML(str=''){
  return String(str).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c]));
}
function scrollToEl(id){ const el = typeof id === 'string' ? document.querySelector(id) : id; if(el) el.scrollIntoView({behavior:'smooth', block:'start'}); }
function speak(text){
  if(!('speechSynthesis' in window)){ alert('Speech synthesis is not supported in this browser.'); return; }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(String(text).replace(/<[^>]*>/g,''));
  utter.lang = 'en-US'; utter.rate = 0.92; utter.pitch = 0.95;
  window.speechSynthesis.speak(utter);
}

function init(){
  $('#year').textContent = new Date().getFullYear();
  initNavigation(); initReveal(); initAmbient(); initBackToTop();
  renderModuleNav(); renderModule(selectedModuleKey);
  bindModuleButtons(); renderSpot(selectedModuleKey); initSpots(); initRotation();
  renderFieldFilter(); renderMap(); renderProvince(selectedProvinceId);
  initAdmin();
}

function initNavigation(){
  const toggle = $('.nav-toggle'); const nav = $('.nav');
  toggle?.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
  $$('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  const sections = $$('.section, .hero');
  const links = $$('.nav a');
  window.addEventListener('scroll', () => {
    let current = 'home';
    sections.forEach(sec => { if(sec.getBoundingClientRect().top < 140) current = sec.id || 'home'; });
    links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
  }, {passive:true});
}
function initReveal(){
  const obs = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('show'); }), {threshold:.12});
  $$('.reveal').forEach(el => obs.observe(el));
}
function initBackToTop(){
  const btn = $('#backToTop');
  window.addEventListener('scroll', () => btn.classList.toggle('show', window.scrollY > 600), {passive:true});
  btn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
}
function bindModuleButtons(){
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-module-button]');
    if(!btn) return;
    const key = btn.dataset.moduleButton;
    if(!modules[key]) return;
    selectedModuleKey = key;
    moduleTab = 'overview';
    renderModuleNav(); renderModule(key); renderSpot(key);
    setActiveSpot(key);
    scrollToEl('#learning-studio');
  });
}

function renderModuleNav(){
  const nav = $('#moduleNav'); if(!nav) return;
  nav.innerHTML = Object.entries(modules).map(([key,m]) => `<button type="button" class="${key===selectedModuleKey?'active':''}" data-module-key="${key}"><strong>${escapeHTML(m.title)}</strong><small>${escapeHTML(m.part)} · ${escapeHTML(m.short)}</small></button>`).join('');
  $$('[data-module-key]', nav).forEach(btn => btn.addEventListener('click', () => { selectedModuleKey = btn.dataset.moduleKey; moduleTab='overview'; renderModuleNav(); renderModule(selectedModuleKey); renderSpot(selectedModuleKey); setActiveSpot(selectedModuleKey); }));
}
function renderModule(key){
  const m = modules[key]; const view = $('#moduleView'); if(!m || !view) return;
  view.innerHTML = `
    <section id="module-${key}" class="module-content">
      <div class="module-top">
        <div>
          <p class="eyebrow">${escapeHTML(m.part)}</p>
          <h3>${escapeHTML(m.title)}</h3>
          <p class="anchor-line">${escapeHTML(m.anchor)}</p>
          <div class="module-meta">${(m.keywords||[]).map(k=>`<span class="chip">${escapeHTML(k)}</span>`).join('')}</div>
        </div>
        <div class="module-actions">
          <button class="btn small primary" type="button" id="speakModule">Speaker</button>
          <button class="btn small" type="button" id="openCoach">AI Coach</button>
          <button class="btn small" type="button" id="openModuleQr">QR</button>
          <a class="btn small" href="#admin">Builder</a>
        </div>
      </div>
      <div class="module-tabs" role="tablist">
        ${['overview','skills','materials','assessment','coach'].map(t=>`<button type="button" class="${moduleTab===t?'active':''}" data-tab="${t}">${tabName(t)}</button>`).join('')}
      </div>
      <div id="moduleTabView">${renderModuleTab(key, moduleTab)}</div>
    </section>`;
  $('#speakModule')?.addEventListener('click', () => speak(`${m.title}. ${m.summary} ${m.voicePrompt}`));
  $('#openCoach')?.addEventListener('click', () => { moduleTab = 'coach'; renderModule(key); });
  $('#openModuleQr')?.addEventListener('click', () => openQr(key));
  $$('.module-tabs button', view).forEach(b => b.addEventListener('click', () => { moduleTab = b.dataset.tab; renderModule(key); }));
}
function tabName(t){return {overview:'Overview', skills:'English Skills Tasks', materials:'Materials', assessment:'Assessment', coach:'AI Coach'}[t] || t}
function renderModuleTab(key, tab){
  const m = modules[key];
  if(tab==='overview') return `
    <div class="lesson-card">
      <h4>Route Summary</h4><p>${escapeHTML(m.summary)}</p>
      <h4>Core Input</h4><p>${escapeHTML(m.input)}</p>
    </div>
    <div class="two-col">
      <div class="lesson-card"><h4>Learning Outcomes</h4><ul>${(m.outcomes||[]).map(o=>`<li>${escapeHTML(o)}</li>`).join('')}</ul></div>
      <div class="lesson-card"><h4>Learning Process</h4><ol>${(m.process||[]).map(o=>`<li>${escapeHTML(o)}</li>`).join('')}</ol></div>
    </div>`;
  if(tab==='skills') return `<div class="task-grid">${(m.skills||[]).map(s=>`<article class="task-card"><h4>${escapeHTML(s.skill)}</h4><p>${escapeHTML(s.task)}</p></article>`).join('')}</div><div class="lesson-card"><h4>Production Task</h4><p>${escapeHTML(m.voicePrompt)}</p><div class="button-row"><button class="btn small primary" type="button" onclick="window.glnSpeakCurrent()">Speaker</button><button class="btn small" type="button" onclick="window.glnRecordTask()">Record Speaking</button><button class="btn small" type="button" onclick="window.glnStopRecord()">Stop</button></div><p class="audio-status" id="recordStatus">Recording status will appear here.</p></div>`;
  if(tab==='materials') return `<div class="lesson-card"><h4>Core Materials</h4><ul>${(m.materials||[]).map(o=>`<li>${escapeHTML(o)}</li>`).join('')}</ul></div>${renderCustomMaterials(key)}<div class="lesson-card"><h4>Lecturer Extension</h4><p>Use the protected dashboard to add new readings, speaking prompts, vocabulary banks, assessment instructions, QR station tasks, or province-based learning materials for this route.</p><a class="btn small primary" href="#admin">Open Admin / Lecturer Builder</a></div>`;
  if(tab==='assessment') return `<div class="lesson-card"><h4>Formative Assessment</h4><p>Complete the varied items below. The platform gives direct feedback for objective items and self-check support for productive tasks.</p></div>${renderAssessment(key)}`;
  if(tab==='coach') return renderCoach(key);
  return '';
}
function renderCustomMaterials(key){
  const arr = modules[key].customMaterials || [];
  if(!arr.length) return '';
  return `<div class="lesson-card"><h4>Admin / Lecturer Materials</h4>${arr.map((m,i)=>`<article class="task-card"><h4>${escapeHTML(m.title||`Material ${i+1}`)} <span class="chip">${escapeHTML(m.type||'material')}</span></h4><p>${escapeHTML(m.content||'')}</p></article>`).join('')}</div>`;
}
function renderAssessment(key){
  const list = [...(modules[key].assessment||[]), ...(modules[key].customAssessment||[])];
  return list.map((item, idx) => {
    if(item.type==='mcq') return `<div class="quiz-item" data-q="${idx}" data-answer="${item.answer}"><strong>${idx+1}. ${escapeHTML(item.prompt)}</strong><div class="quiz-options">${(item.options||[]).map((o,i)=>`<button type="button" data-option="${i}">${escapeHTML(o)}</button>`).join('')}</div><p class="audio-status" hidden></p></div>`;
    if(item.type==='truefalse') return `<div class="quiz-item" data-tf="${idx}" data-answer="${item.answer}"><strong>${idx+1}. ${escapeHTML(item.prompt)}</strong><div class="quiz-options"><button type="button" data-option="true">True</button><button type="button" data-option="false">False</button></div><p class="audio-status" hidden></p></div>`;
    if(item.type==='short') return `<div class="quiz-item"><strong>${idx+1}. ${escapeHTML(item.prompt)}</strong><textarea class="answer-box" placeholder="Write your answer here..."></textarea><div class="button-row"><button class="btn small" type="button" onclick="window.glnSelfCheck(this)">Self-check</button><button class="btn small" type="button" onclick="window.glnSpeakText(this)">Read My Answer</button></div><p class="audio-status" hidden></p></div>`;
    if(item.type==='rubric') return `<div class="quiz-item"><strong>${idx+1}. ${escapeHTML(item.prompt)}</strong><div class="rubric-list">${(item.criteria||[]).map(c=>`<label><input type="checkbox"> <span>${escapeHTML(c)}</span></label>`).join('')}</div><button class="btn small" type="button" onclick="window.glnRubricScore(this)">Calculate Self-check</button><p class="audio-status" hidden></p></div>`;
    return `<div class="quiz-item"><strong>${idx+1}. ${escapeHTML(item.prompt||'Assessment item')}</strong></div>`;
  }).join('');
}
function renderCoach(key){
  const m = modules[key];
  return `<div class="lesson-card coach-box"><h4>AI Coach for ${escapeHTML(m.title)}</h4><p>This coach gives local pedagogical guidance based on the selected route. Ask about materials, tasks, assessment, learner support, or revision.</p><textarea id="coachInput" rows="4" placeholder="Example: How can I improve my speaking task for this module?"></textarea><div class="button-row"><button class="btn small primary" id="coachAsk" type="button">Ask AI Coach</button><button class="btn small" id="coachSpeak" type="button">Speaker</button></div><div class="coach-output" id="coachOutput">${escapeHTML(m.coachSeed)}</div></div>`;
}

document.addEventListener('click', e => {
  const opt = e.target.closest('.quiz-options button');
  if(!opt) return;
  const box = opt.closest('.quiz-item');
  if(box?.dataset.q !== undefined){
    const ans = Number(box.dataset.answer), choice = Number(opt.dataset.option);
    $$('button', box).forEach(b=>b.disabled=true);
    opt.classList.add(choice===ans ? 'correct':'wrong');
    const status = $('.audio-status', box); status.hidden=false; status.textContent = choice===ans ? 'Correct. Your answer matches the route concept.' : `Review this item. Correct answer: ${box.querySelector(`[data-option="${ans}"]`).textContent}`;
  }
  if(box?.dataset.tf !== undefined){
    const ans = String(box.dataset.answer), choice = opt.dataset.option;
    $$('button', box).forEach(b=>b.disabled=true);
    opt.classList.add(choice===ans ? 'correct':'wrong');
    const status = $('.audio-status', box); status.hidden=false; status.textContent = choice===ans ? 'Correct.' : `Review this item. Correct answer: ${ans}.`;
  }
});
document.addEventListener('click', e => {
  if(e.target?.id === 'coachAsk'){
    const input = $('#coachInput')?.value || '';
    const out = $('#coachOutput'); const m = modules[selectedModuleKey];
    out.innerHTML = generateCoachResponse(input, m);
  }
  if(e.target?.id === 'coachSpeak') speak($('#coachOutput')?.textContent || '');
});
function generateCoachResponse(input, m){
  const q = input.trim();
  if(!q) return escapeHTML(m.coachSeed);
  const lower = q.toLowerCase();
  let focus = 'Start by aligning your goal, learner action, evidence of learning, feedback, and reflection.';
  if(lower.includes('assessment') || lower.includes('test') || lower.includes('quiz')) focus = 'Use varied assessment: one objective item for concept checking, one performance task for English use, one rubric for quality, and one reflection for transfer.';
  if(lower.includes('speaking') || lower.includes('pronunciation') || lower.includes('voice')) focus = 'For speaking, give a clear audience, time limit, useful phrases, pronunciation focus, recording opportunity, and self-check rubric.';
  if(lower.includes('material') || lower.includes('lesson')) focus = 'For materials, use authentic input, clear instructions, language support, guided practice, and a product that learners can share.';
  if(lower.includes('ai') || lower.includes('prompt')) focus = 'For AI-supported work, define purpose, prompt criteria, verification steps, disclosure, and human revision.';
  return `<strong>AI Coach Response</strong><br>${escapeHTML(focus)}<br><br><strong>Connected to ${escapeHTML(m.title)}:</strong> ${escapeHTML(m.coachSeed)}<br><br><strong>Next action:</strong> Create a short learner product and assess it with at least three transparent criteria.`;
}
window.glnSelfCheck = btn => { const status = btn.parentElement.nextElementSibling; status.hidden=false; status.textContent='Self-check: make sure your answer states a clear purpose, field connection, learner action, and evidence of learning.'; };
window.glnSpeakText = btn => { const text = btn.closest('.quiz-item').querySelector('textarea')?.value || 'No answer has been written yet.'; speak(text); };
window.glnRubricScore = btn => { const item = btn.closest('.quiz-item'); const total = $$('input[type="checkbox"]', item).length; const checked = $$('input[type="checkbox"]:checked', item).length; const status = $('.audio-status', item); status.hidden=false; status.textContent = `Rubric self-check: ${checked}/${total} criteria met. Revise any unchecked criteria before finalizing your work.`; };
window.glnSpeakCurrent = () => speak(modules[selectedModuleKey].voicePrompt);

async function startRecording(statusEl){
  const status = typeof statusEl === 'string' ? $(statusEl) : statusEl;
  if(!navigator.mediaDevices?.getUserMedia){ if(status) status.textContent = 'Recording is not supported in this browser.'; return; }
  try{
    recordedChunks = [];
    const stream = await navigator.mediaDevices.getUserMedia({audio:true});
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = e => { if(e.data.size) recordedChunks.push(e.data); };
    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, {type:'audio/webm'});
      const url = URL.createObjectURL(blob);
      if(status) status.innerHTML = `Recording saved locally for this session. <audio controls src="${url}"></audio>`;
      stream.getTracks().forEach(t=>t.stop());
    };
    mediaRecorder.start();
    if(status) status.textContent = 'Recording... click Stop when finished.';
  }catch(err){ if(status) status.textContent = 'Microphone permission was not granted or is unavailable.'; }
}
window.glnRecordTask = () => startRecording('#recordStatus');
window.glnStopRecord = () => { if(mediaRecorder && mediaRecorder.state !== 'inactive') mediaRecorder.stop(); };

function initSpots(){
  $$('.spot').forEach(btn => btn.addEventListener('click', () => { const key = btn.dataset.spot; selectedModuleKey = key; renderSpot(key); setActiveSpot(key); renderModuleNav(); renderModule(key); }));
  $('#spotNarrate')?.addEventListener('click', () => speak(`${modules[selectedModuleKey].title}. ${modules[selectedModuleKey].summary}`));
  $('#spotAssessment')?.addEventListener('click', () => { moduleTab='assessment'; renderModule(selectedModuleKey); scrollToEl('#learning-studio'); });
  $('#spotQrBtn')?.addEventListener('click', () => openQr(selectedModuleKey));
}
function setActiveSpot(key){ $$('.spot').forEach(s => s.classList.toggle('active', s.dataset.spot === key)); }
function renderSpot(key){
  const m = modules[key]; if(!m) return;
  $('#spotTitle').textContent = m.title;
  $('#spotAnchor').textContent = m.anchor;
  $('#spotFocus').textContent = m.focus;
  $('#spotActivity').textContent = m.voicePrompt;
  $('#spotOpen').href = `#module-${key}`;
}
function initRotation(){
  const slider = $('#rotateSlider'); const stage = $('#monumentStage');
  function apply(){ stage.style.setProperty('--ry', `${rotateAngle}deg`); slider.value = Math.max(-32, Math.min(32, rotateAngle)); }
  slider?.addEventListener('input', () => { rotateAngle = Number(slider.value); apply(); });
  $('#rotateLeft')?.addEventListener('click', () => { rotateAngle = Math.max(-32, rotateAngle - 8); apply(); });
  $('#rotateRight')?.addEventListener('click', () => { rotateAngle = Math.min(32, rotateAngle + 8); apply(); });
  $('#resetRotate')?.addEventListener('click', () => { rotateAngle = 0; apply(); });
  $('#autoRotate')?.addEventListener('click', e => {
    if(autoTimer){ clearInterval(autoTimer); autoTimer=null; e.currentTarget.classList.remove('active'); return; }
    e.currentTarget.classList.add('active'); let dir = 1;
    autoTimer = setInterval(() => { rotateAngle += dir * .8; if(rotateAngle > 30 || rotateAngle < -30) dir *= -1; apply(); }, 34);
  });
  let dragging=false, startX=0, startAngle=0;
  $('#monumentPlate')?.addEventListener('pointerdown', e => { dragging=true; startX=e.clientX; startAngle=rotateAngle; e.currentTarget.setPointerCapture(e.pointerId); });
  $('#monumentPlate')?.addEventListener('pointermove', e => { if(!dragging) return; rotateAngle = Math.max(-32, Math.min(32, startAngle + (e.clientX-startX)/8)); apply(); });
  $('#monumentPlate')?.addEventListener('pointerup', () => dragging=false);
}

function openQr(key){
  const m = modules[key] || modules.elt;
  $('#qrModalTitle').textContent = m.title;
  $('#qrModalImg').src = `assets/qrs/module-${key}.png`;
  $('#qrModalImg').alt = `QR code for ${m.title}`;
  $('#qrModalText').textContent = `${m.part}: scan to open the ${m.title} route.`;
  $('#qrModal').classList.add('show'); $('#qrModal').setAttribute('aria-hidden','false');
}
$('#closeQrModal')?.addEventListener('click', () => { $('#qrModal').classList.remove('show'); $('#qrModal').setAttribute('aria-hidden','true'); });
$('#qrModal')?.addEventListener('click', e => { if(e.target.id==='qrModal') $('#closeQrModal').click(); });

function renderFieldFilter(){
  const sel = $('#fieldFilter'); if(!sel) return;
  sel.innerHTML = `<option value="all">All fields</option>` + Object.entries(FIELD_NAMES).map(([k,v])=>`<option value="${k}">${v}</option>`).join('');
  sel.addEventListener('change', renderMap);
  $('#resetMapFilter')?.addEventListener('click', () => { sel.value='all'; $('#provinceSearch').value=''; renderMap(); });
  $('#provinceSearch')?.addEventListener('input', renderMap);
}
function project(lon, lat){
  const minLon=94, maxLon=142.5, minLat=-11.2, maxLat=6.3;
  return {x: 54 + ((lon-minLon)/(maxLon-minLon))*892, y: 45 + ((maxLat-lat)/(maxLat-minLat))*450};
}
function renderMap(){
  const root = $('#indonesiaMap'); if(!root) return;
  const filter = $('#fieldFilter')?.value || 'all';
  const q = ($('#provinceSearch')?.value || '').trim().toLowerCase();
  const shapes = `
    <path class="island-shape" d="M88,145 C130,105 202,100 245,154 C269,187 272,245 246,293 C210,265 190,225 151,205 C120,190 91,180 88,145Z" />
    <path class="island-shape" d="M246,316 C323,304 411,317 490,350 C429,376 313,361 230,339 C214,333 222,321 246,316Z" />
    <path class="island-shape" d="M344,155 C414,108 527,111 582,177 C610,214 597,287 546,325 C486,350 390,323 340,266 C313,226 313,181 344,155Z" />
    <path class="island-shape" d="M615,206 C647,162 694,152 718,186 C692,207 685,229 699,252 C731,294 691,332 643,316 C666,281 638,262 615,206Z" />
    <path class="island-shape" d="M666,342 C708,336 755,350 799,374 C760,393 694,385 650,362 C642,354 649,344 666,342Z" />
    <path class="island-shape" d="M782,243 C825,205 910,205 950,260 C929,329 833,340 782,296 C766,282 766,259 782,243Z" />
    <path class="island-shape" d="M725,233 C747,204 782,206 792,237 C775,265 742,266 725,233Z" />
    <path class="island-shape" d="M498,376 C562,375 622,387 675,411 C601,426 530,416 480,394 C468,386 478,378 498,376Z" />`;
  const nodes = provinces.map(p => {
    const match = (filter==='all' || p.field===filter) && (!q || p.name.toLowerCase().includes(q) || p.capital.toLowerCase().includes(q));
    const {x,y} = project(p.lon,p.lat);
    const abbr = p.name.split(' ').map(w=>w[0]).join('').slice(0,3).toUpperCase();
    return `<g class="province-node ${p.id===selectedProvinceId?'active':''} ${match?'':'dim'}" data-province="${p.id}" transform="translate(${x.toFixed(1)},${y.toFixed(1)})"><title>${escapeHTML(p.name)} · ${escapeHTML(FIELD_NAMES[p.field])}</title><circle r="6.4" fill="${FIELD_COLORS[p.field]}"/><text x="9" y="4">${abbr}</text></g>`;
  }).join('');
  const legend = Object.entries(FIELD_NAMES).map(([k,v])=>`<button type="button" data-legend-field="${k}"><span style="color:${FIELD_COLORS[k]}">●</span> ${v}</button>`).join('');
  root.innerHTML = `<svg viewBox="0 0 1000 540" preserveAspectRatio="xMidYMid meet" aria-label="Indonesia map with province markers"><defs><radialGradient id="seaGlow"><stop offset="0%" stop-color="#f1c96c" stop-opacity=".18"/><stop offset="70%" stop-color="#f1c96c" stop-opacity="0"/></radialGradient></defs><rect x="0" y="0" width="1000" height="540" fill="url(#seaGlow)"/>${shapes}${nodes}</svg><div class="map-legend">${legend}</div>`;
  $$('.province-node', root).forEach(n => n.addEventListener('click', () => { selectedProvinceId = n.dataset.province; renderProvince(selectedProvinceId); renderMap(); }));
  $$('[data-legend-field]', root).forEach(b => b.addEventListener('click', () => { $('#fieldFilter').value = b.dataset.legendField; renderMap(); }));
}
function renderProvince(id){
  const p = provinces.find(x=>x.id===id) || provinces[0];
  selectedProvinceId = p.id;
  const m = modules[p.field];
  $('#provincePanel').innerHTML = `<div class="province-info"><p class="eyebrow">Selected Province</p><h3>${escapeHTML(p.name)}</h3><span class="province-field" style="border-color:${FIELD_COLORS[p.field]}; color:${FIELD_COLORS[p.field]}">${escapeHTML(FIELD_NAMES[p.field])}</span><p><strong>Capital:</strong> ${escapeHTML(p.capital)}</p><p><strong>Voice prompt:</strong> ${escapeHTML(p.prompt)}</p><p><strong>Visitor task:</strong> ${escapeHTML(p.visitorTask)}</p><div class="button-row"><button class="btn small primary" id="provinceSpeak" type="button">Speaker</button><button class="btn small" id="provinceRecord" type="button">Record Voice</button><button class="btn small" id="provinceStop" type="button">Stop</button><button class="btn small" id="provinceModule" type="button">Open Module</button><button class="btn small" id="provinceQr" type="button">QR</button></div><p class="audio-status" id="provinceAudioStatus">Voice recording is saved locally in this browser session.</p><div class="lesson-card"><h4>Field Connection</h4><p>${escapeHTML(m.focus)}</p></div></div>`;
  $('#provinceSpeak')?.addEventListener('click', () => speak(`${p.name}. ${p.prompt} ${p.visitorTask}`));
  $('#provinceRecord')?.addEventListener('click', () => startRecording('#provinceAudioStatus'));
  $('#provinceStop')?.addEventListener('click', () => { if(mediaRecorder && mediaRecorder.state !== 'inactive') mediaRecorder.stop(); });
  $('#provinceModule')?.addEventListener('click', () => { selectedModuleKey = p.field; renderModuleNav(); renderModule(p.field); renderSpot(p.field); scrollToEl('#learning-studio'); });
  $('#provinceQr')?.addEventListener('click', () => openQr(p.field));
}

function initAdmin(){
  const form = $('#pinForm'), dash = $('#dashboard');
  if(adminUnlocked){ form.hidden=true; dash.hidden=false; renderAdmin(); }
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const msg = $('#pinMessage');
    if($('#pinInput').value === ADMIN_PIN){ adminUnlocked=true; sessionStorage.setItem(STORAGE_ADMIN,'true'); form.hidden=true; dash.hidden=false; renderAdmin(); }
    else { msg.textContent = 'Incorrect PIN. Access denied.'; }
  });
  $('#lockDashboard')?.addEventListener('click', () => { adminUnlocked=false; sessionStorage.removeItem(STORAGE_ADMIN); dash.hidden=true; form.hidden=false; $('#pinInput').value=''; });
  $$('.admin-tabs button').forEach(btn => btn.addEventListener('click', () => { adminTab = btn.dataset.adminTab; $$('.admin-tabs button').forEach(b=>b.classList.toggle('active',b===btn)); renderAdmin(); }));
}
function renderAdmin(){
  const view = $('#adminView'); if(!view) return;
  $$('.admin-tabs button').forEach(b => b.classList.toggle('active', b.dataset.adminTab === adminTab));
  if(adminTab==='content') view.innerHTML = renderAdminContent();
  if(adminTab==='materials') view.innerHTML = renderMaterialDesigner();
  if(adminTab==='assessment') view.innerHTML = renderAssessmentDesigner();
  if(adminTab==='provinces') view.innerHTML = renderProvinceDesigner();
  if(adminTab==='backup') view.innerHTML = renderBackup();
  bindAdminView();
}
function moduleOptions(selected=selectedModuleKey){ return Object.entries(modules).map(([k,m])=>`<option value="${k}" ${k===selected?'selected':''}>${escapeHTML(m.title)}</option>`).join(''); }
function renderAdminContent(){
  const m = modules[selectedModuleKey];
  return `<div class="admin-grid"><label>Route<select id="adminModuleSelect">${moduleOptions()}</select></label><label>Short Label<input id="adminShort" value="${escapeHTML(m.short)}"></label><label class="full">Title<input id="adminTitle" value="${escapeHTML(m.title)}"></label><label class="full">Symbolic Anchor<textarea id="adminAnchor">${escapeHTML(m.anchor)}</textarea></label><label class="full">Learning Focus<textarea id="adminFocus">${escapeHTML(m.focus)}</textarea></label><label class="full">Summary<textarea id="adminSummary">${escapeHTML(m.summary)}</textarea></label><label class="full">Core Input<textarea id="adminInput">${escapeHTML(m.input)}</textarea></label><label class="full">Voice Prompt<textarea id="adminVoice">${escapeHTML(m.voicePrompt)}</textarea></label></div><div class="admin-row"><button class="btn primary" id="saveContent" type="button">Save Module Content</button><button class="btn" id="previewContent" type="button">Preview Module</button></div>`;
}
function renderMaterialDesigner(){
  return `<div class="admin-grid"><label>Route<select id="matModule">${moduleOptions()}</select></label><label>Material Type<select id="matType"><option>Reading</option><option>Listening Script</option><option>Speaking Prompt</option><option>Vocabulary Bank</option><option>Writing Task</option><option>Rubric</option><option>QR Station Instruction</option></select></label><label class="full">Material Title<input id="matTitle" placeholder="Example: Visitor speaking prompt for ELF pronunciation"></label><label class="full">Material Content<textarea id="matContent" placeholder="Write or paste the material here..."></textarea></label></div><div class="admin-row"><button class="btn primary" id="addMaterial" type="button">Add Material</button></div>${renderAdminMaterialTable()}`;
}
function renderAdminMaterialTable(){
  const rows = Object.entries(modules).flatMap(([k,m]) => (m.customMaterials||[]).map((it,i)=>({k,i,...it,module:m.title})));
  if(!rows.length) return `<p class="audio-status">No custom materials have been added yet.</p>`;
  return `<table class="admin-table"><thead><tr><th>Route</th><th>Type</th><th>Title</th><th>Action</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${escapeHTML(r.module)}</td><td>${escapeHTML(r.type)}</td><td>${escapeHTML(r.title)}</td><td><button class="btn tiny" data-delete-material="${r.k}:${r.i}" type="button">Delete</button></td></tr>`).join('')}</tbody></table>`;
}
function renderAssessmentDesigner(){
  return `<div class="admin-grid"><label>Route<select id="assModule">${moduleOptions()}</select></label><label>Assessment Type<select id="assType"><option value="mcq">Multiple Choice</option><option value="truefalse">True / False</option><option value="short">Short Response</option><option value="rubric">Rubric Checklist</option></select></label><label class="full">Prompt<input id="assPrompt" placeholder="Write the question or task prompt"></label><label class="full">Options or Criteria<textarea id="assOptions" placeholder="For MCQ: one option per line. For rubric: one criterion per line. For True/False and Short Response: optional."></textarea></label><label>Correct Answer<input id="assAnswer" placeholder="MCQ index 0-3 or true/false"></label></div><div class="admin-row"><button class="btn primary" id="addAssessment" type="button">Add Assessment Item</button></div>${renderAdminAssessmentTable()}`;
}
function renderAdminAssessmentTable(){
  const rows = Object.entries(modules).flatMap(([k,m]) => (m.customAssessment||[]).map((it,i)=>({k,i,...it,module:m.title})));
  if(!rows.length) return `<p class="audio-status">No custom assessment items have been added yet.</p>`;
  return `<table class="admin-table"><thead><tr><th>Route</th><th>Type</th><th>Prompt</th><th>Action</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${escapeHTML(r.module)}</td><td>${escapeHTML(r.type)}</td><td>${escapeHTML(r.prompt)}</td><td><button class="btn tiny" data-delete-assessment="${r.k}:${r.i}" type="button">Delete</button></td></tr>`).join('')}</tbody></table>`;
}
function renderProvinceDesigner(){
  const p = provinces.find(x=>x.id===selectedProvinceId) || provinces[0];
  return `<div class="admin-grid"><label>Province<select id="provinceSelect">${provinces.map(x=>`<option value="${x.id}" ${x.id===p.id?'selected':''}>${escapeHTML(x.name)}</option>`).join('')}</select></label><label>Connected Field<select id="provinceField">${Object.entries(FIELD_NAMES).map(([k,v])=>`<option value="${k}" ${k===p.field?'selected':''}>${v}</option>`).join('')}</select></label><label class="full">Voice Prompt<textarea id="provincePrompt">${escapeHTML(p.prompt)}</textarea></label><label class="full">Visitor Task<textarea id="provinceTask">${escapeHTML(p.visitorTask)}</textarea></label></div><div class="admin-row"><button class="btn primary" id="saveProvince" type="button">Save Province Route</button><button class="btn" id="previewProvince" type="button">Preview on Map</button></div>`;
}
function renderBackup(){
  return `<div class="lesson-card"><h4>Local Backup</h4><p>Export your edited modules, custom learning materials, assessment items, and voice-map settings as JSON. Import the JSON later to restore the same content in another browser or after redeployment.</p><div class="admin-row"><button class="btn primary" id="exportJSON" type="button">Export JSON</button><label class="btn"><input id="importJSON" type="file" accept="application/json" hidden>Import JSON</label><button class="btn" id="restoreDefault" type="button">Restore Default</button></div><textarea id="backupPreview" placeholder="Export preview will appear here." style="margin-top:16px; min-height:180px"></textarea></div>`;
}
function bindAdminView(){
  $('#adminModuleSelect')?.addEventListener('change', e => { selectedModuleKey = e.target.value; renderAdmin(); });
  $('#saveContent')?.addEventListener('click', () => {
    const m = modules[selectedModuleKey];
    Object.assign(m, {short:$('#adminShort').value, title:$('#adminTitle').value, anchor:$('#adminAnchor').value, focus:$('#adminFocus').value, summary:$('#adminSummary').value, input:$('#adminInput').value, voicePrompt:$('#adminVoice').value});
    saveAll(); renderModuleNav(); renderModule(selectedModuleKey); renderSpot(selectedModuleKey); alert('Module content saved.');
  });
  $('#previewContent')?.addEventListener('click', () => { renderModule(selectedModuleKey); scrollToEl('#learning-studio'); });
  $('#addMaterial')?.addEventListener('click', () => {
    const k = $('#matModule').value; modules[k].customMaterials = modules[k].customMaterials || [];
    modules[k].customMaterials.push({type:$('#matType').value, title:$('#matTitle').value || 'Untitled Material', content:$('#matContent').value || ''});
    saveAll(); renderAdmin(); if(k===selectedModuleKey) renderModule(k);
  });
  $$('[data-delete-material]').forEach(btn => btn.addEventListener('click', () => { const [k,i]=btn.dataset.deleteMaterial.split(':'); modules[k].customMaterials.splice(Number(i),1); saveAll(); renderAdmin(); renderModule(selectedModuleKey); }));
  $('#addAssessment')?.addEventListener('click', () => {
    const k = $('#assModule').value, type=$('#assType').value, prompt=$('#assPrompt').value || 'Untitled assessment item';
    const lines = ($('#assOptions').value || '').split('\n').map(x=>x.trim()).filter(Boolean);
    const item = {type, prompt};
    if(type==='mcq'){ item.options = lines.length ? lines : ['Option A','Option B','Option C','Option D']; item.answer = Number($('#assAnswer').value || 0); }
    if(type==='truefalse'){ item.answer = String($('#assAnswer').value).toLowerCase() !== 'false'; }
    if(type==='rubric'){ item.criteria = lines.length ? lines : ['Criterion 1','Criterion 2','Criterion 3']; }
    modules[k].customAssessment = modules[k].customAssessment || [];
    modules[k].customAssessment.push(item); saveAll(); renderAdmin(); if(k===selectedModuleKey) renderModule(k);
  });
  $$('[data-delete-assessment]').forEach(btn => btn.addEventListener('click', () => { const [k,i]=btn.dataset.deleteAssessment.split(':'); modules[k].customAssessment.splice(Number(i),1); saveAll(); renderAdmin(); renderModule(selectedModuleKey); }));
  $('#provinceSelect')?.addEventListener('change', e => { selectedProvinceId = e.target.value; renderAdmin(); });
  $('#saveProvince')?.addEventListener('click', () => {
    const p = provinces.find(x=>x.id === $('#provinceSelect').value); if(!p) return;
    p.field = $('#provinceField').value; p.prompt = $('#provincePrompt').value; p.visitorTask = $('#provinceTask').value;
    saveAll(); renderMap(); renderProvince(p.id); alert('Province route saved.');
  });
  $('#previewProvince')?.addEventListener('click', () => { renderProvince(selectedProvinceId); renderMap(); scrollToEl('#voice-map'); });
  $('#exportJSON')?.addEventListener('click', () => {
    const data = {modules, provinces, exportedAt:new Date().toISOString(), platform:'Garuda Lingua Nusantara'};
    const text = JSON.stringify(data,null,2); $('#backupPreview').value = text;
    const blob = new Blob([text], {type:'application/json'}); const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = 'garuda-lingua-nusantara-backup.json'; a.click(); URL.revokeObjectURL(a.href);
  });
  $('#importJSON')?.addEventListener('change', e => {
    const file = e.target.files[0]; if(!file) return;
    const reader = new FileReader(); reader.onload = () => { try{ const data=JSON.parse(reader.result); if(data.modules) modules=data.modules; if(data.provinces) provinces=data.provinces; saveAll(); renderModuleNav(); renderModule(selectedModuleKey); renderMap(); renderProvince(selectedProvinceId); renderAdmin(); alert('Backup imported.'); } catch(err){ alert('Invalid JSON file.'); } }; reader.readAsText(file);
  });
  $('#restoreDefault')?.addEventListener('click', () => { if(confirm('Restore default content? Current local edits will be replaced.')){ modules=structuredClone(DEFAULT_MODULES); provinces=structuredClone(DEFAULT_PROVINCES); saveAll(); renderModuleNav(); renderModule('elt'); renderMap(); renderProvince('east-java'); renderAdmin(); } });
}

function initAmbient(){
  const canvas = $('#ambientCanvas'); if(!canvas) return;
  const ctx = canvas.getContext('2d'); let w=0,h=0,particles=[];
  function resize(){ w=canvas.width=innerWidth*devicePixelRatio; h=canvas.height=innerHeight*devicePixelRatio; particles = Array.from({length: Math.min(70, Math.floor(innerWidth/24))}, () => ({x:Math.random()*w,y:Math.random()*h,r:Math.random()*2+0.6,v:Math.random()*0.35+0.1,a:Math.random()*Math.PI*2})); }
  function draw(){ ctx.clearRect(0,0,w,h); particles.forEach(p=>{ p.y -= p.v*devicePixelRatio; p.x += Math.sin(p.a+=.01)*.18*devicePixelRatio; if(p.y<0) p.y=h; ctx.beginPath(); ctx.arc(p.x,p.y,p.r*devicePixelRatio,0,Math.PI*2); ctx.fillStyle='rgba(241,201,108,.38)'; ctx.fill(); }); requestAnimationFrame(draw); }
  addEventListener('resize', resize); resize(); draw();
}

init();
