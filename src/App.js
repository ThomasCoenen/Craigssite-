// import logo from './logo.svg';
import './App.css';
import React from 'react';
import curebuttonImg from './images/curebutton.png';
import productImg from './images/productimg1.png';
// import curebuttonImg from './images/curebutton.png';


function App() {
  return (

	<div class="container">

    <header class="header" id="myHeader">

      <ul class="list">
          {/* <li>FCC: Survey Form</li>  */}
          {/* <li><img className="cureimg" src="/images/curebutton.png" alt=""></img></li> */}
          <li><img className="cureimg" src={curebuttonImg} alt=""></img></li>

      </ul>

      <ul class="buttons">

          <li><a className="home" href="index.html">Home</a></li>
          <li><a className="home" href="index.html">About</a></li>
          <li><a className="home" href="index.html">Gallery</a></li>
          <li><a className="home" href="index.html">Contact</a></li>


          {/* <button>Heart</button>
          <button>Sign Up</button>
          <button>Log In</button>
          <button>Log In</button>
          <button>Log In</button>  */}
      </ul>
    </header>


    <div class="content">

      <section id="welcome">
        <h2>HELP US HEAL AND CURE MORE CHILDREN EVERY DAY!</h2>
        <p>HIGH QULAITY DUAL PANEL FRAMED ART COMMENMORATIVES</p>
      </section>

      <section id="projects">

        {/* <div id="project-heading">
          <h2>These are some of my projects</h2>
        </div> */}

        <div id="mainbuttons">
            {/* <ul>
                <li><a className="home" href="index.html">Home</a></li>
                <li><a className="home" href="index.html">Home</a></li>
            </ul> */}
            <button className="artbuttons" href="">FRAMED CANVAS OPTIONS</button>
            <button className="artbuttons" href="">FRAMED PRINT OPTIONS</button>
        </div>


        <div class="project-grid">
                  
          <div className="product">
              <img className="image_prod" src={productImg} alt="product"/>
              <div className="itemstuff">
                <h1 className="itemname">BRONZE LEVEL PARTNER FRAMED PRINT</h1>
                <p className="description">Features: Lorem<br/> consectetur adipisicing<br/> elit. Non, <br/>ipsum alias. <br/> voluptates esse, <br/> Iure enim animi <br/>vel molestiar porro <br/>dicta totam cupiditate<br/> temporibus.</p>
                <button className="donate">CLICK TO DONATE</button>
              </div>
          </div>
          <br/>

          <div className="product">
              <img className="image_prod" src={productImg} alt="product"/>
              <div className="itemstuff">
                <h1 className="itemname">BRONZE LEVEL PARTNER FRAMED PRINT</h1>
                <p className="description">Features: Lorem<br/> consectetur adipisicing<br/> elit. Non, <br/>ipsum alias. <br/> voluptates esse, <br/> Iure enim animi <br/>vel molestiar porro <br/>dicta totam cupiditate<br/> temporibus.</p>
                <button className="donate">CLICK TO DONATE</button>
              </div>
          </div>
          <br/>

          <div className="product">
              <img className="image_prod" src={productImg} alt="product"/>
              <div className="itemstuff">
                <h1 className="itemname">BRONZE LEVEL PARTNER FRAMED PRINT</h1>
                <p className="description">Features: Lorem<br/> consectetur adipisicing<br/> elit. Non, <br/>ipsum alias. <br/> voluptates esse, <br/> Iure enim animi <br/>vel molestiar porro <br/>dicta totam cupiditate<br/> temporibus.</p>
                <button className="donate">CLICK TO DONATE</button>
              </div>
          </div>
          <br/>

        </div>

      </section>






      <section id="contact">
        <ul id="connect-links">
          <li><a href="afd">GitHub</a>
          </li>

          <li><a href="asdf">LinkedIn</a></li>
          <li><a href="afs.com">Email Me</a></li>
        </ul>

      </section>

      <footer>
        <h3>Website Design by Craigpaulstudio.com and...</h3>
      </footer>

    </div>
	</div>
  );
}

