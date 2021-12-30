import React from 'react'
import logo from '../images/logo.png';
import aboutHero from '../images/about-hero.png'
function Home() {
       return (
              <>
              <div class="home-container">
                     <nav class="links-background">
                     <div class="links-container">
                            <a>HOME</a>
                            <a>STORE</a>
                            <a>NEWS</a>
                            <a>951-693-2004</a>
                     </div>
                     </nav>
                     <div class="img-container">
                     <img id="logo" src={logo} alt="logo"/>
                     </div>
              </div>
              <div class="about-container">
                     <img class="about-hero" src={aboutHero}/>
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
              <h1 class="about-head" id="iv-head"><a>CHECK OUT OUR INVENTORY</a></h1>
              <footer class="footer-container">
                     <i class="far fa-copyright"></i>
                     <p class="footer-text">All Rights Reserved | Old Town Records LLC</p>
              </footer>
              </>
       )
}

export default Home