import React from "react";
import {
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const languages = [
  "HTML", 
  "CSS", 
  "JavaScript", 
  "Python", 
  "Java"
];

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
      <h5 style={{
        marginLeft: "40px",
        textAlign: "left"
        }}>
        <a href='src/utils/MarcusJonasResume.pdf' download>Click to download Resume</a>
      </h5>

      <h2
        style={{
          textAlign: "left",
          marginTop: "40px",
          marginLeft: "40px",
          width: "75%",
        }}
      >
        Programming Language
      </h2>
      <Grid container>
        <Grid item xs={12}>
          <List>
            {languages.map((language, index) => {
              return (
                <ListItem key={index} style={{marginLeft: '40px'}}>
                    <ListItemText primary={language} />
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
      <h2
        style={{
          textAlign: "left",
          marginTop: "40px",
          marginLeft: "40px",
          width: "75%",
        }}
      >
        Interests
      </h2>
      <Grid container>
        <Grid item xs={12}>
          <List>
            {interests.map((interest, index) => {
              return (
                <ListItem key={index} style={{marginLeft: '40px'}}>
                    <ListItemText primary={interest} />
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};
