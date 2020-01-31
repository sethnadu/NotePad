import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Appbar from './Appbar'
import ResultCard from './ResultCard'
import Intro from './Intro'
import TheaterGif from '../Assets/Images/theater.gif'
import {Link, Route} from 'react-router-dom'
import SinglePage from './SinglePage'

// Material UI Imports
import useMediaQuery from "@material-ui/core/useMediaQuery";


function Main({ data, setSingleResult, singleResult}){

    return (
        <>
        <div style={{"margin": "20px", "display": "flex", 'flexFlow': 'row wrap', "justifyContent": "center"}}>
            {data != '' ? data.map(result => {
                return <ResultCard singleResult={singleResult} setSingleResult = {setSingleResult} key={result.name} result={result} data={data}/>
            }) : (
            <div style={{'display': 'flex', 'flexDirection': 'column'}}>
            <img style={{
                "margin": '20px auto', 
                'width': '100%', 
                'border': '2px solid black',
                'boxShadow': "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)", 
                'borderRadius': '4px'}} 
                src={TheaterGif} alt="old movie theater popcorn dancing" />
            </div>
            )}
        </div>
        </>
    )
}

export default Main;