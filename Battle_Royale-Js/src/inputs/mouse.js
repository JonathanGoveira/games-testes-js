import Vector2 from "../utils/vector2";
import math_Singleton from "../utils/math";
import canvas from "../canvas";
import camera from "../others/camera";

class Mouse_Singleton{
    constructor(){
        this._position = new Vector2(0,0);
        document.addEventListener('mousemove', (e) =>{this.move(e)},false)
    }

    move(e){
        const bounds = canvas.canvas.getBoundingClientRect();
        this._position.x = e.clientX - bounds.left 
        this._position.y = e.clientY - bounds.top
        
    }
    update(){
        this._position.x += Math.round(camera.x) 
        this._position.y += Math.round(camera.y) 
    }
    get x(){return this._position.x};
    get y(){return this._position.y};
}
const mouse_Singleton = new Mouse_Singleton();

export default mouse_Singleton