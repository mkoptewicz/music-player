import Nav from "./components/Nav";
import Player from "./components/Player";
import SongInfo from "./components/SongInfo";
import SongList from "./components/SongList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <SongInfo />
      <Player />
      {/* <SongList /> */}
      <audio></audio>
    </div>
  );
}

export default App;
