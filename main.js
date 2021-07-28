// QUIXEL IMPORTER FOR ARMORY PAINT
// Written by Brendan Prednis 2021.

// let plugin = new arm.Plugin();

const net = require("net");
const fs = require("fs");
const { StringDecoder } = require("string_decoder");

const PORT = 24981;
const BUFFER_SIZE = 4096 * 2;

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


// reader function: reads the import from quixel bridge.
function msReader(importedAssetsArr) {
 
    for (i in importedAssetsArr) {
        let assetID = asset['AssetID'];
        console.log(`imported asset id is: ${assetID}`);
    }
}

// importer function
function msAssetImporter(importedData) {
    console.log("trying asset import");    
    try {
        // creating an array of assets in case of batch export (directly from Quixel Python plugin)
        let importedAssetsArr = [];
    } catch (error) {
        console.log(error);        
    }
}
// ms link 
async function msLink(reader, writer) {
    
    // wait for connection and read data transfer.
    let data = await fs.ReadStream(BUFFER_SIZE);
    if (!data) {
        console.log("no data");
    }
    // if there is data, read that data.
    if (length(data) > 0) {
        msAssetImporter(data.reader())
    }
};

// ========MAIN FN==================
// setting server and connection
async function msPlugin() {
    
    /*connect to port PORT, 
    allocate a buffer size to use, 
    and do what we want on our callback. **/
    const server = net.createServer();

    server.on("connection", socket => {
        console.log(`connected to socket!`);

        socket.on("data", buf => {
            // need to get an iter object out of this. 
            let bufferJSON = JSON.parse(buf);
            console.log(bufferJSON);
            
        })
    })
    // log that the server successfully started up
    server.listen(PORT, ()=> console.log(`app started on port: ${PORT}`));
}

msPlugin();