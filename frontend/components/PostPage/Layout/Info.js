import React from "react";
import {
  Typography,
  withStyles,
  Grid,
  Chip,
  Table,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";

import AdditionalAccessories from "./AdditionalAccessories";
import displayedText from "../../../resources/displayedText";
import {
  spacesInNumbers,
  getDataForInfoTables,
  getDataForBoolValues,
  equalizeColumns
} from "../helpers";
import { infoTablesSetup, boolValuesConfig } from "../config";

const styles = theme => ({
  sectionHeader: {
    marginTop: theme.spacing.unit * 2,
    fontWeight: 400
  },
  title: {
    paddingTop: theme.spacing.unit
  },
  titleTypography: {
    fontWeight: 300
  },
  chipsRoot: {
    marginTop: theme.spacing.unit
  },
  chip: {
    margin: theme.spacing.unit,
    marginLeft: 0,
    fontSize: 16
  },
  infoItem: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit
  },
  description: {
    padding: theme.spacing.unit,
    fontSize: 16
  }
});

const SectionHeader = withStyles(styles)(({ classes, ...other }) => (
  <Typography variant="h6" className={classes.sectionHeader} {...other} />
));

const Title = withStyles(styles)(
  ({ classes, brand, model, location, price }) => (
    <Grid container justify="space-between" className={classes.title}>
      <Typography variant="h4" className={classes.titleTypography}>
        {displayedText("brand", brand)} {model}
      </Typography>
      <Typography
        variant="h4"
        color="secondary"
        className={classes.titleTypography}
      >
        {location ? `${location}, ` : ""}
        {spacesInNumbers(price)} PLN
      </Typography>
    </Grid>
  )
);

const Chips = withStyles(styles)(({ classes, ...other }) => {
  const keys = Object.keys(other);
  var values = [];
  keys.forEach(name => {
    switch (name) {
      case "fuelType":
        values.push(displayedText("fuelType", other[name]));
        break;
      case "type":
        values.push(displayedText("type", other[name]));
        break;
      case "productionYear":
        values.push(other[name]);
        break;
      case "mileage":
        values.push(`${spacesInNumbers(other[name])} km`);
        break;
      default:
        break;
    }
  });
  return (
    <div className={classes.chipsRoot}>
      {values.map(item => (
        <Chip outlined key={item} label={item} className={classes.chip} />
      ))}
    </div>
  );
});

const InfoTables = props => (
  <Table>
    <TableBody>
      {props.data.map(item => (
        <TableRow key={item.label}>
          <TableCell>{item.label}</TableCell>
          <TableCell>{item.value}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const Info = ({ classes, post }) => {
  const { car, ...otherPostValues } = post;
  const data = { ...car, ...otherPostValues };
  const infoTablesData = getDataForInfoTables({
    data,
    config: infoTablesSetup
  });
  const boolValuesData = getDataForBoolValues({
    data,
    config: boolValuesConfig
  });
  const { firstColumn, secondColumn } = equalizeColumns(
    infoTablesData.concat(boolValuesData)
  );
  return (
    <div>
      <Title
        brand={car.brand}
        model={car.model}
        location={post.location}
        price={post.price}
      />
      <Chips
        fuelType={car.fuelType}
        type={car.type}
        productionYear={car.productionYear}
        mileage={car.mileage}
      />
      <SectionHeader>Informacje</SectionHeader>
      <Grid container>
        <Grid item xs={6} className={classes.infoItem}>
          <InfoTables data={firstColumn} />
        </Grid>
        <Grid item xs={6} className={classes.infoItem}>
          <InfoTables data={secondColumn} />
        </Grid>
      </Grid>
      <SectionHeader>Dodatkowe wyposażenie</SectionHeader>
      <AdditionalAccessories
        safety={car.additionalAccessories_Safety}
        appereance={car.additionalAccessories_Appereance}
        comfort_Driver={car.additionalAccessories_Comfort_Driver}
        comfort_Passenger={car.additionalAccessories_Comfort_Passenger}
      />
      <SectionHeader>Opis ogłoszenia</SectionHeader>
      <Typography className={classes.description}>
        {post.description}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Info);
