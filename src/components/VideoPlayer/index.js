import React from 'react';
import { useParams } from 'react-router';

export default function VideoPlayer({ src, type}){

    let { id } = useParams();

    return(
        <div>
            <video height={720} width={1280} controls autoPlay crossOrigin="anonymous">
                <source src={`http://localhost:5000/video/${id}/watch`} type="video/mp4"></source>                
            </video>
        </div>     
    )
}