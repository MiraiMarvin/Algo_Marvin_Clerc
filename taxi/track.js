class perso{
    constructor(name, health){
        this.name = name;
        this.health = health;
    }
}

class track{
    constructor(redlight, change){
        this.redlight = redlight;
        this.change = change;

    }

}
let desti = new track (30,);
let tracklist = [' Anissa','Tueur','Guapman','Galerie','Intro'];
let player = new perso( 'marvin', 10);

while (desti.redlight > 0 && player.health >= 0){
    desti.redlight--;
    console.log('il reste',desti.redlight,'feux rouge');
    let song = Math.floor(Math.random() * 5);
    console.log('la radio joue',tracklist[song]);
    if(song === 0){
        desti.change = desti.change + 1;
        player.health = player.health -1;
        console.log('ouch...il vous reste',player.health);
        console.log('partez!! vous avez deja changé de taxi',desti.change);

    }
    else{
        continue;
    }
}
if(desti.redlight === 0){
    console.log('vous avez gagné')

}
if (player.health === 0){
    console.log('vous avez explosé')
}



