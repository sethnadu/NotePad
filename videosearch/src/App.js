import React, {useState, useEffect} from 'react';
import Main from './Components/Main'
import './App.css';
import axios from 'axios'
import Appbar from './Components/Appbar'
import Intro from './Components/Intro'
import {Link, Route} from 'react-router-dom'
import SinglePage from './Components/SinglePage'

// Material UI Imports
import useMediaQuery from "@material-ui/core/useMediaQuery";

function App() {

  const phoneSize = useMediaQuery("(max-width:500px)");
  const [result, setResult] = useState('')
  const [data, setData] = useState([])
  const [singleResult, setSingleResult] = useState([])



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
            : console.log()}
      }, [result])
    

  return (
    <div className="App">
    <Route path ='/' render={routeProps => (
      <Appbar {...routeProps} setResult = {setResult} result = {result}/>
    )} />
    <Intro phoneSize ={phoneSize}/>
    <Route exact path ='/' render={routeProps => (
      <Main {...routeProps} singleResult ={singleResult} setSingleResult = {setSingleResult}  phoneSize = {phoneSize} result = {setResult} setData = {setData} data = {data}/>
    )} />
    <Route path ='/:id' render={routeProps => (
      <SinglePage {...routeProps} result = {result} singleResult = {singleResult}/>
    )} /> 
  </div>
  );
}

export default App;
