// @ts-ignore
import { $ } from "../lib/TeachAndDraw.js";
import { CharacterManager } from "./managers/characters/CharacterManager.js";
import { Character } from "./classes/characters/Character.js";
import { ScreenManager } from "./managers/screens/ScreenManager.js";
import { MapManager } from "./managers/maps/MapManager.js";
import { LevelMap } from "./classes/levels/maps/LevelMap.js";
import { Spike } from "./classes/obstacles/spikes/Spike.js";
import { SpikeManager } from "./classes/obstacles/spikes/SpikeManager.js";

$.use(update);

$.w = 1200;
$.h = 600;

//$.debug = true;

let characterManager = new CharacterManager;

let heartImageFull = $.loadImage(20,20,"assets/images/characters/character_heart_full.png");
heartImageFull.scale = 12;
let heartImageHalf = $.loadImage(70,20,"assets/images/characters/character_heart_half.png");
heartImageHalf.scale = 12;

let tearImage = $.loadImage(50,250,"assets/images/characters/tear_1.png");

let isaacImage = $.loadImage(0,0,"assets/images/characters/isaac/isaac_profile.png");
let isaacShootingDownImage = $.loadImage(0,0,"assets/images/characters/isaac/isaac_profile_shooting_down.png");
let isaacLeftImage = $.loadImage(0,0,"assets/images/characters/isaac/isaac_profile_left.png");
let isaacShootingLeftImage = $.loadImage(0,0,"assets/images/characters/isaac/isaac_profile_left_shooting.png");
let isaacRightImage = $.loadImage(0,0,"assets/images/characters/isaac/isaac_profile_right.png");
let isaacShootingRightImage = $.loadImage(0,0,"assets/images/characters/isaac/isaac_profile_right_shooting.png");
let isaacUpImage = $.loadImage(0,0,"assets/images/characters/isaac/isaac_profile_up.png");

let isaacDamagedAnimation = $.loadAnimation(
    20,
    20,
    "assets/images/characters/isaac/isaac_damaged.png",
    "assets/images/characters/isaac/isaac_profile.png",
    "assets/images/characters/isaac/isaac_damaged.png",
    "assets/images/characters/isaac/isaac_profile.png",
    "assets/images/characters/isaac/isaac_damaged.png",
);
isaacDamagedAnimation.duration = 2;
isaacDamagedAnimation.scale = 40;

let isaac = new Character(
    "isaac", isaacImage,
    {Health:6,Damage:3.5,DamageMultiplier:1,MovementSpeed:1,TearSpeed:0,Range:6.5,ShotSpeed:1,Luck:0,Projectiles:1,Flight:false},
    tearImage,
    heartImageFull,
    heartImageHalf,
    0,
    undefined,
    isaacDamagedAnimation
);
isaac.addToImageArray({    
    Name: "down",
    Image: isaacImage,
    Scale: 40,
    Shooting: false,
});
isaac.addToImageArray({    
    Name: "down",
    Image: isaacShootingDownImage,
    Scale: 40,
    Shooting: true,
});
isaac.addToImageArray({    
    Name: "left",
    Image: isaacLeftImage,
    Scale: 40,
    Shooting: false,
});
isaac.addToImageArray({    
    Name: "left",
    Image: isaacShootingLeftImage,
    Scale: 40,
    Shooting: true,
});
isaac.addToImageArray({    
    Name: "right",
    Image: isaacRightImage,
    Scale: 40,
    Shooting: false,
});
isaac.addToImageArray({    
    Name: "right",
    Image: isaacShootingRightImage,
    Scale: 40,
    Shooting: true,
});
isaac.addToImageArray({    
    Name: "up",
    Image: isaacUpImage,
    Scale: 40,
    Shooting: false,
});
isaac.addToImageArray({    
    Name: "up",
    Image: isaacUpImage,
    Scale: 40,
    Shooting: true,
});

let magdaleneDamagedAnimation = $.loadAnimation(
    20,
    20,
    "assets/images/characters/magdalene/magdalene_damaged.png",
    "assets/images/characters/magdalene/magdalene_profile.png",
    "assets/images/characters/magdalene/magdalene_damaged.png",
    "assets/images/characters/magdalene/magdalene_profile.png",
    "assets/images/characters/magdalene/magdalene_damaged.png",
);
magdaleneDamagedAnimation.duration = 2;
magdaleneDamagedAnimation.scale = 40;

