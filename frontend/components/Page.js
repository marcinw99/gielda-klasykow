import React from "react";

import Header from "./HeaderComponents/Header";
import Footer from "./Footer";

const Page = props => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Page;
