import { Stamp } from "../../../../lib/Img.js";
//import { $ } from "../../../../lib/TeachAndDraw.js";

export class LevelMap{
    public collider:any;
    public name:string;
    public image:Stamp;

    constructor(name:string,image:Stamp){
        this.name = name;
        this.image = image;
    }

    public draw(){
        this.image.draw();
    }
}