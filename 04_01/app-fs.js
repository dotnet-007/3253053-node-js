const { setFips } = require('node:crypto');
const { copyFile } = require('node:fs');
const fs = require('node:fs/promises');
(async () =>{
  let file = 'data.txt';
  await fs.writeFile(file,'Hello world! ...\n');

  var content = await fs.readFile(file, {encoding:'utf-8'});
  console.log(content);

  await fs.appendFile(file, 'Mode texts \n');

  await fs.copyFile(file, 'data (copy).txt');

})();


// const { createServer, request,  }  = require('node:http');

// const requestListener = (req, res) => res.end('Welcome to Node.JS application');

// // L'objet server est un EventEmitter et émet l'évènement [request] à chaque connection.
// //const server = createServer(requestListener);
// const server = createServer();

// server.on('request', requestListener);
// server.listen(8082);