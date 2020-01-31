import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        width: "80%",
        minWidth: '345px',
        maxWidth: '550px',
        margin: "20px auto",
        padding: '20px',
        border: "4px solid black",
        boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        backgroundColor: 'white',
        borderRadius: "4px"
    },
    image: {
        width: '100%',
        maxWidth: "500px"
    },
    underImage: {
        display: 'flex',
        margin: 'auto',
        width: '100%',
        justifyContent: 'space-evenly'
    },
    sourceIcons: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
    }
    
    });
const SinglePage = (props) => {
    const [imdb, setImdb] = useState()
    const [media, setMedia] = useState('')
    const classes = useStyles();
    console.log("props", props)
    console.log("props", props.singleResult)

    useEffect(() => {
        {props.singleResult !== [] && props.singleResult.forEach(r => {
        if (`/${r.name}` == props.location.pathname){
            setMedia(r)
        }
    }) 
    }
    }, [])
    
    useEffect(() => {
        {media !== '' ?
        (
           axios
            .get(`http://www.omdbapi.com/?t=${media.name}&plot=full&apikey=8582b8da`)
            .then(response => {
                setImdb(response.data)
            })
            .catch(error => {
                console.log("Error: ", error)
            }) 
        ) : console.log()}  
    }, [media.name]) 
    console.log(imdb)
    return (
        <>
        {props.singleResult !== '' && imdb ?
        (
            <div className = {classes.card}>
                <div>
                    <h2>{media.name}</h2>
                    <img className={classes.image} src={media.picture} />
                    <div className = {classes.underImage}>
                        <p>{imdb.Year}</p>
                        <p>{imdb.imdbRating}/10</p>
                        <p>{imdb.totalSeasons} Seasons</p>
                        <p>{imdb.Rated}</p>
                    </div>
                    <p>{imdb.Plot}</p>
                    <div>
                        <p style={{"fontStyle": "italic", color: 'gray'}}>{imdb.Genre}</p>
                        <p style={{"fontStyle": "italic", color: 'gray'}}><span style={{"fontStyle": "bold"}}>Awards: </span>{imdb.Awards}</p>
                    </div>
                    <div className = {classes.sourceIcons}>
                    {media.locations ? media.locations.map(source => {
                        return <a style={{'textDecoration': 'none', padding: '10px'}} href={source.url} ><img src={source.icon} alt="Stream Link"/></a>
                    }): null}
                    </div>
                </div>
                <div>

                </div>
             
            </div>
         ) : (
            <h2>Search above for results!</h2>
        )} 
        
        </>
    )
}

export default SinglePage