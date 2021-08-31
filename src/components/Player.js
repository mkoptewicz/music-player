import IconPause from "./Icons/IconPause";
import IconPlay from "./Icons/IconPlay";
import IconSkipStart from "./Icons/IconSkipStart";
import IconSkipEnd from "./Icons/IconSkipEnd";
import IconVolume from "./Icons/IconVolume";
const Player = () => {
  return (
    <div className="player">
      <div className="time-bar">
        <span>0:00</span>
        <div className="track">
          <input type="range" />
        </div>
        <div className="track-progess"></div>
      </div>
      <span>3:00</span>
      <div className="controls">
        <IconSkipStart />
        <IconPause />
        <IconPlay />
        <IconSkipEnd />
        <IconVolume />
      </div>
    </div>
  );
};

export default Player;
