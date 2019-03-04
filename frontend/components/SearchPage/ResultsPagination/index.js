import React from "react";
import { Grid } from "@material-ui/core";
import { FirstPage } from "@material-ui/icons";
import { StyledPageNumber } from "./styledComponents";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "inline-block",
    margin: theme.spacing.unit
  }
});

const Pagination = props => {
  const handleChange = activePage => {
    props.setValueInMainState({ activePage });
  };
  return props.resultsAmount === 0 ? null : (
    <div className={props.classes.root}>
      <Grid container spacing={8}>
        {props.activePage > 2 ? (
          <Grid item>
            <StyledPageNumber onClick={() => handleChange(1)}>
              <FirstPage />
            </StyledPageNumber>
          </Grid>
        ) : null}
        {props.activePage !== 1 ? (
          <Grid item>
            <StyledPageNumber
              onClick={() => handleChange(props.activePage - 1)}
            >
              {props.activePage - 1}
            </StyledPageNumber>
          </Grid>
        ) : null}
        <Grid item>
          <StyledPageNumber disabled>{props.activePage}</StyledPageNumber>
        </Grid>
        {props.pageInfo.hasNextPage ? (
          <Grid item>
            <StyledPageNumber
              onClick={() => handleChange(props.activePage + 1)}
            >
              {props.activePage + 1}
            </StyledPageNumber>
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Pagination);
