import React from "react";
import "./css/about.css";

import Arnav from "./img/Arnav.png";
import Yash from "./img/Yash.png";
import Tanishq from "./img/Tanishq.png";
import Aryan from "./img/aryan1.png";
import Poster from './img/poster.png'
import cp from './img/cf.png'

function About() {
  return (
    <div className="snap">
    <div className="about" >
      
      <div class="background">
        <div class="wrapper ">
          <h1>Our Team</h1>
          <div class="team">
            <div class="team_member">
              <div class="team_img">
                <img src={Tanishq} alt="Team_image/" />
              </div>
              <h3>Tanishq Khandelwal</h3>
              <p class="role">Team Leader</p>
              <p></p>
            </div>
            <div class="team_member">
              <div class="team_img">
                <img src={Arnav} alt="Team_image" />
              </div>
              <h3>Arnav Gupta</h3>
              <p class="role">Team Member</p>
              <p></p>
            </div>
            <div class="team_member">
              <div class="team_img">
                <img src={Yash} alt="Team_image" />
              </div>
              <h3>Yash Bhat</h3>
              <p class="role"> Team Member</p>
              <p></p>
            </div>
            <div class="team_member">
              <div class="team_img">
                <img src={Aryan} alt="Team_image" />
              </div>

              <h3>Aryan Varmani</h3>
              <p class="role">Team Member</p>
              <p></p>
            </div>
          </div>

          <p></p>
        </div>

        <div className="abot">
          <p>
            
            The main objective of our project was to spread awareness about land
            emissions and their impact on the environment. We used posters ,
            surveys and other resources to aware our neighbors, friends, family
            and people, as this knowledge extremely crucial in today’s world for
            a healthy environment.
          </p>
        </div>
        <div id="imgy">
        <img src={cp} alt="" srcset=""  height={"390px"} className="lf"/>
        </div>
        
      </div>
      <div className="snap">
      <div className="part2 ">
        <h1 className="sur">Survey</h1>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdLyEEg8d5Zk3PBZS66htBGNSeAzCOkLBSaI2YjJNc3VdkfoA/viewform?embedded=true" width="940" height="850px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div></div>
      </div>
    </div>
  );
}

export default About;
