import Vector2 from "../utils/vector2"
import mouse_Singleton from "../inputs/mouse";
import canvas from "../canvas";
import keyboard_Singleton from "../inputs/keyboard";

export default class Player{
    constructor(){
        this._position = new Vector2(0,0);
        this._distance = new Vector2(0,0);
        this._velocity = new Vector2(0,0);
        this._acceleration = new Vector2(0,0);
        this._angle = 0;
        this._width = 0.02; this._height = 0.02;
        this._color = "rgb(0,200,200)"
        this._proporcao = canvas.width / canvas.height
        this._friction = 0.001
    }
    

    distanceX(){return (this._position.x - mouse_Singleton.x)}
    distanceY(){return (this._position.y - mouse_Singleton.y)}

    updateAngle(){
        this._angle = Math.atan2(-this.distanceY(), -this.distanceX() * this._proporcao)
    }

    angle(){return this._angle}

    input(){
        if(keyboard_Singleton.keyPress(65)){
            this._acceleration.x = Math.cos(this.angle()) * 0.005
            this._acceleration.y = Math.sin(this.angle()) * 0.005
        }else{this._acceleration.x = this._acceleration.y = 0}
    }

    physicsUpdate(){
        this._velocity.x += this._acceleration.x;
        this._velocity.y += this._acceleration.y;

        this.friction();
        this._position.x += (this._velocity.x * 0.01);
        this._position.y += (this._velocity.y * 0.01);
    }

    friction(){
        let speed = Math.sqrt(this._velocity.x * this._velocity.x + this._velocity.y * this._velocity.y);
        let angle = Math.atan2(this._velocity.y, this._velocity.x);
        if (speed > this._friction){ speed -= (this._friction * 1.5)}
        else {speed = 0}
        this._velocity.x = Math.cos(angle) * speed;
        this._velocity.y = Math.sin(angle) * speed;
    }
    
    update(){
        this.updateAngle();
        this.input();
        this.physicsUpdate();
    }

    // Getters
    get x(){return this._position.x};
    get y(){return this._position.y};
    get width(){return this._width};
    get height(){return this._height};
    get color(){return this._color}
    // Setters
    set x(p_x){this._position.x = p_x};
    set y(p_y){this._position.y = p_y};
   
}