import React, { Component } from "react";
import { Button, Grid, withStyles } from "@material-ui/core";

import { steps } from "../config";
import ConfirmationDialog from "../../universal/ConfirmationDialog";

const styles = theme => ({
  marginRight: {
    marginRight: theme.spacing.unit * 2
  }
});

class Navigation extends Component {
  state = {
    dialogOpen: false,
    dialogAttributes: {
      action: "",
      title: "",
      content: ""
    }
  };

  handleNext = () => {
    this.props.setValueInMainState({
      activeStep: this.props.activeStep + 1
    });
  };

  handleBack = () => {
    this.props.setValueInMainState({
      activeStep: this.props.activeStep - 1
    });
  };

  confirmHandleStepReset = () => {
    this.setState({
      dialogOpen: true,
      dialogAttributes: {
        action: "stepReset",
        title: "Zresetować ten krok formularza?",
        content: "Wszystkie wprowadzone wartości w tym kroku zostaną usunięte."
      }
    });
  };

  handleStepReset = () => {
    this.props.handleStepReset(this.props.activeStep);
  };

  confirmHandleFullReset = () => {
    this.setState({
      dialogOpen: true,
      dialogAttributes: {
        action: "fullReset",
        title: "Zresetować cały formularz?",
        content: "Kreator ogłoszenia zostanie zresetowany."
      }
    });
  };

  handleFullReset = () => {
    this.props.handleFullReset();
    this.props.setValueInMainState({
      activeStep: 0
    });
  };

  confirmHandler = action => {
    switch (action) {
      case "stepReset":
        this.handleStepReset();
        break;
      case "fullReset":
        this.handleFullReset();
        break;
      default:
        break;
    }
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  render() {
    return (
      <Grid container justify="space-between">
        <Grid item>
          {this.props.activeStep !== steps.length - 1 ? (
            <Button onClick={this.confirmHandleStepReset}>
              Zresetuj ten krok
            </Button>
          ) : (
            <Button onClick={this.confirmHandleFullReset}>
              Zresetuj cały formularz
            </Button>
          )}
          <ConfirmationDialog
            open={this.state.dialogOpen}
            {...this.state.dialogAttributes}
            handleClose={this.handleDialogClose}
            confirmHandler={this.confirmHandler}
          />
        </Grid>
        <Grid item>
          <Button
            className={this.props.classes.marginRight}
            disabled={this.props.activeStep === 0}
            onClick={this.handleBack}
          >
            Wróć
          </Button>
          {this.props.activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={this.props.submit}
            >
              Dodaj ogłoszenie
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleNext}
            >
              Następny krok
            </Button>
          )}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Navigation);
