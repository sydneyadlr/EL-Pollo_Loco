
class MyAudio{
    file;
    isLoaded = false;

    constructor(file_){
        this.file = new Audio(file_);
        console.log("sound added");
        
    }
}


class AudioHub {
    // Audiodateien für Piano, Guitar, DRUMS
    // static PIANO = new Audio('./assets/sounds/piano.mp3');
    static PIANO = new MyAudio('./assets/sounds/piano.mp3');
    static GUITAR = new MyAudio('./assets/sounds/guitar.mp3');
    static DRUMS = new MyAudio('./assets/sounds/drums.mp3');

    // Array, das alle definierten Audio-Dateien enthält
    static allSounds = [AudioHub.PIANO, AudioHub.GUITAR, AudioHub.DRUMS];


    // Spielt eine einzelne Audiodatei ab
    static playOne(sound, instrumentId) {  // instrumentId nur wichtig für die Visualisierung
        sound.file.volume = 0.2;  // Setzt die Lautstärke auf 0.2 = 20% / 1 = 100%
        sound.file.currentTime = 0;  // Startet ab einer bestimmten stelle (0=Anfang/ 5 = 5 sec.)
        console.log(sound.file.readyState);
        

        if(sound.file.readyState > 0 || sound.isLoaded){ // (> 0 für lokalen test in dem hub) auf ftp == 4 -> daten vorhanden / keine fehlermeldung wenn sound.file.play()
            sound.isLoaded = true;
            sound.file.play();  // Spielt das übergebene Sound-Objekt ab
        }

        
        const instrumentImg = document.getElementById(instrumentId);  // nur wichtig für die Visualisierung
        instrumentImg.classList.add('active');  // nur wichtig für die Visualisierung
    }


    // Stoppt das Abspielen aller Audiodateien
    static stopAll() {
        AudioHub.allSounds.forEach(sound => {
            sound.file.pause();  // Pausiert jedes Audio in der Liste
        });
        document.getElementById('volume').value = 0.2;  // Setzt den Sound-Slider wieder auf 0.2
        const instrumentImages = document.querySelectorAll('.sound_img'); // nur wichtig für die Visualisierung
        instrumentImages.forEach(img => img.classList.remove('active')); // nur wichtig für die Visualisierung
    }


    // Stoppt das Abspielen einer einzelnen Audiodatei
    static stopOne(sound, instrumentId) {
        sound.file.pause();  // Pausiert das übergebene Audio
        const instrumentImg = document.getElementById(instrumentId); // nur wichtig für die Visualisierung
        instrumentImg.classList.remove('active'); // nur wichtig für die Visualisierung
    }


    // ##########################################################################################################################
    // ################################################  Sound Slider - BONUS !  ################################################
    // Setzt die Lautstärke für alle Audiodateien
    static objSetVolume(volumeSlider) {
        let volumeValue = document.getElementById('volume').value;  // Holt den aktuellen Lautstärkewert aus dem Inputfeld
        volumeSlider.forEach(sound => {
            sound.file.volume = volumeValue;  // Setzt die Lautstärke für jedes Audio wie im Slider angegeben
        });
    }
}