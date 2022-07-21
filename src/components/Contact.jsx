import React from "react";
import "./css/abstract.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesInit from "./config/particles-config";
import conf from "./config/particles-config";
import ParticleBackground from "./Particlebackground";



function Contact() {
  return (
    <div>
      <div className="contact">
        <div class="container">
          <conf></conf>
          <div class="row align-items-center my-0">
            <div class="col-lg-0"></div>
            <div class="col-lg-30">
              <div id="abs">
                <h1
                  class="font-weight-light"
                  id="lab1"
                  style={{ padding: "2vh" }}
                >
                  Abstract
                </h1>
                

                <p id="para">
                  A waste management system is the strategy an organization uses
                  to dispose, reduce, reuse, and prevent waste. Possible waste
                  disposal methods are recycling, composting, incineration,
                  landfills, bioremediation, waste to energy, and waste
                  minimization. Waste management life cycle. There are eight
                  major categories of waste management, and each of them can be
                  divided into numerous sub-categories. The categories include
                  source reduction and reuse, animal feeding, recycling,
                  composting, fermentation, landfills, incineration, and land
                  application. Landfills become the compulsion for the disposal
                  of large amount of Municipal Solid Wastes (MSW). Landfills
                  have historically been seen as the ultimate solution for
                  storing wastes at minimum cost. The disposal of tons of
                  garbage daily without any treatment and segregation create
                  heaps at landfill sites. In developing countries like India,
                  landfills are generally unscientific and create problems such
                  as air pollution from burning of wastes at landfill sites and
                  pollution of groundwater as well as deterioration of the
                  quality of soil (from leachate-the liquid residue that forms
                  as water or moisture content seeps through contaminated areas
                  and mixes with surfaces and groundwater). This study
                  investigates emissions from landfills and the effect these
                  emissions may have on human health. Landfill emissions contain
                  methane, carbon dioxide, malodour compounds, and volatile
                  organic compounds (VOCs). It also suggest various approaches
                  for waste management at landfills, and to facilitate some
                  approaches as policy instruments. The waste hierarchy
                  (recycling/reduction, materials recovery, incineration,
                  landfilling and composting) can be developed as a thumb rule
                  from an environmental aspect.This study shows that reduced
                  landfilling in privilege of increased recycling of materials
                  and energy lead to lower environmental impact, lower health
                  hazard, and lesser consumption of energy resources, lower
                  economic costs and finally sustainable waste management.
                </p>
                
                <ParticleBackground></ParticleBackground>
              </div>
            </div>
          </div>
          
        </div>
        
        
      </div>
      
    </div>
     
  );
}

export default Contact;
