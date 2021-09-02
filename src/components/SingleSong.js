const SingleSong = ({ song }) => {
  return (
    <li>
      <div className="song">
        <img src={song.coverUrl} alt="" />
        <div className="song-info">
          <p className="title">{song.title}</p>
          <p className="artist">{song.artist}</p>
        </div>
      </div>
    </li>
  );
};

export default SingleSong;
