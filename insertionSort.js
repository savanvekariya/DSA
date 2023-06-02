function insertionSort(arr){
for(let [i, element] of arr.entries()){
    let j = i-1;
    while(j>=0 && arr[j]>element){ // while(j>=0 && arr[j+1]<arr[j])
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        j--;
    }
}
console.log(arr);
}

const arr = [2,5,1,4,7,5,9,3]
insertionSort(arr)