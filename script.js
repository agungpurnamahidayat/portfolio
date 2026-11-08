const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
// Pergantian tampilan screenshot pada kartu proyek
(function () {
  var img = document.getElementById("wmsShot");
  var tabs = document.querySelectorAll(".shot-tabs button");
  if (!img || !tabs.length) return;
  tabs.forEach(function (btn) {
    btn.addEventListener("click", function () {
      img.src = btn.dataset.src;
      img.alt = btn.dataset.alt;
      tabs.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
    });
  });
})();
