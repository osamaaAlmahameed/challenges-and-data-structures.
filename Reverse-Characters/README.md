# Reverse Characters 

## Challenge Description 
Write a function `ReverseCharacters` that takes a single string as input. Without using any built-in methods should return the string with all characters reversed.

## Reverse Characters Output
![Screenshot](https://raw.githubusercontent.com/osamaaAlmahameed/challenges-and-data-structures./85f71084bcabfff11a3987a90c9421871fe47005/Reverse-Characters/Screenshoot.png)

``` javascript code
function ReversalCharacters(Word){
    let Reverse = "";
    for(let i = Word.length - 1 ; i >= 0 ; i--){
        Reverse += Word[i];
    }
    return Reverse ;
}

const Word = "Javascript";

console.log(ReversalCharacters(Word))


