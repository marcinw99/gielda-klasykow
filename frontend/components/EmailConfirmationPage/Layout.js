import React, { Component } from "react";
import {
  Typography,
  LinearProgress,
  Grid,
  withStyles
} from "@material-ui/core";
import getErrorMessage from "../universal/getErrorMessage";

const styles = theme => ({
  root: {
    marginTop: "20vh"
  }
});

const StyledContainer = withStyles(styles)(({ classes, ...other }) => (
  <Grid container justify="center" className={classes.root} {...other} />
));

export default class Layout extends Component {
  componentDidMount() {
    this.props.confirm();
  }
  render() {
    const { error, loading, data } = this.props.payload;
    if (error)
      return (
        <StyledContainer>
          <Typography color="secondary" variant="h5">
            {getErrorMessage(error)}
          </Typography>
        </StyledContainer>
      );
    if (loading) return <LinearProgress />;
    if (data)
      return (
        <StyledContainer>
          <Typography variant="h5" color="primary">
            E-mail został potwierdzony, witamy na Giełdzie Klasyków
          </Typography>
        </StyledContainer>
      );
    return null;
  }
}
