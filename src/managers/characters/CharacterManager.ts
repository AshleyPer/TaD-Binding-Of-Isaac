import { $ } from "../../../lib/TeachAndDraw.js";
import { Character } from "../../classes/characters/Character.js";

export class CharacterManager{
    public Characters : any = $.makeGroup();
    private _currentCharacter: Character | null = null; 

    constructor(){}

    public AddToGroup(sprite : any){
        this.Characters.push(sprite);
    }

    public DrawGroup(){
        for (const character of this.Characters) {
            if(character.collider.drawOnMenu === false){
                continue;
            }
            character.collider.draw();
        }
    }

    public get currentCharacter() : Character | null {
        return this._currentCharacter;
    }
    
    public set currentCharacter(newCharacter : Character) {
        this._currentCharacter = newCharacter;
    }

    public CharacterSelectMovement(menuDirection:string){
        for(let i = 0; i < this.Characters.length; i++){
            if(!this.Characters[i].collider.drawOnMenu){
                continue;
            }
            if(menuDirection === "left"){
                if(this.Characters[i].collider.index === 0){
                    this.Characters[i].collider.index = 16;
                }else{
                    this.Characters[i].collider.index--;
                }
                this.Characters[i].collider.currentAngle += Math.PI/(17/2);
            }else{
                if(this.Characters[i].collider.index === 16){
                    this.Characters[i].collider.index = 0;
                }else{
                    this.Characters[i].collider.index++;
                }
                this.Characters[i].collider.currentAngle -= Math.PI/(17/2);
            }
            this.Characters[i].collider.x = 300 * Math.cos(this.Characters[i].collider.currentAngle)+ ($.w/2);
            this.Characters[i].collider.y = 150 * Math.sin(this.Characters[i].collider.currentAngle)+ ($.h/2-130);
        }
    }

    public selectCurrentCharacter(){
        for(let i = 0; i < this.Characters.length; i++){
            if(this.Characters[i].collider.index === 0){
                console.log(this.Characters[i].name)
                this.currentCharacter = this.Characters[i];
                this.currentCharacter!.collider.x = $.w/2;
                this.currentCharacter!.collider.y = $.h/2 - 50;
            }
        }
    }
}