import React, { Component } from "react";
import { Typography, Grid } from "@material-ui/core";

import { Content } from "./styledComponents";

class AddPage extends Component {
  render() {
    if (!this.props.thisUser) {
      return (
        <Content>
          <Typography>
            Musisz być zalogowany aby muc dodać ogłoszenie
          </Typography>
        </Content>
      );
    }
    return (
      <Content>
        <Typography variant="h3" color="primary" align="center">
          Dodawanie ogłoszenia
        </Typography>
        <Grid container justify="flex-start">
          <Grid item xs={4}>
            Szteper
          </Grid>
          <Grid item xs={8}>
            Formulasz
          </Grid>
        </Grid>
      </Content>
    );
  }
}

export default AddPage;
