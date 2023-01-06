const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

// default options
app.use(fileUpload());

app.get('/',(req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(3000)


/*
Index.html  file 
<html>
<head>
<title>File Uploading Form</title>
</head>
<body>
<h3>File Upload:</h3>
Select a file to upload: <br />
<form action="http://127.0.0.1:8081/file_upload" method="POST"
enctype="multipart/form-data">
<input type="file" name="file" size="50" />
<br />
<input type="submit" value="Upload File" />
</form>
</body>
</html>*/
