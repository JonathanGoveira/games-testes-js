class Canvas2D_Singleton{

    constructor(){
        this._canvas = document.getElementById('canvas');
        this._context = canvas.getContext('2d');
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
    }

    draw(rect){
        
    }
    // Getters and Setters
    get context(){
        return this._context
    }
    get canvas(){
        return this._canvas;
    }
    get canvasWidth(){
        return this._canvas.width;
    }
    get canvasHeight(){
        return this._canvas.height;
    }
}

export default canvas = new Canvas2D_Singleton();
