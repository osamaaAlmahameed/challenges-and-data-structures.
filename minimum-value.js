function MinimumValue(arr){
        let Min = arr[0];
        for(let i = 1 ; i < arr.length ; i++ ){
            if(arr[i] < Min){
                Min = arr[i];
            }
        }
        return Min;
    }

let arr = [10,15,8,6,12];

console.log(MinimumValue(arr));