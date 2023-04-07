import React from 'react';
import styled from 'styled-components';

//import components
import StarRating from "./StarRating";

// testing
const AlbumMessage = (props) => {
  return (
      <>
      <Message>{props.MessageContent}</Message>
      </>
  );
}
// 

const AlbumCard = ({name, artist, genre, img}) => {
  return (
    <StyledDiv>
      <img src={img} alt={name}/>
      <AlbumName>{name}</AlbumName>
      <h3>{artist}</h3>
      <StyledGenre>{genre}</StyledGenre>
      <StarRating/>
      {/* delete AlbumMessage if not used correctly */}
      <AlbumMessage/> 
    </StyledDiv>
  );
}

export default AlbumCard;

const StyledDiv = styled.div`
  box-shadow: 0 8px 10px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 400px;
  text-align: center;
  margin: 40px auto;
  padding: 50px 20px 50px 20px;
  background-color: #EDE7DC;
`;

const AlbumName = styled.h2`
  color: brown;
`;

const StyledGenre = styled.p`
  color: brown;
  font-size: 15px;
`;

const Message = styled.h3`
    text-align: center;
    background-color: #B47A7A;
`