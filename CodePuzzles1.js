//QUestion : Write a fn that returns each number in the array if its larger than all the numbers to the right or if it is the last value ?
//const values = [16,17,4,3,5,2]   // should return 17 (bigger than all the ones on its right, then 5, then last value 2.

// pay close attention, looping through arrays is not same as normal looping numbers.  if i>0 (without =) it stops at 0 , when you loop from 6 down to 0 without adding the equal sign, it will print 6,5,4,3,2,1, stops at 0 because 0>0 is false. But we are printing an array !!! so we want to ENTER 0 index which is the last element down. thus we include 0 by adding >=0 sign. EXCLUDE element 6 in the array, as its outside the array even if the length is 6.
//also notice another problem the array does not have an index 6, so the loop is too far. use length-1.
// in summary to loop throught array [16, 17, 4, 3, 5, 2] basically length is 6, but index is i=[0,1,2,3,4,5] thus go from 5 down to 0(inclusive) to print all elements. i=lengh-1(5 in this example) down to >=0.

console.log("================================");

const values = [16, 17, 4, 3, 5, 2];
let max = values[values.length - 1];
const resultarray = [max];
console.log("Max is : ", max);
console.log("array length =  : ", values.length);

for (let i = values.length - 1; i >= 0; i--) {
  console.log("value of i=", i);
  console.log(values[i]);
  console.log("Max is : ", max);
  console.log("resultarray = : ", resultarray);
  if (max < values[i]) {
    // you must change max's value before pushing it. This is is just a check.
    max = values[i];
    resultarray.push(max);
  }
}
console.log(resultarray.reverse());

// the above solution is nooby, to make an optimization for performance and professional solution. see below.
// using LET instead of CONST is an issue. Let best only be used with CLOSURE.
// algorithm working LOOPIng backwars violates princinple of least surprise.
// A closure gives you access to an outer function’s scope from an inner function
// //example
// function init() {
//   var name = 'Mozilla'; // name is a local variable created by init
//   function displayName() { // displayName() is the inner function, a closure
//     alert(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();
// The principle of least astonishment (POLA), aka principle of least surprise (alternatively a law or rule),[1][2] applies to user interface and software design.[3] It proposes that a component of a system should behave in a way that most users will expect it to behave. The behavior should not astonish or surprise users. The following is a formal statement of the principle: "If a necessary feature has a high astonishment factor, it may be necessary to redesign the feature."
// the backwards loop is IMPERATIVE LOOP> not desired because it jams both the loop and function of business logic together.
//having an if inside the for loop could be considered OVERNESTING
// max = values[i] : this is a variable reassignment it is not good because its hard to track ur variables later.
// array.unshift(max) instead of array.push(max) : this is better than reversing the array later with array.reverse()
// optimal solution : const values = [16, 17, 4, 3, 5, 2];
//console.dir(
//  values.filter((value, i)=>
//    values.slice(i+1,values.length-1).every((rvalue)=>value>rvalue);
//    )
//  );
//)
