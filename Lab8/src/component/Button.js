import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
import Button from '@material-ui/core/Button';


import Box from '@material-ui/core/Box';


export default class w extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    

    return (
      
    
    
    <Box component="span" m={1}>
     

          <Button onClick={this.handleClick}>{this.props.name}</Button>
     
  
    </Box>
      

    );
  }
}




