import canvas_Singleton from "./canvas"
import Player from "./objects/player"
import keyboard_Singleton from "./inputs/keyboard.js"
import mouse_Singleton from "./inputs/mouse"

const player = new Player();
(function Init(){
    setInterval(Loop,1000/60)
}())

function Loop(){
    
    canvas_Singleton.clear();
    canvas_Singleton.draw(player);
}