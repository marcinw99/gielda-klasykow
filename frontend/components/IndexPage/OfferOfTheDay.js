import React from "react";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  withStyles,
  Grid,
  Chip,
  Divider
} from "@material-ui/core";
import displayedText from "../../resources/displayedText";

const styles = theme => ({
  root: {
    margin: 1
  },
  cardMedia: {
    minHeight: 264
  },
  content: {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main
  },
  chip: {
    fontWeight: 500,
    fontSize: theme.typography.fontSize,
    padding: `0 ${theme.spacing.unit}px`
  },
  price: {
    fontSize: theme.typography.fontSize * 1.8,
    color: theme.palette.primary.contrastText
  },
  divider: {
    marginTop: theme.spacing.unit
  },
  footerRoot: {
    marginTop: theme.spacing.unit
  },
  footerValuesDivider: {
    width: 4,
    height: 4,
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    margin: `0 ${theme.spacing.unit * 1.4}px`
  }
});

const OfferOfTheDay = ({ item, classes }) => {
  return (
    <Card square elevation={1} className={classes.root}>
      <CardActionArea className={classes.cardActionArea}>
        <CardMedia
          component="div"
          alt={item.car.model}
          image={item.avatar}
          className={classes.cardMedia}
        />
        <CardContent className={classes.content}>
          <Grid container justify="space-between">
            <Chip
              label="OFERTA DNIA"
              color="secondary"
              className={classes.chip}
            />
            <Typography className={classes.price} variant="h6" inline>
              {spacesInNumbers(item.price)} PLN
            </Typography>
          </Grid>
          <Typography variant="h5" color="inherit">
            {`${displayedText("brand", item.car.brand)} ${item.car.model}`}
          </Typography>
          <Divider className={classes.divider} />
          <Grid
            className={classes.footerRoot}
            container
            justify="flex-end"
            alignItems="center"
          >
            {item.car.productionYear ? item.car.productionYear : ""}
            {item.car.productionYear && item.car.mileage && (
              <div className={classes.footerValuesDivider} />
            )}
            {item.car.mileage ? `${item.car.mileage} km` : ""}
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

function spacesInNumbers(number) {
  return number.toLocaleString("ru-RU");
}

export default withStyles(styles)(OfferOfTheDay);
