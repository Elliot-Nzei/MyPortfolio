document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');

  toggleBtn.addEventListener('click', function () {
    sidebar.classList.toggle('show');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const certBtn = document.getElementById('certificate-btn');
  const expBtn = document.getElementById('experience-btn');
  const certContent = document.getElementById('certificate-content');
  const expContent = document.getElementById('experience-content');

  certBtn.addEventListener('click', function () {
    certBtn.classList.add('active');
    expBtn.classList.remove('active');
    certContent.classList.remove('hidden');
    expContent.classList.add('hidden');
  });

  expBtn.addEventListener('click', function () {
    expBtn.classList.add('active');
    certBtn.classList.remove('active');
    expContent.classList.remove('hidden');
    certContent.classList.add('hidden');
  });
});

