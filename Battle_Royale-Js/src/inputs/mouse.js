import Vector2 from "../utils/vector2";
import math_Singleton from "../utils/math";

class Mouse_Singleton{
    constructor(){
        this._position = new Vector2(0,0);
        document.addEventListener('mousemove', (e) =>{this.move(e)})
    }

    move(e){

        //canvas.offsetLeft e canvas.offsetTop não estão funcionando
        this._position.x = e.clientX
        this._position.y = e.clientY
    }
    get x(){return math_Singleton.toNormalize(this._position.x, this._position.y).x}
    get y(){return math_Singleton.toNormalize(this._position.x, this._position.y).y}
}
const mouse_Singleton = new Mouse_Singleton();

export default mouse_Singleton