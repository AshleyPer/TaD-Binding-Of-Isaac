import { $ } from "../../lib/TeachAndDraw";

export class ScreenManager{
    public theCurrentScreen:string;
    public screenSwitched:boolean;

    constructor(screen:string){
        this.theCurrentScreen = screen;
        this.screenSwitched = false;
    }

    public get currentScreen() : string {
        return this.theCurrentScreen;
    }
    
    public set currentScreen(screen : string) {
        this.theCurrentScreen = screen;
    }

    public DisplayScreen(){
        if(this.currentScreen === "menu"){
            this.MainMenu();
        }else if(this.currentScreen === "character_select"){
            this.CharacterSelect();
        }else if(this.currentScreen === "play"){
            this.Play();
        }
    }

    private MainMenu(){
        $.text.size = 30;
        $.mouse.fill = "white";   
        if($.mouse.x >= ($.w/2)-130 && $.mouse.x <= ($.w/2)+130 && $.mouse.y >= 75 && $.mouse.y <= 125){
            $.colour.fill = "grey";
            $.mouse.fill = "blue";

            if($.mouse.leftReleased === true){
                this.screenSwitched = true;
                this.currentScreen = "character_select";
            }
        }else{
            $.colour.fill = "black";
        }

        $.shape.rectangle(
            $.w/2,      // x position
            100,      // y position
            260,        // width size
            50          // height size
        );
        $.colour.fill = "white";
        $.text.print($.w/2, 100, "Pick Character");

    }

    private CharacterSelect(){
        $.text.size = 30;
        $.mouse.fill = "white";
        //$.text.print($.mouse.x, $.mouse.y - 40, `x=${$.mouse.x}, y=${$.mouse.y}, $.h-120= ${$.h - 125}, $.h= ${$.h}`);
        if($.mouse.x >= ($.w/2)-100 && $.mouse.x <= ($.w/2)+100 && $.mouse.y >= $.h - 125 && $.mouse.y <= $.h-77){
            $.colour.fill = "grey";
            $.mouse.fill = "blue";

            if($.mouse.leftReleased === true){
                this.screenSwitched = true;
                this.currentScreen = "play";
            }
        }else{
            $.colour.fill = "black";
        }

        $.shape.rectangle(
            $.w/2,      // x position
            $.h - 100,      // y position
            200,        // width size
            50          // height size
        );
        $.colour.fill = "white";
        $.text.print($.w/2, $.h - 100, "Play");
    }

    private Play(){
        $.mouse.fill = "white";
    }
}


//possible mouse hover suggestion by james
// just have that hide the $.mouse every frame in gameupdate i guess
/*
js 
const assets = {
   idle:$.loadImage(0,0,"blah blah"),
   point:$.loadImage(0,0,"blah blah"),
}
class BetterMouse{
  constructor(assets){
      this.assets=assets;
      this.mode="idle";
  }
  gameUpdate(){ //manually call every frame to update state
    //code that figures out what cursor mode to set

  }
  draw() {
     this.assets[this.mode].x = $.mouse.x;
     this.assets[this.mode].y = $.mouse.y;
     this.assets[this.mode].draw();
  }
}

export const betterMouse = new BetterMouse(assets);
*/