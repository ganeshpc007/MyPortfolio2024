import React from "react";
import "./musicButton.css";
import { useState, useRef } from "react";
import music from "../../assets/music/bounce-114024.mp3";

const MusicButton = () => {
  const [isPlaying, setisPlaying] = useState(false);
  const audioRef = useRef(new Audio(music));

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0; // Reset playback
    } else {
      audio.play();
    }

    setisPlaying(!isPlaying);
  };

  return (
    <div
      className={`music-bars ${isPlaying ? "animate" : ""}`}
      onClick={togglePlay}
    >
      <span className="music-bar"></span>
      <span className="music-bar bar2"></span>
      <span className="music-bar"></span>
      <span className="music-bar bar2"></span>
      <span className="music-bar"></span>
    </div>
  );
};

export default MusicButton;
