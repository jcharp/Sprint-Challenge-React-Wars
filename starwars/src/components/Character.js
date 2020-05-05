// Write your Character component here
import React from "react";

import App from '../App';

/*
const Characters = props => {

    return (<Characters characters={character}/> 
    )

}






export default Characters;
*/

const Characters = props => {
    return (
        <div className="App">
                <div>
                 <h3>Name: {props.name}</h3>
                 <h3>Gender: {props.gender} </h3>
                 <h3>Home: {props.homeworld}</h3>
                 <img url={props.img_url} />
                </div>             
        </div>
    )
}
export default Characters;