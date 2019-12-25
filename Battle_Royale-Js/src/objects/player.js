import Vector2 from "../utils/vector2"

export default class Player{
    constructor(){
        this._position = new Vector2(50,50)
        console.log(this._position.x)
    }

    draw(context){
        context.fillStyle = "blue"
        context.fillRect(0,0,this._position.x, this._position.y)
    }
}