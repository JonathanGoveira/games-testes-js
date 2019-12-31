import canvas from "./canvas"
import Player from "./objects/player"
import backGround_Singleton from "./others/background";
import camera from "./others/camera";
import mouse_Singleton from "./inputs/mouse";

let cv = document.getElementById('canvas')
const player = new Player();
(function Init(){
    camera.centerCamera(backGround_Singleton);
    setInterval(Loop,1000/60)
}())

function Loop(){
    mouse_Singleton.update()
    canvas.clear();
    camera.update(player)
    canvas.context.save();
    canvas.context.translate(-camera.x, -camera.y)
    
    
    player.update();
    backGround_Singleton.render();
    player.render();
    
    canvas.context.restore();
}