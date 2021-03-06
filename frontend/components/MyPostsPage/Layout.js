import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import {
  withStyles,
  LinearProgress,
  Typography,
  Grid
} from "@material-ui/core";
import getErrorMessage from "../universal/getErrorMessage";
import Post from "./Post";
import ConfirmationDialog from "../universal/ConfirmationDialog";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: "2vh",
    paddingLeft: "2vw",
    paddingRight: "2vw"
  },
  item: {
    margin: theme.spacing.unit * 0.5
  },
  title: {
    marginTop: theme.spacing.unit * 2
  }
});

const Title = withStyles(styles)(({ classes }) => (
  <Typography
    color="primary"
    variant="h3"
    align="center"
    className={classes.title}
  >
    Twoje ogłoszenia
  </Typography>
));

class Layout extends Component {
  state = {
    dialogOpen: false,
    dialogAttributes: {
      action: "",
      title: "",
      content: ""
    }
  };

  confirmDelete = id => {
    this.setState({
      dialogOpen: true,
      dialogAttributes: {
        action: { type: "delete", args: { id } },
        title: "Usunąć to ogłoszenie?",
        content:
          "Zamierzasz usunąć jedno ze swoich ogłoszeń, ta akcja jest nieodwracalna."
      }
    });
  };

  handleDelete = ({ id }) => {
    this.props.deletePost({ variables: { id } });
  };

  confirmHandler = action => {
    switch (action.type) {
      case "delete":
        this.handleDelete(action.args);
        break;
      default:
        break;
    }
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  render() {
    return (
      <Fragment>
        <Title />
        <Grid container className={this.props.classes.root}>
          {this.props.posts.map(item => (
            <Grid
              item
              xl={2}
              lg={3}
              md={4}
              sm={6}
              xs={12}
              key={item.id}
              className={this.props.classes.item}
            >
              <Post
                data={item}
                handleDelete={this.confirmDelete}
                handleEdit={() => null}
              />
            </Grid>
          ))}
        </Grid>
        <ConfirmationDialog
          open={this.state.dialogOpen}
          {...this.state.dialogAttributes}
          handleClose={this.handleDialogClose}
          confirmHandler={this.confirmHandler}
        />
      </Fragment>
    );
  }
}

export const LoadingLayout = props => (
  <Fragment>
    <LinearProgress />
    <Title />
  </Fragment>
);

export const ErrorLayout = ({ error }) => (
  <Fragment>
    <Title />
    <Typography>{getErrorMessage(error)}</Typography>
  </Fragment>
);

Layout.propTypes = {
  deletePost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

export default withStyles(styles)(Layout);
