import { Stamp } from "../../../../lib/Img.js";
import { IMapDoor } from "../../../interfaces/IMapDoor.js";

export class LevelMap{
    public id:number;
    public name:string;
    public image:Stamp;
    public doors:IMapDoor;

    constructor(id:number,name:string,image:Stamp, doors:IMapDoor){
        this.id = id;
        this.name = name;
        this.image = image;
        this.doors = doors;
    }

    public draw(){
        this.image.draw();
    }

    public drawDoors(){
        if(this.doors.BottomDoor !== undefined){
            this.doors.BottomDoorImage.draw();
        }
        if(this.doors.TopDoor !== undefined){
            this.doors.TopDoorImage.draw();
        }
        if(this.doors.LeftDoor !== undefined){
            this.doors.LeftDoorImage.draw();
        }
        if(this.doors.RightDoor !== undefined){
            this.doors.RightDoorImage.draw();
        }
    }
}