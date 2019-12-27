import Vector2 from "./vector2";
import canvas from "../canvas";

class Math{
    constructor(){this._coordinate = new Vector2(0,0)}
    toNormalize(p_x, p_y){
        this._coordinate.x = (((p_x / canvas.width) * 2) - 1).toPrecision(16);
        this._coordinate.y = (((p_y / - canvas.height  + 1) * 2 -1)).toPrecision(16);
        return this._coordinate
    }
    get x(){
        return this._coordinate.x
    }
}

const math_Singleton = new Math();
export default math_Singleton