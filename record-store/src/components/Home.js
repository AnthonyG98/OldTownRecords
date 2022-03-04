import React from 'react'
import logo from '../images/logo.png';
import aboutHero from '../images/about-hero.png'
import { Link } from "react-router-dom"
function Home() {
       const openNav = () =>{
              const navMenu = document.querySelector(".nav-container");
              navMenu.style.display = "flex";
              const bars = document.querySelector(".bar-container");
              bars.style.display = "none";
       }
       return (
              <>
              <div class="home-container">
                     <nav className='mobile-nav-container'>
                     <div className='bar-container' onClick={openNav}>
                            <div className='bar' id='bar-one'></div>
                            <div className='bar' id='bar-two'></div>
                     </div>
                     <div class="nav-container">
                            <Link to="/" className='link' id="active">HOME</Link>
                            <Link to="/store" className='link'>STORE</Link>
                            <a href="tel:9516392004" className='link'>951-639-2004</a>
                     </div>
                     </nav>
                     <nav class="links-background">
                     <div class="links-container">
                            <Link to="/" className='link' id="active">HOME</Link>
                            <Link to="/store" className='link'>STORE</Link>
                            <a href="tel:9516392004" className='link'>951-639-2004</a>
                     </div>
                     </nav>
                     <div class="img-container">
                     <img id="logo" src={logo} alt="logo"/>
                     </div>
              </div>
              <div class="about-container">
                     <img class="about-hero" src={aboutHero} alt=""/>
                     <h1 class="about-head">ABOUT US</h1>
                     <div class="about-text-container">
                     <p class="about-text">
                            Serving Temecula Valley Since 1998.We specialize in new and used vinyl such a Rock, 
                            Punk, Soul, Funk, Blues, Psychedelic, Indie, New Artist, Sound Tracks,
                            and A little bit of everything else too. We have about 30,000 Used LP's and 45's and 
                            about 10,000 New Vinyl.
                     </p>
                     </div>
              </div>
              <div class="location-container">
                     <div class="location">
                     <h1 id="located-head">VISIT US TODAY</h1>
                     <p class="located-text">We're located at: 42012 Main St, <br /> 
                            Temecula, CA 92590</p>
                     </div>
                     <div class="storehrs">
                     <h1 id="hrs-head">STORE HOURS</h1>
                     <div class="hrs-text-container">
                            <p class="hrs-text">Sunday 11am–5 Pm</p>
                            <p class="hrs-text">Monday 2–6 Pm</p>
                            <p class="hrs-text">Tuesday 2–6 Pm</p>
                            <p class="hrs-text">Wednesday 12–6 Pm</p>
                            <p class="hrs-text">Thursday 12–6 Pm</p>
                            <p class="hrs-text">Friday 12–7 Pm</p>
                            <p class="hrs-text">Saturday 11am–7 Pm</p>
                     </div>
                     </div>
              </div>
              <h1 class="about-head" id="iv-head">CHECK OUT OUR INVENTORY</h1>
              <footer class="footer-container">
                     <i class="far fa-copyright"></i>
                     <p class="footer-text">All Rights Reserved | Old Town Records LLC</p>
              </footer>
              </>
       )
}

export default Home
