import React from "react";
import { Query } from "react-apollo";
import { Grid, withStyles } from "@material-ui/core";

import { StyledValueTitle, StyledFormControl } from "../styledComponents";
import { Creatable, Autocomplete } from "../../universal/Autocompletes";
import displayedText from "../../../resources/displayedText";
import { MODELS_OF_BRAND } from "../../../src/Queries/searchQueries";

const styles = theme => ({
  marginTop: {
    marginTop: theme.spacing.unit * 2
  }
});

const BasicInfo = props => (
  <div>
    <StyledValueTitle>Marka i model samochodu</StyledValueTitle>
    <Grid container>
      <StyledFormControl>
        <Autocomplete
          darkLabel
          name="brand"
          placeholder="Saab, Porsche, BMW..."
          value={props.values.brand}
          handleChange={props.handleChange}
          options={props.options.Brand.map(item => ({
            label: displayedText("brand", item),
            value: item
          }))}
        />
      </StyledFormControl>
      <StyledFormControl>
        {props.values.brand == null ? (
          <Autocomplete
            options={[]}
            handleChange={() => null}
            placeholder="Model"
            name="model"
          />
        ) : (
          <Query
            query={MODELS_OF_BRAND}
            variables={{
              brand: props.values.brand.value
            }}
          >
            {({ data, error, loading }) => {
              return data.modelsOfBrand ? (
                <Autocomplete
                  darkLabel
                  name="model"
                  placeholder="Model"
                  value={props.values.model}
                  handleChange={props.handleChange}
                  options={data.modelsOfBrand.map(item => ({
                    label: item,
                    value: item
                  }))}
                />
              ) : null;
            }}
          </Query>
        )}
      </StyledFormControl>
    </Grid>
    <Grid container className={props.classes.marginTop}>
      <Grid item>
        <StyledValueTitle>Cena (zł)</StyledValueTitle>
        <StyledFormControl>
          <Creatable
            darkLabel
            unit="PLN"
            name="price"
            placeholder="50 000 PLN..."
            value={props.values.price}
            handleChange={props.handleChange}
            options={props.options.Price.map(item => ({
              label: `${item} PLN`,
              value: item
            }))}
          />
        </StyledFormControl>
      </Grid>
      <Grid item>
        <StyledValueTitle>Lokalizacja</StyledValueTitle>
        <StyledFormControl>
          <Autocomplete
            darkLabel
            name="localization"
            placeholder="Podlasie, Rzeszów..."
            value={props.values.localization}
            handleChange={props.handleChange}
            options={props.options.Localization.map(item => ({
              label: item,
              value: item
            }))}
          />
        </StyledFormControl>
      </Grid>
    </Grid>
    <Grid container className={props.classes.marginTop}>
      <Grid item>
        <StyledValueTitle>Rodzaj paliwa</StyledValueTitle>
        <StyledFormControl>
          <Autocomplete
            darkLabel
            name="fuelType"
            placeholder="Benzyna, Diesel..."
            value={props.values.fuelType}
            handleChange={props.handleChange}
            options={props.options.FuelType.map(item => ({
              label: displayedText("fuelType", item),
              value: item
            }))}
          />
        </StyledFormControl>
      </Grid>
      <Grid item>
        <StyledValueTitle>Segment samochodu</StyledValueTitle>
        <StyledFormControl>
          <Autocomplete
            darkLabel
            name="segment"
            placeholder="A, B, C..."
            value={props.values.segment}
            handleChange={props.handleChange}
            options={props.options.Segment.map(item => ({
              label: item,
              value: item
            }))}
          />
        </StyledFormControl>
      </Grid>
    </Grid>
    <Grid container className={props.classes.marginTop}>
      <Grid item>
        <StyledValueTitle>Rok produkcji</StyledValueTitle>
        <StyledFormControl>
          <Creatable
            darkLabel
            name="productionYear"
            placeholder="1995, 2002..."
            value={props.values.productionYear}
            handleChange={props.handleChange}
            options={props.options.ProductionYear.map(item => ({
              label: item,
              value: item
            }))}
          />
        </StyledFormControl>
      </Grid>
      <Grid item>
        <StyledValueTitle>Przebieg pojazdu (km)</StyledValueTitle>
        <StyledFormControl>
          <Creatable
            darkLabel
            unit="km"
            name="mileage"
            placeholder="100 000, 200 000..."
            value={props.values.mileage}
            handleChange={props.handleChange}
            options={props.options.Mileage.map(item => ({
              label: `${item} km`,
              value: item
            }))}
          />
        </StyledFormControl>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(BasicInfo);
