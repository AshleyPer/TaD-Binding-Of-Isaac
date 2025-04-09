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
}