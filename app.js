class Drumkit{
    constructor(){
        this.pads = document.querySelectorAll(".pad");
        this.playBtn = document.querySelector(".play");
        this.kickAudio= document.querySelectorAll('.kick-sound');
        this.snareAudio = document.querySelectorAll('.snare-sound');
        this.hihatAudio = document.querySelectorAll('.hihat-sound');
        this.index = 0;
        this.bpm = 150;
    }
    repeat(){
        let step = this.index % 8;
        const activeBars = document.querySelectorAll(`.b${step}`);
        console.log(step);
        this.index++;
    }
    start(){
        const Interval = (60/this.bpm) * 1000;
        setInterval(() => {
            this.repeat();
        }, Interval);
    }
}
const drumKit = new Drumkit;
drumKit.playBtn.addEventListener("click", function(){
    drumKit.start();
})
