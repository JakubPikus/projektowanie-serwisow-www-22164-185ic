import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Avatar from 'react-avatar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';


import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';
import EmailIcon from '@material-ui/icons/Email';






function App() {
  return (
    <Router>
      <div className="navbar-menu">
        <nav className="navbar navbar-dark bg-primary static-top">
          <div className="container">

          <Grid container spacing={3}>

            

            <Grid item xs={12} container justify = "center">
              <Typography variant="h4" component="h1" color="inherit">
              Jakub Pikus - 22164 - 185IC_B1
              </Typography>
            </Grid>

           

            <Grid item xs={4} container justify = "center">
            <Button variant="contained"><Link to="/">Strona główna</Link></Button>
            </Grid>

            <Grid item xs={4} container justify = "center">
            <Button variant="contained"><Link to="/PremierLeague">Tabela Premier League</Link></Button>
            </Grid>

            <Grid item xs={4} container justify = "center">
            <Button variant="contained"><Link to="/ankieta">Ankieta</Link></Button>
            </Grid>

          </Grid>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact={true}>
            <Start />
          </Route>

          <Route path="/PremierLeague">
          <PremierLeague />
          </Route>

          <Route path="/ankieta">
          <Ankieta/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Start() {

  const useStyles = makeStyles((theme) => ({
    strony: {
      paddingTop: '50px',
      maxWidth: 302,
    },
    dane:{
      marginTop: '20px'
    },
    mail:{
      maxWidth: 50,
      maxHeight: 30,

    },
    
  }));
  const classes = useStyles();


  return (
    <div>
      <Grid container spacing={3}>

      <Grid item xs={5}></Grid>

      <Grid item xs={1} container justify = "center">
        <Avatar githubHandle="JakubPikus" size={150} round="80px" className={classes.dane}  />
        <ListItem button component="a" href="mailto:kub943@gmail.com" className={classes.mail}> <EmailIcon/></ListItem>
      </Grid>


      <Grid item xs={6}>
      <List component="nav" aria-labelledby="nested-list-subheader" className={classes.strony}>
        <ListItem button component="a" href="https://github.com/JakubPikus/projektowanie-serwisow-www-22164-185ic">
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText primary="Projektowanie serwisów www" />
        </ListItem>



        <ListItem button component="a" href="https://github.com/JakubPikus/aplikacje-internetowe-22164-185ic">
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText primary="Aplikacje internetowe" />
        </ListItem>

        <ListItem button component="a" href="http://www.programowanie22164.ugu.pl/" >
          <ListItemIcon>
            <HttpIcon />
          </ListItemIcon>
          <ListItemText primary="Projektowanie serwisów www" />
        </ListItem>


        <ListItem button component="a" href="http://kubako1428.pythonanywhere.com/">
          <ListItemIcon>
            <HttpIcon />
          </ListItemIcon>
          <ListItemText primary="Aplikacje internetowe" />
        </ListItem>

      </List>
      </Grid>
      </Grid>
    </div>
  )
}


function createData(klub, logo, razemMeczy, wygrane, remisy, przegrane, bramkiZyskane, bramkiStracone, razemBramek, punkty) {
  return {klub, logo, razemMeczy, wygrane, remisy, przegrane, bramkiZyskane, bramkiStracone, razemBramek, punkty};
}

const rows = [
  createData('Liverpool', 'https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_48x48.png', 14, 9, 4, 1, 36, 19, 17, 31),
  createData('Leicester', 'https://ssl.gstatic.com/onebox/media/sports/logos/UDYY4FSlty6fXFBzvFfcyw_48x48.png', 14, 9, 0, 5, 26, 17, 9, 27),
  createData('Man Utd', 'https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png', 13, 8, 2, 3, 28, 21, 7, 26),
  createData('Everton', 'https://ssl.gstatic.com/onebox/media/sports/logos/C3J47ea36cMBc4XPbp9aaA_48x48.png', 14, 8, 2, 4, 25, 19, 6, 26),
  createData('Chelsea', 'https://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_48x48.png', 14, 7, 4, 3, 29, 14, 15, 25),
  createData('Tottenham', 'https://ssl.gstatic.com/onebox/media/sports/logos/k3Q_mKE98Dnohrcea0JFgQ_48x48.png', 14, 7, 4, 3, 25, 14, 11, 25),
  createData('Southampton', 'https://ssl.gstatic.com/onebox/media/sports/logos/y1V4sm2SEBiWUPRIYl5rfg_48x48.png', 14, 7, 3, 4, 25, 19, 6, 24),
  createData('Man City', 'https://ssl.gstatic.com/onebox/media/sports/logos/z44l-a0W1v5FmgPnemV6Xw_48x48.png', 13, 6, 5, 2, 19, 12, 7, 23),
  createData('Aston Villa', 'https://ssl.gstatic.com/onebox/media/sports/logos/uyNNelfnFvCEnsLrUL-j2Q_48x48.png', 12, 7, 1, 4, 24, 13, 11, 22),
  createData('West Ham', 'https://ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_48x48.png', 14, 6, 3, 5, 21, 19, 2, 21),
  
];




function PremierLeague() {

  const useStyles = makeStyles({
    table: {
      marginTop: '60px',
      width: '800px',
    },
    logo:{
      maxWidth: 25,
      maxHeight: 25,
      
    },
    
  });
  const classes = useStyles();


  return (
    <div>
      <Grid container spacing={3}>

      <Grid item xs={12} container justify = "center">
      <TableContainer component={Paper} className={classes.table}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Klub</TableCell>
            <TableCell align="right">RM</TableCell>
            <TableCell align="right">W</TableCell>
            <TableCell align="right">R</TableCell>
            <TableCell align="right">P</TableCell>
            <TableCell align="right">BZ</TableCell>
            <TableCell align="right">BS</TableCell>
            <TableCell align="right">RB</TableCell>
            <TableCell align="right">Pkt</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.klub}>
              <TableCell component="th" scope="row">
               <Avatar src={row.logo} className={classes.logo} />
                {row.klub} 
              </TableCell>
              <TableCell align="right">{row.razemMeczy}</TableCell>
              <TableCell align="right">{row.wygrane}</TableCell>
              <TableCell align="right">{row.remisy}</TableCell>
              <TableCell align="right">{row.przegrane}</TableCell>
              <TableCell align="right">{row.bramkiZyskane}</TableCell>
              <TableCell align="right">{row.bramkiStracone}</TableCell>
              <TableCell align="right">{row.razemBramek}</TableCell>
              <TableCell align="right">{row.punkty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    </Grid>


    </div>

  )
}

function Ankieta() {
  const useStyles = makeStyles((theme) => ({
    
    appbar: {
      alignItems: 'center',
    },
    tresc: {
      paddingTop: '30px',
    },
    odstep: {
      marginLeft: '10px',

    },
  }));
  const classes = useStyles();


  return (
    <div>
      <AppBar position="static" color='secondary' className={classes.appbar}>
        <Toolbar variant="regular">
          <Typography variant="h4" color="inherit"  >
            Wypełnij ankietę
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xs" className={classes.tresc}>

      <Grid container spacing={2}>

      <Grid item xs={6}>

      <Typography variant="overline" color="inherit" >
            Imię i nazwisko
      </Typography>
      </Grid>

      <Grid item xs={6}>
      <Input error inputProps={{ 'aria-label': 'description' }}  />

      </Grid>



      <Grid item xs={6}>
      <Typography variant="overline" color="inherit" >
            Płeć
      </Typography>
      </Grid>

      <Grid item xs={6}>
      <FormControl error>
        <Select>
          <MenuItem value={10}>Kobieta</MenuItem>
          <MenuItem value={20}>Mężczyzna</MenuItem>
        </Select>
      </FormControl>

      </Grid>

      <Grid item xs={6}>
      <Typography variant="overline" color="inherit" >
            Posiadasz dzieci?
      </Typography>
      </Grid>

      <Grid item xs={6}>
      <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
      </Grid>

      <Grid item xs={6}>
      <Typography variant="overline" color="inherit" >
            Data urodzenia
      </Typography>
      </Grid>

      <Grid item xs={6}>
      <TextField id="date" type="date" defaultValue="1998-10-09" error/>

      </Grid>

      <Grid item xs={12} container justify = "center">
      <Button variant="outlined" color="secondary">
        Wyślij
      </Button>
      </Grid>


      </Grid>
      </Container>



      
      
    </div>

  )
}

export default App;