import React, {useState, useEffect} from 'react';
import axios from 'axios'

const SinglePage = ({singleResult}) => {
    const [imdb, setImdb] = useState([])

    useEffect(() => {
        {singleResult !== "" ?
        (
           axios
            .get(`http://www.omdbapi.com/?t=${singleResult.name}&apikey=8582b8da`)
            .then(response => {
                setImdb(response.data)
                console.log(imdb)
            })
            .catch(error => {
                console.log("Error: ", error)
            }) 
        ) : console.log()}  
    }, [singleResult.name]) 

    return (
        <>
        {singleResult !== '' ?
        (
            <div>
              <h2>{singleResult.name}</h2>  
            </div>
        ) : (
            <h2>Search above for results!</h2>
        )}
        
        </>
    )
}

export default SinglePage