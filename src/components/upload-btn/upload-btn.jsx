import React from 'react';
import './upload-btn.styles.scss';
// import styled from 'styled-components';


const UploadBtn = () => {

    const hiddenFileInput = React.useRef(null);

    const handleOnClick = event => {
        hiddenFileInput.current.click()
    };
    // const handleSubmit = () => {
    //     console.log('hi')
    // };

    return (
        <div>
            <div>
                <button className="upload-btn" onClick={handleOnClick}>Upload</button>
                <input type="file" id="myFile" style={{ display: "none" }} ref={hiddenFileInput}/>
                {/* <input type="submit" onSubmit={handleSubmit}/> */}
            </div>
        </div>
    );
};

export default UploadBtn;