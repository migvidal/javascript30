let player = document.getElementsByClassName('player')[0];
let video = player.querySelector('.viewer');
let playButton = player.querySelector('.toggle');

let skipButtons = document.querySelectorAll('[data-skip]');

let volumeSlider = document.querySelector('[name=volume]');
let speedSlider = document.querySelector('[name=playbackRate]');

let progresSlider = document.querySelector('.progress');
let progress = document.querySelector('.progress__filled');
let clickedDown = false;


function togglePlayPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton() {
    let icon = this.paused ? '►' : '▌▌';
    playButton.textContent = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleVolume() {
    video.volume = this.value;
}
function handleSpeed() {
    video.playbackRate = this.value;
}

function updateProgress() {
    let percent = video.currentTime / video.duration * 100;
    progress.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    if (clickedDown) {
        let position = e.offsetX / progress.offsetWidth * video.duration;
        video.currentTime = position;

    }
}

video.addEventListener('timeupdate', updateProgress);

video.addEventListener('click', togglePlayPause);
playButton.addEventListener('click', togglePlayPause);

video.addEventListener('pause', updateButton);
video.addEventListener('play', updateButton);

skipButtons.forEach(button => {
    button.addEventListener('click', skip);
});

volumeSlider.addEventListener('change', handleVolume);
speedSlider.addEventListener('change', handleSpeed);

progresSlider.addEventListener('mousemove', scrub);
progresSlider.addEventListener('mousedown', () => clickedDown=true);
document.addEventListener('mouseup', () => clickedDown=false);
document.addEventListener('mouseout', () => clickedDown=false);

