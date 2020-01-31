import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Camera from '../Assets/Images/video-camera.png'
import Cinema from '../Assets/Images/cinema.png'

const useStyles = makeStyles({
    card: {
      width: "90%",
      margin: "30px auto",
      boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      border: '2px solid black',
      backgroundColor: 'black',
      color: "white",
      borderRadius: '4px',
      display: 'flex',
      flexDirection: 'column'
    },
    play: {
        width: "25px",
        height: '25px',
        marginTop: '20px'
    },
    introDiv: {
        display: 'flex',
        margin: 'auto',
        width: '100%',
        justifyContent: 'space-evenly'

    }

});

const Intro = () => {
    const classes = useStyles();
    return (
        <div className = {classes.card}>
            <div className={classes.introDiv}>
                <img className={classes.play} src={Camera} alt='Camera' />
                <h2>Stream Finder!</h2>
                <img className={classes.play} src={Cinema} alt='Cinema' />
            </div>
            <p>Search for a <span style={{"fontWeight": "bold"}}>tv show</span> or <span style={{"fontWeight": "bold"}}>movie</span> above to find what platform they are being streamed on!</p>
        </div>
    )
}

export default Intro