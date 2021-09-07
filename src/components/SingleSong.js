import "./SingleSong.css";

const SingleSong = ({ song, onSelect, isCurrent }) => {
  const songClasses = `song ${isCurrent ? "song--current" : ""}`;
 
  return (
    <li>
      <button onClick={() => onSelect(song)} className={songClasses}>
        <img src={song.coverUrl} alt="" />
        <div className="song-details">
          <p className="title">{song.title}</p>
          <p className="artist">{song.artist}</p>
        </div>
      </button>
    </li>
  );
};

export default SingleSong;
