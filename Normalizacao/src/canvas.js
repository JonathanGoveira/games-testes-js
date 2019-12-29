import Vector2 from "./utils/vector2";

class Canvas2D_Singleton{

    constructor(){
        this._canvas = document.getElementById('canvas');
        this._context = canvas.getContext('2d');
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
        this._pivot = new Vector2(0,0);
        this._scaleVector = new Vector2(0,0);
        this._translateVector = new Vector2(0,0);
        this._screenCenter = new Vector2(this._canvas.width/2,this._canvas.height/2);
    }

    draw(rect){
        this._pivot.x = this._canvas.width * rect.width/2;
        this._pivot.y = this._canvas.height * rect.height/2;
        this._scaleVector.x = this._canvas.width * rect.width;
        this._scaleVector.y = this._canvas.height * rect.height;
        this._translateVector.x = this._screenCenter.x + this._screenCenter.x * rect.x - (this._scaleVector.x / 2);
        this._translateVector.y = this._screenCenter.y + this._screenCenter.y * (-rect.y) - (this._scaleVector.y / 2);
        this._context.save();
        this._context.translate(this._pivot.x, this._pivot.y);
        this._context.translate(this._translateVector.x, this._translateVector.y);
        rect.update();
        this._context.rotate(-rect.angle());
        this._context.translate(-this._pivot.x, -this._pivot.y)
        this._context.fillStyle = rect.color;
        // Draw player
        this._context.fillRect(0,0,this._scaleVector.x, this._scaleVector.y);
        this._context.restore();

    }
    clear(){
        this._context.fillStyle = "black";
        this._context.fillRect(0,0,this.width, this.height)
    }
    // Getters and Setters
    get context(){return this._context};
    get canvas(){return this._canvas};
    get width(){return this._canvas.width};
    get height(){return this._canvas.height};
}

export default canvas = new Canvas2D_Singleton();
