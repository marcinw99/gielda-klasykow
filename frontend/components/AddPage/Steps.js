import React from "react";
import {
  Step,
  StepLabel,
  StepContent,
  Typography,
  MobileStepper,
  Button
} from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons/";

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
  const maxSteps = steps.length;
  return props.mobile === true ? (
    <MobileStepper
      steps={maxSteps}
      activeStep={props.activeStep}
      position="static"
      nextButton={
        <Button
          size="small"
          onClick={() => handleForwardingToStep(props.activeStep + 1)}
          disabled={props.activeStep === maxSteps - 1}
        >
          <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button
          size="small"
          onClick={() => handleForwardingToStep(props.activeStep - 1)}
          disabled={props.activeStep === 0}
        >
          <KeyboardArrowLeft />
        </Button>
      }
    />
  ) : (
    <StyledStepper activeStep={props.activeStep} orientation="vertical">
      {steps.map((item, index) => (
        <Step
          completed={false}
          key={item.label}
          onClick={() => handleForwardingToStep(index)}
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
