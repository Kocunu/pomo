let timer = document.getElementById('number');
const { invoke } = window.__TAURI__.tauri;


timer.innerHTML = "28:00";

function startTimer(duration, display) {
  let timer = duration * 60, minutes, seconds;
  setInterval(async function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration * 60;
      await invoke('notification', {
        title: 'Time is up!',
        body: 'Time to take a break!',
      });
    }
  }, 1000);
}

startTimer(22, timer);