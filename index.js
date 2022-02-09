let didShowMessage = false;

function showMessage() {
  const message = "I like logs";

  for (let index = 1; index <= 5; index++) {
    console.log(message);
  }
}
console.log(message);

showMessage();
//Eslint is active, it highlights errros ,
//eslint-disable-next-line no-console
// this stops eslint error regarding no console logs rule for example