let magdaleneImage = $.loadImage(0,0,"assets/images/characters/magdalene/magdalene_profile.png");
let magdalene = new Character(
    "magdalene", magdaleneImage,
    {Health:8,Damage:3.5,DamageMultiplier:1,MovementSpeed:0.85,TearSpeed:0,Range:6.5,ShotSpeed:1,Luck:0,Projectiles:1,Flight:false},
    tearImage,
    heartImageFull,
    heartImageHalf,
    1,
    undefined,
    magdaleneDamagedAnimation
);

let cainDamagedAnimation = $.loadAnimation(
    20,
    20,
    "assets/images/characters/cain/cain_damaged.png",
    "assets/images/characters/cain/cain_profile.png",
    "assets/images/characters/cain/cain_damaged.png",
    "assets/images/characters/cain/cain_profile.png",
    "assets/images/characters/cain/cain_damaged.png",
);
cainDamagedAnimation.duration = 2;
cainDamagedAnimation.scale = 40;

let cainImage = $.loadImage(0,0,"assets/images/characters/cain/cain_profile.png");
let cain = new Character(
    "cain", cainImage,
    {Health:4,Damage:3.5,DamageMultiplier:1.2,MovementSpeed:1.3,TearSpeed:0,Range:4.5,ShotSpeed:1,Luck:1,Projectiles:1,Flight:false},
    tearImage,
    heartImageFull,
    heartImageHalf,
    2,
    undefined,
    cainDamagedAnimation
);

let judasDamagedAnimation = $.loadAnimation(
    20,
    20,
    "assets/images/characters/judas/judas_damaged.png",
    "assets/images/characters/judas/judas_profile.png",
    "assets/images/characters/judas/judas_damaged.png",
    "assets/images/characters/judas/judas_profile.png",
    "assets/images/characters/judas/judas_damaged.png",
);
judasDamagedAnimation.duration = 2;
judasDamagedAnimation.scale = 40;

//if judas dies, i think he turns into dark judas
let judasImage = $.loadImage(0,0,"assets/images/characters/judas/judas_profile.png");
let judas = new Character(
    "judas", judasImage,
    {Health:2,Damage:3,DamageMultiplier:1.35,MovementSpeed:1,TearSpeed:0,Range:6.5,ShotSpeed:1,Luck:0,Projectiles:1,Flight:false},
    tearImage,
    heartImageFull,
    heartImageHalf,
    3,
    undefined,
    judasDamagedAnimation
);

let darkjudasDamagedAnimation = $.loadAnimation(
    20,
    20,
    "assets/images/characters/darkjudas/darkjudas_damaged.png",
    "assets/images/characters/darkjudas/darkjudas_profile.png",
    "assets/images/characters/darkjudas/darkjudas_damaged.png",
    "assets/images/characters/darkjudas/darkjudas_profile.png",
    "assets/images/characters/darkjudas/darkjudas_damaged.png",
);
darkjudasDamagedAnimation.duration = 2;
darkjudasDamagedAnimation.scale = 40;

let darkjudasImage = $.loadImage(0,0,"assets/images/characters/darkjudas/darkjudas_profile.png");
let darkjudas = new Character(
    "darkjudas", darkjudasImage,
    {Health:4,Damage:3.5,DamageMultiplier:2,MovementSpeed:1.1,TearSpeed:0,Range:6.5,ShotSpeed:1,Luck:0,Projectiles:1,Flight:false},
    tearImage,
    heartImageFull,
    heartImageHalf,
    -1,
    false,
    darkjudasDamagedAnimation
);

let bluebabyDamagedAnimation = $.loadAnimation(
    20,
    20,
    "assets/images/characters/bluebaby/bluebaby_damaged.png",
    "assets/images/characters/bluebaby/bluebaby_profile.png",
    "assets/images/characters/bluebaby/bluebaby_damaged.png",
    "assets/images/characters/bluebaby/bluebaby_profile.png",
    "assets/images/characters/bluebaby/bluebaby_damaged.png",
);
bluebabyDamagedAnimation.duration = 2;
bluebabyDamagedAnimation.scale = 40;

