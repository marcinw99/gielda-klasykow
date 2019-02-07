import React from "react";
import { Button, Grid, withStyles } from "@material-ui/core";

import { steps } from "../config";

const styles = theme => ({
  marginRight: {
    marginRight: theme.spacing.unit * 2
  }
});

const Navigation = props => {
  const handleNext = () => {
    props.setValueInMainState({
      activeStep: props.activeStep + 1
    });
  };

  const handleBack = () => {
    props.setValueInMainState({
      activeStep: props.activeStep - 1
    });
  };

  const handleReset = () => {
    // ask in modal if wants to abandon changes
    props.setValueInMainState({
      activeStep: 0
    });
  };
  return (
    <Grid container justify="space-between">
      <Grid item>
        <Button onClick={handleReset}>Zresetuj formularz</Button>
      </Grid>
      <Grid item>
        <Button
          className={props.classes.marginRight}
          disabled={props.activeStep === 0}
          onClick={handleBack}
        >
          Wróć
        </Button>
        {props.activeStep === steps.length - 1 ? (
          <Button variant="contained" color="secondary" onClick={props.submit}>
            Zakończ
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleNext}>
            Następny krok
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Navigation);
