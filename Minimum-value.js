function MinimumValue(arr){  // function called MinimumValue to return Minimum number in array 
        let Min = arr[0];   // We created a variable called Min and then stored the value of the first element in the array
        for(let i = 1 ; i < arr.length ; i++ ){  // for loop to read all numbers in array 
            if(arr[i] < Min){ // If a number less than the variable is found.
                Min = arr[i];  //  store the lower number in the variable.
            }
        }
        return Min; // return the Min
    }

let arr = [10,15,8,6,12];  // Create array 

console.log(MinimumValue(arr)); // call array 