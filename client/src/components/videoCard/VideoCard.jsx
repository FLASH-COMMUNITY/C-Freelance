import React from 'react'
import "./VideoCard.scss"
import { useEffect , useRef } from 'react'




const VideoCard = ({ id, publicId, ...props } ) => {

    const videoRef = useRef();
    const cloudinaryRef = useRef();
    const playerRef = useRef();

    useEffect(() => {
        if ( cloudinaryRef.current ) return;
    
        cloudinaryRef.current = window.cloudinary;
    
        playerRef.current = cloudinaryRef.current.videoPlayer(videoRef.current, {
          cloud_name: "dfar2wvuc",
          secure: true
        });
      }, []);


  return (
    <div className='videoCard'>
        <div className="content">
            <div className="top">
                <span>
                    Let's me
                </span>
                <h1>
                HOW TO USE IT
                </h1>

                <ul>
                    <li>Add a new service if your are seller</li>
                    <li>visit and see a freelance</li>
                    <li>Chat we the freelance for a deal</li>
                </ul>
            </div>
            <div className='bottom'>
      <video
        ref={videoRef}
        id={id}
        className="cld-video-player cld-fluid"
        controls
        autoPlay
        data-cld-public-id={publicId}
        {...props}
      />
    </div>        </div>
    </div>
  )
}

export default VideoCard