class Canvas_Singleton{
    constructor(){
        this._canvas = document.getElementById('canvas');
        this._context = this.canvas.getContext('2d');
        // this._canvas.width = window.innerWidth;
        // this._canvas.height = window.innerHeight;
        this._canvas.width = 800;
        this._canvas.height = 600;
    }

    clear(){
        this._context.fillStyle = "white";
        this._context.fillRect(0,0,this.width, this.height)
    }

    // Getters and Setters
    get context(){return this._context};
    get canvas(){return this._canvas};
    get width(){return this._canvas.width};
    get height(){return this._canvas.height};
}

const canvas = new Canvas_Singleton();

export default canvas;