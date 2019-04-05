import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";
import { CheckCircleOutline } from "@material-ui/icons";

const styles = theme => ({
  GridItem: {
    padding: theme.spacing.unit * 0.5
  },
  Column: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit
  },
  ColumnHeader: {
    fontWeight: "400 !important",
    fontSize: 16
  },
  Accessory: {
    fontSize: 13,
    marginTop: theme.spacing.unit
  },
  AccessoryIcon: {
    fontSize: 15
  }
});

const GridItem = withStyles(styles)(({ classes, ...other }) => (
  <Grid item className={classes.GridItem} {...other} />
));

const ColumnHeader = withStyles(styles)(({ classes, ...other }) => (
  <Typography variant="h6" className={classes.ColumnHeader} {...other} />
));

const Accessory = withStyles(styles)(({ classes, item }) => (
  <Typography className={classes.Accessory}>
    <CheckCircleOutline color="secondary" className={classes.AccessoryIcon} />{" "}
    {item}
  </Typography>
));

const Column = withStyles(styles)(({ classes, data }) => (
  <div className={classes.Column}>
    {data.map(item => (
      <Accessory key={item} item={item} />
    ))}
  </div>
));

const AdditionalAccessories = props => (
  <Grid container>
    {props.safety && props.safety.length > 0 ? (
      <GridItem>
        <ColumnHeader>Bezpieczeństwo</ColumnHeader>
        <Column data={props.safety} />
      </GridItem>
    ) : null}

    {props.appereance && props.appereance.length > 0 ? (
      <GridItem>
        <ColumnHeader>Wygląd</ColumnHeader>
        <Column data={props.appereance} />
      </GridItem>
    ) : null}

    {props.comfort_Driver && props.comfort_Driver.length > 0 ? (
      <GridItem>
        <ColumnHeader>Komfort kierowcy</ColumnHeader>
        <Column data={props.comfort_Driver} />
      </GridItem>
    ) : null}

    {props.comfort_Passenger && props.comfort_Passenger.length > 0 ? (
      <GridItem>
        <ColumnHeader>Komfort pasażerów</ColumnHeader>
        <Column data={props.comfort_Passenger} />
      </GridItem>
    ) : null}
  </Grid>
);

export default AdditionalAccessories;
