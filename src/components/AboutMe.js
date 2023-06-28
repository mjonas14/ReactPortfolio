import React from "react";
import Image from '../utils/images/2021_MarcusJonas_Headshot.jpeg';

export const AboutMe = () => {
  return (
    <div>
        <h1 style={{
            textAlign: 'left',
            marginTop: '40px',
            marginLeft: '40px',
            width: '75%',
        }}>
            About Me
        </h1>

        <img src={Image} alt="Picture of me" />

        <h3 style={{
            textAlign: 'left',
            marginLeft: '40px',
            width: '75%',
        }}>
            Hi and welcome to my page. My name is Marcus Jonas. I was born in London, UK, 
            in December 1998 where I spent all of my childhood and through high school. 
            During the latter years of middle school and through high school, I competed at 
            a high level in rowing, representing my national team (GB) at the Coupe de la Jeunesse in 
            Poznan Poland in 2016, as well as at a regatta in Munich Germany, in 2015. 
            I studied at Princeton University from 2017 
            until spring of 2021, graduating with a degree in Mechanical and Aerospace Engineering with 
            a certificate in Robotics and Intelligent Systems. Much of the latter part of 
            my experience was affected by COVID-19. This provided a very unique experience 
            for me and my cohort, though we do wish to have had a normal senior year. 
            Then again, it can be seen as a blessing if looked at a different way. 
            
            <br></br>
            <br></br>
            
            Then I joined this bootcamp in January 2023, and am having a blast. I am currently working 
            in the Quantitative Analytics department at a company called Fremont Group, 
            who are based here in San Francisco. I joined this position straight out of 
            college and have really enjoyed it. This coding bootcamp will hopefully provide 
            me with the necesary coding abilities to move forward in my career as a 
            software engineer. I did a bit during my years at Princeton, but so far 
            my eyes have been opened to html and css (much of what has been used to program 
            this website). Hope you enjoy the content below, and please dont hesitate to 
            reach out if you have any questions. 
        </h3>
    </div>
  );
};
