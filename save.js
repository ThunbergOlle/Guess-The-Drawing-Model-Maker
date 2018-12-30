const fs = require('fs');
savejs = (drawng, name) => {

    fs.readFile(name+'.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        let prseJson = JSON.parse(data); //now it an object
        prseJson.push(drawng); //add some data
        json = JSON.stringify(prseJson); //convert it back to json
        fs.writeFile(name+'.json', json, 'utf8', () => {
            console.log("Wrote to file");
            drawing = [];

        }); // write it back 
    }});
    clear();
}