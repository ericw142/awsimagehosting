import React from "react";

function ImageUpload () {
    return(
        <div>
            <input type="file" id="fileUpload"></input>
            <button onclick="s3upload()">Submit</button>
            <hr />
            <progress max="100" value="0"></progress>
        </div>
    )
}

export default ImageUpload;