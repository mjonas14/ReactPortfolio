import React, { useState } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import Email from "./validate/Email";

var emailValidation = "";
const validate = (values) => {
  if (!values) {
    emailValidation = "required";
    return "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    emailValidation = "invalid";
    return "Invalid email address";
  }
};

export const Contact = () => {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [textInput, setTextInput] = useState("");

  return (
    <div>
      <h1
        style={{
          textAlign: "left",
          marginTop: "40px",
          marginLeft: "40px",
          width: "75%",
        }}
      >
        Contact Me
      </h1>

      <Grid container spacing={0.5}>
        <Grid item xs={12}>
          <h2 style={{ textAlign: "left", marginLeft: "40px" }}>Name</h2>
        </Grid>
        <Grid item xs={12}>
          <TextField
            style={{ float: "left", marginLeft: "40px", width: "20%" }}
            variant="outlined"
            value={nameInput}
            placeholder="Name"
            onChange={(event) => {
              setNameInput(event.target.value);
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <h2 style={{ textAlign: "left", marginLeft: "40px" }}>Email</h2>
        </Grid>
        <Grid item xs={12}>
          <TextField
            style={{ float: "left", marginLeft: "40px", width: "20%" }}
            variant="outlined"
            value={emailInput}
            placeholder="Email address"
            onChange={(event) => {
              setEmailInput(event.target.value);
              console.log(event.target.value);
              console.log(validate(event.target.value));
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <h2 style={{ textAlign: "left", marginLeft: "40px" }}>Message</h2>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={8}
            style={{ float: "left", marginLeft: "40px", width: "50%" }}
            variant="outlined"
            value={textInput}
            placeholder="Please type your message here"
            onChange={(event) => {
              setTextInput(event.target.value);
            }}
          />
        </Grid>
      </Grid>
      <Email check={emailValidation} />
      <Button variant="contained" style={{ float: "left", margin: "40px" }}>
        Submit
      </Button>
    </div>
  );
};
