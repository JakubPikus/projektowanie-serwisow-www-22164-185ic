import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import calculate from "../logic/calculate";
import "./App.css";










export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,


  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {




    /* . Aplikacja została wzbogacona o elementy @material-ui, w kalkulatorze zostało dodane liczenie
    potęgi dowolnego wykładnika, w tym też ujemnego
    
    Zostaje zwrócony Grid, który wywołuje ekran liczenia oraz buttony
    
    Display na starcie przyjmuje wartość 0, "next" wyświetla wybierane przez nas liczby, a "total" wynik
    
    Button po aktywowaniu wyciąga jego "name" jako cyfrę, bądź równanie do wykonania, które opisane są w operate.js*/ 

    return (

    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh', minWidth:'200vh' }}>
      

      
      
      <Card>
        <CardContent style={{backgroundColor: "#A9C3AC"}}>
          <Display value={this.state.next || this.state.total || "0"} />  
          <br></br>
          <ButtonPanel clickHandler={this.handleClick} />
        </CardContent>
      </Card>
      
    </Grid>
    );
  }
}
