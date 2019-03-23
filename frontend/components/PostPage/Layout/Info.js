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
import { CheckCircleOutline } from "@material-ui/icons";

import displayedText from "../../../resources/displayedText";
import {
  spacesInNumbers,
  getDataForInfoTables,
  getDataForBoolValues,
  equalizeColumns
} from "../helpers";
import { infoTablesSetup, boolValuesConfig } from "../config";

const styles = theme => ({
  title: {
    paddingTop: theme.spacing.unit
  },
  titleTypography: {
    fontWeight: 300
  },
  sectionHeader: {
    marginTop: theme.spacing.unit * 2,
    fontWeight: 400
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
  additionalAccessoriesGridItem: {
    padding: theme.spacing.unit * 0.5
  },
  description: {
    padding: theme.spacing.unit,
    fontSize: 16
  }
});

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

const SectionHeader = withStyles(styles)(({ classes, ...other }) => (
  <Typography variant="h6" className={classes.sectionHeader} {...other} />
));

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

const AdditionalAccessories = props => (
  <div>
    {props.data.map(item => (
      <Typography key={item}>
        <CheckCircleOutline color="secondary" /> {item}
      </Typography>
    ))}
  </div>
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
        brand={post.car.brand}
        model={post.car.model}
        location={post.location}
        price={post.price}
      />
      <Chips
        fuelType={post.car.fuelType}
        type={post.car.type}
        productionYear={post.car.productionYear}
        mileage={post.car.mileage}
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
      <Grid container>
        <Grid item className={classes.additionalAccessoriesGridItem}>
          <Typography variant="h6">Bezpieczeństwo</Typography>
          <AdditionalAccessories data={post.car.additionalAccessories_Safety} />
        </Grid>
        <Grid item className={classes.additionalAccessoriesGridItem}>
          <Typography variant="h6">Wygląd</Typography>
          <AdditionalAccessories
            data={post.car.additionalAccessories_Appereance}
          />
        </Grid>
        <Grid item className={classes.additionalAccessoriesGridItem}>
          <Typography variant="h6">Komfort kierowcy</Typography>
          <AdditionalAccessories
            data={post.car.additionalAccessories_Comfort_Driver}
          />
        </Grid>
        <Grid item className={classes.additionalAccessoriesGridItem}>
          <Typography variant="h6">Komfort pasażerów</Typography>
          <AdditionalAccessories
            data={post.car.additionalAccessories_Comfort_Passenger}
          />
        </Grid>
      </Grid>
      <SectionHeader>Opis ogłoszenia</SectionHeader>
      <Typography className={classes.description}>
        {post.description}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Info);
