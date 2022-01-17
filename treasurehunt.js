"use strict";
var bombLocation = Math.floor(Math.random() *9)
var treasureLocation = Math.floor(Math.random() *9)
var turns = 3
while(bombLocation === treasureLocation) {
    treasureLocation = Math.floor(Math.random() *9)
}
while (turns > 0){
const treasure = (location) =>{
    if(location === treasureLocation) {
        document.getElementById(location).innerHTML = "&#x1F3C6"
        turns = turns -1;
    } else if(location === bombLocation) {
        document.getElementById(location).innerHTML = "&#x1F480"
    } else {
        document.getElementById(location).innerHTML = "&#x274C"
        turns = turns -1;
    }

}
}
