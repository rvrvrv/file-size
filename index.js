const favicon = require('serve-favicon');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const multer = require('multer'); // Handle multi-part / form data
const storage = multer.memoryStorage(); // Store uploads as Buffer objects,
const upload = multer({ storage }); // which prevents filling server space

app.use(favicon(`${__dirname}/favicon.ico`));

// Deliver index.html with corresponding CSS
app.use('/', express.static('./public'));

// Upload file (as Buffer)
app.post('/fileData', upload.single('theFile'), (req, res) => {
  // If no file uploaded, return error message
  if (!req.file) return res.json({ Error: 'No file uploaded' });
  // Return JSON with file name and size
  return res.json({
    'File Name': req.file.originalname,
    'Size (in bytes)': req.file.size
  });
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
