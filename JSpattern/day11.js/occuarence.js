let a = [2,4,5,2];
let arr1 = [];

for (let i = 0; i < a.length; i++) {
    let isUnique = true;
    for (let j = 0; j < a.length; j++) {
        if ( i !==j && a[i] === a[j]) {
            isUnique = false;
            break;
        }
    }
    if (isUnique==true) {
        arr1.push(a[i]);
    }
}

console.log(arr1);