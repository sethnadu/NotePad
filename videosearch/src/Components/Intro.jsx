import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
      width: "90%",
      margin: "30px auto",
      boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      border: '2px solid black'
    },

});

const Intro = () => {
    const classes = useStyles();
    return (
        <div className = {classes.card}>
            <h2>Stream Finder!</h2>
            <p>Search for tv show and movies above to find what platform they are being streamed on!</p>
        </div>
    )
}

export default Intro