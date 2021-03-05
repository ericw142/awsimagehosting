import React from "react";
const fs = require('fs');
const AWS = require('aws-sdk');

// Enter copied or downloaded access ID and secret key here
const ID = '';
const SECRET = '';

// The name of the bucket that you have created
const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

function s3upload(file) {
    // Read content from the file
    const fileContent = fs.readFileSync(file);

    // Setting up S3 upload parameters
    const params = {
        Bucket: ericw142bucket,
        Key: 'cat.jpg', // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
}

function ImageUpload () {
    return(
        <div>
            <input type="file" id="fileUpload"></input>
            <button onclick={s3upload}>Submit</button>
            <br />
            <progress max="100" value="0"></progress>
            <hr />
        </div>
    )
}

export default ImageUpload;