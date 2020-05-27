import React from 'react';
import './App.css';
import Customerlist from './components/Customerlist'
import Traininglist from './components/Traininglist'
import Traininglistwith from './components/Traininglistwith'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [page, setPage] = React.useState();
  const changePage = (event) => {
    if (event.target.value === 1){
     setPage(<Customerlist/>); 
    } else if (event.target.value === 2){
      setPage(<Traininglist/>);
    }
    else if (event.target.value === 3){
      setPage(<Traininglistwith/>)
    }
    
    
    handleClose();
  }
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem value='1' onClick={changePage}>Customers</MenuItem>
              <MenuItem value='2' onClick={changePage}>Trainings</MenuItem>
              <MenuItem value='3' onClick={changePage}>Trainings with customers</MenuItem>
              <MenuItem value='4' onClick={changePage}>Calendar</MenuItem>
              <MenuItem value='' onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Personal Trainer
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {page}
      <Traininglistwith/>
    </div>
    
  );
}

export default App;
//<Customerlist/>