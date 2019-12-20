var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        w = canvas.clientWidth
        h = canvas.clientHeight


var spaceship = {
    x: w / 2, y: h / 2,
    vx: 0, vy: 0,
    ax: 0, ay: 0,
    r: 0,
    draw: function(){
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.r);
        ctx.fillStyle = 'white';
        ctx.fillRect(-10, -5, 20, 10);
        ctx.restore();
    }
};

var friction = 0.01;

function updatePosition(obj){
    //update velocity
    obj.vx += obj.ax;
    obj.vy += obj.ay;
    applyFriction(obj);
    
    //update position
    obj.x += obj.vx;
    obj.y += obj.vy;
}

//user interactivity

var keys = [];
var mouse = {};
document.addEventListener('mousemove', function(e){
    mouse.x = e.clientX - canvas.offsetLeft
    mouse.y = e.clientY - canvas.offsetTop
},false);
document.addEventListener('keydown', function(e){
    keys[e.which] = true;
});
document.addEventListener('keyup', function(e){
    keys[e.which] = false;
});



function applyFriction(obj){
    var speed = Math.sqrt(obj.vx * obj.vx + obj.vy * obj.vy),
        angle = Math.atan2(obj.vy, obj.vx);
    if(speed > friction){
        speed -= friction;
    }else{
        speed = 0;
    }
    obj.vx = Math.cos(angle) * speed;
    obj.vy = Math.sin(angle) * speed;
}

(function animloop(){
    requestAnimationFrame(animloop, canvas);
    ctx.clearRect(0, 0, w, h);
    
    //rotation
    var dx = mouse.x - spaceship.x
    var dy = mouse.y - spaceship.y
    spaceship.r = Math.atan2(dy, dx);
    
    
    //thrust
    if(keys[65]){
        spaceship.ax = Math.cos(spaceship.r) * 0.05;
        spaceship.ay = Math.sin(spaceship.r) * 0.05;
    }else{
        spaceship.ax = spaceship.ay = 0;
    }
    
    //friction is applied inside the updatePosition function
    updatePosition(spaceship);
    spaceship.draw();
})();
