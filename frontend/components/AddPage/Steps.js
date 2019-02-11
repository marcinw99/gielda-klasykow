import React from "react";
import { Step, StepLabel, StepContent, Typography } from "@material-ui/core";

import { StyledStepper } from "./styledComponents";
import { steps } from "./config";

const Steps = props => {
  const handleForwardingToStep = step => {
    if (props.loading) {
      return null;
    } else {
      props.setValueInMainState({ activeStep: step });
    }
  };
  return (
    <StyledStepper activeStep={props.activeStep} orientation="vertical">
      {steps.map((item, index) => (
        <Step
          completed={false}
          key={item.label}
          onClick={() => handleForwardingToStep({ step: index })}
        >
          <StepLabel>{item.label}</StepLabel>
          <StepContent>
            <Typography>{item.content}</Typography>
          </StepContent>
        </Step>
      ))}
    </StyledStepper>
  );
};

export default Steps;
