import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setBreedsList, setCounter } from "../../actions";
import { getAllBreeds } from "../../api";
import DogBox from "../dog-box/dog-box";
import './gallery.css'

const Gallery = () => {

    const [dogsArray, setDogsArray] = useState([]);
    const breedsList = useSelector(state => state.dogs.breedsList)
    const dispatch = useDispatch();
    const counter = [];
    
    const fillBreedCounter = (breed) => {
        if(counter[breed]) {
            counter[breed].images ++;
          }
          else {
            counter[breed] = {
              images: 1,
              likes: 0
            }
          }
    }

    const fillDogsArray = () => {
        const keys = Object.keys(breedsList);
        const arr = [];
        for (let i = 0; i < 100; i++) {
            const randomIndex = Math.floor(Math.random() * keys.length);
            const breed = keys[randomIndex];
            arr.push({ breed , likes: 0 })

            fillBreedCounter(breed);

        }
        setDogsArray(arr);
        dispatch(setCounter(counter));
    }

    useEffect(() => {
        if (!breedsList) {
            getAllBreeds().then(data => {
                dispatch(setBreedsList(data.message))
            })}
    }, [])

    useEffect(() => { 
        // we could use the breedsList from the local 'data' variable of the api response, 
        // but if the application grows - the store can be updated from more components , so that i took the breedsList from the store
        if (breedsList) {
            fillDogsArray();
        }
    }, [breedsList])

    return (
    <div className="container">{ dogsArray.map((dog, i) => (
    <div key={"dog-box" + i} className="div-cell"><DogBox dog={dog}></DogBox> </div>
    ))}</div>
    )
}

export default Gallery;