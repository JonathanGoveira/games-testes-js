import Vector2 from "../utils/vector2"

export default class Player{
    constructor(){
        this._position = new Vector2(50,50);
        this._distance = new Vector2(0,0);
        this._velocity = new Vector2(0,0);
        this._acceleration = new Vector2(0,0);
        this._angle = 0;
        this._width = 0.2; this._height = 0.2;
        this._color = "rgb(0,200,200)"
    }

    draw(context){
        context.fillStyle = this._color
        context.fillRect(this._position.x,this._position.y,50,50)
    }
}