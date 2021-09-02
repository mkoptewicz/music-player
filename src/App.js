import Nav from "./components/Nav";
import Player from "./components/Player";
import SongInfo from "./components/SongInfo";
import SongList from "./components/SongList";

import "./App.css";
import { useState } from "react";

function App() {
  const [songListActive, setSongListActive] = useState(false);
  return (
    <div className={`App ${songListActive ? "song-list-active" : ""}`}>
      <Nav
        onToggleSongList={setSongListActive}
      />
      <SongInfo />
      <Player />
      <SongList songListActive={songListActive} />
      <audio></audio>
    </div>
  );
}

export default App;
