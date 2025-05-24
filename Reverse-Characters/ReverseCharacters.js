function ReverseCharacters(characters){  // function called ReverseCharacters accepts paramter
    let reverse = "";          // empty string
    for(let i = characters.length - 1 ; i >= 0 ; i--){   // for loop read from the end and back to start
        reverse += characters[i];   // Storage in reverse 
    } 
    return reverse;  // return the result
}


let word = "Javascript";   // The Word 

console.log("The Orginal Word : " + word);

console.log("The Reverse Characters : " + ReverseCharacters(word));   