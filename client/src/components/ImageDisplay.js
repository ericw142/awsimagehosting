import React from "react";

function ImageDisplay () {
    return(
        <div className="marginTop">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://ericw142bucket.s3.amazonaws.com/boats.jpg"></img>
                </div>
                <div className="col-md-6">
                    <img src="https://ericw142bucket.s3.amazonaws.com/kiyomizudera.jpg"></img>
                    <hr/>
                    <p>These images are photographed by me and publicly available from my S3 bucket.</p>
                </div>
            </div>
            
        </div>
    )
}

export default ImageDisplay;