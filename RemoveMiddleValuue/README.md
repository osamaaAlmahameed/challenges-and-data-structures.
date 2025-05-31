# Remove Middle Value In Array 

## Description 
Write a function called RemoveMiddleVaIue that takes in an array as its parameter. Without utilizing any of the built-in methods available in the language, the function should remove the value at the middle index of the array. The function should then return the modified array.


## The White Board
![RemoveMiddleValue](https://github.com/osamaaAlmahameed/challenges-and-data-structures./blob/13dbaa780ae692bc5cd62d69cfe12e1c7a3f75ec/RemoveMiddleValuue/RemoveMiddleValue.png)

## The Code 

``` Javascript
function RemoveMiddelValue(arr){    // function its name RemoveMiddleValue
    let arr2 = [];   // Empty Array
    let middelIndex = Math.floor(arr.length / 2);   // Middel index length for array
    for(let i = 0 ; i < arr.length ; i++){   // for loop to read array
        if(i !== middelIndex){  // if statment -- if i not equal Middel index
            arr2.push(arr[i]);  // Store in arr2
        }
    }
    return arr2;    // Return Final Result
}

let arr = [1,2,3,4,5]; // Orignal Array 

console.log("Orginal array : " + arr);   // print Orginal Array  ..

console.log("Remove Middel Value : " + RemoveMiddelValue(arr)); //   print Array withoud Middel Value ..

```

## Output 
![RemoveMiddleValue](https://github.com/osamaaAlmahameed/challenges-and-data-structures./blob/13dbaa780ae692bc5cd62d69cfe12e1c7a3f75ec/RemoveMiddleValuue/output.png)
