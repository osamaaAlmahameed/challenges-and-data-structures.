function mostRepetitionResult(numbers){   // function for find most Repetitiion number in array
    let R = [];
    let max = 0 ;
    let finalResult;

    for(let x of numbers){     // for loop to read numbers in array 
        if(x % 1 === 0){        // to filter number intiger 
        R[x] = (R[x] || 0 ) + 1;  
        if(R[x] > max){  // to calculate how time Repetition
            max = R[x];
            finalResult = x;
        }
    }
}
    return finalResult ;    // return most reoertition number
}


var arr = [1,1,2,2,3,3,3,1,1,5,5,6,7,8,2,1,1];  // Array

console.log(`Output : ` + mostRepetitionResult(arr));