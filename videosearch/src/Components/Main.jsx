import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Appbar from './Appbar'
import ResultCard from './ResultCard'
import Intro from './Intro'

// Material UI Imports
import useMediaQuery from "@material-ui/core/useMediaQuery";


function Main(){
    const phoneSize = useMediaQuery("(max-width:500px)");
    const [result, setResult] = useState('')
    const [data, setData] = useState([])
    const [imdb, setImdb] = useState([])
    const [name, setName] = useState([])

    useEffect(() => {
        {result !== "" ? 
        (axios
            .get(`https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${result}&country=us`, 
                {headers: {
                "X-RapidAPI-Host": `utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com`,
                "X-RapidAPI-Key": `56439e8059msh74d7e363beea6aap1a1903jsna25a29b9dce8`
                    }
                })
            .then(response => {
                setData(response.data.results)
                // console.log(data)
            })
            .catch(error => {
                console.log('Error: ', error)
            })) 
            : console.log("search can't be empty")}
      }, [result])
    
    // useEffect(() => {
    //        axios
    //         .get(`http://www.omdbapi.com/?t=${name}&apikey=8582b8da`)
    //         .then(response => {
    //             setImdb([...imdb, response.data])
    //             nameArray.append([...nameArray, name])
    //         })
    //         .catch(error => {
    //             console.log("Error: ", error)
    //         })
    // }, [name]) 
        
        

    return (
        <>
        <Appbar setResult = {setResult} result = {result}/>
        <Intro phoneSize ={phoneSize}/>
        <div style={{"margin": "20px", "display": "flex", 'flexFlow': 'row wrap', "justifyContent": "center"}}>
            {data ? data.map(result => {
                return <ResultCard key={result.name} result={result} imdb={imdb} setName={setName} name ={name}/>
            }) : <h2 style={{"marginTop": "150px"}}>Search above!</h2>}
        </div>
        </>
    )
}

export default Main;