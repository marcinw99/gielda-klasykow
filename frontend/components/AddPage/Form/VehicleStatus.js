import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";

import { StyledValueTitle, StyledFormControl } from "../styledComponents";
import BooleanSelect from "../../universal/BooleanSelect";

const fields = {
  firstColumn: [
    { label: "Uszkodzony", name: "damaged" },
    { label: "Pierwszy właściciel", name: "firstOwner" },
    { label: "Zarejestrowany jako zabytek", name: "registeredAsAntiqueCar" },
    { label: "Tuning", name: "tuning" }
  ],
  secondColumn: [
    { label: "Bezwypadkowy", name: "accidentFree" },
    { label: "Zarejestrowany w Polsce", name: "registeredInPoland" },
    { label: "Posiada VIN", name: "hasVIN" }
  ]
};

const BooleanFormField = ({ label, name, values, handleChange }) => (
  <Fragment>
    <StyledValueTitle>{label}</StyledValueTitle>
    <StyledFormControl>
      <BooleanSelect
        name={name}
        value={values[name]}
        handleChange={handleChange}
      />
    </StyledFormControl>
  </Fragment>
);

const VehicleStatus = ({ values, handleChange }) => (
  <Grid container>
    <Grid item xs={6}>
      {fields.firstColumn.map(item => (
        <BooleanFormField
          key={item.name}
          {...item}
          handleChange={handleChange}
          values={values}
        />
      ))}
    </Grid>
    <Grid item xs={6}>
      {fields.secondColumn.map(item => (
        <BooleanFormField
          key={item.name}
          {...item}
          handleChange={handleChange}
          values={values}
        />
      ))}
    </Grid>
  </Grid>
);

export default VehicleStatus;
