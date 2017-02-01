var favicon = require('serve-favicon');
var express = require('express');
var app = express(); //Server
var port = process.env.PORT || 8080; //Set port
var multer = require('multer'); //Handles multipart/form-data
var storage = multer.memoryStorage(); //Store uploads as Buffer objects, 
var upload = multer({ storage: storage }); //to prevent filling server space

app.use(favicon(__dirname + '/favicon.ico'));

//Deliver index.html with corresponding CSS
app.use("/", express.static("./public"));

//Upload file (as Buffer)
app.post('/fileData', upload.single('theFile'), function(req, res) {
    //Return JSON with file name and size
    res.json({
        'File Name': req.file.originalname,
        'Size (in bytes)': req.file.size
    });
});

app.listen(port, function() {
    console.log('Server is listening on port ' + port);
});
