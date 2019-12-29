
class KeyBoard_Singleton{
    constructor(){
        this._keys=[]
        for(let i=0;i<255;i++){
            this._keys[i] = false
        }
        document.addEventListener('keydown', (e) => {this.keyDown(e)})
        document.addEventListener('keyup', (e) => {this.keyUp(e)})
    }

    keyDown(e){
        this._keys[e.keyCode] = true
    }
    keyUp(e){
        this._keys[e.keyCode] = false
    }
    keyPress(keyCode){
        return this._keys[keyCode];
    }
}
const keyboard_Singleton = new KeyBoard_Singleton();
export default keyboard_Singleton
