// QUIXEL IMPORTER FOR ARMORY PAINT
// Written by Brendan Prednis 2021.

// let plugin = new arm.Plugin();

const net = require("net");
const fs = require("fs");

const PORT = 24981;
const BUFFER_SIZE = 4096 * 2;

// ARMOR PAINT INFO 
let catagoryName = "My Nodes";
let nodeName = "Quixel Importer";
let nodeType = "QUIXEL_IMPORTER";

const socketObject = {
    port: PORT,
    // timeout: 5000,
}
/**
 * 
 * 
 * 
 * 
 * 
 * 
 */
// ========MAIN FN==================
// server startup
async function msPlugin() {
    const server = net.createServer();
    server.on("connection", socket => {
        console.log(`connection received from Quixel Bridge!`);

        // TThis returns an object we can iterate and desctucture into an Armory material.
        socket.on("data", buf => {
            if (buf.length > 0) {
                let bufferJSON = JSON.parse(buf)[0];
                msReader(bufferJSON);
            } else {
                console.error("could not read bytes, make sure you have the correct port in Quixel Bridge.");
            }
            // NOTE: This should be handled as either an error depending on the length.
        });
    })
    // log that the server successfully started up
    server.listen(socketObject.port, ()=> console.log(`MS-Armory plugin started on localhost:${socketObject.port}`));
};
msPlugin();
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
// ==READER==: reads the import from quixel bridge.
async function msReader(assetObj) {
    // console.log(assetObj);
    let materialName = assetObj.name;
    console.log(materialName);
    let matComponents = assetObj.components;
    matComponents.map(texture => {
        let mapType = texture.type;
        let mapPath = texture.path;
        let mapName = texture.name;

        // add to an array of these objects, turn into a material object.
        console.log(mapType, {mapName, mapPath});
    });
    makeArmorMat();
};
// make armor mat
async function makeArmorMat() {
    console.log("making Armory material...");

    // make armory material.
}
