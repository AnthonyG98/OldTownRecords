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

module.exports = router;