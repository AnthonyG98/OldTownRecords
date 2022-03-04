import React from 'react'
import { Image } from 'cloudinary-react'

function AdminProps(props) {
       return (
              <div className='adminprops-container'>
                     <div className='overlay' onClick={props.openAlbum}>
                     <Image 
                     className="album-img" 
                     cloudName="delktfw1a" 
                     publicId={props.src} 
                     />
                     </div>
                     <p className='album-text'>Album name: {props.albumTitle}</p>
                     <p className='album-text'>Artist: {props.albumArtist}</p>
                     <p className='album-text'>In stock: {props.albumQuantity}</p>
              </div>
       )
}

export default AdminProps
