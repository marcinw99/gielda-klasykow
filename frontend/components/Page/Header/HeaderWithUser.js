import React from "react";
import { Mutation } from "react-apollo";
import { Typography, Button, Grid, Slide } from "@material-ui/core";

import { SIGNOUT_MUTATION } from "../../../src/Mutations/Login";
import { CURRENT_USER_QUERY } from "../../../src/QueryComponents/User";

export default props => (
  <Slide
    in={Boolean(props.thisUser)}
    direction="left"
    mountOnEnter
    unmountOnExit
    timeout={{ enter: 1200, exit: 0 }}
  >
    <Grid justify="flex-end" container direction="row">
      <Typography variant="h4">
        {props.thisUser && props.thisUser.name}
      </Typography>
      <SignOut />
    </Grid>
  </Slide>
);

const SignOut = () => {
  return (
    <Mutation
      mutation={SIGNOUT_MUTATION}
      refetchQueries={[
        {
          query: CURRENT_USER_QUERY
        }
      ]}
    >
      {send => (
        <Button onClick={send} variant="outlined">
          Wyloguj się
        </Button>
      )}
    </Mutation>
  );
};
