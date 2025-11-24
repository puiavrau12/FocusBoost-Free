let timeLeft = 1500; // 25 min
let interval;

function startPomodoro() {
  if (interval) return;

  interval = setInterval(() => {
    timeLeft--;
    document.getElementById("time").innerText = formatTime(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(interval);
      alert("Pomodoro finalizado!");
      interval = null;
      timeLeft = 1500;
    }
  }, 1000);
}

function resetPomodoro() {
  clearInterval(interval);
  interval = null;
  timeLeft = 1500;
  document.getElementById("time").innerText = "25:00";
}

function formatTime(t) {
  let m = Math.floor(t / 60);
  let s = t % 60;
  return `${m}:${s < 10 ? "0" + s : s}`;
}

// CHECKLIST
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox">
    ${taskText}
  `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

// TEMA
function toggleTheme() {
  document.body.classList.toggle("light");
}