import React, { useRef } from "react";
import S3 from "react-aws-s3";

function ImageUpload () {
    const fileInput = useRef();

    const handleClick = event => {
        event.preventDefault();
        
        let file = fileInput.current.files[0];
        let newFileName = fileInput.current.files[0].name;

        const config = {
            bucketName: process.env.REACT_APP_BUCKET_NAME,
            region: process.env.REACT_APP_REGION,
            accessKeyId: process.env.REACT_APP_ACCESS_ID,
            secretAccessKey: process.env.REACT_APP_ACCESS_KEY
        };

        const ReactS3Client = new S3(config);
        ReactS3Client.uploadFile(file, newFileName).then(data => {
            console.log(data);
            if (data.status === 204) {
                console.log("success");
            } else {
                console.log("fail")
            }
        });
    }
    return(
        <div>
            <form className="upload-steps" onSubmit={handleClick}>
                <label>
                    Upload file: 
                    <input type="file" ref={fileInput}></input>
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
           
            <hr />
        </div>
    )
}

export default ImageUpload;