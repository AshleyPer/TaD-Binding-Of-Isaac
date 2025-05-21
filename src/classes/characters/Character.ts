import { MovingStamp } from "../../../lib/Animation.js";
import { Stamp } from "../../../lib/Img.js";
import { $ } from "../../../lib/TeachAndDraw.js";
import { ICharacterImage } from "../../interfaces/ICharacterImage.js";
import { ICharacterStats } from "../../interfaces/ICharacterStats.js";
import { ICharacterTimers } from "../../interfaces/ICharacterTimers.js";
import { Timer } from "../additional/Timer.js";

export class Character{
    public collider:any;
    public name:string;
    public image:Stamp;
    public stats:ICharacterStats;
    public maxHealth:number;
    private _currentHealth:number;
    public tearGroup:any = $.makeGroup();
    public tearImage:Stamp;
    private heartImage:Stamp;
    private heartHalfImage:Stamp;
    private imageArray:Array<ICharacterImage> = [];
    public timers:ICharacterTimers;
    public damagedAnimation:MovingStamp|undefined;

    constructor(name:string,image:Stamp,stats:ICharacterStats, tearImage:Stamp, heartImage:Stamp, heartHalfImage:Stamp, index:number, drawOnMenu:boolean=true, damagedAnimation:MovingStamp|undefined=undefined){
        this.name = name;
        this.image = image;
        this.stats = stats;
        this.maxHealth = stats.Health;
        this._currentHealth = this.maxHealth;
        let initialAngle = (Math.PI/2) - (index)*(Math.PI/(17/2));
        let initialX = 300 * Math.cos(initialAngle)+ ($.w/2);
        let initialY = 150 * Math.sin(initialAngle)+ ($.h/2-130);
        this.collider = $.makeCircleCollider(initialX,initialY,110);
        this.collider.initialAngle = initialAngle;
        this.collider.currentAngle = this.collider.initialAngle;
        this.collider.asset = image;
        this.collider.asset.scale = 40;
        this.collider.drawOnMenu = drawOnMenu;
        this.collider.currentImageName = "down";
        this.collider.index = index;
        this.collider.xOffset = -24;
        this.collider.yOffset = -30;
        this.tearImage = tearImage;
        this.heartImage = heartImage;
        this.heartHalfImage = heartHalfImage;
        this.timers = {InvulnerabilityTimer:new Timer(2000)};
        this.damagedAnimation = damagedAnimation;
    }

    public addToImageArray(theImage:ICharacterImage){
        this.imageArray.push(theImage);
    }
    
    public get currentHealth() : number {
        return this._currentHealth;
    }
    
    public set currentHealth(damage : number) {
        console.log("this._currentHealth = ", this._currentHealth)
        this._currentHealth = this._currentHealth-damage;
    }

    public makeTear(direction : number, imageName: string){
        let newTear:any = $.makeCircleCollider(this.collider.x-6,this.collider.y+25,22);
        newTear.asset = this.tearImage;
        newTear.asset.scale = 35;
        newTear.static = true;
        newTear.lifespan = this.stats.Range / 5;
        newTear.direction = direction;
        newTear.speed = 80 * this.stats.ShotSpeed;
        newTear.mass = 0;
        newTear.xOffset = -6;
        newTear.yOffset = -6;
        if(this.name === "eve" && this._currentHealth === 2){
            newTear.damage = this.stats.Damage * 1;
        }else{
            newTear.damage = this.stats.Damage * this.stats.DamageMultiplier;
        }
        this.changeTheImage(imageName,true);
        this.addTearToGroup(newTear);
    }

    public addTearToGroup(tear : any){
        this.tearGroup.push(tear);
    }

    public drawHealthBar(){
        let halfHeartImageX = 0;
        for(let i = 0; i < Math.floor(this.currentHealth/2); i++){
            this.heartImage.x = 50 * i+20;
            this.heartImage.draw()
            if(i+1 === Math.floor(this.currentHealth/2)){
                halfHeartImageX = this.heartImage.x;
            }
        }
        
        if(this.currentHealth % 2 === 1){
            this.heartHalfImage.x = halfHeartImageX === 0 ? +20 : halfHeartImageX+50;
            this.heartHalfImage.draw()
        }
    }

    public changeTheImage(imageName:string, isShooting:boolean){
        let newImage = this.findCorrectImage(imageName,isShooting);
        if(newImage){
            this.collider.asset = newImage.Image;
            this.collider.asset.scale = newImage!.Scale;
            this.collider.currentImageName = newImage.Name;
        }

    }

    public findCorrectImage(imageName:string, isShooting:boolean){
        for(let i = 0; i < this.imageArray.length; i++){
            if(isShooting && this.imageArray[i].Name === imageName && this.imageArray[i].Shooting === true){
                return this.imageArray[i];
            }else if(!isShooting && this.imageArray[i].Name === imageName && this.imageArray[i].Shooting === false){
                return this.imageArray[i];
            }
        }
    }

    public takeDamage(damage : number){
        console.log("take damage")
        this._currentHealth -= damage;
        console.log("this._currentHealth = ", this._currentHealth)
        //if(this.timers.InvulnerabilityTimer.doneThisFrame()){

        //}
    }
}