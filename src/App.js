import React from 'react';
// import AlbumCard from './components/AlbumCard';

//import components
import AlbumList from './components/AlbumList';
// import Counter from './components/Counter';
import { useState } from 'react';

function App() {
  const [albumRating, setAlbumRating] = useState(0);
  return (
    <div className="App">
      <div>{albumRating}</div>
      <button
        onClick={() => {
          setAlbumRating(albumRating + 1);
        }}
      >
        {" "}
        Increase Count
      </button>
    <AlbumList/>
    {/* <Counter/> */}
    </div>
  );
}

export default App;