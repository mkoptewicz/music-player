import "./Nav.css";

const Nav = ({ onToggleSongList }) => {
  const toggleSongListHandler = () => {
    onToggleSongList(prevSongListIsActive => !prevSongListIsActive);
  };
  return (
    <nav>
      <h1>Songify</h1>
      <button onClick={toggleSongListHandler}>Song list</button>
    </nav>
  );
};

export default Nav;