let bluebabyImage = $.loadImage(0,0,"assets/images/characters/bluebaby/bluebaby_profile.png");
let bluebaby = new Character(
    "bluebaby", bluebabyImage,
    {Health:6,Damage:3.5,DamageMultiplier:1.05,MovementSpeed:1.1,TearSpeed:0,Range:6.5,ShotSpeed:1,Luck:0,Projectiles:1,Flight:false},
    tearImage,
    heartImageFull,
    heartImageHalf,
    4,
    undefined,
    bluebabyDamagedAnimation
);

let eveDamagedAnimation = $.loadAnimation(
    20,
    20,
    "assets/images/characters/eve/eve_damaged.png",
    "assets/images/characters/eve/eve_profile.png",
    "assets/images/characters/eve/eve_damaged.png",
    "assets/images/characters/eve/eve_profile.png",
    "assets/images/characters/eve/eve_damaged.png",
);
eveDamagedAnimation.duration = 2;
eveDamagedAnimation.scale = 40;

let eveImage = $.loadImage(0,0,"assets/images/characters/eve/eve_profile.png");
let eve = new Character(
    "eve", eveImage,
    {Health:4,Damage:3.5,DamageMultiplier:0.75,MovementSpeed:1.23,TearSpeed:0,Range:6.5,ShotSpeed:1,Luck:0,Projectiles:1,Flight:false},
    tearImage,
    heartImageFull,
    heartImageHalf,
    5,
    undefined,
    eveDamagedAnimation
);


let samsonDamagedAnimation = $.loadAnimation(
    20,
    20,
    "assets/images/characters/samson/samson_damaged.png",
    "assets/images/characters/samson/samson_profile.png",
    "assets/images/characters/samson/samson_damaged.png",
    "assets/images/characters/samson/samson_profile.png",
    "assets/images/characters/samson/samson_damaged.png",
);
samsonDamagedAnimation.duration = 2;
samsonDamagedAnimation.scale = 40;

let samsonImage = $.loadImage(0,0,"assets/images/characters/samson/samson_profile.png");
let samson = new Character(
    "samson", samsonImage,
    {Health:6,Damage:3.5,DamageMultiplier:1,MovementSpeed:1.1,TearSpeed:-0.1,Range:5,ShotSpeed:1.31,Luck:0,Projectiles:1,Flight:false},
    tearImage,
    heartImageFull,
    heartImageHalf,
    6,
    undefined,
    samsonDamagedAnimation
);  


let azazelDamagedAnimation = $.loadAnimation(
    20,
    20,
    "assets/images/characters/azazel/azazel_damaged.png",
    "assets/images/characters/azazel/azazel_profile.png",
    "assets/images/characters/azazel/azazel_damaged.png",
    "assets/images/characters/azazel/azazel_profile.png",
    "assets/images/characters/azazel/azazel_damaged.png",
);
azazelDamagedAnimation.duration = 2;
azazelDamagedAnimation.scale = 40;
azazelDamagedAnimation.offset.x = 20;
azazelDamagedAnimation.offset.y = 12;

let azazelImage = $.loadImage(0,0,"assets/images/characters/azazel/azazel_profile.png");
let azazel = new Character(
    "azazel", azazelImage,
    {Health:6,Damage:3.5,DamageMultiplier:1.5,MovementSpeed:1.25,TearSpeed:0,Range:4.5,ShotSpeed:1,Luck:0,Projectiles:1,Flight:true},
    tearImage,
    heartImageFull,
    heartImageHalf,
    7,
    undefined,
    azazelDamagedAnimation
);
//tear speed = +0.5, x0.267


let lazarusDamagedAnimation = $.loadAnimation(
    20,
    20,
    "assets/images/characters/lazarus/lazarus_damaged.png",
    "assets/images/characters/lazarus/lazarus_profile.png",
    "assets/images/characters/lazarus/lazarus_damaged.png",
    "assets/images/characters/lazarus/lazarus_profile.png",
    "assets/images/characters/lazarus/lazarus_damaged.png",
);
lazarusDamagedAnimation.duration = 2;
lazarusDamagedAnimation.scale = 40;

//if lazarus dies, he will turn into lazarusRisen
let lazarusImage = $.loadImage(0,0,"assets/images/characters/lazarus/lazarus_profile.png");
let lazarus = new Character(
    "lazarus", lazarusImage,
    {Health:6,Damage:3.5,DamageMultiplier:1,MovementSpeed:1,TearSpeed:0,Range:4.5,ShotSpeed:1,Luck:-1,Projectiles:1,Flight:false},
    tearImage,
    heartImageFull,
    heartImageHalf,
    8
);


