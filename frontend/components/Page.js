import React, { Fragment } from "react";

import Header from "./HeaderComponents/Header";
import Footer from "./Footer";
import User from "../src/Queries/User";

const Page = props => (
  <User>
    {({ data }) => (
      <Fragment>
        <Header data={data} />
        {React.cloneElement(props.children, { data })}
        <Footer />
      </Fragment>
    )}
  </User>
);

export default Page;
