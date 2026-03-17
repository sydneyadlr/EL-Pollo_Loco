export class Keyboard {
    static RIGHT = false;
    static LEFT = false;
    static SPACE = false;
    static J = false;

    static addEvents() {
        window.addEventListener("keydown", (e) => {
            if (e.key == "ArrowRight") Keyboard.RIGHT = true;
            if (e.key == "ArrowLeft") Keyboard.LEFT = true;
            if (e.key == " ") Keyboard.SPACE = true;
            if (e.key == "j") Keyboard.D = true;
        });

        window.addEventListener("keyup", (e) => {
            if (e.key == "ArrowRight") Keyboard.RIGHT = false;
            if (e.key == "ArrowLeft") Keyboard.LEFT = false;
            if (e.key == " ") Keyboard.SPACE = false;
            if (e.key == "j") Keyboard.D = false;
        });
    }
}