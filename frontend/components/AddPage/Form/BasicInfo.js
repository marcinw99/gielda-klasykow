import React from "react";
import { Query } from "react-apollo";
import { Grid, withStyles } from "@material-ui/core";

import { StyledValueTitle, StyledFormControl } from "../styledComponents";
import { Creatable, Autocomplete } from "../../universal/Autocompletes";
import displayedText from "../../../resources/displayedText";
import { MODELS_OF_BRAND } from "../../../src/Queries/searchQueries";
import FieldRequiredHelperText from "../../universal/FieldRequiredHelperText";
import { isArray } from "util";

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
        <FieldRequiredHelperText value={props.values.brand} />
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
              var modelsOfBrand = [];
              var placeholder = "Model";
              if (error) {
                placeholder = "Błąd pobierania danych";
              } else if (loading) {
                placeholder = "Pobieranie danych...";
              } else if (data) {
                if (isArray(data.modelsOfBrand)) {
                  modelsOfBrand = data.modelsOfBrand;
                }
              }
              return (
                <Creatable
                  darkLabel
                  name="model"
                  placeholder={placeholder}
                  value={props.values.model}
                  handleChange={props.handleChange}
                  options={modelsOfBrand.map(item => ({
                    label: item,
                    value: item
                  }))}
                />
              );
            }}
          </Query>
        )}
        <FieldRequiredHelperText value={props.values.model} />
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
          <FieldRequiredHelperText value={props.values.price} />
        </StyledFormControl>
      </Grid>
      <Grid item>
        <StyledValueTitle>Lokacja</StyledValueTitle>
        <StyledFormControl>
          <Creatable
            darkLabel
            name="location"
            placeholder="Podlasie, Rzeszów..."
            value={props.values.location}
            handleChange={props.handleChange}
            options={props.options.Location.map(item => ({
              label: item,
              value: item
            }))}
          />
          <FieldRequiredHelperText value={props.values.location} />
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
          <FieldRequiredHelperText value={props.values.fuelType} />
        </StyledFormControl>
      </Grid>
      <Grid item>
        <StyledValueTitle>Rodzaj nadwozia</StyledValueTitle>
        <StyledFormControl>
          <Autocomplete
            darkLabel
            name="type"
            placeholder="Sedan, Kombi..."
            value={props.values.type}
            handleChange={props.handleChange}
            options={props.options.Type.map(item => ({
              label: displayedText("type", item),
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
