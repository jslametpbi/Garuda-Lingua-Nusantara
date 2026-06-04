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
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });
revealItems.forEach(item => io.observe(item));

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
    auto = setInterval(() => { angle += 2; renderViewer(); }, 80);
    e.currentTarget.setAttribute('aria-pressed','true'); e.currentTarget.textContent = 'Stop Auto';
  }
});

const viewer = document.getElementById('viewer');
let dragging=false, startX=0, startAngle=0;
viewer?.addEventListener('pointerdown', (e) => { dragging=true; startX=e.clientX; startAngle=angle; viewer.setPointerCapture(e.pointerId); });
viewer?.addEventListener('pointermove', (e) => { if(!dragging) return; angle = startAngle + (e.clientX - startX) / 6; renderViewer(); });
viewer?.addEventListener('pointerup', () => { dragging=false; });
viewer?.addEventListener('keydown', (e) => { if(e.key==='ArrowLeft'){ angle-=7; renderViewer(); } if(e.key==='ArrowRight'){ angle+=7; renderViewer(); } });

document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', async () => {
    const target = document.querySelector(btn.dataset.copy);
    if (!target) return;
    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      const old = btn.textContent;
      btn.textContent = 'Copied';
      setTimeout(() => btn.textContent = old, 1400);
    } catch {
      window.prompt('Copy this URL:', target.textContent.trim());
    }
  });
});
