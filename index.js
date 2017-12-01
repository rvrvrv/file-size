const favicon = require('serve-favicon');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
// Handle multi-part / form data
const multer = require('multer');
const storage = multer.memoryStorage(); // Store uploads as Buffer objects,
const upload = multer({ storage }); // which prevents filling server space

app.use(favicon(`${__dirname}/favicon.ico`));

// Deliver index.html with corresponding CSS
app.use('/', express.static('./public'));

// Upload file (as Buffer)
app.post('/fileData', upload.single('theFile'), (req, res) => {
  // Return JSON with file name and size
  res.json({
    'File Name': req.file.originalname,
    'Size (in bytes)': req.file.size
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${  port}`);
});
