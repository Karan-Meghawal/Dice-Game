// start


// code for im1 1
var randomnum1 = Math.floor( Math.random() *6) + 1;
var randomimg1 = 'dice' + randomnum1 + '.png'; 
var randomimgsource = 'images/' + randomimg1 ;
var img1 = document.querySelector('.img1');
img1.setAttribute('src', randomimgsource)



// code for img 2
var randomnum2 = Math.floor(Math.random() * 6) +1
var randomimg2 = 'dice' + randomnum2 + '.png';
var randomimgsource2 = 'images/' + randomimg2;
var img2 = document.querySelector('.img2');
img2.setAttribute('src', randomimgsource2) 

if(randomnum1 > randomnum2){
    document.getElementsByTagName('h1')[0].innerHTML = 'Player 1 is win !'
}
else if(randomnum2 > randomnum1){
    document.getElementsByTagName('h1')[0].innerHTML = 'Player 2 is win !'
}
else if(randomnum1 === randomnum2){
    document.getElementsByTagName('h1')[0].innerHTML = 'Draw !'
}
else{
    document.getElementsByTagName('h1')[0]
}
