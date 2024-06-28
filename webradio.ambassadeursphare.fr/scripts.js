document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('play-pause');
    const progress = document.getElementById('progress');
    const currentTimeElement = document.getElementById('current-time');
    const durationElement = document.getElementById('duration');
    const trackTitle = document.getElementById('track-title');
    const trackArtist = document.getElementById('track-artist');
    const albumArt = document.getElementById('album-art');

    playPauseButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = '⏸️';
        } else {
            audio.pause();
            playPauseButton.textContent = '▶️';
        }
    });

    audio.addEventListener('timeupdate', function () {
        const currentTime = audio.currentTime;
        const duration = audio.duration;

        progress.value = (currentTime / duration) * 100;

        currentTimeElement.textContent = formatTime(currentTime);
        durationElement.textContent = formatTime(duration);
    });

    progress.addEventListener('input', function () {
        const value = progress.value;
        audio.currentTime = (value / 100) * audio.duration;
    });

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

   

});


