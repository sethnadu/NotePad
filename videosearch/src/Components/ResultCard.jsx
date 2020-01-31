import React, { useEffect } from 'react';
import {Link, Route} from 'react-router-dom'
import SinglePage from './SinglePage'


// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
      margin: "20px",
      padding: '20px',
      border: "4px solid black"
    },
    media: {
      height: 140,
    },
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
    sources: {
        margin: "auto 10px",
        display: "flex",
        justifyContent: "center",
        flexDirection: 'column',
        width: "100%"
    },
    listItems: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-evenly",
        margin: 'auto'
    },
    listItem: {
        width: '100%',
        display: 'flex',
        justifyContent: "space-evenly",
    }
    }));




const ResultCard = ({result, setSingleResult, singleResult, data}) => {
    const classes = useStyles();
    const dense = false;
    const array = []
    setSingleResult(data)
  return (
    <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={`${result.picture}`}
          title="Search result"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {result.name}
          </Typography>
          <Link style={{"textDecoration": "none"}} to={`/${result.name}`}><Button variant="contained">More Info</Button></Link>
          <Grid className = {classes.sources}>
          <Typography variant="h6" className={classes.title}>
            Streaming Platforms Below:
          </Typography>
          <div className={classes.demo}>
            <List dense={dense} className = {classes.listItems}>
              {result.locations ? result.locations.map(source => {
                return (
                <ListItem key={source.display_name} className={classes.listItem}>
                    <img src={source.icon} />
                    <a style={{"textDecoration": "none"}} href={`${source.url}`}><Button variant="contained">Visit</Button></a>
                </ListItem>)
              }): <h2>No Platforms available</h2>}
            </List>
          </div>
        </Grid>
        </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
  );
}

export default ResultCard;