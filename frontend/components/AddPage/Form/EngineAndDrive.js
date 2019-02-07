import React from "react";
import { Grid } from "@material-ui/core";

import { StyledValueTitle, StyledFormControl } from "../styledComponents";
import { Creatable } from "../../universal/Autocompletes";
import BooleanSelect from "../../universal/BooleanSelect";
import RadioGenerator from "../../universal/RadioGenerator";

const EngineAndDrive = props => (
  <Grid container>
    <Grid item xs={6}>
      <StyledValueTitle>
        Pojemność skokowa (cm<sup>3</sup>)
      </StyledValueTitle>
      <StyledFormControl>
        <Creatable
          darkLabel
          canCreateOption
          unit="cm3"
          name="engineSize"
          placeholder=" 1500, 2000, 3000..."
          value={props.values.engineSize}
          handleChange={props.handleChange}
          options={props.options.EngineSize.map(item => ({
            label: `${item} cm3`,
            value: item
          }))}
        />
      </StyledFormControl>
      <StyledValueTitle>Moc (km)</StyledValueTitle>
      <StyledFormControl>
        <Creatable
          darkLabel
          canCreateOption
          unit="km"
          name="power"
          placeholder=" 100, 150, 200..."
          value={props.values.power}
          handleChange={props.handleChange}
          options={props.options.Power.map(item => ({
            label: `${item} km`,
            value: item
          }))}
        />
      </StyledFormControl>
      <StyledValueTitle>Moment obrotowy (nm)</StyledValueTitle>
      <StyledFormControl>
        <Creatable
          darkLabel
          canCreateOption
          unit="nm"
          name="torque"
          placeholder=" 200, 300, 400..."
          value={props.values.torque}
          handleChange={props.handleChange}
          options={props.options.Torque.map(item => ({
            label: `${item} nm`,
            value: item
          }))}
        />
      </StyledFormControl>
      <StyledValueTitle>Posiada filtr cząstek stałych</StyledValueTitle>
      <StyledFormControl>
        <BooleanSelect
          name="hasParticulateFilter"
          value={props.values.hasParticulateFilter}
          handleChange={props.handleChange}
        />
      </StyledFormControl>
    </Grid>
    <Grid item xs={6}>
      <StyledValueTitle>Rodzaj skrzyni biegów</StyledValueTitle>
      <StyledFormControl>
        <Grid container justify="flex-start">
          <RadioGenerator
            name="transmission"
            options={props.options.Transmission}
            values={props.values.transmission}
            handleChange={e => props.handleChange(e.target)}
          />
        </Grid>
      </StyledFormControl>
      <StyledValueTitle>Rodzaj układu napędowego</StyledValueTitle>
      <StyledFormControl>
        <Grid container justify="flex-start">
          <RadioGenerator
            name="drive"
            options={props.options.Drive}
            values={props.values.drive}
            handleChange={e => props.handleChange(e.target)}
          />
        </Grid>
      </StyledFormControl>
    </Grid>
  </Grid>
);

export default EngineAndDrive;
