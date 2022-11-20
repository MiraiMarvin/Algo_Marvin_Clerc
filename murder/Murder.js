let Jason = 100;
class Cara{
    constructor(ProbaD, ProbaA, ProbaDA, life, name){
        this.ProbaD = ProbaD;
        this.ProbaA = ProbaA;
        this.ProbaDA = ProbaDA;
        this.life = life;
        this.name = name;
    }
}
let first_name = ['Sally','brandon','ismael','kenan','judie'];


let blonde = new Cara(0.5,0.4,0.1,1,'sally');
let culturiste = new Cara(0.2,0.6,0.2,1, 'brandon');
let sportif = new Cara(0.7,0.3,0,1, 'kenan');
let nerd = new Cara(0.4,0.4,0.1,1, 'judie');
let religieux = new Cara(0.6,0.3 ,0.1,1, 'ismael');

function Attack(ProbaATT,ProbaDE,ProbaDEAT){
    let withness = Math.random();
    if(withness < ProbaDE){
        let result = 1;
        return result;
    }
    if(withness < ProbaDE + ProbaATT){
        let result = 2;
        return result;

    }
    else {
        let result = 3;
        return result;

    }
    return result;
}

let player = 5;

while(Jason >= 0 && player > 0 ){
    console.log('il reste' ,player,'joueur');

    if(blonde.life === 1){
        let luckB = Attack(blonde.ProbaA,blonde.ProbaD,blonde.ProbaDA,)

        if(luckB === 2){
            Jason = Jason - 10;
            player --;
            console.log("il  pris des degat");
        }
        else if(luckB === 3){
            Jason = Jason - 15;
            blonde.life --;
            player --;
            console.log("blonde est morte en infligeant des degats");
        }
        else{
            blonde.life --;
            console.log("blonde est morte");
        }
    }
    if(culturiste.life === 1){
        let luckC = Attack(culturiste.ProbaA,culturiste.ProbaD,culturiste.ProbaDA,)
        console.log(luckC);

        if(luckC === 2){
            Jason = Jason - 10;
            console.log("il  pris des degat");
        }
        else if(luckC === 3){
            Jason = Jason - 15;
            culturiste.life --;
            player --;
            console.log("culturiste est mort en infligeant des degats");
        }
        else{
            culturiste.life --;
            player --;
            console.log("culturiste est mort");
        }
        console.log(Jason);
    }
    if(sportif.life === 1){
        let luckS = Attack(sportif.ProbaA,sportif.ProbaD,sportif.ProbaDA,)
        console.log(luckS);

        if(luckS === 2){
            Jason = Jason - 10;
            console.log("il  pris des degat");
        }
        else if(luckS === 3){
            Jason = Jason - 15;
            sportif.life --;
            player --;
            console.log("sportif est mort en infligeant des degats");
        }
        else{
            sportif.life --;
            player --;
            console.log("sportif est mort");
        }
        console.log(Jason);
    }
    if(nerd.life === 1){
        let luckN = Attack(nerd.ProbaA,nerd.ProbaD,nerd.ProbaDA,)
        console.log(luckN);

        if(luckN === 2){
            Jason = Jason - 10;
            console.log("il  pris des degat");
        }
        else if(luckN === 3){
            Jason = Jason - 15;
            nerd.life --;
            player --;
            console.log(" le nerd est mort en infligeant des degats");
        }
        else{
            nerd.life --;
            player --;
            console.log("nerd est mort");
        }
        console.log(Jason);
    }
    if(religieux.life === 1){
        let luckR = Attack(religieux.ProbaA,religieux.ProbaD,religieux.ProbaDA,)
        console.log(luckR);

        if(luckR === 2){
            Jason = Jason - 10;
            console.log("il  pris des degat");
        }
        else if(luckR === 3){
            Jason = Jason - 15;
            religieux.life --;
            player --;
            console.log(" le religieux est mort en infligeant des degats");
        }
        else{
            religieux.life --;
            player --;
            console.log("le religieux est mort");
        }
        console.log('il reste',Jason,'au meurtriers');
    }
}

if(player <= 0){
    console.log('tous les joueurs sont mort');
}
else{
    console.log('gg well play');

}






