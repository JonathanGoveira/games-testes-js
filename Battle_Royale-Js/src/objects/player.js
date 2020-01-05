import Vector2 from "../utils/vector2"
import canvas from "../canvas"
import mouse_Singleton from "../inputs/mouse";
import keyboard_Singleton from "../inputs/keyboard";

export default class Player{
    constructor(){
        this._position = new Vector2(canvas.width /2 ,canvas.height /2);
        this._distance = new Vector2(0,0);
        this._velocity = new Vector2(0,0);
        this._acceleration = new Vector2(0,0);
        this._angle = 0;
        this._width = 40; this._height = 20;
        this._pivot = new Vector2(this._width/2, this._height/2)
        this._color = "deepskyblue"
        this._proporcao = canvas.width / canvas.height
        this._friction = 0.01
        this._shot = []
    }

    distanceX(){return (this._position.x - mouse_Singleton.x)}
    distanceY(){return (this._position.y - mouse_Singleton.y)}

    updateAngle(){
        this._angle = Math.atan2(-this.distanceY(), -this.distanceX() * this._proporcao)
    }

    input(){
        if(keyboard_Singleton.keyPress(65)){
            this._acceleration.x = Math.cos((this.angle()) * 0.05).toPrecision(10)
            this._acceleration.y = Math.sin((this.angle()) * 0.05).toPrecision(10)
        }else{this._acceleration.x = this._acceleration.y = 0}

    }

    physicsUpdate(){
        this._velocity.x += this._acceleration.x;
        this._velocity.y += this._acceleration.y;

        this.friction();
        this._position.x += (this._velocity.x);
        this._position.y += (this._velocity.y);
    }

    friction(){
        let speed = Math.sqrt(this._velocity.x * this._velocity.x + this._velocity.y * this._velocity.y);
        let angle = Math.atan2(this._velocity.y, this._velocity.x);
        if (speed > this._friction){ speed -= (this._friction * 1.5)}
        else {speed = 0}
        this._velocity.x = Math.cos(angle) * speed;
        this._velocity.y = Math.sin(angle) * speed;
    }

    render(){
        
        canvas.context.translate(this.x, this.y)
        canvas.context.rotate(this.angle())
        canvas.context.fillStyle = this._color
        canvas.context.fillRect(-this._pivot.x, -this._pivot.y, this.width, this.height)
        
    }

    update(){
        
        this.updateAngle();
        this.input();
        this._position.x += 1
        this._position.y += 1
        //this.physicsUpdate();
    }

    angle(){return this._angle}

    // Getters
    get x(){return this._position.x};
    get y(){return this._position.y};
    get width(){return this._width};
    get height(){return this._height};
    get color(){return this._color}
    // Setters
    set x(p_x){this._position.x = p_x};
    set y(p_y){this._position.y = p_y};
    set width(p_w){this._width = p_w}
    set height(p_h){this._height = p_h}


}