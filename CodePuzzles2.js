//running Sum problem. arr=[3,1,2,10,1], return outputarray=[3,4,6,16,17]

//My idea is ; for (i=0;i<arr.length-1;i++) { if i = 0, outputarray.push(arr[i])
//, else outputarray.push(arr[i]+arr[i-1]);

const arr = [3, 1, 2, 10, 1];
let outputarray = [];
console.log("arr =", arr, "outputarray =", outputarray);

for (let i = 0; i <= arr.length - 1; i++) {
  if (i == 0) {
    // using i=1 breaks the code, you must use i==0 for a condition, Not an ASSIGNMENT.
    outputarray.push(arr[i]);
    console.log("outputarray =", outputarray);
  } else if (i > 0) {
    outputarray.push(arr[i] + outputarray[i - 1]); // this loop is only adding 2 but ignores the previous index i-2
  }
}

console.log(outputarray);
