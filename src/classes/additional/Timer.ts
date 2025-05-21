import { $ } from "../../../lib/TeachAndDraw";

export class Timer {
    public tracking:boolean=false;
    public lastFrameTracking:number=0;
    public durationTime:number;
    public currentTime:number;
    /**
    * durationTime in ms
    */
    constructor(duration:number){
        this.durationTime=duration;
        this.currentTime = 0;
    }
    update(){
        if(this.tracking){
            this.lastFrameTracking = $.frameCount;
            //console.log("$.time.msElapsed=", $.time.msElapsed);
            this.currentTime -= $.time.msElapsed;
        }
        if(this.isDone()) {
            this.tracking = false;
        }
    }
    start(){
        this.tracking = true;
        this.currentTime = this.durationTime;
    }
    doneThisFrame() {
        return $.frameCount === this.lastFrameTracking && this.isDone();
    }
    isDone(){
        return this.currentTime < 1;
    }
}