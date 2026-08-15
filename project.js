// Scroll reveal
const _revealEls = document.querySelectorAll('.reveal');
const _revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); _revealObs.unobserve(e.target); } });
}, { threshold: 0.08 });
_revealEls.forEach(el => _revealObs.observe(el));

// Sound toggle for videos
document.querySelectorAll('.pvideo').forEach(pvideo => {
  const video = pvideo.querySelector('video');
  if (!video) return;
  const btn = document.createElement('button');
  btn.className = 'pvideo-sound';
  btn.innerHTML = '<span class="pvs-icon">♪</span><span class="pvs-label">Sound</span>';
  pvideo.appendChild(btn);
  btn.addEventListener('click', () => {
    video.muted = !video.muted;
    btn.querySelector('.pvs-icon').textContent  = video.muted ? '♪' : '♫';
    btn.querySelector('.pvs-label').textContent = video.muted ? 'Sound' : 'Sound An';
    btn.classList.toggle('pvideo-sound--on', !video.muted);
  });
});
