const fs = require("fs");
const process = require('process');
const axios = require('axios');
const path =  process.argv[2]

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if(err) {
            console.error(`Error reading ${path}: ${err}`);
            process.exit(1);
        }
        console.log(data)
    })   
}


async function webCat(url) {
    try {
        let res = await axios.get(url)    
        console.log (res)
    } catch(err) {
        console.error(err)
    }
}


function isValidUrl(url) {
    try {  
        new URL(url);
        return true

    } catch(err) {
        return false
    }
}

if(isValidUrl(path)){
    webCat(path)
} else {
    cat(path)
}