let lazarus_risenDamagedAnimation = $.loadAnimation(
    20,
    20,
    "assets/images/characters/lazarus_risen/lazarus_risen_damaged.png",
    "assets/images/characters/lazarus_risen/lazarus_risen_profile.png",
    "assets/images/characters/lazarus_risen/lazarus_risen_damaged.png",
    "assets/images/characters/lazarus_risen/lazarus_risen_profile.png",
    "assets/images/characters/lazarus_risen/lazarus_risen_damaged.png",
);
lazarus_risenDamagedAnimation.duration = 2;
lazarus_risenDamagedAnimation.scale = 40;

let lazarusRisenImage = $.loadImage(0,0,"assets/images/characters/lazarus_risen/lazarus_risen_profile.png");
let lazarusRisen = new Character(
    "lazarus risen", lazarusRisenImage,
    {Health:2,Damage:3.5,DamageMultiplier:1.4,MovementSpeed:1.25,TearSpeed:0,Range:6.5,ShotSpeed:1,Luck:0,Projectiles:1,Flight:false},
    tearImage,
    heartImageFull,
    heartImageHalf,
    -1,
    false,
    lazarus_risenDamagedAnimation
);


let edenDamagedAnimation = $.loadAnimation(
    20,
    20,
    "assets/images/characters/eden/eden_damaged.png",
    "assets/images/characters/eden/eden_profile.png",
    "assets/images/characters/eden/eden_damaged.png",
    "assets/images/characters/eden/eden_profile.png",
    "assets/images/characters/eden/eden_damaged.png",
);
edenDamagedAnimation.duration = 2;
edenDamagedAnimation.scale = 40;

// eden has randomised stats
// eden can have 2 red hearts, 3 red hearts, 1 red heart, and a combination of soul hearts as well (3 soul hearts, or 2 sould hearts 1 red heart etc)
// damage = 3.5 plus or minus 1
// tear speed between + 0.75 to -0.5
// shot speed = 1 plus or minus 0.25
// range = 6.5 plus or minus 1.5
// movement speed = 1 plus or minus 0.15
// luck = 0 plus or minus 1
let edenImage = $.loadImage(0,0,"assets/images/characters/eden/eden_profile.png");
let eden = new Character(
    "eden", edenImage,
    {Health:8,Damage:3,DamageMultiplier:1,MovementSpeed:1,TearSpeed:0,Range:5,ShotSpeed:1,Luck:1,Projectiles:1,Flight:false},
    tearImage,
    heartImageFull,
    heartImageHalf,
    9,
    undefined,
    edenDamagedAnimation
);


let lostDamagedAnimation = $.loadAnimation(
    20,
    20,
    "assets/images/characters/lost/lost_damaged.png",
    "assets/images/characters/lost/lost_profile.png",
    "assets/images/characters/lost/lost_damaged.png",
    "assets/images/characters/lost/lost_profile.png",
    "assets/images/characters/lost/lost_damaged.png",
);
lostDamagedAnimation.duration = 2;
lostDamagedAnimation.scale = 40;

//does not start with holy shield, and has no hearts 
let lostImage = $.loadImage(0,0,"assets/images/characters/lost/lost_profile.png");
let lost = new Character(
    "lost", lostImage,
    {Health:1,Damage:3.5,DamageMultiplier:1,MovementSpeed:1,TearSpeed:0,Range:6.5,ShotSpeed:1,Luck:0,Projectiles:1,Flight:true},
    tearImage,
    heartImageFull,
    heartImageHalf,
    10,
    undefined,
    lostDamagedAnimation
);


let lilithDamagedAnimation = $.loadAnimation(
    20,
    20,
    "assets/images/characters/lilith/lilith_damaged.png",
    "assets/images/characters/lilith/lilith_profile.png",
    "assets/images/characters/lilith/lilith_damaged.png",
    "assets/images/characters/lilith/lilith_profile.png",
    "assets/images/characters/lilith/lilith_damaged.png",
);
lilithDamagedAnimation.duration = 2;
lilithDamagedAnimation.scale = 40;

//lilith cannot shoot, she has a familiar that does
let lilithImage = $.loadImage(0,0,"assets/images/characters/lilith/lilith_profile.png");
let lilith = new Character(
    "lilith", lilithImage,
    {Health:6,Damage:3.5,DamageMultiplier:1,MovementSpeed:1,TearSpeed:0,Range:6.5,ShotSpeed:1,Luck:0,Projectiles:1,Flight:false},
    tearImage,
    heartImageFull,
    heartImageHalf,
    11,
    undefined,
    lilithDamagedAnimation
);


