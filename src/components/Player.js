import IconPause from "./Icons/IconPause";
import IconPlay from "./Icons/IconPlay";
import IconSkipStart from "./Icons/IconSkipStart";
import IconSkipEnd from "./Icons/IconSkipEnd";
import IconVolume from "./Icons/IconVolume";

import "./Player.css";
const Player = ({
  audioRef,
  isPlaying,
  onTogglePlay,
  currentSong,
  onChangeSong,
}) => {
  const playSongHandler = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    onTogglePlay(prevIsPlaying => !prevIsPlaying);
  };

  return (
    <div className="player">
      <div className="time-bar">
        <span>0:00</span>
        <div className="track">
          <input type="range" />
          <div className="track-progress"></div>
        </div>
        <span>3:00</span>
      </div>

      <div className="controls">
        <button>
          <IconSkipStart />
        </button>
        <button onClick={playSongHandler}>
          {isPlaying ? <IconPause /> : <IconPlay />}{" "}
        </button>
        <button onClick={() => onChangeSong("prev")}>
          <IconSkipEnd />
        </button>
        <button onClick={() => onChangeSong("next")}>
          {" "}
          <IconVolume />
        </button>
      </div>
    </div>
  );
};

export default Player;
