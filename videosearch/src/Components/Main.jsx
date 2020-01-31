import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Appbar from './Appbar'
import ResultCard from './ResultCard'
import Intro from './Intro'
import {Link, Route} from 'react-router-dom'
import SinglePage from './SinglePage'

// Material UI Imports
import useMediaQuery from "@material-ui/core/useMediaQuery";


function Main({ data, setSingleResult}){

    return (
        <>
        <div style={{"margin": "20px", "display": "flex", 'flexFlow': 'row wrap', "justifyContent": "center"}}>
            {data ? data.map(result => {
                return <ResultCard setSingleResult = {setSingleResult} key={result.name} result={result}/>
            }) : <h2 style={{"marginTop": "150px"}}>Search above!</h2>}
        </div>
        </>
    )
}

export default Main;