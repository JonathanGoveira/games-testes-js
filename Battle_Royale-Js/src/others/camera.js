import Vector2 from "../utils/vector2";
import canvas from "../canvas";

class Camera_Singleton{
    constructor(){
        this._position = new Vector2(0,0);
        this._size = new Vector2(canvas.width,canvas.height);
    }

    centerCamera(obj){
        this._position.x = (obj.width - this._size.x) / 2;
        this._position.y = (obj.height - this._size.y) / 2;
    }

    centerObj(obj){
        obj.x = this._position.x + (this._size.x / 2)
        obj.y = this._position.y +  (this._size.y / 2)
        
    }

    update(obj){
        this._position.x = obj.x - (this._size.x / 2);
        this._position.y = obj.y  - (this._size.y / 2);
    }

    get x(){return this._position.x}
    get y(){return this._position.y}
}

const camera = new Camera_Singleton();

export default camera;