import Vector2 from "../utils/vector2";
import canvas from "../canvas";

class Background{
    constructor(){
        this._positionX = new Array(50);
        this._positionY = new Array(50)
        this._size = new Vector2(canvas.width,canvas.height);
        this.create();
    }

    create(){
        for(let i = 0; i < this._positionX.length; i++){
            this._positionX[i] = Math.random() * this._size.x
            this._positionY[i] = Math.random() * this._size.y
        }
    }
    render(){
        canvas.context.fillStyle = "white"
        canvas.context.beginPath();
        for(let i = 0; i < this._positionX.length; i++){
            //canvas.context.fillRect(this._positionX[i], this._positionY[i],5,5)
            canvas.context.moveTo(this._positionX[i], this._positionY[i])
            canvas.context.arc(this._positionX[i], this._positionY[i], 3 , 0 ,  Math.PI * 2)
          
            
        }
        canvas.context.fill();
    }
}

const backGround_Singleton = new Background();

export default backGround_Singleton;