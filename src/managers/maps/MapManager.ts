import { $ } from "../../../lib/TeachAndDraw.js";
import { LevelMap } from "../../classes/levels/maps/LevelMap.ts";

export class MapManager{
    public LevelMaps : Array<LevelMap> = [];
    private _currentLevelMap: LevelMap | null = null; 

    constructor(){}

    public AddToLevelArray(levelMap : LevelMap){
        this.LevelMaps.push(levelMap);
    }

    public get currentLevelMap() : LevelMap | null {
        return this._currentLevelMap;
    }
    
    public set currentLevelMap(newLevelMap : LevelMap) {
        this._currentLevelMap = newLevelMap;
    }

    public findMapByName(levelMapName: string){
        for(let i = 0; i < this.LevelMaps.length; i++){
            if(this.LevelMaps[i].name === levelMapName){
                return this.LevelMaps[i];
            }
        }
    }

    public findMapByID(mapID: number){
        for(let i = 0; i < this.LevelMaps.length; i++){
            if(this.LevelMaps[i].id === mapID){
                return this.LevelMaps[i];
            }
        }
    }

    public checkIfCharacterTouchedDoor(x:number, y:number){
        //if the current map's doors are not undefined
        if(this._currentLevelMap?.doors.LeftDoor !== undefined){
            if(x <= 20 && y <= $.h/2 +70 && y >= $.h/2 -100){
                this.changeMapRoom(this._currentLevelMap?.doors.LeftDoor);
                return {newX:$.w-100, newY: y};
            }
        }
        if(this._currentLevelMap?.doors.RightDoor !== undefined){
            if(x >= $.w-50 && y <= $.h/2 +70 && y >= $.h/2 -100){
                this.changeMapRoom(this._currentLevelMap?.doors.RightDoor);
                return {newX:100, newY: y};
            }
        }
        if(this._currentLevelMap?.doors.TopDoor !== undefined){
            if(x <= $.w/2+25 && x >= $.w/2-25 && y <= 20){
                this.changeMapRoom(this._currentLevelMap?.doors.TopDoor);
                return {newX:x, newY: $.h-100};
            }
        }
        if(this._currentLevelMap?.doors.BottomDoor !== undefined){
            if(x <= $.w/2+25 && x >= $.w/2-25 && y >= $.h-70){
                this.changeMapRoom(this._currentLevelMap?.doors.BottomDoor);
                return {newX:x, newY: 60};
            }
        }
    }

    public changeMapRoom(id: number){
        this.currentLevelMap = this.findMapByID(id)!;
    }
}