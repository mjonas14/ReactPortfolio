import React from "react";
import { Grid } from "@mui/material";
import portfolioCoverImg from "../utils/portfolio-cover-picture.jpeg";
import reelReviewsImg from "../utils/ReelReviews.png";
import forecastFlixImg from "../utils/ForecastFlix.png";
import horiseonImg from "../utils/digital-marketing-meeting.jpg";
import GROWImg from "../utils/GROW-Cover-Image.png";

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

      <h2>My Projects</h2>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6}>
        <section class="project1">
            <a
              href="https://mjonas14.github.io/horiseon-refactor/"
              target="_blank"
            >
              <img
                src={horiseonImg}
                class="projImg"
                alt="image showing the cover image for project 1, Horiseon"
              />
              <h3 class="textOverlap">Project 1: Horiseon</h3>
            </a>
          </section>
        </Grid>
        <Grid item xs={6}>
        <section class="project">
            <a href="https://mjonas14.github.io/AboutMe/" target="_blank">
              <img
                src={portfolioCoverImg}
                class="projImg"
                alt="image showing a desk with work on it"
              />
              <h3 class="textOverlap">Project 2: Portfolio</h3>
            </a>
          </section>
        </Grid>
        <Grid item xs={6}>
        <section class="project">
            <a
              href="https://camerong7.github.io/Forecast_Flix/"
              target="_blank"
            >
              <img
                src={forecastFlixImg}
                class="projImg"
                alt="image showing the cover image for project, Forecast Flix"
              />
              <h3 class="textOverlap">Project 3: fORECAST fLIX</h3>
            </a>
          </section>
        </Grid>
        <Grid item xs={6}>
        <section class="project">
            <a
              href="http://sheltered-reef-22263.herokuapp.com/home"
              target="_blank"
            >
              <img
                src={reelReviewsImg}
                class="projImg"
                alt="image showing the cover image for project ReelReviews"
              />
              <h3 class="textOverlap">Project 4: ReelReviews</h3>
            </a>
          </section>
        </Grid>
        <Grid item xs={6}>
        <section class="project">
            <a
              href="https://grow-react-787be2a9ebf7.herokuapp.com/"
              target="_blank"
            >
              <img
                src={GROWImg}
                class="projImg"
                alt="image showing the cover image for project GROW"
              />
              <h3 class="textOverlap">Project 5: G.R.O.W</h3>
            </a>
          </section>
        </Grid>
      </Grid>
    </div>
  );
};
