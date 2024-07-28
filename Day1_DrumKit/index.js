function playSound(event) {
    const audio = document.querySelector(`audio[data-key=${event.key.toLowerCase()}
]`)
    const key = document.querySelector(`.key[data-key=${event.key.toLowerCase()}
]`)
    key.classList.add('playing')
    if (!audio) return;
    audio.currentTime = 0; //rewind to start
    audio.play();
    const keys = document.querySelectorAll('.key')
    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playing')
    }
    keys.forEach((key) => {
        key.addEventListener('transitionend', removeTransition)
    })

}
window.addEventListener('keydown', playSound)