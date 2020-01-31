const path = require("path");
console.log(__dirname, "     This will Print path to current dir");
console.log(__filename, "     This will Print path to current file");
//we can import (require) libraries that are included in node like path must store it in variable

console.log(path.basename(__filename));
console.log(
  "The above line used the path module library with require function see above"
);
console.log(process.pid, "Using Process object");
console.log(process.versions.node, "Using Process object's version");

console.log(process.argv); // this will print the arguments argv array, first is node path, second is the file path
