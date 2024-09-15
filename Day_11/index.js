const playBtn = document.querySelector('.player__button');
const videoPlayer = document.querySelector('.player__video');
const playbackRateBtn = document.querySelector('.playback_btn');
const volumeBtn = document.querySelector('.volume_btn');
const volumeControls = document.querySelector('.volume_controls');
const volumeSlider = document.querySelector('.volume_slider');
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector('.next');
const progressBar = document.querySelector('.progress__filled');
const progress = document.querySelector('.progress');
const fullScreenBtn = document.querySelector('.fullscreen_btn');

const skipVideo = (time) => {
    videoPlayer.currentTime = videoPlayer.currentTime + time;

}
const toggleVideo = () => {
    if (videoPlayer.paused) {
        videoPlayer.play()
        playBtn.innerHTML = `<svg fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 277.338 277.338" xml:space="preserve" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M14.22,45.665v186.013c0,25.223,16.711,45.66,37.327,45.66c20.618,0,37.339-20.438,37.339-45.66V45.665 c0-25.211-16.721-45.657-37.339-45.657C30.931,0,14.22,20.454,14.22,45.665z"></path> <path d="M225.78,0c-20.614,0-37.325,20.446-37.325,45.657V231.67c0,25.223,16.711,45.652,37.325,45.652s37.338-20.43,37.338-45.652 V45.665C263.109,20.454,246.394,0,225.78,0z"></path> </g> </g></svg>`
    }
    else {
        videoPlayer.pause()
        playBtn.innerHTML = `<svg fill="#fff" height="28px" width="28px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_308_" d="M37.728,328.12c2.266,1.256,4.77,1.88,7.272,1.88c2.763,0,5.522-0.763,7.95-2.28l240-149.999 c4.386-2.741,7.05-7.548,7.05-12.72c0-5.172-2.664-9.979-7.05-12.72L52.95,2.28c-4.625-2.891-10.453-3.043-15.222-0.4 C32.959,4.524,30,9.547,30,15v300C30,320.453,32.959,325.476,37.728,328.12z"></path> </g></svg>`

    }
}
function handlePlayback() {
    this.dataset.speed = parseInt(this.dataset.speed) + 1;
    if (this.dataset.speed > 3) {
        this.dataset.speed = 1;
        this.innerText = `Normal`
    }
    else {
        this.innerText = `${this.dataset.speed}x`
    }
    videoPlayer.playbackRate = this.dataset.speed
}
const toggleVolumeBtn = () => {
    if (!videoPlayer.muted) {
        volumeBtn.innerHTML = `<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><use class="ytp-svg-shadow" xlink:href="#ytp-id-202"></use><path fill="#fff" class="ytp-svg-fill" d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z" id="ytp-id-202"></path></svg>`
    }
    else {
        volumeBtn.innerHTML = ` <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
                        <use class="ytp-svg-shadow" xlink:href="#ytp-id-37"></use>
                        <use class="ytp-svg-shadow" xlink:href="#ytp-id-38"></use>
                        <defs>
                            <clipPath id="ytp-svg-volume-animation-mask">
                                <path d="m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"></path>
                                <path d="M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"></path>
                                <path class="ytp-svg-volume-animation-mover"
                                    d="M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z" transform="translate(0, 0)">
                                </path>
                            </clipPath>
                            <clipPath id="ytp-svg-volume-animation-slash-mask">
                                <path class="ytp-svg-volume-animation-mover"
                                    d="m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z" transform="translate(0, 0)">
                                </path>
                            </clipPath>
                        </defs>
                        <path class="ytp-svg-fill ytp-svg-volume-animation-speaker"
                            clip-path="url(#ytp-svg-volume-animation-mask)"
                            d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z"
                            fill="#fff" id="ytp-id-37"></path>
                        <path class="ytp-svg-fill ytp-svg-volume-animation-hider"
                            clip-path="url(#ytp-svg-volume-animation-slash-mask)"
                            d="M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z" fill="#fff" id="ytp-id-38"
                            style="display: none;"></path>
                    </svg>`
    }
}
const backward = () => {
    skipVideo(-10)
}
const forward = () => {
    skipVideo(25)
}
playBtn.addEventListener("click", toggleVideo)
videoPlayer.addEventListener("click", toggleVideo)
playbackRateBtn.addEventListener('click', handlePlayback)
volumeBtn.addEventListener("click", () => {
    toggleVolumeBtn()
    videoPlayer.muted = !videoPlayer.muted

})
volumeSlider.addEventListener("change", (e) => {
    if (videoPlayer.muted) {
        toggleVolumeBtn()
        videoPlayer.muted = false
    }
    videoPlayer.volume = e.target.value
})

function handleProgress() {
    const percent = (videoPlayer.currentTime / videoPlayer.duration) * 100;
    progressBar.style.width = `${percent}%`;
}
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * videoPlayer.duration;
    videoPlayer.currentTime = scrubTime;
}

progress.addEventListener('click', scrub);
prevBtn.addEventListener("click", backward);
nextBtn.addEventListener("click", forward);
videoPlayer.addEventListener('timeupdate', handleProgress);
fullScreenBtn.addEventListener("click", () => {
    videoPlayer.requestFullscreen()
})