let keeperDamagedAnimation = $.loadAnimation(
    20,
    20,
    "assets/images/characters/keeper/keeper_damaged.png",
    "assets/images/characters/keeper/keeper_profile.png",
    "assets/images/characters/keeper/keeper_damaged.png",
    "assets/images/characters/keeper/keeper_profile.png",
    "assets/images/characters/keeper/keeper_damaged.png",
);
keeperDamagedAnimation.duration = 2;
keeperDamagedAnimation.scale = 40;

//keeper has coins instead of hearts
let keeperImage = $.loadImage(0,0,"assets/images/characters/keeper/keeper_profile.png");
let keeper = new Character(
    "keeper", keeperImage,
    {Health:3,Damage:3.5,DamageMultiplier:1.2,MovementSpeed:0.9,TearSpeed:-1.9,Range:6.5,ShotSpeed:1,Luck:-2,Projectiles:3,Flight:false},
    tearImage,
    heartImageFull,
    heartImageHalf,
    12,
    undefined,
    keeperDamagedAnimation
);


let apollyonDamagedAnimation = $.loadAnimation(
    20,
    20,
    "assets/images/characters/apollyon/apollyon_damaged.png",
    "assets/images/characters/apollyon/apollyon_profile.png",
    "assets/images/characters/apollyon/apollyon_damaged.png",
    "assets/images/characters/apollyon/apollyon_profile.png",
    "assets/images/characters/apollyon/apollyon_damaged.png",
);
apollyonDamagedAnimation.duration = 2;
apollyonDamagedAnimation.scale = 40;

let apollyonImage = $.loadImage(0,0,"assets/images/characters/apollyon/apollyon_profile.png");
let apollyon = new Character(
    "apollyon", apollyonImage,
    {Health:4,Damage:3.5,DamageMultiplier:1,MovementSpeed:1,TearSpeed:0,Range:6.5,ShotSpeed:1,Luck:0,Projectiles:1,Flight:false},
    tearImage,
    heartImageFull,
    heartImageHalf,
    13,
    undefined,
    apollyonDamagedAnimation
);


let theforgottenDamagedAnimation = $.loadAnimation(
    20,
    20,
    "assets/images/characters/theforgotten/theforgotten_damaged.png",
    "assets/images/characters/theforgotten/theforgotten_profile.png",
    "assets/images/characters/theforgotten/theforgotten_damaged.png",
    "assets/images/characters/theforgotten/theforgotten_profile.png",
    "assets/images/characters/theforgotten/theforgotten_damaged.png",
);
theforgottenDamagedAnimation.duration = 2;
theforgottenDamagedAnimation.scale = 40;

//forgotten has bone hearts, which are effectively 3 heart points each
//tear speed is +0; x1/2
//forgotten also doesn't fire tears, he uses a melee weapon
let theforgottenImage = $.loadImage(0,0,"assets/images/characters/theforgotten/theforgotten_profile.png");
let theforgotten = new Character(
    "theforgotten", theforgottenImage,
    {Health:6,Damage:3.5,DamageMultiplier:1.5,MovementSpeed:1,TearSpeed:0,Range:6.5,ShotSpeed:1,Luck:0,Projectiles:1,Flight:false},
    tearImage,
    heartImageFull,
    heartImageHalf,
    14,
    undefined,
    theforgottenDamagedAnimation
);


let thesoulDamagedAnimation = $.loadAnimation(
    20,
    20,
    "assets/images/characters/thesoul/thesoul_damaged.png",
    "assets/images/characters/thesoul/thesoul_profile.png",
    "assets/images/characters/thesoul/thesoul_damaged.png",
    "assets/images/characters/thesoul/thesoul_profile.png",
    "assets/images/characters/thesoul/thesoul_damaged.png",
);
thesoulDamagedAnimation.duration = 2;
thesoulDamagedAnimation.scale = 40;

let thesoulImage = $.loadImage(0,0,"assets/images/characters/thesoul/thesoul_profile.png");
let thesoul = new Character(
    "thesoul", thesoulImage,
    {Health:2,Damage:3.5,DamageMultiplier:1,MovementSpeed:1.3,TearSpeed:0,Range:6.5,ShotSpeed:1,Luck:0,Projectiles:1,Flight:true},
    tearImage,
    heartImageFull,
    heartImageHalf,
    14,
    undefined,
    thesoulDamagedAnimation
);


