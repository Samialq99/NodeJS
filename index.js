let didShowMessage = false;

function showMessage() {
  const message = "I like logs";

  for (let index = 1; index <= 5; index++) {
    console.log(message);
  }
}

showMessage();