export default App;










// html {
//     /* margin: auto 0; */
//     /* overflow: hidden; */
//     background: url(images/backgroundimg.png) no-repeat center center fixed;
//     /* background-image: url("images/backgroundimg.png"); */
//     /* background-repeat: no-repeat; Do not repeat the image */
//     -webkit-background-size: cover;
//     -moz-background-size: cover;
//     -o-background-size: cover;
//     background-size: cover; /* Resize the background image to cover the entire container
//     /* background-attachment: fixed; */ 
//     background-repeat: no-repeat; 
//     font-size: 62.5%; 
//     /* box-sizing: border-box; */
//   }
  
//   body {
//     margin: 0;
//     height: 100vh; /* set height to the full height */
//     font-size: 1.6rem;
//     font-family: Helvetica Arial, sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   /* 
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//       'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//       sans-serif; */
//   }
  
//   /* code {
//     font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//       monospace;
//   } */
  
//   /* add this line. use bc we have root id inside public/index.html */
//   #root {
//     height: 100%;
//   }
  
//   .grid-container {
//     display: grid;
//     /* 3 sections here */
//     /* grid-template-areas: 
//       'header'
//       'main'
//       'footer'; */
//     /* define rows and columns */
//     /* grid-template-columns: auto;
//     grid-template-rows: auto; */
//     height: 100%; 
//   }
  
//   /* Top header */
  
//   .topheader {
//     display: grid;
//     /* grid-template-columns: 50px 1fr; */
//     grid-template-columns: auto auto;
//     grid-template-rows: auto;
//     /* grid-template-columns: auto;
//     grid-template-rows: auto auto; */
//     grid-gap: 500px;
//     align-items: center;
//     /* align-items: start; */
//     /* justify-items: center; */
//     height: 100px;
//     background-color: rgb(0, 0, 0);
//     opacity: 0.7;
//     font-size: 22px;
    
//     /* text-decoration: none; */
//     /* justify-items: end; */
//   }
  
//   .cureimg {
//     display: grid;
//     justify-items: center;
//     text-decoration: none;
//     height: 100px;
//     width: 375px;
//   }
  
//   .navigation {
//     display: grid;
//     grid-template-columns: auto auto auto auto auto auto;
//     justify-items: center;
//     /* text-decoration: none; */
//   }
  
//   .navigation a {
//     text-decoration: none;
//   }
  
//   /* .cureimg {
//     height: 100px;
//     width: 375px;
//   } */
  
//   .center {
//     display: grid;
//     justify-items: center;
//   }
  
//   /* Bottom header */
  
//   .bottomheader {
//     display: grid;
//     /* grid-gap: 50px; */
//     margin-bottom: 50px;
//     /* align-items: center; */
//     justify-items: center;
//   }
  
//   .options {
//     display: grid;
//     grid-template-columns: auto auto;
//     grid-gap: 40px;
//     justify-items: center;
//   }
  
//   /* .buttonhome {
//     height: 60px;
//     width: 400px;
//   } */
  
//   /* MAIN */
  
//   main {
//     display: grid;
//     grid-gap: 14px;
//     /* justify-items: center; */
//   }
  
//   .product{
//     display: grid;
//     grid-template-columns: auto auto;
//     grid-gap: 30px;
//   }
  
//   .image_prod {
//     height: 500px;
//     width: 500px;
//   }
  
//   /* .donate {
//     text-align: center;
//     color: white;
//     background-color: blue;
//     height: 60px;
//     width: 400px;
//     font-size: 35px;
//   } */
  
  
//   /* Common */
  
//   button {
//     text-align: center;
//     border-radius: 0.5rem;
//     padding: 0rem;
//     /* margin: 5px; */
//     color: white;
//     background-color:blue;
//     height: 60px;
//     width: 400px;
//     font-size: 27px;
//     border: none;
//   }
  
  
