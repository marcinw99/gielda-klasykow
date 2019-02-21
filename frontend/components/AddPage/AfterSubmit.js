import React from "react";
import { Typography, Grid, Button, withStyles } from "@material-ui/core";
import Link from "next/link";

import displayedText from "../../resources/displayedText";

const styles = theme => ({
  message: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 6
  }
});

const AfterSubmit = props => {
  return (
    <div>
      <Typography variant="h4">Ogłoszenie zostało dodane poprawnie</Typography>
      <Typography variant="h5" className={props.classes.message}>
        Gratulacje, {displayedText("brand", props.data.car.brand)}{" "}
        {props.data.car.model} jest już widoczny na giełdzie.
      </Typography>
      <Grid container justify="center" spacing={24}>
        <Grid item>
          <Link href="/">
            <Button size="large" color="primary" variant="contained">
              Strona główna
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link href="/search">
            <Button size="large" color="primary" variant="contained">
              Przeglądaj giełdę
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(AfterSubmit);
