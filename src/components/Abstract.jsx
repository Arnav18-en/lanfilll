import React from "react";
import './css/abstract.css'

function Contact() {
  return (
    <div className="abstract">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Abstract</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.</p></div>

              <div class="buttons">
              <a href='https://www.fao.org/uploads/pics/Banner_640x360_EN_IDAFLW2021.png'>
              <button>Download PDF</button> 
             </a>
            </div>

            
          
        </div>
      </div>
    </div>
  );
}

export default Abstract;
