function min(arr){
    let min = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (min > arr[i]) {
            min = arr[i]; 
        }
    }
    return min;
}

let Arr = [3,-1,8,1]
console.log(min(Arr))