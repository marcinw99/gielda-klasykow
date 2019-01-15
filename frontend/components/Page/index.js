import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";
import User from "../../src/QueryComponents/User";

const Page = props => (
  <User>
    {({ data }) => (
      <Fragment>
        <Header {...data} />
        {React.cloneElement(props.children, data)}
        <Footer />
      </Fragment>
    )}
  </User>
);

Page.propTypes = {
  children: PropTypes.element.isRequired
};

export default Page;
