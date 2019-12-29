import Vector2 from "../utils/vector2";
import canvas from "../canvas";

class Background{
    constructor(){
        this._size = new Vector2(2000,2000)
        this._stars = new Stars();
        this._stars.random(this);
        
    }

    render(){
        canvas.context.fillStyle = "white"
        canvas.context.beginPath();
        for(let i = 0; i < this._stars.length; i++){
            canvas.context.moveTo(this._stars.x[i], this._stars.y[i])
            canvas.context.arc(this._stars.x[i], this._stars.y[i], this._stars.width[i] , 0 ,  Math.PI * 2)
        }
        canvas.context.fill();
    }
    get width(){return this._size.x};
    get height(){return this._size.y};
}

class Stars{
    constructor(){
        this._length = 100
        this._x = new Array(this._length);
        this._y = new Array(this._length);
        this._width = new Array(this._length);
        this._height = new Array(this._length);
    }
    random(obj){
        for(let i = 0; i < this._x.length; i++){
            this._x[i] = Math.random() * obj.width
            this._y[i] = Math.random() * obj.height
            this._width[i] = Math.random() * 2;
            this._height[i] = Math.random() * 2;
        }
    }

    // Gets
    get x(){return this._x}
    get y(){return this._y}
    get width(){return this._width}
    get height(){return this._height}
    get length(){return this._length}
    
}

const backGround_Singleton = new Background();

export default backGround_Singleton;