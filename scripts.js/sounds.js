// Função para tocar um som quando um botão é pressionado
export function playSound(soundId) {
    const audio = document.getElementById(soundId);
    audio.currentTime = 0; // Reinicia o áudio se já estiver tocando
    audio.play();
}

// Função para parar todos os sons, exceto o atual
export function stopOtherSounds(currentSoundId) {
    const sounds = ['audio-floresta', 'audio-chuva', 'audio-cafeteria', 'audio-lareira'];
    sounds.forEach(sound => {
        if (sound !== currentSoundId) {
            const audio = document.getElementById(sound);
            audio.pause();
            audio.currentTime = 0;
        }
    });
}

// Event listeners para os botões de fundo
document.getElementById('btn-floresta').addEventListener('click', () => {
    stopOtherSounds('audio-floresta');
    if (!document.getElementById('audio-floresta').paused) {
        document.getElementById('audio-floresta').pause();
    } else {
        document.getElementById('audio-floresta').play();
        document.getElementById('audio-floresta').loop = true;
    }
});

document.getElementById('btn-chuva').addEventListener('click', () => {
    stopOtherSounds('audio-chuva');
    if (!document.getElementById('audio-chuva').paused) {
        document.getElementById('audio-chuva').pause();
    } else {
        document.getElementById('audio-chuva').play();
        document.getElementById('audio-chuva').loop = true;
    }
});

document.getElementById('btn-cafeteria').addEventListener('click', () => {
    stopOtherSounds('audio-cafeteria');
    if (!document.getElementById('audio-cafeteria').paused) {
        document.getElementById('audio-cafeteria').pause();
    } else {
        document.getElementById('audio-cafeteria').play();
        document.getElementById('audio-cafeteria').loop = true;
    }
});

document.getElementById('btn-lareira').addEventListener('click', () => {
    stopOtherSounds('audio-lareira');
    if (!document.getElementById('audio-lareira').paused) {
        document.getElementById('audio-lareira').pause();
    } else {
        document.getElementById('audio-lareira').play();
        document.getElementById('audio-lareira').loop = true;
    }
});