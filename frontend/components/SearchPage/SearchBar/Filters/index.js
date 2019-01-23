import React, { Component } from "react";
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  Fab
} from "@material-ui/core";
import { Search, Clear } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { Query } from "react-apollo";
import PropTypes from "prop-types";

import { initialSearchParameters, blankFiltersState } from "../../config";
import NumberInputs from "../NumberInputs";
import enumDisplayedText from "../../../../resources/enumsDisplayedText";
import { AVAILABLE_MODELS_OF_BRAND } from "../../../../src/Queries/searchQueries";

const styles = theme => ({
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  formControl: {
    minWidth: 160,
    margin: theme.spacing.unit
  },
  formControlSmallLeft: {
    marginRight: theme.spacing.unit * 0.5
  },
  formControlSmallRight: {
    marginLeft: theme.spacing.unit * 0.5
  },
  InputLabel: {
    color: theme.palette.primary.main
  },
  button: {
    minWidth: 140,
    margin: theme.spacing.unit
  },
  fabButton: {
    margin: theme.spacing.unit
  }
});

const initialState = {
  filters: { blankFiltersState, ...initialSearchParameters.filters }
};

class Filters extends Component {
  state = initialState;

  componentDidMount() {
    const { Post, Car } = getFormattedQueryAttributes(this.props.data);
    this.setState({
      queryAttributes: { Post, Car }
    });
  }

  sendFiltersQueryObject = () => {
    var queryObject = { car: {} };
    Object.keys(this.state.filters).map(name => {
      if (!shouldBeInQueryObject(this.state.filters[name])) {
        return false;
      }
      if (typeAcceptsValue(this.state.queryAttributes.Post, name)) {
        queryObject[name] = this.state.filters[name];
      }
      if (typeAcceptsValue(this.state.queryAttributes.Car, name)) {
        queryObject.car[name] = this.state.filters[name];
      }
    });
    this.props.setValueInMainState({ refreshFilters: queryObject });
  };

  handleChange = event => {
    const { name } = event.target;
    const valueRaw = event.target.value;
    // Material UI <input type="number" /> returns a string, this parses to number
    // If input is model, dont parse to number
    var value;
    if (name !== "model") {
      if (isNaN(Number(valueRaw))) {
        value = valueRaw;
      } else {
        value = Number(valueRaw);
      }
    } else {
      value = valueRaw;
    }
    this.setState(
      prevState => ({
        filters: {
          ...prevState.filters,
          // reset model if brand is changed
          model: name === "brand" ? "" : prevState.filters.model || "",
          [name]: value
        }
      }),
      () => {
        this.sendFiltersQueryObject();
      }
    );
  };

  resetFilters = () => {
    this.setState({ filters: blankFiltersState }, () => {
      this.sendFiltersQueryObject();
    });
  };

