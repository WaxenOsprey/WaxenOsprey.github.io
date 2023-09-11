import React, { useRef, useEffect } from 'react';

const YouTubePlayer = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const player = new window.YT.Player(playerRef.current, {
      height: '100%',
      width: '100%',
      videoId: videoId,
      playerVars: {
        autoplay: '1',
        loop: '1',
        
      },
    });

    return () => {
      player.destroy();
    };
  }, [videoId]);

  return <div ref={playerRef}></div>;
};

export default YouTubePlayer;
