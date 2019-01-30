import React from "react";
import Select from "react-select";
import { MenuItem, Typography, Paper, TextField } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import { filterArrayOfObjects } from "../helpers";

const styles = theme => ({
  singleValue: {
    fontSize: 16,
    color: "#e0e0e0"
  },
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    overflow: "hidden"
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  placeholder: {
    position: "absolute",
    left: 2,
    fontSize: 16,
    color: "#e0e0e0"
  },
  input: {
    display: "flex",
    padding: 0
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  }
});

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      {...props.innerProps}
      selected={props.isFocused}
    >
      {props.children}
    </MenuItem>
  );
}

function Menu(props) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  );
}

function SingleValue(props) {
  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
}

function Placeholder(props) {
  return (
    <Typography
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      color="primary"
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps
        }
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}
function NoOptionsMessage(props) {
  return (
    <Typography
      color="secondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      Brak opcji
    </Typography>
  );
}

const components = {
  Option,
  Menu,
  SingleValue,
  ValueContainer,
  Placeholder,
  Control,
  NoOptionsMessage
};

const Autocomplete = props => {
  const handleChange = payload => {
    const value = payload == null ? "" : payload.value;
    props.handleChange({
      target: {
        value,
        name: props.name
      }
    });
  };
  const value =
    props.value == null
      ? null
      : filterArrayOfObjects(props.options, { value: props.value })[0];
  return (
    <Select
      classes={props.classes}
      components={components}
      options={props.options}
      value={value}
      onChange={handleChange}
      placeholder={props.placeholder}
      isClearable
    />
  );
};

Autocomplete.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Autocomplete);
