const express = require("express");
const router = express.Router();
const { Users, Vinyl } = require("../models");

router.get("/", async (req, res)=>{
       const users = await Users.findAll();
       res.json(users)
})
router.post("/",(req, res) =>{
       const albumTitle = req.body.albumTitle;
       const albumArtist = req.body.albumArtist;
       const albumImage = req.body.albumImage;
       const albumQuantity = req.body.albumQuantity;

       Vinyl.create({
              albumTitle: albumTitle,
              albumArtist: albumArtist,
              albumImage: albumImage,
              albumQuantity: albumQuantity
       });
       res.json("Album added to inventory");
});
router.get("/albums", async (req, res)=>{
       const albums = await Vinyl.findAll();
       res.json(albums)
})
router.get("/albums/:albumUrl", async (req, res)=>{
       const albumUrl = req.params.albumUrl
       const returnedAlbum = await Vinyl.findOne({where:{albumImage: albumUrl}})
       res.json(returnedAlbum)
})
router.put("/albums/:albumUrl", async (req, res) => {
       const albumUrl = req.params.albumUrl;
       const album = await Vinyl.findOne({where:{albumImage: albumUrl}});

       const {albumTitle, albumArtist, albumImage, albumQuantity} = req.body; 

       album.albumTitle = albumTitle;
       album.albumArtist = albumArtist;
       album.albumImage = albumImage;
       album.albumQuantity = albumQuantity;

       // pieceId.pieceText = pieceText;

       await album.save();

       // const pieceId = await Pieces.findOne({where:{id: pieceId}})
       // Pieces.update(
       //   {pieceTitle: req.body.pieceTitle}
       // )
       res.json("updated");
})
router.delete("/delete/:albumId", (req, res)=>{
       const albumId = req.params.albumId;
       Vinyl.destroy({where: {albumImage: albumId}});
       res.json("deleted");
});
module.exports = router;