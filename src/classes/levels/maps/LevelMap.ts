import { Stamp } from "../../../../lib/Img.js";
import { IMapDoor } from "../../../interfaces/IMapDoor.js";

export class LevelMap{
    public collider:any;
    public name:string;
    public image:Stamp;
    public doors:IMapDoor;

    constructor(name:string,image:Stamp, doors:IMapDoor){
        this.name = name;
        this.image = image;
        this.doors = doors;
    }

    public draw(){
        this.image.draw();
    }

    public drawDoors(){
        if(this.doors.BottomDoor){
            this.doors.BottomDoorImage.draw();
        }
        if(this.doors.TopDoor){
            this.doors.TopDoorImage.draw();
        }
        if(this.doors.LeftDoor){
            this.doors.LeftDoorImage.draw();
        }
        if(this.doors.RightDoor){
            this.doors.RightDoorImage.draw();
        }
    }
}