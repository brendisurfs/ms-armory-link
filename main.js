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

// const materialObject = {
    //     // break down the returned object into various optional types here
    //     albedo?: albedo,
    //     ao?: ao,
    //     displacement?: displacement, 
    //     metalness?: metalness,
    //     normal?: normal,
    //     roughness?: roughness,
    //     specular?: specular,
    // }
    
// ========MAIN FN==================
// server startup
async function msPlugin() {
    const server = net.createServer();
    server.on("connection", socket => {
        console.log(`connected to socket!`);

        // TThis returns an object we can iterate and desctucture into an Armory material.
        socket.on("data", buf => {
            let bufferJSON = JSON.parse(buf)[0];
            msReader(bufferJSON);
        });
    })
    // log that the server successfully started up
    server.listen(PORT, ()=> console.log(`app started on port: ${PORT}`));
}

// reader function: reads the import from quixel bridge.
async function msReader(assetObj) {
    console.log(assetObj);
};
// make armor mat
async function makeArmorMat() {
    console.log("making armor mat");
}

msPlugin();