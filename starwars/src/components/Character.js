// Write your Character component here
import React from "react";

//import App from "./src/App";


const Characters = props => {

    return (
        <div className="App">
          <h1 className="Header">Characters</h1>
          
            {props.map(person =>{
    
              return(
                <div>
                 <h3 name={person.name} />
                 <h3 gender={person.gender} />
                 <h3 home={person.homeworld} />
                 <img url={person.url} />
                </div>
              )
            })}
    
    
        
          
          
        </div>
    )

}






export default Characters;