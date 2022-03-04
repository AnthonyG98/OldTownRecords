import React, { useState, useEffect } from 'react'
import AdminProps from './AdminProps'
import axios from 'axios';
import { Image } from 'cloudinary-react'
import logo from "../images/logo.png"
import { useNavigate } from "react-router-dom"
 
function Admin() {
       const [ image, setImage ] = useState([]);
       const [ albumTitle, setAlbumTitle ] = useState();
       const [ albumArtist, setAlbumArtist ] = useState();
       const [ albumImage, setAlbumImage ] = useState();
       const [ albumQuantity, setAlbumQuantity ] = useState();
       const [ editSelectAlbum, setEditSelectAlbum ] = useState({
              albumTitle: "",
              albumImage: "",
              albumImage: "",
              albumQuantity: ""
       });
       const [ updateAlbumTitle, setUpdateAlbumTitle ] = useState();
       const [ updateAlbumArtist, setUpdateAlbumArtist ] = useState();
       const [ updateAlbumQuantity, setUpdateAlbumQuantity ] = useState();

       const [ displayAllAlbums, setDisplayAllAlbums ] = useState();
       let history = useNavigate();
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
       }
       const editAlbum = (albumUrl) =>{
              const editContainer = document.querySelector(".edit-container");
              editContainer.style.display = "flex"
              axios.get(`http://localhost:3001/users/albums/${albumUrl}`).then(response =>{
                     setEditSelectAlbum({
                            albumTitle: response.data.albumTitle,
                            albumArtist: response.data.albumArtist,
                            albumImage: response.data.albumImage,
                            albumQuantity: response.data.albumQuantity
                     })
              })
       }
       const updateAlbum = (selectAlbum) =>{
              const updateData = {
                     albumTitle: updateAlbumTitle,
                     albumArtist: updateAlbumArtist,
                     albumQuantity: updateAlbumQuantity,
              }
              axios.put(`http://localhost:3001/users/albums/${selectAlbum}`, updateData).then(response =>{
                     console.log(response)
              })
              window.location.reload();
       }
       const deleteAlbum = (selectAlbum) =>{
              console.log("hey")
              axios.delete(`http://localhost:3001/users/delete/${selectAlbum}`).then(response =>{
                     console.log(response);
              })
              window.location.reload();
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
                                   openAlbum={()=>{
                                          editAlbum(data.albumImage)
                                   }}
                                   />
                            })
                     )
              })
       }, []);
       
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
                     <div className='edit-container'>
                            <div className='edit-overlay'></div>
                            <div className='edit-img-container'>
                                   <Image 
                                   className="album-img" 
                                   cloudName="delktfw1a" 
                                   publicId={editSelectAlbum.albumImage} 
                                   />                            
                            </div>
                            <input 
                            placeholder={editSelectAlbum.albumTitle}
                            type="text"
                            onChange={(e)=>{
                                   setUpdateAlbumTitle(e.target.value)
                            }}
                            />
                            <input 
                            placeholder={editSelectAlbum.albumArtist}
                            type="text"
                            onChange={(e)=>{
                                   setUpdateAlbumArtist(e.target.value)
                            }}
                            />
                            <input 
                            placeholder={editSelectAlbum.albumQuantity}
                            type="number"
                            onChange={(e)=>{
                                   setUpdateAlbumQuantity(e.target.value)
                            }}
                            />
                            <div className='edit-btn-container'>
                                   <button className='login-btn' type="button" onClick={()=>{updateAlbum(editSelectAlbum.albumImage)}}>Edit</button>
                                   <button className='login-btn' type="button" onClick={()=>{deleteAlbum(editSelectAlbum.albumImage)}}>Delete</button>
                            </div>
                     </div>
              </div>
       )
}

export default Admin
