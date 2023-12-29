document.getElementById('desktopBtn').addEventListener('click', function() {
  document.getElementById('desktopVideo').style.display = 'block';
  document.getElementById('mobileVideo').style.display = 'none';
  this.classList.add('active');
  document.getElementById('mobileBtn').classList.remove('active');
});

document.getElementById('mobileBtn').addEventListener('click', function() {
  document.getElementById('desktopVideo').style.display = 'none';
  document.getElementById('mobileVideo').style.display = 'block';
  this.classList.add('active');
  document.getElementById('desktopBtn').classList.remove('active');
});
