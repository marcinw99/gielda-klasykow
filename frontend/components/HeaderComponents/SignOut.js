import React from "react";
import { Mutation } from "react-apollo";

import { SIGNOUT_MUTATION } from "../../src/Mutations/HeaderMutations";
import { CURRENT_USER_QUERY } from "../../src/Queries/User";
import { Button } from "@material-ui/core";

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

export default SignOut;
