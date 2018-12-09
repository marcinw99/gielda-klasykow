import React, { Component } from "react";

import { spacesInNumbers } from "../../src/helpers";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    minWidth: 300,
    margin: theme.spacing.unit * 1
  },
  media: {
    height: 280
  },
  listContainer: {
    paddingLeft: theme.spacing.unit
  },
  price: {
    textAlign: "right"
  }
});

class ResultCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={this.props.avatar} />
          <CardContent>
            <Typography variant="h6">
              {this.props.brand} {this.props.model} {this.props.version}
            </Typography>
            <ul className={classes.listContainer}>
              <li>
                <Typography>
                  {this.props.fuelType},{" "}
                  {this.props.engineAndTransmission.engineSize} cm<sup>3</sup>,{" "}
                  {this.props.engineAndTransmission.power} km,{" "}
                  {this.props.engineAndTransmission.torque} nm
                </Typography>
              </li>
              <li>
                <Typography>
                  {this.props.productionYear} rok produkcji
                </Typography>
              </li>
              <li>
                <Typography>
                  {spacesInNumbers(this.props.mileage)} kilometrów przebiegu
                </Typography>
              </li>
            </ul>
            <Typography
              className={classes.price}
              variant="h6"
              color="secondary"
            >
              {spacesInNumbers(this.props.price)} PLN
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default withStyles(styles)(ResultCard);
