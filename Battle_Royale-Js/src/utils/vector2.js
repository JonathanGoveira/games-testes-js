export default class Vector2{
    constructor(p_x,p_y){
        this._x = p_x;
        this._y = p_y;
    }
    
    zero(){
        this._x = 0;
        this._y = 0;
    }
    // Getters and Setters
    get x(){
        return this._x;
    }
    get y(){
        return this._y;
    }

    set x(p_x){
        this._x = p_x
    }

    set y(p_y){
        this._y = p_y;
    }
}