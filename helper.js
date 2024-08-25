function handleOutput(text, out) {
    if (out) {
      fs.writeFile(out, text, 'utf8', function(err) {
        if (err) {
          console.error(`Couldn't write ${out}: ${err}`);
          process.exit(1);
        }
      });
    } else {
      console.log(text);
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

module.exports  = {
    handleOutput,
    isValidUrl
}