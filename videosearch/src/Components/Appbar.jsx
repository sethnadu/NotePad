import React, {useState} from 'react'
import playIcon from '../Assets/Images/play.png'
// Material UI Imports
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(theme => ({
    grow: {
      flexGrow: 1,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      color: "black"
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    play: {
        width: "25px",
        height: '25px',
        marginRight: '10px'
    },
    topTitle: {
        display: 'flex',
        justifyContent: "space-evenly",
        alignItems: 'center'
    }
  }));

function Appbar({setResult, result}){
    const classes = useStyles();
    const [value, setValues] = useState()
    const handleChange = event => {
        setValues(event.target.value)
        // console.log(result)
    }

    const handleSubmit = event => {
        event.preventDefault()
        setResult(value)
        console.log(result)
    }
 
    return (
        <div className={classes.grow}>
        <AppBar position="static" style={{'backgroundColor': "gray"}}>
            <Toolbar>
            <img className = {classes.play} src={playIcon} />
            <Typography className={classes.title} variant="h6" noWrap>
                Stream Finder
            </Typography>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                <SearchIcon />
                </div>
                <form onSubmit={handleSubmit}>
                    <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    type="text"
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </form>    
            </div>
            <div className={classes.grow} />
            </Toolbar>
        </AppBar>
        </div>
  );
}

export default Appbar;