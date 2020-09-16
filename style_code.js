//style_code

style_CODE={
    about_us:`/*about-us css*/
    
    .slick-slider {
      position: relative;
      display: block;
      box-sizing: border-box;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-touch-callout: none;
      -khtml-user-select: none;
      -ms-touch-action: pan-y;
      touch-action: pan-y;
      -webkit-tap-highlight-color: transparent;
  }

    .slick-slider-inner {
      width: 100%;
      height: 120vh;
    }
    
    .slick-slider-inner img {
      width: 100%;
      height: 100%;
    }
    
    @media screen and (max-width: 768px) {
      .slick-slider-inner {
        height: 40vh;
      }
    }
    
    .about-tag-line {
      width: 100%;
      background: #FAFAFA;
      padding: 20px;
      position: relative;
    }
    
    .about-tag-line::after {
      position: absolute;
      content: '';
      top: 3%;
      bottom: 3%;
      left: 10px;
      width: 3px;
      background: #FF9F1C;
      border-radius: 4px;
    }
    
    .about-tag-line p {
      font-weight: 500;
      font-family: "DM Sans", sans-serif;
      font-size: 25px;
      line-height: 1.5;
      letter-spacing: 2px;
    }
    
    @media screen and (max-width: 768px) {
      .about-tag-line p {
        font-size: 20px !important;
        letter-spacing: 0px !important;
        line-height: 1 !important;
      }
    }
    
    @media screen and (max-width: 375px) {
      .about-tag-line p {
        line-height: 1.2 !important;
        font-size: 16px !important;
        letter-spacing: 0px !important;
      }
    }
    
    .about-hr {
      width: 30%;
      border: 1px solid #FF9F1C;
      margin: 10px auto;
    }
    
    .brands-head {
      padding: 20px;
      color: #011627;
      font-size: 40px;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      text-align: center;
      background-color: #FAFAFA;
      font-family: "Raleway", sans-serif;
      font-weight: 400;
      position: relative;
    }
    
    .brand-slider {
      width: 100%;
      height: auto;
      margin-top: 20px;
      margin-bottom: 20px !important;
    }
    
    .brand-slider .brand-card {
      width: 200px;
      -webkit-box-shadow: 0px 0px 12px rgba(128, 128, 128, 0.472);
              box-shadow: 0px 0px 12px rgba(128, 128, 128, 0.472);
      height: 200px;
      background-color: #FAFAFA;
      border-radius: 8px;
      margin: 10px 20px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      overflow: hidden;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
    }
    
    .brand-slider .brand-card img {
      width: 100%;
      height: 100%;
    }
    
    @media screen and (max-width: 768px) {
      .brand-slider .brand-card {
        height: 150px !important;
      }
    }
    
    @media screen and (max-width: 425px) {
      .brands-head {
        font-size: 25px !important;
      }
      .brand-slider .brand-card {
        -webkit-box-shadow: 0px 0px 8px 4px rgba(128, 128, 128, 0.298);
                box-shadow: 0px 0px 8px 4px rgba(128, 128, 128, 0.298);
        width: 120px;
        height: 120px;
      }
    }
    
    @media screen and (max-width: 370px) {
      .brand-slider .brand-card {
        width: 100px !important;
        height: 100px !important;
      }
    }
    
    @media screen and (max-width: 350px) {
      .brand-slider .brand-card {
        height: 80px !important;
      }
    }
      
  
    
   
    `,
    header:`/*header css*/
    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
    }
    
    body {
      min-height: 100vh;
      min-height: -webkit-fill-available;
      overflow-x: hidden;
    background-image:none !important;
    background-color: #fdfffc !important;
    }
    
    html {
      height: -webkit-fill-available;
    }
    
    header {
   
    
      display: -webkit-box !important;
       position: relative !important;
      display: -ms-flexbox !important;
      display: flex !important;
      -webkit-box-pack: justify !important;
          -ms-flex-pack: justify !important;
              justify-content: space-between !important;
      -webkit-box-align: center !important;
          -ms-flex-align: center !important;
              align-items: center !important;
      background-color: #011627 !important;
      height: 10vh !important;
      width: 100vw !important;
      box-shadow:none !important;
    }
    
    header .nav-links {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      list-style: none;
      width: 50%;
      height: 100%;
      -ms-flex-pack: distribute;
          justify-content: space-around;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
    }
    
    header .nav-links .nav-link a {
      word-spacing: 3px;
      color: #FAFAFA;
      text-decoration: none;
      font-family: "DM Sans", sans-serif;
    }
    
    header .nav-links .nav-link {
      position: relative;
    }
    
    header .nav-links .nav-link::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: .5px;
      background-color: #FF9F1C;
      -webkit-transform: scaleX(0);
              transform: scaleX(0);
      -webkit-transition: -webkit-transform .3s ease-in-out;
      transition: -webkit-transform .3s ease-in-out;
      transition: transform .3s ease-in-out;
      transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
    }
    
    header .nav-links .nav-link:hover::after, header .nav-links .nav-link:focus::after {
      -webkit-transform: scaleX(1);
              transform: scaleX(1);
    }
    
    #active-link::after {
      -webkit-transform: scale(1) !important;
              transform: scale(1) !important;
    }
    
    @media screen and (max-width: 768px) {
      .nav-links {
        pointer-events: none !important;
        -webkit-box-orient: vertical !important;
        -webkit-box-direction: normal !important;
            -ms-flex-direction: column !important;
                flex-direction: column !important;
        position: fixed !important;
        width: 100% !important !important;
        top: 10vh !important;
        right: 0 !important;
        background-color: #011627 !important;
        height: 90vh !important;
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important;
        z-index: 999 !important;
        padding-bottom: 80px !important;
        -webkit-clip-path: circle(100px at 90% -25%) !important;
                clip-path: circle(100px at 90% -25%) !important;
        -webkit-transition: all .6s ease-out !important;
        transition: all .6s ease-out !important;
      }
      .nav-links::after {
        content: '';
        position: absolute !important;
        width: 50% !important;
        height: 200px !important;
        bottom: 12% !important;
        right: -20% !important;
        background-color: rgba(255, 159, 28, 0.2) !important;
        z-index: -1 !important;
      }
      .nav-links::before {
        content: '' !important;
        position: absolute !important;
        width: 50% !important;
        height: 200px !important;
        top: 12% !important;
        left: -20% !important;
        background-color: rgba(255, 159, 28, 0.2) !important;
        z-index: -1 !important;
      }
      .nav-links .nav-link {
        opacity: 0 !important;
      }
      .nav-links .nav-link:nth-child(1) {
        -webkit-transition: all .5s ease-in .2s !important;
        transition: all .5s ease-in .2s !important;
      }
      .nav-links .nav-link:nth-child(2) {
        -webkit-transition: all .5s ease-in .4s !important;
        transition: all .5s ease-in .4s !important;
      }
      .nav-links .nav-link:nth-child(3) {
        -webkit-transition: all .5s ease-in .6s !important;
        transition: all .5s ease-in .6s !important;
      }
      .nav-links .nav-link:nth-child(4) {
        -webkit-transition: all .5s ease-in .8s !important;
        transition: all .5s ease-in .8s !important;
      }
      .fade {
        opacity: 1 !important;
      }
      .open {
        -webkit-clip-path: circle(1000px at 90% -25%) !important;
                clip-path: circle(1000px at 90% -25%)!important;
        pointer-events: all !important;
      }
      .burger {
        -webkit-transition: all .2s ease !important;
        transition: all .2s ease  !important;
        position: absolute !important;
        display: block !important ;
        z-index: 9999 !important;
        right: 5% !important;
        top: 50% !important;
        -webkit-transform: translate(-5%, -50%) !important;
                transform: translate(-5%, -50%) !important;
        overflow: hidden !important;
      }
      .burger .line1,
      .burger .line2,
      .burger .line3 {
        position: relative !important;
        width: 30px !important;
        height: 3px !important;
        background: #FAFAFA !important;
        margin: 5px !important;
        -webkit-transition: all .2s ease !important;
        transition: all .2s ease !important;
      }
      .burger .line1::after,
      .burger .line2::after,
      .burger .line3::after {
        position: absolute;
        content: '' !important;
        left: 0 !important;
        top: 0 !important;
        height: 100% !important;
        background-color: #FF9F1C !important;
      }
      .burger .line1::after {
        width: 90% !important;
      }
      .burger .line2::after {
        width: 60% !important;
      }
      .burger .line3::after {
        width: 30% !important;
      }
      header {
        position: relative !important;
      }
      .burger-rotate {
        -webkit-box-shadow: 3px 3px 9px #273642 !important;
                box-shadow: 3px 3px 9px #273642 !important;
      }
      .line-rotate {
        -webkit-transform: rotate(90deg) !important;
                transform: rotate(90deg) !important;
      }
    }

    active-link::after {
      -webkit-transform: scale(1);
              transform: scale(1) ;
    }
    `,
    footter:`/*footer css*/
    
footer {
    background-color: #033863;
    height: auto;
    padding-left: 20px;
    padding-top: 25px;
    padding-bottom: 15px;
    position: relative;
  }
  
  footer .social-icons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    z-index: 10;
  }
  
  footer .social-icons .instagram {
    margin-right: 10px;
  }
  
  footer .working-time {
    margin-top: 10px;
    color: #FAFAFA;
    z-index: 10;
    font-family: "Raleway", sans-serif;
    font-weight: bolder;
    font-size: 18px;
    line-height: 1.2;
  }
  
  footer .copyright {
    color: #FAFAFA;
    margin-top: 10px;
    z-index: 10;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
  }
  
  footer .phone-call-svg {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 50%;
    height: 100%;
  }
  
  footer .phone-call-svg svg {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  @media screen and (max-width: 768px) {
    .phone-call-svg svg {
      opacity: .3 !important;
    }
  }
  /*# sourceMappingURL=style.css.map */
    `,
    home:`/*home css*/

    .top-carousel {
        width: 100%;
        background-color: #011627;
        padding-left: 60px;
        padding-top: 60px;
        padding-right: 20px;
        position: relative;
      }
      
      .top-carousel .heading-slider-container {
        width: 100%;
        position: relative;
        height: 150px;
        pointer-events: none;
        overflow: hidden;
      }
      
      .top-carousel .heading-slider-container .heading-slider {
        position: absolute;
        top: 0px;
        left: 0;
        width: 100%;
        -webkit-animation: headingslider 10s ease-out alternate infinite;
                animation: headingslider 10s ease-out alternate infinite;
      }
      
      .top-carousel .heading-slider-container .heading-slider h1 {
        font-family: "Raleway", sans-serif;
        font-size: 50px;
        color: #FAFAFA;
        text-transform: uppercase;
        line-height: 1.5;
        letter-spacing: 5px;
        word-spacing: 10px;
        font-weight: lighter;
        position: relative;
      }
      
      .top-carousel .heading-slider-container .heading-slider h1::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 3px;
        border-radius: 4px;
        background-color: #E71D36;
      }
      
      .top-carousel .heading-slider-container .heading-slider h1 span {
        color: #FF9F1C;
      }
      
      .top-carousel .svg-container {
        margin-left: auto;
        width: 450px;
        height: 450px;
        padding: 20px;
        overflow: hidden;
      }
      
      .top-carousel .svg-container .top-carousel-svg {
        width: 100%;
        height: 100%;
      }
      
      .top-carousel .prop1 {
        position: absolute;
        bottom: 30%;
        background-color: #273642;
        width: 120px;
        height: 50px;
        opacity: .4;
        border-radius: 3px;
        -webkit-animation: prop1move 5s ease infinite alternate;
                animation: prop1move 5s ease infinite alternate;
      }
      
      .top-carousel .prop1::after {
        position: absolute;
        content: '';
        top: 0;
        left: -50%;
        background-color: #FAFAFA;
        opacity: .6;
        height: 2px;
        width: 100%;
      }
      
      .top-carousel .prop2 {
        position: absolute;
        top: 7%;
        right: 2%;
        width: 200px;
        height: 2px;
        background-color: rgba(231, 29, 54, 0.2);
      }
      
      .top-carousel .prop2::after {
        position: absolute;
        top: -500%;
        left: 0;
        content: '';
        width: 10px;
        opacity: .4;
        height: 10px;
        border-radius: 50%;
        background-color: #2EC4B6;
        -webkit-animation: prop2move 4s ease infinite;
                animation: prop2move 4s ease infinite;
      }
      
      @-webkit-keyframes prop1move {
        from {
          width: 0;
        }
        to {
          width: 120px;
        }
      }
      
      @keyframes prop1move {
        from {
          width: 0;
        }
        to {
          width: 120px;
        }
      }
      
      @-webkit-keyframes prop2move {
        0% {
          left: 0%;
        }
        50% {
          left: 90%;
        }
        100% {
          left: 0;
        }
      }
      
      @keyframes prop2move {
        0% {
          left: 0%;
        }
        50% {
          left: 90%;
        }
        100% {
          left: 0;
        }
      }
      
      @-webkit-keyframes headingslider {
        0% {
          top: 0;
        }
        50% {
          top: -150px;
        }
        100% {
          top: -300px;
        }
      }
      
      @keyframes headingslider {
        0% {
          top: 0;
        }
        50% {
          top: -150px;
        }
        100% {
          top: -300px;
        }
      }
      
      @media screen and (max-width: 768px) {
        .top-carousel {
          padding-top: 20px;
          padding-left: 20px;
        }
        .heading-slider-container .heading-slider h1 {
          font-size: 30px !important;
        }
        @-webkit-keyframes headingslider {
          0% {
            top: 0;
          }
          100% {
            top: -300px;
          }
        }
        @keyframes headingslider {
          0% {
            top: 0;
          }
          100% {
            top: -300px;
          }
        }
        .svg-container {
          width: 200px !important;
          height: 200px !important;
          margin: 5px 5px 5px auto !important;
        }
        .svg-container .top-carousel-svg {
          width: 200px;
          height: 200px;
        }
        .prop1 {
          width: 80px;
          -webkit-animation: prop1move 3s ease infinite alternate !important;
                  animation: prop1move 3s ease infinite alternate !important;
          height: 30px !important;
        }
        @-webkit-keyframes prop1move {
          from {
            width: 0;
          }
          to {
            width: 80px;
          }
        }
        @keyframes prop1move {
          from {
            width: 0;
          }
          to {
            width: 80px;
          }
        }
        .prop2 {
          width: 60px !important;
        }
      }
      
    
.modal-container {
    display: none;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8616);
    z-index: 999999999;
  }
  
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    background-color: #011627;
    width: 40%;
    height: 60%;
    border-radius: 10px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding: 20px;
margin:0 !important;
  }
  
  .modal-title {
    font-size: 48px;
    font-family: "Raleway", sans-serif;
    color: white;
  }
  
  .modal-input-container {
    width: 80%;
    cursor: pointer;
    margin: 20px auto;
    background-color: #646363;
    height: 40px;
    border-radius: 2px;
    padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  
  .modal-input-label {
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    cursor: pointer;
    letter-spacing: 2px;
    font-weight: lighter;
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    color: #f6f3f3;
  }
  
  .modal-button {
    width: 60%;
    margin: 30px auto;
    display: block;
    height: 35px;
    background-color: #2EC4B6;
    outline: none;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    -webkit-transition: background .3s ease;
    transition: background .3s ease;
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    color: white;
    letter-spacing: 4px;
    font-size: 18px;
  }
  
  .modal-button:hover {
    background-color: #a2e9e2;
  }
  
  .modal-contact-link {
    position: absolute;
    right: 2%;
    bottom: 2%;
    font-family: "Raleway", sans-serif;
    font-size: 12px;
    color: #EBEBEB;
  }
  
  .close-modal {
    position: absolute;
    top: 3%;
    opacity: .7;
    right: 3%;
    cursor: pointer;
    font-size: 20px;
    color: white;
  }
  
  .modal-close-class {
    visibility: hidden;
    opacity: 0;
  }
  
  @media screen and (max-width: 768px) {
    .modal {
      width: 90% !important !important;
      height: 50% !important !important;
    }
    .modal-title {
      font-size: 28px !important;
      margin-top: 30px !important;
      margin-bottom: 30px !important;
    }
    .modal-input-label {
      font-size: 18px !important;
    }
    .modal-input-container {
      margin: 25px auto !important;
    }
    .modal-button {
      margin: 40px auto !important;
    }
  }
  
  .catogree-name-quire-to-contactus {
    text-decoration: none;
  }
  
  @media screen and (max-width: 380px) {
    .modal-title {
      margin-top: 10px !important;
    }
    .modal-button {
      margin: 20px auto !important;
    }
    .modal-input-label {
      font-size: 16px !important;
    }
    .modal-contact-link {
      font-size: 12px !important;
    }
  }

  
.category-section {
    width: 100%;
    overflow: hidden;
  }
  
  .category-section .category-heading {
    text-transform: capitalize;
    color: #011627;
    font-size: 60px;
    font-family: "DM Sans", sans-serif;
    font-weight: lighter;
    letter-spacing: 7px;
    text-align: center;
    width: 100%;
  }
  
  .category-section .category-section-row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -ms-flex-pack: distribute;
        justify-content: space-around;
    width: 80%;
    height: 350px;
    margin: 100px auto;
  }
  
  .category-section .category-section-row .left {
    width: 45%;
    height: 90%;
  }
  
  .category-section .category-section-row .right {
    height: 90%;
    width: 45%;
  }
  
  .category-section img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }


    `,
    trial:``,
    contact_us:`/* caontact-us css*/
    
.contact-us-above {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 100px 0;
  background-color: #011627;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.contact-us-above::after {
  position: absolute;
  content: '';
  left: 30px;
  top: 20px;
  height: 150%;
  width: 1px;
  background: #FF9F1C;
}

.contact-us-form-heading {
  width: 50%;
  height: 50vh;
  color: #FAFAFA;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: start;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-family: "Raleway", sans-serif;
  font-size: 60px;
  font-weight: lighter;
  letter-spacing: 3px;
  padding-left: 50px;
}

.contact-us-form-container {
  width: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.form-input-container {
  width: 50%;
  overflow: hidden;
  position: relative;
  height: 50px;
  margin: 10px 0;
}

.form-input {
  width: 100% !important;
  height: 100% !important;
  color: #FF9F1C !important;
  padding-top: 20px !important;
  padding-left: 5px !important;
  border: none !important;
  background-color: #011627 !important;
  font-size: 20px !important;
  font-family: "Raleway", sans-serif;
}
#category-selected{
display:none;
}
.user-interest {
display:none !important;
}

.label-name {
  position: absolute;
  left: 0px;
  bottom: 0%;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid #273642;
}

.label-name::after {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  left: 0px;
  -webkit-transition: -webkit-transform .3s ease;
  transition: -webkit-transform .3s ease;
  transition: transform .3s ease;
  transition: transform .3s ease, -webkit-transform .3s ease;
  bottom: -1px;
  border-bottom: 2px solid #2EC4B6;
  -webkit-transform: translateX(-100%);
          transform: translateX(-100%);
}

.content-name {
  position: absolute;
  left: 5px;
  bottom: 5px;
  opacity: .6;
  letter-spacing: 2px;
  font-family: "DM Sans", sans-serif;
  font-weight: lighter;
  color: #FAFAFA;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
}

.form-input:focus + .label-name .content-name,
.form-input:valid + .label-name .content-name {
  -webkit-transform: translateY(-150%);
          transform: translateY(-150%);
  opacity: 1;
  font-size: 14px;
  color: #2EC4B6;
}

.form-input:focus + .label-name::after,
.form-input:valid + .label-name::after {
  -webkit-transform: translateX(0);
          transform: translateX(0);
}

.contact-form-submit-button {
  width: 30%;
  margin-top: 20px;
  color: #FAFAFA;
  background-color: #2EC4B6;
  outline: none;
  border: none;
  height: 40px;
  border-radius: 6px;
  font-size: 20px;
  font-family: "Raleway", sans-serif;
  cursor: pointer;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
}

.contact-form-submit-button:hover {
  background-color: #79dfd6;
}

.prop1 {
  position: absolute;
  top: 30px;
  left: -120px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: rgba(196, 196, 196, 0.117);
}

.form-confirmation-text {
  background: #011627;
  color: #FAFAFA;
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  letter-spacing: -1px;
  display: none;
}

@media screen and (max-width: 425px) {
  .contact-us-above {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: normal !important;
        -ms-flex-direction: column !important;
            flex-direction: column !important;
    padding: 50px 0 !important;
  }
  .contact-us-above::after {
    left: 5px !important;
  }
  .contact-us-form-heading {
    width: 100% !important;
    font-size: 40px !important;
    height: 20vh !important;
    padding-left: 10px !important;
  }
  .contact-us-form-container {
    width: 100% !important;
  }
  .form-input-container {
    width: 80% !important;
  }
  .contact-form-submit-button {
    width: 60% !important;
  }
}

@media screen and (max-width: 320px) {
  .contact-us-above {
    padding: 20px 0 !important;
  }
  .contact-us-form-heading {
    font-size: 30px !important;
  }
}

.prop2 {
  position: absolute;
  bottom: -120px;
  right: 120px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: rgba(196, 196, 196, 0.117);
}

.contact-us-below {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  position: relative;
  width: 100%;
  background-color: #011627;
  padding: 100px;
}

.address {
  width: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  color: #FAFAFA;
  font-size: 20px;
  font-family: "DM Sans", sans-serif;
}

.phone-email {
  width: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.phone,
.email {
  font-family: "DM Sans", sans-serif;
  font-size: 18px;
  color: #FAFAFA;
}

@media screen and (max-width: 425px) {
  .contact-us-below {
    padding: 10px !important;
  }
  .prop2 {
    right: 30px !important;
    bottom: 20px !important;
    height: 40px !important;
    width: 40px !important;
    opacity: 0.09 !important;
  }
  .address,
  .phone,
  .email {
    font-size: 16px !important;
  }
}

@media screen and (max-width: 320px) {
  .contact-us-below {
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: normal !important;
        -ms-flex-direction: column !important;
            flex-direction: column !important;
  }
  .address,
  .phone-email {
    width: 100% !important;
  }
  .address {
    margin-bottom: 40px !important;
  }
  .address,
  .phone,
  .email {
    font-size: 14px !important;
  }
}

    
    `,
    html_404:``,
    employee_login:`/*employee_login*/
    .employeelogin-form-container {
      width: 100%;
      height: 70vh;
      background-color: #011627;
      position: relative;
    }
    
    .form-prop1 {
      position: absolute;
      top: 20%;
      left: 10%;
      width: 200px;
      height: 200px;
      opacity: .1;
      border-radius: 50%;
      background-color: #E71D36;
      z-index: -1;
    }
    
    .employeelogin-form {
      position: absolute;
      width: 40%;
      padding: 50px;
      height: 80%;
      background-color: #273642;
      top: 50%;
      left: 50%;
      text-align: center;
      -webkit-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
    }
    
    .login-heading {
      width: 100%;
      font-size: 40px;
      font-family: "Raleway", sans-serif;
      color: #FAFAFA;
      letter-spacing: 3px;
    }
    
      .email,
    .password {
      width: 80% !important;
      display: block !important;
      margin: 20px auto !important;
      border-radius: 10px !important;
      background-color: #011627 !important;
      outline: none !important;
      color: #FF9F1C !important;
      border: 1px solid #2EC4B6 !important; 
      height: 30px !important;
      padding: 20px 10px !important;
      text-align: center !important;
      -webkit-transition: all .2s ease !important;
      transition: all .2s ease !important;
      font-size: 20px !important;
      font-family: "DM Sans", sans-serif !important;
    }
    
    .email:focus,
    .email:valid {
      border-color: #FF9F1C !important;
      width: 95% !important;
      -webkit-box-shadow: 0px 0px 20px 0px #FF9F1C !important;
              box-shadow: 0px 0px 20px 0px #FF9F1C !important;
    }
    
    .password:focus,
    .password:valid {
      border-color: #FF9F1C !important;
      width: 95% !important;
      -webkit-box-shadow: 0px 0px 20px 0px #FF9F1C !important;
              box-shadow: 0px 0px 20px 0px #FF9F1C !important;
    }
    
    .login-form-button {
      width: 60%;
      display: block;
      margin: 20px auto;
      border-radius: 10px;
      background-color: #011627;
      outline: none;
      color: #FF9F1C;
      border: 1px solid #2EC4B6;
      height: 50px;
      padding: 6px 10px;
      text-align: center;
      -webkit-transition: all .2s ease;
      transition: all .2s ease;
      font-size: 18px;
      font-family: "DM Sans", sans-serif;
      cursor: pointer;
    }
    
    .login-form-button:hover, .login-form-button:focus {
      background: #2EC4B6;
      color: black;
    }
    
    #result {
      font-size: 16px;
      font-family: "DM Sans", sans-serif;
      letter-spacing: 2px;
    }
    
    @media screen and (max-width: 768px) {
      .employeelogin-form {
        width: 60% !important;
        height: 90% !important;
      }
      .email,
      .password {
        width: 90% !important;
      }
    }
    
    @media screen and (max-width: 425px) {
      .employeelogin-form {
        width: 80% !important;
        height: 80% !important; 
        padding: 20px !important;
      }
    }
    
    @media screen and (max-width: 375px) {
      .employeelogin-form-container {
        height: 60vh !important;
      }
      .employeelogin-form {
        width: 90% !important;
        height: 90% !important;
      }
      .email,
      .password {
        height: 20px !important;
      }
      .login-form-button {
        height: 40px !important;
        margin: 5px auto !important;
      }
    }
    
    `
    ,
    user_data:`
    
.table-container {
  width: 100%;
  background: #011627;
  min-height: 100vh;
  padding: 100px;
}

.content-table {
  border-collapse: collapse;
  margin: 10px auto;
  background: #FAFAFA;
  font-size: 0.9em;
  min-width: 80%;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  -webkit-box-shadow: 0 0 20px rgba(236, 230, 230, 0.157);
          box-shadow: 0 0 20px rgba(236, 230, 230, 0.157);
}

.content-table thead tr {
  background-color: #2EC4B6;
  color: #273642;
  text-align: left;
  letter-spacing: 2px;
  font-weight: 600;
}

.content-table th,
.content-table td {
  padding: 12px 15px;
  font-family: "DM Sans", sans-serif;
}

.content-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.content-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.content-table tbody tr:last-of-type {
  border-bottom: 2px solid #2EC4B6;
}

@media screen and (max-width: 425px) {
  .table-container {
    padding: 2px !important;
    overflow: hidden !important;
  }
  .content-table {
    overflow: scroll !important;
    border-radius: 5px 5px 0 0 !important;
    min-width: 300px !important;
    width: 90% !important;
    margin: 0 auto !important;
  }
  .content-table th,
  .content-table td {
    padding: 6px 1px !important;
  }
  .content-table th,
  .content-table td {
    font-size: .6em !important;
  }
}
`
  }
























status_check.style_code=true;
