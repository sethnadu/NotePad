import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Appbar from './Appbar'
import ResultCard from './ResultCard'

// Material UI Imports
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Main(){
    const phoneSize = useMediaQuery("(max-width:500px)");
    const [result, setResult] = useState('')
    const [data, setData] = useState([])
    // axios.defaults.headers.common['X-RapidAPI-Host'] = "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com";
    // axios.defaults.headers.common['X-RapidAPI-Key'] = "56439e8059msh74d7e363beea6aap1a1903jsna25a29b9dce8";
    useEffect(() => {
        {result != "" ? 
        (axios
            .get(`https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${result}`, 
                {headers: {
                "X-RapidAPI-Host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
                "X-RapidAPI-Key": "56439e8059msh74d7e363beea6aap1a1903jsna25a29b9dce8"
                    }
                })
            .then(response => {
                setData(response.data.results)
                console.log(data)
                console.log("result in then", result)
            })
            .catch(error => {
                console.log('Error: ', error)
            })) 
            : console.log("search can't be empty")}
      }, [result])

    return (
        <>
        <Appbar setResult = {setResult} result = {result}/>
        {data ? data.map(result => {
            return <ResultCard key={result.name} result={result} />
        }) : <h2>Search above!</h2>}
        </>
    )
}

export default Main;