import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementBreedLikesCounter } from "../../actions";
import './dog-box.css'

const DogBox = ({dog}) => {

    const [likes, setLikes] = useState(0)
    const dispatch = useDispatch();

    const handleLikeClick = () => {
        setLikes(likes + 1);
        dispatch(incrementBreedLikesCounter(dog.breed))
    }

    return (
        <div className="dog-box" onClick={handleLikeClick}>
            <div>{dog.breed}</div>
            <div ><span>likes:</span><span>{likes}</span></div>
        </div>
    )
}

export default DogBox;