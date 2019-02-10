import React from "react";
import { Typography, withStyles } from "@material-ui/core";

import { getArrayOfRequiredFieldsNotFilled } from "../helpers";
import displayedText from "../../../resources/displayedText";

const styles = theme => ({
  errorTitle: {
    marginBottom: theme.spacing.unit * 2
  }
});

const Summary = props => {
  const fieldsNotFilled = getArrayOfRequiredFieldsNotFilled(props.values);
  return fieldsNotFilled.length === 0 ? (
    <Typography>hehe</Typography>
  ) : (
    <div>
      <Typography
        variant="h5"
        color="secondary"
        className={props.classes.errorTitle}
      >
        Nie wprowadziłeś wystarczającej ilości danych aby dodać ogłoszenie.
      </Typography>
      <Typography variant="h6">
        Wymagane pola które są nie uzupełnione:
        <ul>
          {fieldsNotFilled.map(item => (
            <li>{displayedText("attributesNames", item)}</li>
          ))}
        </ul>
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Summary);
