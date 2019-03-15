import React, { Component, Fragment } from "react";
import { Typography } from "@material-ui/core";
import { remove } from "lodash";

import {
  prepareOptions,
  getFormattedPayload,
  normalizeDataToMatchPostInput,
  formValueIsIncorrect,
  getArrayOfFieldsNotFilled,
  formValueMayBeIncorrect
} from "../helpers";
import {
  getTypesFieldsAsArrays,
  assignValuesToProperDataType
} from "../../../src/globalMethods";
import { FormContent } from "../styledComponents";
import {
  steps,
  blankValuesState,
  validationRules,
  requiredFields
} from "../config";

import BasicInfo from "./BasicInfo";
import Photos from "./Photos";
import EngineAndDrive from "./EngineAndDrive";
import BodyAndAppereance from "./BodyAndAppereance";
import AdditionalAccessories from "./AdditionalAccessories";
import VehicleStatus from "./VehicleStatus";
import Summary from "./Summary";
import Description from "./Description";
import Navigation from "./Navigation";
import { withSnackbar } from "../../Snackbar/Context";
import displayedText from "../../../resources/displayedText";

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
      return <Description />;
    case 7:
      return <Summary />;
    default:
      return <Typography>Błąd, niepoprawny indeks</Typography>;
  }
}

const initialState = {
  values: { ...blankValuesState },
  loadingPhotos: false,
  typesFields: {},
  requiredFieldsNotFilled: [...requiredFields]
};

class Form extends Component {
  state = initialState;

  componentDidMount() {
    const typesFields = getTypesFieldsAsArrays({
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
    const isIncorrect = formValueIsIncorrect({ name, value });
    if (isIncorrect) {
      this.props.manageSnackbar({
        open: true,
        message: `${displayedText("attributesNames", name)}: ${isIncorrect}`,
        variant: "error"
      });
      return null;
    }
    if (formValueMayBeIncorrect({ name, value })) {
      this.props.manageSnackbar({
        open: true,
        message: `Czy wartość w polu ${displayedText(
          "attributesNames",
          name
        )} jest prawidłowa?`,
        variant: "warning"
      });
    }
    this.setState(
      prevState => ({
        values: {
          ...prevState.values,
          // reset model if brand is changed
          model: name === "brand" ? null : prevState.values.model,
          [name]: value
        }
      }),
      () => {
        // if changed field is marked as required update array of requiredFieldsNotFilled
        if (requiredFields.filter(item => item.name === name).length > 0) {
          const requiredFieldsNotFilled = getArrayOfFieldsNotFilled({
            values: this.state.values,
            criteria: requiredFields
          });
          this.setState({ requiredFieldsNotFilled });
        }
      }
    );
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
    if (e.target.files.length > validationRules.photos.maxLength) {
      this.props.manageSnackbar({
        open: true,
        message: `Można dodać maksymalnie ${
          validationRules.photos.maxLength
        } zdjęć.`,
        variant: "error"
      });
      return null;
    }
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
    if (this.state.requiredFieldsNotFilled.length > 0) {
      this.props.manageSnackbar({
        open: true,
        message:
          "Nie wprowadzono wystarczającej ilości danych aby dodać ogłoszenie.",
        variant: "error"
      });
      return null;
    }
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
            loadingPhotos: this.state.loadingPhotos,
            setValueInMainState: this.props.setValueInMainState,
            requiredFieldsNotFilled: this.state.requiredFieldsNotFilled,
            error: this.props.error
          })}
        </FormContent>
        <Navigation
          activeStep={this.props.activeStep}
          setValueInMainState={this.props.setValueInMainState}
          handleStepReset={this.handleStepReset}
          handleFullReset={this.handleFullReset}
          loading={this.props.loading}
          submit={this.submit}
        />
      </Fragment>
    );
  }
}

export default withSnackbar(Form);
