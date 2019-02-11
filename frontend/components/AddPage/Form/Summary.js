import React from "react";
import { Typography, withStyles, Button } from "@material-ui/core";

import displayedText from "../../../resources/displayedText";
import { getArrayOfFieldsNotFilled } from "../helpers";
import { requiredFields, recommendedFields } from "../config";

const Summary = props => {
  const setStep = step => {
    props.setValueInMainState({
      activeStep: step
    });
  };
  const requiredFieldsNotFilled = getArrayOfFieldsNotFilled({
    values: props.values,
    criteria: requiredFields
  });
  return requiredFieldsNotFilled.length === 0 ? (
    <SummarySuccess {...props} setStep={setStep} />
  ) : (
    <SummaryError
      {...props}
      requiredFieldsNotFilled={requiredFieldsNotFilled}
      setStep={setStep}
    />
  );
};

const styles = theme => ({
  title: {
    marginBottom: theme.spacing.unit * 3
  }
});

const SummaryError = withStyles(styles)(props => {
  const setStep = step => {
    props.setValueInMainState({
      activeStep: step
    });
  };
  return (
    <div>
      <Typography
        variant="h5"
        color="secondary"
        className={props.classes.title}
      >
        Nie wprowadziłeś wystarczającej ilości danych aby dodać ogłoszenie.
      </Typography>
      <Typography variant="h6">
        Wymagane pola które są nie uzupełnione:
        <ul>
          {props.requiredFieldsNotFilled.map(item => (
            <li key={item.name}>
              {displayedText("attributesNames", item.name)}{" "}
              <Button
                color="primary"
                onClick={() => props.setStep(item.inStep)}
              >
                Przekieruj
              </Button>
            </li>
          ))}
        </ul>
      </Typography>
    </div>
  );
});

const SummarySuccess = withStyles(styles)(props => {
  const recommendedFieldsNotFilled = getArrayOfFieldsNotFilled({
    values: props.values,
    criteria: recommendedFields
  });
  return (
    <div>
      <Typography variant="h2" color="primary" className={props.classes.title}>
        {`${props.values.brand.label} ${props.values.model.label}`}
      </Typography>
      {recommendedFieldsNotFilled.length > 0 ? (
        <Typography variant="h6">
          Uzupełnienie tych danych znacząco zwiększy zasięg twojego ogłoszenia:
          <ul>
            {recommendedFieldsNotFilled.map(item => (
              <li key={item.name}>
                {displayedText("attributesNames", item.name)}{" "}
                <Button
                  color="primary"
                  onClick={() => props.setStep(item.inStep)}
                >
                  Przekieruj
                </Button>
              </li>
            ))}
          </ul>
        </Typography>
      ) : (
        <Typography variant="h4">
          Wszystko gotowe, możesz dodać ogłoszenie.
        </Typography>
      )}
    </div>
  );
});

export default Summary;
