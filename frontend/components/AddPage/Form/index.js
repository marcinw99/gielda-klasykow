import React, { Component, Fragment } from "react";
import { Typography } from "@material-ui/core";
import { remove } from "lodash";

import {
  prepareOptions,
  getFormattedPayload,
  normalizeDataToMatchPostInput
} from "../helpers";
import {
  getTypesFields,
  assignValuesToProperDataType
} from "../../../src/globalMethods";
import { FormContent } from "../styledComponents";
import { steps, blankValuesState } from "../config";

import BasicInfo from "./BasicInfo";
import Photos from "./Photos";
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
      return <Photos />;
    case 2:
      return <EngineAndDrive />;
    case 3:
      return <BodyAndAppereance />;
    case 4:
      return <AdditionalAccessories />;
    case 5:
      return <VehicleStatus />;
    case 6:
      return <Summary />;
    case 7:
      return <AfterSubmit />;
    default:
      return <Typography>Błąd, niepoprawny indeks</Typography>;
  }
}

const initialState = {
  values: { ...blankValuesState },
  loadingPhotos: false,
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

  asyncSetState = state => {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  };

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

  handleStepReset = step => {
    this.setState(prevState => ({
      values: { ...prevState.values, ...steps[step].blankState }
    }));
  };

  handleFullReset = () => {
    this.setState(prevState => ({
      values: { ...blankValuesState }
    }));
  };

  loadSinglePhoto = photo => {
    const newPhoto = {
      preview: photo.secure_url,
      photo: photo.eager[0].secure_url
    };
    const prevPhotos = [...this.state.values.photos];
    this.handleChange({
      name: "photos",
      value: [...prevPhotos, newPhoto]
    });
  };

  handleNewPhotos = async e => {
    e.persist();
    await this.asyncSetState({ loadingPhotos: true });
    const rawFiles = e.target.files;
    for (let index = 0; index < rawFiles.length; index++) {
      const file = rawFiles[index];
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "gieldaklasykow");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/marcinw/image/upload/",
        {
          method: "POST",
          body: data
        }
      );
      const photo = await res.json();
      this.loadSinglePhoto(photo);
    }
    await this.asyncSetState({ loadingPhotos: false });
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
    const valuesInDataTypes = assignValuesToProperDataType({
      values: formattedPayload,
      typesFields: this.state.typesFields
    });
    const submitData = normalizeDataToMatchPostInput(valuesInDataTypes);
    //async to make sure to set state before calling mutation
    await this.props.setValueInMainStateAsync({ submitData });
    this.props.submit();
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
            handleNewPhotos: this.handleNewPhotos,
            handleMultiCheckboxChange: this.handleMultiCheckboxChange,
            values: this.state.values,
            loadingPhotos: this.state.loadingPhotos
          })}
        </FormContent>
        <Navigation
          activeStep={this.props.activeStep}
          setValueInMainState={this.props.setValueInMainState}
          submit={this.submit}
          handleStepReset={this.handleStepReset}
          handleFullReset={this.handleFullReset}
        />
      </Fragment>
    );
  }
}

export default Form;
