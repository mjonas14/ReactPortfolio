import React from "react";
import { Grid } from "@mui/material";

export const Portfolio = () => {
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
        Portfolio
      </h1>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <h1>Test 1</h1>
        </Grid>
        <Grid item xs={6}>
          <h1>2</h1>
        </Grid>
        <Grid item xs={6}>
          <h1>3</h1>
        </Grid>
        <Grid item xs={6}>
          <h1>4</h1>
        </Grid>
      </Grid>

      <section id="my-projects">
        <h2>My Projects</h2>
        <section class="my-projects">
          <section class="project1">
            <a
              href="https://mjonas14.github.io/horiseon-refactor/"
              target="_blank"
            >
              <img
                src="./assets/images/digital-marketing-meeting.jpg"
                class="projImg"
                alt="image showing the cover image for project 1, Horiseon"
              />
              <h3 class="textOverlap">Project 1: Horiseon</h3>
            </a>
          </section>
          <section class="project">
            <a href="https://mjonas14.github.io/AboutMe/" target="_blank">
              <img
                src="./assets/images/portfolio-cover-picture.jpeg"
                class="projImg"
                alt="image showing a desk with work on it"
              />
              <h3 class="textOverlap">Project 2: Portfolio</h3>
            </a>
          </section>
          <section class="project">
            <a
              href="https://camerong7.github.io/Forecast_Flix/"
              target="_blank"
            >
              <img
                src="assets/images/ForecastFlix2.png"
                class="projImg"
                alt="image showing the cover image for project, Forecast Flix"
              />
              <h3 class="textOverlap">Project 3: fORECAST fLIX</h3>
            </a>
          </section>
          <section class="project">
            <a
              href="http://sheltered-reef-22263.herokuapp.com/home"
              target="_blank"
            >
              <img
                src="./assets/images/ReelReviews.png"
                class="projImg"
                alt="image showing the cover image for project ReelReviews"
              />
              <h3 class="textOverlap">Project 4: ReelReviews</h3>
            </a>
          </section>
          <section class="project"></section>
        </section>
      </section>
    </div>
  );
};
