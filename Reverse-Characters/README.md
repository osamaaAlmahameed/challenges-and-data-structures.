# Reverse Characters 

## Challenge Description 
Write a function `ReverseCharacters` that takes a single string as input. Without using any built-in methods should return the string with all characters reversed.

## Reverse Characters Output
![Screenshot](https://raw.githubusercontent.com/osamaaAlmahameed/challenges-and-data-structures./85f71084bcabfff11a3987a90c9421871fe47005/Reverse-Characters/Screenshoot.png)


## The Code 
``` javascript code
function ReverseCharacters(characters){
    let reverse = "";
    for(let i = characters.length - 1 ; i >= 0 ; i--){
        reverse += characters[i];
    }
    return reverse ;
}

const characters = "Javascript";

console.log("The Orginal Word : " + characters);  // output  =>      Javascript

console.log("The Reverse Characters : " + ReverseCharacters(characters));   // output =>    tpircsavaJ
