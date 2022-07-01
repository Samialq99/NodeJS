//QUestion : Write a fn that returns each number in the array if its larger than all the numbers to the right or if it is the last value ?
//const values = [16,17,4,3,5,2]   // should return 17 (bigger than all the ones on its right, then 5, then last value 2.

// pay close attention, looping through arrays is not same as normal looping numbers.  if i>0 (without =) it stops at 0 , when you loop from 6 down to 0 without adding the equal sign, it will print 6,5,4,3,2,1, stops at 0 because 0>0 is false. But we are printing an array !!! so we want to ENTER 0 index which is the last element down. thus we include 0 by adding >=0 sign. EXCLUDE element 6 in the array, as its outside the array even if the length is 6.
//also notice another problem the array does not have an index 6, so the loop is too far. use length-1.
// in summary to loop throught array [16, 17, 4, 3, 5, 2] basically length is 6, but index is i=[0,1,2,3,4,5] thus go from 5 down to 0(inclusive) to print all elements. i=lengh-1(5 in this example) down to >=0.

console.log("================================");

const values = [16, 17, 4, 3, 5, 2];
let max = values[values.length - 1];
console.log("Max is : ", max);
console.log("array length =  : ", values.length);

for (let i = values.length - 1; i >= 0; i--) {
  console.log("value of i=", i);
  console.log(values[i]);
}
