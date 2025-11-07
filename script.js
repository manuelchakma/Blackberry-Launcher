function updateTime() {
  const now = new Date();
  document.getElementById("time").innerText = now.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
}
setInterval(updateTime, 1000);
updateTime();

function openApp(link) {
  try {
    window.location.href = link;
  } catch {
    alert("App not installed or intent unsupported.");
  }
}

function pressKey(key) {
  if(key === 'back') {
    document.querySelectorAll('.app').forEach(a=>a.style.display='block');
  } else if(key.length === 1) {
    const apps = document.querySelectorAll('.app');
    apps.forEach(app=>{
      const text = app.querySelector('p').innerText.toLowerCase();
      app.style.display = text.startsWith(key) ? 'block' : 'none';
    });
  }
}
