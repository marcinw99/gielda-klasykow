import React, { Component, Fragment } from "react";
import {
  GridList,
  GridListTile,
  Modal,
  withStyles,
  Paper,
  Fab
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

const styles = theme => ({
  avatar: {
    display: "block",
    width: "100%",
    "border-right": "1px solid rgba(0,0,0,0)"
  },
  gridList: {
    width: "100%",
    maxHeight: "80vh",
    overflowY: "auto"
  },
  fullSizeImage: {
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain"
  },
  paper: {
    position: "relative",
    outline: "none",
    marginTop: "2.5vh",
    marginLeft: "auto",
    marginRight: "auto",
    width: "90vw",
    height: "95vh"
  },
  closeBtn: {
    position: "absolute",
    top: "2%",
    right: "2%"
  }
});

class Gallery extends Component {
  state = {
    modalOpen: false,
    modalImage: "/static/noImageAvailable.jpg"
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  handleModalOpen = src => {
    this.setState({
      modalOpen: true,
      modalImage: src
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div>
          <img
            className={classes.avatar}
            src={this.props.avatar || "/static/noImageAvailable.jpg"}
            alt="Zdjęcie ogłoszenia"
          />
          <GridList
            cellHeight={200}
            spacing={1}
            cols={4}
            className={classes.gridList}
          >
            {this.props.photos.map(photo => (
              <GridListTile
                key={photo}
                cols={1}
                onClick={() => this.handleModalOpen(photo)}
              >
                <img src={photo} alt="Samochód" />
              </GridListTile>
            ))}
          </GridList>
        </div>
        <Modal
          aria-labelledby="gallery-modal"
          open={this.state.modalOpen}
          onClose={this.handleModalClose}
        >
          <Paper className={classes.paper}>
            <div
              className={classes.fullSizeImage}
              style={{ backgroundImage: `url("${this.state.modalImage}")` }}
            />
            <Fab
              color="secondary"
              onClick={this.handleModalClose}
              className={classes.closeBtn}
            >
              <Close />
            </Fab>
          </Paper>
        </Modal>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Gallery);
