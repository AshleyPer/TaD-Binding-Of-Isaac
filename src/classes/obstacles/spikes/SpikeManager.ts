import { Collider } from "../../../../lib/Collider.js";
import { $ } from "../../../../lib/TeachAndDraw.js";

export class SpikeManager{
    public Spikes : any = $.makeGroup();

    constructor(){}

    public AddToGroup(sprite : any){
        this.Spikes.push(sprite);
    }

    public DrawGroup(){
        for (const spike of this.Spikes) {
            spike.collider.draw();
        }
    }

    public Collides(player: Collider):boolean {
        for(const spike of this.Spikes) {
            if(spike.collider.collides(player)){
                return true;
            }
        }
        return false;
    }
}