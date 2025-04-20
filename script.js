const mode = document.getElementById('mode');
const body = document.body;

mode.addEventListener('click', toggleMode);

function toggleMode(){
    body.classList.toggle('dark');
    body.classList.toggle('light');
    mode.textContent = body.classList.contains('light')? 'dark' : 'light'; 
  }