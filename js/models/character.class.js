import { ImageHub } from "../helpers/image-hub.js";
import { MovableObject } from "./moveable-object.class.js";


export class Character extends MovableObject {

    constructor(){
        super().loadImage(ImageHub.CHARACTER.walk);
        this.loadImages(ImageHub.CHARACTER.jump);
    }


    jump() {

    }
}