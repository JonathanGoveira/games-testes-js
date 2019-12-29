import Vector2 from "../utils/vector2";
import backGround_Singleton from "./background";

class Camera_Singleton{
    constructor(){
        this._position = new Vector2(0,0);
        this._size = new Vector2(0,0);
    }

    centerCamera(){
        this._position.x = (backGround_Singleton.width - this._size.x) / 2;
        this._position.y = (backGround_Singleton.height - this._size.y) / 2;
    }

    
}