const { spawn } = require('node:child_process');

const child = spawn('dir', [], { shell: true });

child.stdout.on('data', data => {
  console.log(data.toString());
});
child.stderr.on('data', err => {
  console.log(err);
});
child.on('error', err => console.log(err.toString()));
child.on('closw', err => console.log(err));