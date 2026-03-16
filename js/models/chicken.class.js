import { ImageHub } from "../helpers/image-hub.js";
import { MovableObject } from "./moveable-object.class.js";


export class Chicken extends MovableObject {
  
     constructor(){
            super().loadImage(ImageHub.CHICKEN.normal_walk);
        }

   
}