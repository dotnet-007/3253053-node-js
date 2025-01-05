// function (exports, module, require, __filename, __dirname) {
console.log(exports)
console.log("\n....\n");

const fullname = `My fullname`;

//exports.name = fullname;
module.exports.name = fullname;

console.log(exports);

// return module.exports;
//} (module.exports, )
