import React, {useState} from 'react';
import Star from './Star';

const StarRating = () => {
    const [albumRating, setAlbumRating] = useState(0);
    const renderStars = () => {
        let stars = [];
        const maxRating = 5;
            for (let i = 0; i < maxRating; i ++) {
                stars.push(
            <Star
            isSelected={albumRating > i}
                setRating={() => handleSetRating(i+1)}
                key={i}
            />
        )
    }
    return stars;
}
    
const handleSetRating = (rating) => {
    setAlbumRating(rating);
}

    return (
        <ul className='album--stars'>
            {/* Render the Star components */}
            {renderStars()}
        </ul>
    );
}

export default StarRating;