let bethanyDamagedAnimation = $.loadAnimation(
    20,
    20,
    "assets/images/characters/bethany/bethany_damaged.png",
    "assets/images/characters/bethany/bethany_profile.png",
    "assets/images/characters/bethany/bethany_damaged.png",
    "assets/images/characters/bethany/bethany_profile.png",
    "assets/images/characters/bethany/bethany_damaged.png",
);
bethanyDamagedAnimation.duration = 2;
bethanyDamagedAnimation.scale = 40;
bethanyDamagedAnimation.offset.x = 13;
bethanyDamagedAnimation.offset.y = 4;

let bethanyImage = $.loadImage(0,0,"assets/images/characters/bethany/bethany_profile.png");
let bethany = new Character(
    "bethany", bethanyImage,
    {Health:6,Damage:3.5,DamageMultiplier:1,MovementSpeed:1,TearSpeed:0,Range:6.5,ShotSpeed:1,Luck:0,Projectiles:1,Flight:false},
    tearImage,
    heartImageFull,
    heartImageHalf,
    15,
    undefined,
    bethanyDamagedAnimation
);


let jacobDamagedAnimation = $.loadAnimation(
    20,
    20,
    "assets/images/characters/jacob/jacob_damaged.png",
    "assets/images/characters/jacob/jacob_profile.png",
    "assets/images/characters/jacob/jacob_damaged.png",
    "assets/images/characters/jacob/jacob_profile.png",
    "assets/images/characters/jacob/jacob_damaged.png",
);
jacobDamagedAnimation.duration = 2;
jacobDamagedAnimation.scale = 40;

let jacobImage = $.loadImage(0,0,"assets/images/characters/jacob/jacob_profile.png");
let jacob = new Character(
    "jacob", jacobImage,
    {Health:6,Damage:2.75,DamageMultiplier:1,MovementSpeed:1,TearSpeed:0.277,Range:5,ShotSpeed:1.15,Luck:1,Projectiles:1,Flight:false},
    tearImage,
    heartImageFull,
    heartImageHalf,
    16,
    undefined,
    jacobDamagedAnimation
);


let esauDamagedAnimation = $.loadAnimation(
    20,
    20,
    "assets/images/characters/esau/esau_damaged.png",
    "assets/images/characters/esau/esau_profile.png",
    "assets/images/characters/esau/esau_damaged.png",
    "assets/images/characters/esau/esau_profile.png",
    "assets/images/characters/esau/esau_damaged.png",
);
esauDamagedAnimation.duration = 2;
esauDamagedAnimation.scale = 40;

let esauImage = $.loadImage(0,0,"assets/images/characters/esau/esau_profile.png");
let esau = new Character(
    "esau", esauImage,
    {Health:4,Damage:3.75,DamageMultiplier:1,MovementSpeed:1,TearSpeed:-0.1,Range:8,ShotSpeed:0.85,Luck:-1,Projectiles:1,Flight:false},
    tearImage,
    heartImageFull,
    heartImageHalf,
    16,
    undefined,
    esauDamagedAnimation
);


let screenManager = new ScreenManager("menu");

let lastFrameShot = 0;
let lastDirection = "";

let mapManager = new MapManager;

let basementDoorLeftImage = $.loadImage(0,$.h/2 - 40,"assets/images/areas/basement/door_left.png");
basementDoorLeftImage.scale = 48;
let basementDoorRightImage = $.loadImage($.w - 60,$.h/2-30,"assets/images/areas/basement/door_right.png");
basementDoorRightImage.scale = 48;
let basementDoorTopImage = $.loadImage($.w/2,0,"assets/images/areas/basement/door_up.png");
basementDoorTopImage.scale = 48;
let basementDoorBottomImage = $.loadImage($.w/2,$.h-60,"assets/images/areas/basement/door_bottom.png");
basementDoorBottomImage.scale = 48;

let basementMapImage = $.loadImage($.w/2,$.h/2,"assets/images/areas/basement/basement.png");
let basementMap = new LevelMap(0, "basement",basementMapImage, 
    {
        LeftDoor:2,
        RightDoor:undefined,
        TopDoor:1,
        BottomDoor:undefined,
        LeftDoorImage:basementDoorLeftImage,     
        RightDoorImage:basementDoorRightImage,
        TopDoorImage:basementDoorTopImage,
        BottomDoorImage:basementDoorBottomImage
    });

