import React, { Component } from "react";
import Router from "next/router";

function shouldRedirect(query) {
  if (!query.token || query.token.length !== 10) {
    return true;
  } else return false;
}

class setnewpassword extends Component {
  constructor(props) {
    super(props);
    // Redirect if someone is logged in
    if (props.data.thisUser) {
      Router.push("/");
    }
  }
  static async getInitialProps({ res, query }) {
    if (shouldRedirect(query)) {
      if (res) {
        res.writeHead(302, {
          Location: "/"
        });
        res.end();
      } else {
        Router.push("/");
      }
    }
    return {};
  }

  render() {
    if (this.props.data.thisUser) {
      Router.push("/");
    }
    return <div>New password</div>;
  }
}

export default setnewpassword;
