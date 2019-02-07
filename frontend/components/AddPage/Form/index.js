import React, { Component, Fragment } from "react";
import { Typography } from "@material-ui/core";
import { remove } from "lodash";

import { prepareOptions, getFormattedPayload } from "../helpers";
import {
  getTypesFields,
  assignValuesToProperDataType
} from "../../../src/globalMethods";
import { FormContent } from "../styledComponents";
import { steps, blankValuesState } from "../config";

import BasicInfo from "./BasicInfo";
import EngineAndDrive from "./EngineAndDrive";
import BodyAndAppereance from "./BodyAndAppereance";
import AdditionalAccessories from "./AdditionalAccessories";
import VehicleStatus from "./VehicleStatus";
import Summary from "./Summary";
import AfterSubmit from "./AfterSubmit";
import Navigation from "./Navigation";

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
      return <Typography>Błąd, niepoprawny indeks</Typography>;
  }
}

const initialState = {
  values: blankValuesState,
  typesFields: {}
};

class Form extends Component {
  state = initialState;

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

  handleMultiCheckboxChange = field => event => {
    var result;
    const prevValue = [...this.state.values[field]];
    const { value, checked } = event.target;
    if (checked && prevValue.indexOf(value) === -1) {
      result = [...prevValue, value];
    }
    if (!checked && prevValue.indexOf(value) !== -1) {
      result = remove(prevValue, item => item !== value);
    }
    this.handleChange({
      name: field,
      value: result
    });
  };

  submit = async () => {
    const formattedPayload = getFormattedPayload({
      ...this.state.values
    });
    const submitData = assignValuesToProperDataType({
      values: formattedPayload,
      typesFields: this.state.typesFields
    });
    await this.props.setValueInMainStateAsync({ submitData });
    // this.props.submit();
  };

  render() {
    const options = prepareOptions(this.props.data);
    return (
      <Fragment>
        <Typography variant="h5">
          {steps[this.props.activeStep].label}
        </Typography>
        <FormContent>
          {React.cloneElement(getFormContent(this.props.activeStep), {
            options,
            handleChange: this.handleChange,
            handleMultiCheckboxChange: this.handleMultiCheckboxChange,
            values: this.state.values
          })}
        </FormContent>
        <Navigation
          activeStep={this.props.activeStep}
          setValueInMainState={this.props.setValueInMainState}
          submit={this.submit}
        />
      </Fragment>
    );
  }
}

export default Form;
