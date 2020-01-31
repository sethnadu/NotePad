import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Appbar from './Appbar'

// Material UI Imports
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Main(){
    const phoneSize = useMediaQuery("(max-width:500px)");
    const [result, setResult] = useState()
    const [data, setData] = useState()

    // useEffect(() => {
    //     axios
    //     .get(`https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${result}`, 
    //         {headers: {
    //         "X-RapidAPI-Host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
    //         "X-RapidAPI-Key": "56439e8059msh74d7e363beea6aap1a1903jsna25a29b9dce8"
    //             }
    //         }
    //     .then(response => {
    //         console.log(response)
    //     })
    //     .catch(error => {
    //         console.log('Error: ', error)
    //     })
    //     )
    //   })
    console.log(result)
    return (
        <>
        <Appbar setResult = {setResult} result = {result}/>
        </>
    )
}

export default Main;