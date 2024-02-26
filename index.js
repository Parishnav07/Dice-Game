let images= ['inverted-dice-1.png', 'inverted-dice-2.png','inverted-dice-3.png','inverted-dice-4.png','inverted-dice-5.png','inverted-dice-6.png'];

let length = images.length;
// console.log(length);
let randomIndex1 = Math.floor(Math.random() * length )+1 ;
let randomIndex2 = Math.floor(Math.random() * length)+1;
// console.log(randomIndex1);
// console.log(randomIndex2);
let randomImage1 = images[randomIndex1 -1]
let randomImage2 = images[randomIndex2 -1];
console.log("Random Image 1: " + randomImage1 );
console.log("Random Image 2: " + randomImage2 );

let imageElement1 =document.getElementById('randomImage1');
let imageElement2 = document.getElementById('randomImage2');
imageElement1.src= randomImage1;
imageElement2.src = randomImage2;

let display = document.getElementById('title');
document.getElementById('title').classList.add('heading');
if (randomIndex1 == randomIndex2){
    
    display.textContent="Match tie";
 }
 if(randomIndex1 > randomIndex2){
//     console.log("Player 1 Wins");
display.textContent="Player 1 Wins";
}
if(randomIndex1 < randomIndex2){
//     console.log("Palyer2 wins");
display.textContent.innerhtml="Player 2 Wins";
 }

