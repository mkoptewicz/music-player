const SingleSong = ({ song, onSelect }) => {
  return (
    <li>
      <button onClick={() => onSelect(song)} className="song">
        <img src={song.coverUrl} alt="" />
        <div className="song-info">
          <p className="title">{song.title}</p>
          <p className="artist">{song.artist}</p>
        </div>
      </button>
    </li>
  );
};

export default SingleSong;
