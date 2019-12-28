export default class Vector2{
    constructor(p_x,p_y){
        this._x = p_x;
        this._y = p_y;
    }

    sum(vec){let _sum = new Vector2(this.x + vec.x, this.y + vec.y); return _sum}
    scalar(num){let _mult = new Vector2(num * this.x, num * this.y); return _mult}
    // Getters
    get x(){return this._x;}
    get y(){return this._y;}
    // Setters
    set x(p_x){this._x = p_x}
    set y(p_y){this._y = p_y;}
}