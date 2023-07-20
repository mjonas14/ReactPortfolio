import React from "react";

function Email(props) {
  console.log(props);
  if (props.check === "") {
    return;
  }

  if (props.check === "required") {
    return <h3>Email is required!</h3>;
  }

  if (props.check === "invalid") {
    return <h3>Invalid email address!</h3>;
  }
}

export default Email;
