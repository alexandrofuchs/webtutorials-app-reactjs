import React from 'react';

export default function VideoPage(){


    const fileName = "byq0b0l2.ocm"

    return(
        <div>
            <video height={720} width={1280} controls autoPlay crossOrigin="anonymous">
                <source src={`http://localhost:5000/video/${fileName}/watch`} type="video/mp4"></source>
                {/* <track label="English" kind="captions" srcLang="en" src={`http://localhost:4000/video/${this.state.videoId}/caption`} default></track> */}
            </video>
        </div> 
    
    )
}