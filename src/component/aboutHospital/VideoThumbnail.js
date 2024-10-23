import React from 'react';
import './AboutHospital.css';// Import your CSS file for styling

const VideoThumbnail = ({ videoId }) => {
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgVSg5MA8=&rs=AOn4CLB7_xLIYJXXwUkjqAylJhFPWhsj4A`;

  const handlePlay = () => {
    // Logic to play the video
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(videoUrl, '_blank'); // Opens the video in a new tab
  };

  return (
    <div className="ytp-cued-thumbnail-overlay" style={{ position: 'relative' }}>
      <div
        className="ytp-cued-thumbnail-overlay-image"
        style={{ backgroundImage: `url(${thumbnailUrl})`, height: '100%', width: '100%', backgroundSize: 'cover' }}
      />
      <button className="ytp-large-play-button" aria-label="Play" title="Play" onClick={handlePlay}>
        <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
          <path
            className="ytp-large-play-button-bg"
            d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
            fill="#f00"
          />
          <path d="M 45,24 27,14 27,34" fill="#fff" />
        </svg>
      </button>
    </div>
  );
};

export default VideoThumbnail;
