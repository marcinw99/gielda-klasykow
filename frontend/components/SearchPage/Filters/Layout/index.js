import React, { PureComponent, Fragment } from "react";
import {
  Fab,
  Drawer,
  SwipeableDrawer,
  withWidth,
  withStyles
} from "@material-ui/core/";
import { FilterList } from "@material-ui/icons";
import PropTypes from "prop-types";
import { remove } from "lodash";
import { compose } from "recompose";

import Form from "./Form";
import EngineAndDriveModal from "./modals/EngineAndDriveModal";
import BodyAndAppereanceModal from "./modals/BodyAndAppereanceModal";
import AdditionalAccessoriesModal from "./modals/AdditionalAccessoriesModal";
import VehicleStatusModal from "./modals/VehicleStatusModal";

const styles = theme => ({
  drawer: {
    width: theme.custom.drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    paddingTop: theme.custom.headerHeight,
    width: theme.custom.drawerWidth,
    background: theme.palette.primary.main
  },
  swipeableDrawer: {
    maxWidth: theme.custom.drawerWidth,
    flexShrink: 0
  },
  swipeableDrawerPaper: {
    maxWidth: theme.custom.drawerWidth,
    background: theme.palette.primary.main
  },
  filterBtn: {
    position: "fixed",
    top: "50%",
    left: 8,
    transform: "translateY(-50%)",
    zIndex: 2000
  }
});

class Layout extends PureComponent {
  state = {
    openedModal: false,
    openedDrawer: false
  };

  openDrawer = () => {
    this.setState({ openedDrawer: true });
  };

  closeDrawer = () => {
    this.setState({ openedDrawer: false });
  };

  openModal = name => {
    this.setState({
      openedModal: name,
      openedDrawer: false
    });
  };

  closeModal = () => {
    this.setState({
      openedModal: false
    });
  };

  submitModal = () => {
    this.setState(
      {
        openedModal: false
      },
      () => {
        this.props.manualResultsRefetch();
      }
    );
  };

  handleMultiCheckboxChange = field => event => {
    var result;
    const prevValue = [...this.props.values[field]];
    const { value, checked } = event.target;
    if (checked && prevValue.indexOf(value) === -1) {
      result = [...prevValue, value];
    }
    if (!checked && prevValue.indexOf(value) !== -1) {
      result = remove(prevValue, item => item !== value);
    }
    this.props.handleChangeWithoutFiltering({
      name: field,
      value: result
    });
  };

  render() {
    const modalProps = {
      openedModal: this.state.openedModal,
      handleChangeWithoutFiltering: this.props.handleChangeWithoutFiltering,
      handleMultiCheckboxChange: this.handleMultiCheckboxChange,
      values: this.props.values,
      resetSpecificFiltersWithoutFiltering: this.props
        .resetSpecificFiltersWithoutFiltering,
      options: this.props.options,
      submitModal: this.submitModal,
      closeModal: this.closeModal
    };
    const formProps = {
      values: this.props.values,
      options: this.props.options,
      handleChange: this.props.handleChange,
      automaticFiltering: this.props.automaticFiltering,
      toggleAutomaticFiltering: this.props.toggleAutomaticFiltering,
      openModal: this.openModal,
      closeDrawer: this.closeDrawer
    };
    const { width, classes } = this.props;
    return (
      <Fragment>
        {width === "xs" || width === "sm" ? (
          <Fragment>
            {this.state.openedDrawer === false ? (
              <Fab
                onClick={this.openDrawer}
                color="primary"
                className={classes.filterBtn}
              >
                <FilterList />
              </Fab>
            ) : null}
            <SwipeableDrawer
              disableBackdropTransition={true}
              className={classes.swipeableDrawer}
              classes={{
                paper: classes.swipeableDrawerPaper
              }}
              anchor="left"
              open={this.state.openedDrawer}
              onOpen={this.openDrawer}
              onClose={this.closeDrawer}
            >
              <Form {...formProps} />
            </SwipeableDrawer>
          </Fragment>
        ) : (
          <Drawer
            className={classes.drawer}
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            anchor="left"
          >
            <Form {...formProps} />
          </Drawer>
        )}
        <EngineAndDriveModal {...modalProps} />
        <BodyAndAppereanceModal {...modalProps} />
        <AdditionalAccessoriesModal {...modalProps} />
        <VehicleStatusModal {...modalProps} />
      </Fragment>
    );
  }
}

Layout.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired
};

export default compose(
  withWidth(),
  withStyles(styles)
)(Layout);
