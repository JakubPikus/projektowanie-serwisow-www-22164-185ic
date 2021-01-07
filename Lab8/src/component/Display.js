import React from "react";
import PropTypes from "prop-types";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import "./Display.css";

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <Card className="component-display" boxShadow={3}>
        <CardContent>
        <div>{this.props.value}</div>
        </CardContent>
      </Card>
    );
  }
}
