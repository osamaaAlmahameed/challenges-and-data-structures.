var arr1 = [1,2,3,4,5];  // This Orginal Array 

function Arrayreversal(numbers){   // function called Arrayreversal and paramters called numbers 
    var arr2 = [];             // secind array to reverse  but its empty now
    for(var i = numbers.length - 1 ; i >= 0 ; i--){  // reverse for loop to read all numbers in paramters
        arr2[arr2.length] = Number(numbers[i]);  // we give seocnd array index and fill array reverse cuz for loop start from the end and Number() to make numbers inside it integer ..
    }
    return arr2;  // return the numbers
}

console.log(`This Orginal Array [` + arr1 + `] .`); // print Orginal Array .. 

console.log(`This is Array Reversal [` + Arrayreversal(arr1) + `] .`);   //   print Array Reversal ..

/*Name : Osama Almahameed */