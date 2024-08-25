const fs = require("fs");
const process = require('process');
const axios = require('axios');
//const argument  =  process.argv[2]
const {handleOutput, isValidUrl} = require('./helper')




function cat(path, out) {
    fs.readFile(path, 'utf8', (err, data) => {
        if(err) {
            console.error(`Error reading ${path}: ${err}`);
            process.exit(1);
        }
        handleOutput(data, out);
    })   
}


async function webCat(url, out) {
    try {
        let res = await axios.get(url);
        handleOutput(res.data, out);   
        console.log (res)
    } catch(err) {
        console.error(err);
    }
}


let path;
let out;

if (process.argv[2] === '--out') {
  out = process.argv[3];
  path = process.argv[4];
} else {
  path = process.argv[2];
}




if(isValidUrl(path)){
    webCat(path)
} else {
    cat(path)
}


