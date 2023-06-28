import React from "react";
import {
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const languages = ["HTML", "CSS", "JavaScript", "Python", "Java"];

const frameworks = [
  "React",
  "Bootstrap",
  "Material UI",
  "Handlebars",
  "Express",
  "Node",
  "jQuery",
  "MySQL",
  "MongoDB",
  "Mongoose",
  "Sequelize",
];

const interests = [
  "Cycling",
  "Hiking",
  "Cooking (and eating)",
  "Playing guitar",
  "Coding",
];

export const Resume = () => {
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
        Resume
      </h1>
      <Grid container>
          <Grid item xs={12}>
            <List>
              {languages.map((language, index) => {
                return (
                  <ListItem key={index}>
                    <ListItemText>{language}</ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
      </Grid>
    </div>
  );
};
