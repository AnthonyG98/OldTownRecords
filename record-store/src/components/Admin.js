import React, { useState, useEffect } from 'react'
import AdminProps from './AdminProps'
import axios from 'axios';
import { Image } from 'cloudinary-react'
import logo from "../images/logo.png"

function Admin() {
       const [ image, setImage ] = useState([]);
       const [ albumTitle, setAlbumTitle ] = useState();
       const [ albumArtist, setAlbumArtist ] = useState();
       const [ albumImage, setAlbumImage ] = useState();
       const [ albumQuantity, setAlbumQuantity ] = useState();
       const [ displayAllAlbums, setDisplayAllAlbums ] = useState();
       const upload = () =>{
              const imgFormData = new FormData();
              imgFormData.append("file", image);
              imgFormData.append("upload_preset", "fy5ahm9g");
              axios.post(`https://api.cloudinary.com/v1_1/delktfw1a/image/upload`, imgFormData).then(response =>{
                     const fileName = response.data.public_id;
                     const albumData = {
                            albumTitle: albumTitle,
                            albumArtist: albumArtist,
                            albumImage: fileName,
                            albumQuantity: albumQuantity
                     }
                     axios.post("http://localhost:3001/users", albumData).then(response =>{
                            console.log(response);
                     })
              })
              console.log(image)
       }
       useEffect(async() => {
              axios.get("http://localhost:3001/users/albums").then(response =>{
                     console.log(response)
                     setDisplayAllAlbums(
                            response.data.map(data =>{
                                   return <AdminProps 
                                   src={data.albumImage} 
                                   albumTitle={data.albumTitle}
                                   albumArtist={data.albumArtist}
                                   albumQuantity={data.albumQuantity}
                                   />
                            })
                     )
              })
       }, [])
       return (
              <div className='admin-container'>
                     <img className='logo' src={logo} alt="old town records logo"/>
                     <div className='login-container'>
                            <div className='login-components'>
                                   <label className='label'>Username:</label>
                                   <input type="text" className='input'/>
                                   <label className='label'>password:</label>
                                   <input type="text" className='input'/>
                                   <button className='login-btn'>Login</button>
                            </div>
                     </div>
                     <div className='add-container'>
                            <button className='login-btn'>Add New Vinyl +</button>
                     </div>
                     <div className='new-container'>
                            <input 
                            type="file" 
                            name="image"
                            onChange={(e)=>{
                                   setImage(e.target.files[0])
                            }}
                            />
                            <input 
                            type="text"
                            placeholder='album title'
                            onChange={(e)=>{
                                   setAlbumTitle(e.target.value);
                            }}
                            />
                            <input 
                            placeholder='album artist'
                            onChange={(e)=>{
                                   setAlbumArtist(e.target.value);
                            }}
                            />
                            <input 
                            type="number" 
                            placeholder='quantity'
                            onChange={(e)=>{
                                   setAlbumQuantity(e.target.value);
                            }}
                            />
                            <button className='login-btn' onClick={upload}>Send</button>
                     </div>
                     <div className='display-container'>
                            {displayAllAlbums}
                     </div>

              </div>
       )
}

export default Admin
