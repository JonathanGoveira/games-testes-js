import Vector2 from "../utils/vector2";
import math_Singleton from "../utils/math";
import canvas from "../canvas";

class Mouse_Singleton{
    constructor(){
        this._position = new Vector2(0,0);
        document.addEventListener('mousemove', (e) =>{this.move(e)})
    }

    move(e){

        //canvas.offsetLeft e canvas.offsetTop não estão funcionando
        this._position.x = e.clientX - canvas.canvas.offsetLeft
        this._position.y = e.clientY - canvas.canvas.offsetTop
        //console.log(canvas.canvas.offsetTop)
        //console.log(canvas.canvas.offsetLeft)
    }
    get x(){return this._position.x};
    get y(){return this._position.y};
}
const mouse_Singleton = new Mouse_Singleton();

export default mouse_Singleton