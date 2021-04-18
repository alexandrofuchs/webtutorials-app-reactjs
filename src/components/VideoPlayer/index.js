import React from 'react';

const VideoPlayer = () => (
    <video width="1280" height="720" controls muted autoPlay crossOrigin="anonymous">
        <source src={`http://localhost:4000/video/0`} type="video/mp4"></source>
        {/* <track label="English" kind="captions" srcLang="en" src={`http://localhost:4000/video/${this.state.videoId}/caption`} default></track> */}
    </video>
)
export default VideoPlayer;
