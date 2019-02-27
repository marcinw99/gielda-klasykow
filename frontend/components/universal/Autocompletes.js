import React, { Component } from "react";
import isEqual from "react-fast-compare";
import Select from "react-select";
import CreatableSelect from "react-select/lib/Creatable";
import { MenuItem, Typography, Paper, TextField } from "@material-ui/core/";
import { grey } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  singleValue: {
    fontSize: 15,
    color: theme.palette.primary.contrastText
  },
  singleValueDark: {
    fontSize: 15,
    color: theme.palette.primary.dark
  },
  valueContainer: {
    display: "flex",
    flexWrap: "nowrap",
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
    color: grey[400]
  },
  input: {
    display: "flex",
    padding: 0
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  }
});

const customStyles = {
  input: () => ({
    color: grey[100]
  })
};

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
      className={
        props.selectProps.darkLabel
          ? props.selectProps.classes.singleValueDark
          : props.selectProps.classes.singleValue
      }
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
      className={props.selectProps.classes.className}
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

class CreatableComponent extends Component {
  state = {
    options: [...this.props.options]
  };

  shouldComponentUpdate(nextProps) {
    return !isEqual(nextProps, this.props);
  }

  static getDerivedStateFromProps(nextProps) {
    return { options: nextProps.options };
  }

  handleChange = value => {
    this.props.handleChange({
      value,
      name: this.props.name
    });
  };

  handleCreate = inputValue => {
    const { options } = this.props;
    const newOption = this.createOption(inputValue);
    this.setState({ options: [...options, newOption] }, () => {
      this.handleChange(newOption);
    });
  };

  createOption = input => ({
    label: this.getFormatCreateLabel(input),
    value: Number(input)
  });

  getFormatCreateLabel = label =>
    this.props.unit ? `${label} ${this.props.unit}` : label;

  render() {
    return (
      <CreatableSelect
        styles={customStyles}
        className={this.props.className || null}
        darkLabel={this.props.darkLabel}
        classes={this.props.classes}
        components={components}
        options={this.state.options}
        value={this.props.value}
        onChange={this.handleChange}
        onCreateOption={this.handleCreate}
        formatCreateLabel={this.getFormatCreateLabel}
        placeholder={this.props.placeholder}
        isClearable
      />
    );
  }
}

class AutocompleteComponent extends Component {
  shouldComponentUpdate(nextProps) {
    return !isEqual(nextProps, this.props);
  }

  handleChange = value => {
    this.props.handleChange({
      value,
      name: this.props.name
    });
  };
  render() {
    return (
      <Select
        styles={customStyles}
        className={this.props.className || null}
        darkLabel={this.props.darkLabel}
        classes={this.props.classes}
        components={components}
        options={this.props.options}
        value={this.props.value}
        onChange={this.handleChange}
        placeholder={this.props.placeholder}
        isClearable
      />
    );
  }
}

CreatableComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.object,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
};

AutocompleteComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.object,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
};

export const Creatable = withStyles(styles)(CreatableComponent);

export const Autocomplete = withStyles(styles)(AutocompleteComponent);
