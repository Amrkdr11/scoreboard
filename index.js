// let totalHome = document.getElementById("homeScore");
// let totalAway = document.getElementById("awayScore");

// let scoreHome = 0;
// let scoreAway = 0;

// function plusOneHome(){
//     scoreHome += 1;
//     totalHome.innerText = scoreHome
// }

// function plusTwoHome(){
//     scoreHome += 2;
//     totalHome.innerText = scoreHome
// }

// function plusThreeHome(){
//     scoreHome += 3;
//     totalHome.innerText = scoreHome
// }

// function plusOneAway(){
//     scoreAway += 1;
//     totalAway.innerText = scoreAway
// }

// function plusTwoAway(){
//     scoreAway += 2;
//     totalAway.innerText = scoreAway
// }

// function plusThreeAway(){
//     scoreAway += 3;
//     totalAway.innerText = scoreAway
// }


// Cache the DOM elements once
const totalHome = document.getElementById("homeScore");
const totalAway = document.getElementById("awayScore");

let scoreHome = 0;
let scoreAway = 0;

// Generic update function to handle any team and points
function addScore(team, point){
    if(team === "home"){
        scoreHome += point;
        totalHome.innerText = scoreHome
    }
    else if(team === "away"){
        scoreAway += point;
        totalAway.innerText = scoreAway
    }
}