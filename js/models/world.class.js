import { Character } from "./character.class.js";


export class World {
    
character = new Character();
enemies = [
    new Chicken(),
    new Chicken(),
    new Chicken(),

    
];

    ctx;

    constructor (canvas){
        this.ctx = canvas.getContext('2d');
        this.draw();
    }


    draw() {
        this.ctx.drawImage(this.character.img, this.character.height, this.character.width)
    }


}