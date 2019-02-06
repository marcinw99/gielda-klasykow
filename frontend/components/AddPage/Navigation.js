import React from "react";
import { Button, Grid } from "@material-ui/core";

import { steps } from "./config";

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
        <Button disabled={props.activeStep === 0} onClick={handleBack}>
          Wróć
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          {props.activeStep === steps.length - 1 ? "Zakończ" : "Następny krok"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Navigation;
