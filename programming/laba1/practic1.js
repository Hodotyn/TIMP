function min(arr, start) {
    let min = arr[start];
    let minI = start;
    for (let i = start+1; i < arr.length; i++){
        if (min > arr[i]) {
            min = arr[i];
            minI = i;
        }
    }
    return minI;
}

function sort(arr) {
    let m, cup;
    for (let i = 0; i < arr.length; i++) {
        m = min(arr, i);
        cup = arr[i];
        arr[i] = arr[m];
        arr[m] = cup;
    }
    return arr;
}

let Arr = [-1,3,8,1];
console.log(sort(Arr));