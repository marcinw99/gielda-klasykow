import React, { Component } from "react";

const Context = React.createContext();

export const SnackbarProvider = props => {
  return (
    <Context.Provider
      value={{
        manageSnackbar: props.manageSnackbar
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export const SnackbarConsumer = Context.Consumer;

export function withSnackbar(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <SnackbarConsumer>
          {value => <WrappedComponent {...value} {...this.props} />}
        </SnackbarConsumer>
      );
    }
  };
}
