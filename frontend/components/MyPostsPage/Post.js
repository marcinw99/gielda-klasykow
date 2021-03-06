import React from "react";
import Link from "next/link";
import {
  Typography,
  withStyles,
  Grid,
  Fab,
  Card,
  CardActionArea,
  CardMedia
} from "@material-ui/core";
import { compose } from "recompose";
import PropTypes from "prop-types";

import { withSnackbar } from "../Snackbar/Context";
import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons";
import displayedText from "../../resources/displayedText";

const styles = theme => ({
  root: {
    borderRadius: 0,
    position: "relative"
  },
  media: {
    height: 280
  },
  infoContainer: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: 0,
    right: 0,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 1.5}px`,
    background: "rgba(78,52,46,0.75)"
  },
  leftTypography: {
    color: theme.palette.primary.contrastText
  },
  actionsContainer: {
    position: "absolute",
    padding: theme.spacing.unit * 1.5,
    bottom: 0,
    right: 0
  },
  button: {
    zIndex: 1001
  }
});

function Post({ classes, data, handleDelete, manageSnackbar }) {
  const handleEdit = () => {
    manageSnackbar({
      open: true,
      message: `Funkcjonalność jeszcze nie zaimplementowana.`,
      variant: "info"
    });
  };

  return (
    <Card className={classes.root}>
      <Link href={`/klasyk/?id=${data.id}`} as={`/klasyk/${data.id}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={data.avatar || "/static/noImageAvailable.jpg"}
          >
            <Grid
              container
              justify="space-between"
              className={classes.infoContainer}
            >
              <Typography
                variant="h6"
                className={classes.leftTypography}
              >{`${displayedText("brand", data.car.brand)} ${data.car.model ||
                ""}`}</Typography>
              <Typography variant="h6" color="secondary">
                {data.price} PLN
              </Typography>
            </Grid>
          </CardMedia>
        </CardActionArea>
      </Link>
      <Grid
        container
        justify="flex-end"
        spacing={16}
        className={classes.actionsContainer}
      >
        <Grid item>
          <Fab color="primary" className={classes.button} onClick={handleEdit}>
            <EditIcon />
          </Fab>
        </Grid>
        <Grid item>
          <Fab
            color="primary"
            className={classes.button}
            onClick={() => handleDelete(data.id)}
          >
            <DeleteIcon />
          </Fab>
        </Grid>
      </Grid>
    </Card>
  );
}

Post.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  withSnackbar
)(Post);