let basementMap2 = new LevelMap(1, "basement",basementMapImage, 
    {
        LeftDoor:undefined,
        RightDoor:undefined,
        TopDoor:undefined,
        BottomDoor:0,
        LeftDoorImage:basementDoorLeftImage,     
        RightDoorImage:basementDoorRightImage,
        TopDoorImage:basementDoorTopImage,
        BottomDoorImage:basementDoorBottomImage
    });
    
let basementMap3 = new LevelMap(2, "basement",basementMapImage, 
    {
        LeftDoor:undefined,
        RightDoor:0,
        TopDoor:undefined,
        BottomDoor:undefined,
        LeftDoorImage:basementDoorLeftImage,     
        RightDoorImage:basementDoorRightImage,
        TopDoorImage:basementDoorTopImage,
        BottomDoorImage:basementDoorBottomImage
    });

let spikeManager = new SpikeManager();
let spikeObstacleImage = $.loadImage(50,50, "assets/images/obstacles/spikes.png");
let spike = new Spike(spikeObstacleImage, 400, 400);

let isAttacking = false;
let changedRoomSpot = undefined;

function preload(){
    characterManager.AddToGroup(isaac);
    characterManager.AddToGroup(magdalene);
    characterManager.AddToGroup(cain);
    characterManager.AddToGroup(eve);
    characterManager.AddToGroup(samson); 
    characterManager.AddToGroup(bluebaby);
    characterManager.AddToGroup(judas);
    characterManager.AddToGroup(azazel);
    characterManager.AddToGroup(lazarus);
    characterManager.AddToGroup(lazarusRisen);
    characterManager.AddToGroup(eden);
    characterManager.AddToGroup(lost);
    characterManager.AddToGroup(lilith);
    characterManager.AddToGroup(keeper);
    characterManager.AddToGroup(apollyon);
    characterManager.AddToGroup(theforgotten);
    characterManager.AddToGroup(thesoul);
    characterManager.AddToGroup(bethany);
    characterManager.AddToGroup(jacob);
    characterManager.AddToGroup(esau);
    characterManager.AddToGroup(darkjudas);

    mapManager.AddToLevelArray(basementMap);
    mapManager.AddToLevelArray(basementMap2);
    mapManager.AddToLevelArray(basementMap3);

    //temporarily set the first map
    mapManager.currentLevelMap = basementMap;

    spikeManager.AddToGroup(spike);
}

function update() {
    if($.frameCount === 0){
        preload();
    }

    screenManager.DisplayScreen();

    if(screenManager.screenSwitched === true && screenManager.currentScreen === "play"){
        characterManager.selectCurrentCharacter();
        screenManager.screenSwitched = false;
    }
    if(screenManager.currentScreen === "character_select"){
        checkKeyReleasedCharacterSelect();
        characterManager.currentCharacter = isaac;
        characterManager.DrawGroup();
    }else if(screenManager.currentScreen === "play"){
        mapManager.currentLevelMap!.draw();
        mapManager.currentLevelMap!.drawDoors();
        spikeManager.DrawGroup();
        
        characterManager.currentCharacter!.collider.draw();
        characterManager.currentCharacter!.drawHealthBar()

        checkKeyDownAttack();
        checkKeyDownMovement();
        checkNoMoveShootHeldinPlay();
        characterManager.currentCharacter?.tearGroup.draw();
        changedRoomSpot = mapManager.checkIfCharacterTouchedDoor(characterManager.currentCharacter!.collider.x, characterManager.currentCharacter!.collider.y)!;
        if(changedRoomSpot !== undefined){
            characterManager.currentCharacter!.collider.x = changedRoomSpot.newX;
            characterManager.currentCharacter!.collider.y = changedRoomSpot.newY;
            changedRoomSpot = undefined;
        }

        //update character invulnerability timer
        characterManager.currentCharacter!.timers.InvulnerabilityTimer.update();

        //spikeManager collides with current character
        if(spikeManager.Collides(characterManager.currentCharacter?.collider)){
            spikeCollision();
        }

        if(characterManager.currentCharacter!.timers.InvulnerabilityTimer.tracking){
            characterManager.currentCharacter!.damagedAnimation!.x = characterManager.currentCharacter!.collider.x;
            characterManager.currentCharacter!.damagedAnimation!.y = characterManager.currentCharacter!.collider.y;
            characterManager.currentCharacter!.damagedAnimation?.draw();
        }

        if(characterManager.currentCharacter?.currentHealth! <= 0){
            screenManager.currentScreen = "gameover";
        }
    }
}

