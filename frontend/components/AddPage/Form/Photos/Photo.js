import React from "react";
import { Fab, withStyles } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";

const styles = theme => ({
  root: {
    position: "relative"
  },
  elementButton: {
    position: "absolute",
    top: theme.spacing.unit * 1.5,
    right: theme.spacing.unit * 1.5
  },
  element: {
    border: "2px solid rgba(0,0,0,0)"
  },
  elementAsAvatar: {
    border: `2px solid ${green[500]}`
  }
});

const Photo = props => {
  return (
    <div className={props.classes.root}>
      <img
        src={props.item.preview}
        alt="obrazek"
        width="250"
        className={
          props.avatar === props.item.photo
            ? props.classes.elementAsAvatar
            : props.classes.element
        }
        onClick={() =>
          props.handleChange({ name: "avatar", value: props.item.photo })
        }
      />
      <Fab
        size="small"
        className={props.classes.elementButton}
        onClick={() => props.handleRemove(props.item)}
      >
        <Delete />
      </Fab>
    </div>
  );
};

export default withStyles(styles)(Photo);
