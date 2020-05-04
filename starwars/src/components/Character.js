// Write your Character component here
import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import axios from "axios";


const Characters = () => {




const [character, setCharacter] = useState([]);
useEffect(() => {
    axios.get("https://swapi.py4e.com/api/people/")
    .then(response => {
        console.log(response);
    })
    .catch(error => console.log("error", error));
}, []);

}

export default Characters;