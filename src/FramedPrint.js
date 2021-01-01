import React from 'react';
// import curebuttonImg from './images/curebutton.png';
// import productImg from './images/productimg1.png';
import productImg1 from './images/productimg2.png';
import { BrowserRouter, Link, Route} from 'react-router-dom';
// import data from './data.js'
// import AboutPage from './AboutPage';
// import Homescreen from './Homescreen';
// import framedCanvas from './framedCanvas';
import './App.css';


export default function FramedPrint() {
    return (


        <div class="content">

            <section id="welcome">
            <h3>HELP US HEAL AND CURE MORE CHILDREN EVERY DAY!</h3>
            <p>HIGH QULAITY DUAL PANEL FRAMED ART COMMENMORATIVES</p>
            </section>

            <section id="projects">

                <div id="mainbuttons">
                    {/* <button className="artbuttons" href="">FRAMED CANVAS OPTIONS</button> */}
                    {/* <button className="artbuttons" href="">FRAMED PRINT OPTIONS</button> */}

                    <Link to="/framedcanvas">
                        <button className="artbuttons">FRAMED CANVAS OPTIONS</button>
                    </Link>
                    <Link to="/framedprint">
                        <button className="artbuttons">FRAMED PRINT OPTIONS</button>
                    </Link>


                </div>


                <div class="project-grid">
                            
                    <div className="product">
                        <img className="image_prod" src={productImg1} alt="product"/>
                        <div className="itemstuff">
                        <h1 className="itemname">BRONZE LEVEL PARTNER FRAMED PRINT</h1>
                        <p className="description">Features: Lorem<br/> consectetur adipisicing<br/> elit. Non, <br/>ipsum alias. <br/> voluptates esse, <br/> Iure enim animi <br/>vel molestiar porro <br/>dicta totam cupiditate<br/> temporibus.</p>
                        <button className="donate">CLICK TO DONATE</button>
                        </div>
                    </div>
                    <br/>

                    <div className="product">
                        <img className="image_prod" src={productImg1} alt="product"/>
                        <div className="itemstuff">
                        <h1 className="itemname">BRONZE LEVEL PARTNER FRAMED PRINT</h1>
                        <p className="description">Features: Lorem<br/> consectetur adipisicing<br/> elit. Non, <br/>ipsum alias. <br/> voluptates esse, <br/> Iure enim animi <br/>vel molestiar porro <br/>dicta totam cupiditate<br/> temporibus.</p>
                        <button className="donate">CLICK TO DONATE</button>
                        </div>
                    </div>
                    <br/>


                    <div className="product">
                        <img className="image_prod" src={productImg1} alt="product"/>
                        <div className="itemstuff">
                        <h1 className="itemname">BRONZE LEVEL PARTNER FRAMED PRINT</h1>
                        <p className="description">Features: Lorem<br/> consectetur adipisicing<br/> elit. Non, <br/>ipsum alias. <br/> voluptates esse, <br/> Iure enim animi <br/>vel molestiar porro <br/>dicta totam cupiditate<br/> temporibus.</p>
                        <button className="donate">CLICK TO DONATE</button>
                        </div>
                    </div>
                    <br/>

                    <div className="product">
                        <img className="image_prod" src={productImg1} alt="product"/>
                        <div className="itemstuff">
                        <h1 className="itemname">BRONZE LEVEL PARTNER FRAMED PRINT</h1>
                        <p className="description">Features: Lorem<br/> consectetur adipisicing<br/> elit. Non, <br/>ipsum alias. <br/> voluptates esse, <br/> Iure enim animi <br/>vel molestiar porro <br/>dicta totam cupiditate<br/> temporibus.</p>
                        <button className="donate">CLICK TO DONATE</button>
                        </div>
                    </div>
                    <br/>

                </div>

            </section>

            {/* <Switch>
            <Route path="/about">
                <AboutPage />
            </Route>
            <Route path="/framedprint">
                <framedPrint />
            </Route>
            <Route path="/framedcanvas">
                <Homescreen />
            </Route>
            <Route path="/">
                <Homescreen />
            </Route>
            </Switch> */}


            {/* <section id="contact">
            <ul id="connect-links">
                <li><a href="afd">GitHub</a>
                </li>

                <li><a href="asdf">LinkedIn</a></li>
                <li><a href="afs.com">Email Me</a></li>
            </ul>

            </section>

            <footer>
            <h3>Website Design by Craigpaulstudio.com and...</h3>
            </footer> */}

    </div>
    )
}