function spikeCollision(){
    if(!characterManager.currentCharacter!.timers.InvulnerabilityTimer.tracking){
        console.log("characterManager.currentCharacter!.timers.InvulnerabilityTimer= ", characterManager.currentCharacter!.timers.InvulnerabilityTimer)
        characterManager.currentCharacter!.timers.InvulnerabilityTimer.start();
        characterManager.currentCharacter!.takeDamage(2);
    }
}

function checkKeyReleasedCharacterSelect(){
    if ($.keys.released("a") || $.keys.released("leftarrow")) {
        characterManager.CharacterSelectMovement("left");
    }else if ($.keys.released("d") || $.keys.released("rightarrow")) {
        characterManager.CharacterSelectMovement("right");
    }
}

function checkKeyDownMovement(){
    //movement
    if ($.keys.down("leftarrow")) {
        characterManager.currentCharacter!.collider.speed = 20 * characterManager.currentCharacter!.stats.MovementSpeed;
        characterManager.currentCharacter!.collider.friction = 10;
        characterManager.currentCharacter!.collider.direction = 270;
        if(!isAttacking){characterManager.currentCharacter!.changeTheImage("left",false);}
    }else if ($.keys.down("rightarrow")) {
        characterManager.currentCharacter!.collider.speed = 20 * characterManager.currentCharacter!.stats.MovementSpeed;
        characterManager.currentCharacter!.collider.friction = 10;
        characterManager.currentCharacter!.collider.direction = 90;
        if(!isAttacking){
            characterManager.currentCharacter?.changeTheImage("right",false);
        }
    }else if ($.keys.down("uparrow")) {
        characterManager.currentCharacter!.collider.speed = 20 * characterManager.currentCharacter!.stats.MovementSpeed;
        characterManager.currentCharacter!.collider.friction = 10;
        characterManager.currentCharacter!.collider.direction = 0;
        if(!isAttacking){characterManager.currentCharacter?.changeTheImage("up",false);}
    }else if ($.keys.down("downarrow")) {
        characterManager.currentCharacter!.collider.speed = 20 * characterManager.currentCharacter!.stats.MovementSpeed;
        characterManager.currentCharacter!.collider.friction = 10;
        characterManager.currentCharacter!.collider.direction = 180;
        if(!isAttacking){characterManager.currentCharacter?.changeTheImage("down",false);}
    }    
}

function checkKeyDownAttack(){
    if($.keys.down("a") || $.keys.down("d") || $.keys.down("w") ||$.keys.down("s")){
        isAttacking = true;
    }else{
        isAttacking = false;
    }
    //attack
    if($.frameCount >= lastFrameShot + 170){
        if ($.keys.down("a")) {
            characterManager.currentCharacter?.makeTear(270, "left");
            lastFrameShot = $.frameCount;
            lastDirection = "left";
        }else if ($.keys.down("d")) {
            characterManager.currentCharacter?.makeTear(90, "right");
            lastFrameShot = $.frameCount;
            lastDirection = "right";
        }else if ($.keys.down("w")) {
            characterManager.currentCharacter?.makeTear(0, "up");
            lastFrameShot = $.frameCount;
            lastDirection = "up";
        }else if ($.keys.down("s")) {
            characterManager.currentCharacter?.makeTear(180, "down");
            lastFrameShot = $.frameCount;
            lastDirection = "down";
        }
    }else if($.frameCount >= lastFrameShot + 60){
        characterManager.currentCharacter?.changeTheImage(lastDirection,false);
    }
}

function checkNoMoveShootHeldinPlay(){
    if(characterManager.currentCharacter?.collider.currentImageName !== "down" && (!$.keys.down("a") && !$.keys.down("d") && !$.keys.down("w") && !$.keys.down("s") && !$.keys.down("leftarrow") && !$.keys.down("rightarrow") && !$.keys.down("uparrow") && !$.keys.down("downarrow"))){
        characterManager.currentCharacter?.changeTheImage("down",false);
    }
}