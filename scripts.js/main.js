import './backgrounds.js'
import './sounds.js'

// Seleciona todos os botões
const buttons = document.querySelectorAll('#cards button');

// Adiciona o evento de clique a cada botão
buttons.forEach(button => {
    button.addEventListener('click', () => {
         // Verifica se o botão clicado já possui a classe 'pressed'
         const isPressed = button.classList.contains('pressed');
        // Remove a classe 'pressed' de todos os botões
        buttons.forEach(btn => btn.classList.remove('pressed'));
        // Adiciona a classe 'pressed' apenas ao botão clicado
        button.classList.add('pressed');
           // ou remove a classe 'pressed' se já estiver pressionado
           if (!isPressed) {
            button.classList.add('pressed');
        }
    });
});

const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

let totalTimeInSeconds = 25 * 60; // 25 minutos
let timerInterval;
let isTimerRunning = false;

function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return {
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
    };
}

function updateTimerDisplay() {
    const { minutes, seconds } = formatTime(totalTimeInSeconds);
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}

function startTimer() {
    if (!isTimerRunning) {
        isTimerRunning = true;
        timerInterval = setInterval(() => {
            if (totalTimeInSeconds > 0) {
                totalTimeInSeconds--;
                updateTimerDisplay();
            } else {
                stopTimer();
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
}

function stopTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    totalTimeInSeconds = 25 * 60; // Reseta o timer para 25 minutos
    updateTimerDisplay();
}

function addTime() {
    totalTimeInSeconds += 5 * 60; // Adiciona 5 minutos
    updateTimerDisplay();
}

function subtractTime() {
    if (totalTimeInSeconds >= 5 * 60) { // Garante que o tempo não seja negativo
        totalTimeInSeconds -= 5 * 60; // Subtrai 5 minutos
        updateTimerDisplay();
    }
}

document.getElementById('playBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('plusBtn').addEventListener('click', addTime);
document.getElementById('minusBtn').addEventListener('click', subtractTime);

updateTimerDisplay();


