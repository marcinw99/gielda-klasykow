import React from "react";
import { withStyles, GridList, GridListTile } from "@material-ui/core";

const styles = theme => ({
  avatar: {
    display: "block",
    width: "100%"
  },
  gridList: {
    width: "100%",
    maxHeight: "80vh",
    overflowY: "auto"
  }
});

const Gallery = props => (
  <div>
    <img
      className={props.classes.avatar}
      src={props.avatar || "/static/noImageAvailable.jpg"}
      alt="Zdjęcie ogłoszenia"
    />
    <GridList
      cellHeight={200}
      spacing={1}
      cols={4}
      className={props.classes.gridList}
    >
      {props.photos.map(photo => (
        <GridListTile key={photo} cols={1}>
          <img src={photo} alt="Samochód" />
        </GridListTile>
      ))}
    </GridList>
  </div>
);

export default withStyles(styles)(Gallery);