  render() {
    const { classes } = this.props;
    const { filters } = this.state;
    const selectsOptions = prepareSelectsOptions(this.props.data.Enums.fields);
    return (
      <form className={classes.form}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.InputLabel} htmlFor="segment">
            Segment
          </InputLabel>
          <Select
            value={filters.segment}
            onChange={this.handleChange}
            inputProps={{
              name: "segment",
              id: "segment"
            }}
          >
            <MenuItem value="deleteFromFilters">
              <em>Wszystkie</em>
            </MenuItem>
            {selectsOptions.segment.map((item, key) => (
              <MenuItem key={`${item}${key}`} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.InputLabel} htmlFor="brand">
            Marka pojazdu
          </InputLabel>
          <Select
            value={filters.brand}
            onChange={this.handleChange}
            inputProps={{
              name: "brand",
              id: "brand"
            }}
          >
            <MenuItem value="deleteFromFilters">
              <em>Wszystkie</em>
            </MenuItem>
            {selectsOptions.brand.map((item, key) => (
              <MenuItem key={`${item}${key}`} value={item}>
                {enumDisplayedText("Car", "brand", item)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {filters.brand && filters.brand.length !== 0 ? (
          <Query
            query={AVAILABLE_MODELS_OF_BRAND}
            variables={{
              brand: filters.brand
            }}
          >
            {({ data, error, loading }) => (
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.InputLabel} htmlFor="model">
                  Model pojazdu
                </InputLabel>
                <Select
                  value={filters.model}
                  onChange={this.handleChange}
                  inputProps={{
                    name: "model",
                    id: "model"
                  }}
                >
                  <MenuItem value="deleteFromFilters">
                    <em>Wszystkie</em>
                  </MenuItem>
                  {data.availableModelsOfBrand
                    ? data.availableModelsOfBrand.map(item => (
                        <MenuItem key={item.value} value={item.value}>
                          {`${item.value} (${item.count})`}
                        </MenuItem>
                      ))
                    : null}
                </Select>
              </FormControl>
            )}
          </Query>
        ) : null}
        <NumberInputs
          classes={classes}
          nameLeft="productionYear_gt"
          nameRight="productionYear_lt"
          labelLeft="Rok produkcji od"
          labelRight="Rok produkcji do"
          valueLeft={filters.productionYear_gt}
          valueRight={filters.productionYear_lt}
          handleChange={this.handleChange}
        />
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.InputLabel} htmlFor="fuelType">
            Rodzaj paliwa
          </InputLabel>
          <Select
            value={filters.fuelType}
            onChange={this.handleChange}
            inputProps={{
              name: "fuelType",
              id: "fuelType"
            }}
          >
            <MenuItem value="deleteFromFilters">
              <em>Wszystkie</em>
            </MenuItem>
            {selectsOptions.fuelType.map((item, key) => (
              <MenuItem key={`${item}${key}`} value={item}>
                {enumDisplayedText("Car", "fuelType", item)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <NumberInputs
          classes={classes}
          nameLeft="price_gt"
          nameRight="price_lt"
          labelLeft="Cena od"
          labelRight="Cena do"
          valueLeft={filters.price_gt}
          valueRight={filters.price_lt}
          handleChange={this.handleChange}
          endAdornment="zł"
        />
        <NumberInputs
          classes={classes}
          nameLeft="mileage_gt"
          nameRight="mileage_lt"
          labelLeft="Przebieg od"
          labelRight="Przebieg do"
          valueLeft={filters.mileage_gt}
          valueRight={filters.mileage_lt}
          handleChange={this.handleChange}
          endAdornment="km"
        />
        {[
          "Silnik i napęd",
          "Nadwozie",
          "Dodatkowe wyposażenie",
          "Status pojazdu",
          "Informacje finansowe"
        ].map(item => (
          <Button
            key={item}
            className={classes.button}
            variant="outlined"
            color="primary"
          >
            {item}
          </Button>
        ))}
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel className={classes.InputLabel} htmlFor="localization">
              Miejscowość
            </InputLabel>
            <Select
              value={filters.localization}
              onChange={this.handleChange}
              inputProps={{
                name: "localization",
                id: "localization"
              }}
            >
              <MenuItem value="deleteFromFilters">
                <em>Wszystkie</em>
              </MenuItem>
              <MenuItem value="Dębica">Dębica</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              name="keywords"
              label="Słowa kluczowe"
              value={filters.keywords}
              onChange={this.handleChange}
            />
          </FormControl>
        </div>
        <div>
          <Fab
            onClick={this.resetFilters}
            color="secondary"
            className={classes.fabButton}
          >
            <Clear />
          </Fab>
          <Fab color="primary" className={classes.fabButton}>
            <Search />
          </Fab>
        </div>
      </form>
    );
  }
}

function getFormattedQueryAttributes(data) {
  const Post = data.Post.fields.map(item => item.name);
  const Car = data.Car.fields.map(item => item.name);
  return { Post, Car };
}

function prepareSelectsOptions(input) {
  // returns possible values of enum types in db
  // sometimes (when value is required in db) enumValues and typename are in type.ofType instead of type
  var values = input.filter(item => {
    if (item.type.kind === "ENUM") {
      return true;
    }
    if (item.type.ofType != null) {
      if (item.type.ofType.kind === "ENUM") {
        return true;
      }
    }
    return false;
  });
  var results = {};
  for (let item in values) {
    results[values[item].name] = (values[item].type.enumValues == null
      ? values[item].type.ofType.enumValues
      : values[item].type.enumValues
    ).map(item => item.name);
  }
  return results;
}

const shouldBeInQueryObject = value =>
  value == null || value.length === 0 || value === "deleteFromFilters"
    ? false
    : true;

const typeAcceptsValue = (type, value) =>
  type.indexOf(value) !== -1 || type.indexOf(value.slice(0, -3)) !== -1
    ? true
    : false;

Filters.propTypes = {
  setValueInMainState: PropTypes.func.isRequired
};

export default withStyles(styles)(Filters);
