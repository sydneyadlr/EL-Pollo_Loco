import { Character } from "./models/character.class.js";
import { MovableObject } from "./models/moveable-object.class.js";

let canvas;
let context;
let character = new Character();

function init() {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    console.log('My Character is', character);
    

 b = MovableObject
}