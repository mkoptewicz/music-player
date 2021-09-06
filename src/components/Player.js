import IconPause from "./Icons/IconPause";
import IconPlay from "./Icons/IconPlay";
import IconSkipStart from "./Icons/IconSkipStart";
import IconSkipEnd from "./Icons/IconSkipEnd";
import IconVolume from "./Icons/IconVolume";
import { ReactComponent as Spinner } from "../assets/spinner.svg";

import formatDisplayedTime from "../lib/formatDisplayedTime";

import "./Player.css";
const Player = ({
  audioRef,
  isPlaying,
  onTogglePlay,
  onChangeSong,
  songInfo,
  onDrag,
}) => {
  const playSongHandler = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    onTogglePlay(prevIsPlaying => !prevIsPlaying);
  };
  const { currentTime, duration } = songInfo;
  const { minutes, seconds } = formatDisplayedTime(duration);
  const percentage = Math.round((currentTime / duration) * 100);

  const { minutes: elapsedMinutes, seconds: elapsedSeconds } =
    formatDisplayedTime(currentTime);

  return (
    <div className="player">
      <div className="time-bar">
        <span>
          {elapsedMinutes || "00"}:{elapsedSeconds || "00"}
        </span>
        <div className="track">
          <input
            value={currentTime}
            type="range"
            onChange={e => onDrag(e.target.value)}
            max={duration || 0}
          />
          <div
            className="track-progress"
            style={{ transform: `translateX(${percentage}%)` }}
          ></div>
        </div>
        {seconds && (
          <span>
            {minutes}:{seconds}
          </span>
        )}
        {!seconds && (
          <span>
            <Spinner />
          </span>
        )}
      </div>

      <div className="controls">
        <button onClick={() => onChangeSong("prev")}>
          <IconSkipStart />
        </button>
        <button onClick={playSongHandler}>
          {isPlaying ? <IconPause /> : <IconPlay />}
        </button>
        <button onClick={() => onChangeSong("next")}>
          <IconSkipEnd />
        </button>
        <button>
          <IconVolume />
        </button>
      </div>
    </div>
  );
};

export default Player;
