function SortArray(arr){    // function called SortArray that takes paramter 
    let temp ;
    for(let i = 0 ; i < arr.length ; i++){        // First for loob 
        for(let j = 0 ; j < arr.length ; j++){    // Second for loob
            if(arr[i] < arr[j]){       // if statment 
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;                 
            }
        }
    }
    return arr;     // return Resukt 
}



let arr = [5,1,3,4,7,8,2,9,6];    // Orginal array

console.log(SortArray(arr));