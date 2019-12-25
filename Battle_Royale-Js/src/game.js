import canvas from "./canvas"
import Player from "./objects/player"

(function Init(){
    
    canvas
    const player = new Player();
    player.draw(canvas.context)
    
}())