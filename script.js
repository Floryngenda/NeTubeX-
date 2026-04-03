let points = 0;

document.getElementById('startMission')?.addEventListener('click', function() {
  points += 10;
  document.getElementById('userPoints').textContent = points;
  const missionsDiv = document.getElementById('missions');
  missionsDiv.innerHTML = '<iframe src="https://example.com" width="300" height="200"></iframe>';
});

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  alert(`Bienvenue ${username}!`);
  window.location.href = "dashboard.html";
});
