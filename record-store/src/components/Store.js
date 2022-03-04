import React from 'react'
import aboutHero from '../images/about-hero.png'
import logo from '../images/logo.png';
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AdminProps from './AdminProps'
import axios from "axios"
function Store() {
       const [ displayAllAlbums, setDisplayAllAlbums ] = useState();
       useEffect(async() => {
              axios.get("http://localhost:3001/users/albums").then(res =>{
                     console.log(res)
                     setDisplayAllAlbums(
                            res.data.map(data =>{
                                   return <AdminProps 
                                   src={data.albumImage} 
                                   albumTitle={data.albumTitle}
                                   albumArtist={data.albumArtist}
                                   albumQuantity={data.albumQuantity}
                                   />
                            })
                     )
              });
       }, [])
       const openNav = () =>{
              const navMenu = document.querySelector(".nav-container");
              navMenu.style.display = "flex";
              const bars = document.querySelector(".bar-container");
              bars.style.display = "none";
       }
       return (
              <>
              <div className='store-container'>
                     <div class="home-container" id='store'>
                            <nav className='mobile-nav-container'>
                            <img id="store-logo" src={logo} alt="logo"/>
                            <div className='bar-container' onClick={openNav}>
                                   <div className='bar' id='bar-one'></div>
                                   <div className='bar' id='bar-two'></div>
                            </div>
                            <div class="nav-container">
                                   <Link to="/" className='link'>HOME</Link>
                                   <Link to="/store" className='link' id="active">STORE</Link>
                                   <a href="tel:9516392004" className='link'>951-639-2004</a>
                            </div>
                            </nav>
                            <nav class="links-background">
                            <img id="store-logo" src={logo} alt="logo"/>
                            <div class="links-container">
                                   <Link to="/" className='link'>HOME</Link>
                                   <Link to="/store" className='link' id="active">STORE</Link>
                                   <a href="tel:9516392004" className='link'>951-639-2004</a>
                            </div>
                     </nav>
                     <img className="about-hero" src={aboutHero} id='store-hero'/>
                     </div>
              </div>
              <div className='display-container'>
                     {displayAllAlbums}
              </div>
              </>
       )
}

export default Store
