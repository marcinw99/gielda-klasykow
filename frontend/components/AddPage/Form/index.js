import React, { Component, Fragment } from "react";
import { Typography } from "@material-ui/core";

import { getTypesFields } from "../../universal/methods";
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

class Form extends Component {
  state = {
    values: {}
  };

  componentDidMount() {
    const typesFields = getTypesFields({
      Car: this.props.data.Car.fields,
      Post: this.props.data.Post.fields
    });
    this.setState({
      typesFields
    });
  }

  handleChange = ({ name, value }) => {
    this.setState(prevState => ({
      values: {
        ...prevState.values,
        // reset model if brand is changed
        model: name === "brand" ? null : prevState.values.model,
        [name]: value
      }
    }));
  };

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

export default Form;
