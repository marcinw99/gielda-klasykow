import React, { Component, Fragment } from "react";
import { Typography } from "@material-ui/core";

import { FormContent } from "../styledComponents";
import { steps } from "../config";
import BasicInfo from "./BasicInfo";
import EngineAndDrive from "./EngineAndDrive";
import BodyAndAppereance from "./BodyAndAppereance";
import AdditionalAccessories from "./AdditionalAccessories";
import VehicleStatus from "./VehicleStatus";
import Summary from "./Summary";
import AfterSubmit from "./AfterSubmit";

function getFormContent(step) {
  switch (step) {
    case 0:
      return <BasicInfo />;
    case 1:
      return <EngineAndDrive />;
    case 2:
      return <BodyAndAppereance />;
    case 3:
      return <AdditionalAccessories />;
    case 4:
      return <VehicleStatus />;
    case 5:
      return <Summary />;
    case 6:
      return <AfterSubmit />;
    default:
      return "Błąd, niepoprawny indeks";
  }
}

class index extends Component {
  render() {
    return (
      <Fragment>
        <Typography variant="h5">
          {steps[this.props.activeStep].label}
        </Typography>
        <FormContent>{getFormContent(this.props.activeStep)}</FormContent>
      </Fragment>
    );
  }
}

export default index;
