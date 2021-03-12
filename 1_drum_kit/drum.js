"use strict";

onload = ini;

function ini() {
    window.addEventListener('keydown', function name(e) {
        let keyCode = e.keyCode;
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
        const key = document.querySelector(`.nota[data-key="${keyCode}"]`);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add("playing");
        console.log(key);
    })

    function removeTransition(evt) {
        if (evt.propertyName != "transform") return;
        this.classList.remove("playing");
        console.log(this);
    }

    let keys = document.querySelectorAll(`.nota`);
    keys.forEach(k => {
        k.addEventListener('transitionend', removeTransition);
    });
}
