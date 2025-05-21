import { Collider } from "../../../../lib/Collider";
import { Stamp } from "../../../../lib/Img";
import { $ } from "../../../../lib/TeachAndDraw";

export class Spike{
    public collider: Collider;

    constructor(image:Stamp,x:number,y:number){
        this.collider = $.makeBoxCollider(x, y, 56, 52);
        this.collider.asset = image;
        this.collider.asset.scale = 40;
        this.collider.static = true;
        this.collider.xOffset = -23;
        this.collider.yOffset = -20;
    }
}