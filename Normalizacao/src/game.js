import canvas_Singleton from "./canvas"
import Player from "./objects/player"
import backGround_Singleton from "./others/background";

const player = new Player();
(function Init(){
    setInterval(Loop,1000/60)
}())

function Loop(){
    
    canvas_Singleton.clear();
    backGround_Singleton.render();
    canvas_Singleton.draw(player);
}