const os = require('node:os');

console.log(`Platform : ${os.platform}`);
console.log(`CPU : ${os.arch}`);
console.log(`Nomber of CPU cores : ${os.cpus().length}`);
console.log(`User home directory : ${os.homedir}`);
console.log(`Line 1${os.EOL}Line 2${os.EOL}Line 3`);