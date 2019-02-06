import React from "react";
import { Step, StepLabel, StepContent, Typography } from "@material-ui/core";

import { StyledStepper } from "./styledComponents";
import { steps } from "./config";

const Steps = props => (
  <StyledStepper activeStep={props.activeStep} orientation="vertical">
    {steps.map(item => (
      <Step key={item.label}>
        <StepLabel>{item.label}</StepLabel>
        <StepContent>
          <Typography>{item.content}</Typography>
        </StepContent>
      </Step>
    ))}
  </StyledStepper>
);

export default Steps;
