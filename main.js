// QUIXEL IMPORTER FOR ARMORY PAINT
// Written by Brendan Prednis 2021.


let plugin = new arm.Plugin();

let catagoryName = "My Nodes";
let nodeName = "Quixel Importer";
let nodeType = "QUIXEL_IMPORTER";




const PORT = 8000;
const BUFFER_SIZE = 4096 * 2;

const server = require("net").createServer();

// open for connection on specified port
server.on("connect", socket => {
    console.log('client connected');

    // get the event emitter from megascans bridge
    socket.on("data", data => {
        console.log("data has been received! " + data);
        socket.write(data);
    })
});

// listen
server.listen(PORT, ()=> console.log(`server connected on port:${PORT}`)); 