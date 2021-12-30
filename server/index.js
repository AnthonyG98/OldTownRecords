const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require ("dotenv").config();
// const multer = require("multer");
// const storage = multer.diskStorage({
//        destination: (req, file, cb) =>{
//               cb(null, "./images/")
//        },
//        filename: (req, file, cb)=>{
//               console.log(filename)
//               cb(null, Date.now() + path.extname(file.originalname))
//        }
// })

// const upload = multer({storage: storage})

app.use(express.json());
app.use(cors());

const db = require("./models")
//routes
const users = require("./routes/users");
app.use("/users", users);

// app.get("/users", (req, res)=>{
//        res.json("set")
// })
// app.post("/upload", upload.single("image"), (res, req)=>{
//        res.json("sent")
// })

db.sequelize.sync().then(()=>{
       app.listen(process.env.PORT || 3001, ()=>{
              console.log("server is started");
       });
})
.catch(err =>{
       console.log(err.message)
});

