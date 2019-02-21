import React from "react";
import PropTypes from "prop-types";

import { ThemeToggler } from "./styledComponents";
import Header from "./Header";
import Footer from "./Footer";
import User from "../../src/QueryComponents/User";
import Snackbar from "../Snackbar";

const Page = props => (
  <User>
    {({ data }) => (
      <div>
        <Header {...data} />
        {React.cloneElement(props.children, data)}
        <Footer />
        <ThemeToggler darkTheme={props.darkTheme} onClick={props.toggleTheme} />
        <Snackbar {...props.snackbar} {...props.snackbarMethods} />
      </div>
    )}
  </User>
);

Page.propTypes = {
  children: PropTypes.element.isRequired
};

export default Page;
