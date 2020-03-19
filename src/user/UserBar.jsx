import React, { useContext } from "react";

import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import { StateContext } from "../contexts";

export default function UserBar() {
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;

  if (user) {
    return <Logout user={user} dispatch={dispatch} />;
  } else {
    return (
      <React.Fragment>
        <Login dispatch={dispatch} />
        <Register dispatch={dispatch} />
      </React.Fragment>
    );
  }
}
