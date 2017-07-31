

let unsortedArray = [6,7,5,9,5,3,8.5,4,-1,0,2];

console.log(unsortedArray);


function quickSortStacks (arr) {

    //use stacks
    let before = [];
    let after = [];
    let same = [];

if (arr.length <= 1) return arr;

    let divider = parseInt(arr[Math.floor(arr.length / 2)]);

    for (let i=0; i<arr.length; i++ ) {
        if (arr[i] === divider) {
            same.push(arr[i])
        } else if (arr[i] < divider) {
            before.push(arr[i])
        } else {
            after.push(arr[i]);
        }
    }


   // return quickSortStacks(before).concat(same, quickSortStacks(after))

}


//console.log( quickSortStacks(unsortedArray) );

function quickSort(arr, left, right) {

    let i = left;
    let j = right;
    let divider = parseInt(arr[Math.floor((left + right) / 2)]);

    while (i<=j) {

        //from begin -->
        while (arr[i] < divider){
            i++;
        }
        //from end <--
        while (arr[j] > divider){
            j--;
        }

        // swap
        if (i <= j){
            swap(arr, i,j);
            i++;
            j--;
        }
    }

    if (left < j){
        quickSort(arr, left, j)
    }

    if (i < right){
        quickSort(arr, i, right)
    }

    return arr;

}

function swap(arr, i,j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}


console.log( quickSort(unsortedArray, 0, unsortedArray.length-1) );








