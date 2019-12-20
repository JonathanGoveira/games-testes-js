(function () {
    var canvas = document.querySelector('canvas')
    var ctx = canvas.getContext('2d')

    // recursos do jogo
    var background = new Image();
    var spritePlayer = new Image();
    background.src = "background.jpg"
    spritePlayer.src = "player.png"


    // Objetos
    var sprites = []

    var gameWorld = {
        img: background,
        x: 0,
        y: 0,
        width: 1440,
        height: 960
    };

    var player = {
        img: spritePlayer,
        x: 0,
        y: 0,
        width: 32,
        height: 32
    };

    sprites.push(gameWorld);
    sprites.push(player);

    var cam = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height
    }

    // centralizar a câmera
    cam.x = (gameWorld.width - cam.width) / 2;
    cam.y = (gameWorld.height - cam.height) / 2;
    //centralizar o personagem 
    player.x = cam.x + (cam.width / 2);
    player.y = cam.y + (cam.height / 2);

    // Mover o player
    var left = right = up = down = grid = false;
    window.addEventListener('keydown', function (e) {
        var key = e.keyCode;
        switch (key) {
            case 37:
                left = true;
                break;
            case 39:
                right = true;
                break;
            case 38:
                up = true;
                break;
            case 40:
                down = true;
                break;
            case 49:
                grid = true;
                break
        }
    }, false)
    window.addEventListener('keyup', function (e) {
        var key = e.keyCode;
        switch (key) {
            case 37:
                left = false;
                break;
            case 39:
                right = false;
                break;
            case 38:
                up = false;
                break;
            case 40:
                down = false;
                break;
            case 50:
                grid = false;
                break;
        }
    }, false)
    function loop() {
        window.requestAnimationFrame(loop, canvas);
        update();
        render();
    }

    function update() {
        if (left && !right) player.x -= 8
        if (!left && right) player.x += 8
        if (up && !down) player.y -= 8
        if (!up && down) player.y += 8
        // atualizar a posição da camera em função do player
        cam.x = player.x - (cam.width / 2)
        cam.y = player.y - (cam.height / 2)
        // limites da camera
        if (cam.x < 0) cam.x = 0;
        if (cam.x + cam.width > gameWorld.width) cam.x = gameWorld.width - cam.width;
        if (cam.y < 0) cam.y = 0;
        if (cam.y + cam.height > gameWorld.height) cam.y = gameWorld.height - cam.height;
        // limites da camera
        if (player.x < 0) player.x = 0;
        if (player.x + player.width > gameWorld.width) player.x = gameWorld.width - player.width;
        if (player.y < 0) player.y = 0;
        if (player.y + player.height > gameWorld.height) player.y = gameWorld.height - player.height;



    }

    var grid = {
        x: 0,
        y: 0,
        width: 10,
        height: 10
    }

    function render() {
        ctx.save()
        ctx.translate(-cam.x, -cam.y)
        for (let i in sprites) {
            let spr = sprites[i];
            ctx.drawImage(spr.img, 0, 0, spr.width, spr.height, spr.x, spr.y, spr.width, spr.height);
        }
        if (grid === true) {
            for (let y = 0; y <= gameWorld.width; y += 50) {
                ctx.beginPath()
                ctx.moveTo(y, 0);
                ctx.lineTo(y, gameWorld.height);
                ctx.strokeStyle = "black";
                ctx.stroke();
                ctx.closePath()
            }
            for (let x = 0; x <= gameWorld.height; x += 50) {
                ctx.beginPath()
                ctx.moveTo(0, x);
                ctx.lineTo(gameWorld.width, x);
                ctx.strokeStyle = "black";
                ctx.stroke();
                ctx.closePath()
            }
        }
        ctx.restore()
    }
    loop();
}())