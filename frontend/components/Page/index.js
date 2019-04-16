import React from "react";
import PropTypes from "prop-types";

import {
  ThemeToggler,
  StyledContentContainer,
  StyledContent
} from "./styledComponents";
import Header from "./Header";
import Footer from "./Footer";
import User from "../../src/QueryComponents/User";
import Snackbar from "../Snackbar";
import CookiesConsentBanner from "./CookiesConsentBanner";
import AfterLoginActions from "./AfterLoginActions";

const Page = props => (
  <User>
    {({ data }) => (
      <div>
        <Header {...data} />
        <StyledContentContainer>
          <StyledContent>
            {React.cloneElement(props.children, data)}
          </StyledContent>
          <Footer />
        </StyledContentContainer>
        <ThemeToggler darkTheme={props.darkTheme} onClick={props.toggleTheme} />
        {data && data.thisUser ? <AfterLoginActions data={data} /> : null}
        <CookiesConsentBanner />
        <Snackbar {...props.snackbar} {...props.snackbarMethods} />
      </div>
    )}
  </User>
);

Page.propTypes = {
  children: PropTypes.element.isRequired
};

export default Page;
