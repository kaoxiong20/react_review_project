import React from 'react';
// import styled from 'styled-components';
// import the albums data
import albums from '../album-data.js';

//import components
import AlbumCard from './AlbumCard.js';

function AlbumList() {
  return (
    <>
      {albums.map(album =>
        <AlbumCard 
          {...album}
          key={album.id}
        />
      )}
    </>
  );
}

export default AlbumList;
