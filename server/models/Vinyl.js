module.exports = (sequelize, DataTypes)=>{
       const Vinyl = sequelize.define("Vinyl", {
              albumTitle: {
                     type: DataTypes.STRING,
                     allowNull: true
              },
              albumArtist: {
                     type: DataTypes.STRING,
                     allowNull: true
              },
              albumImage:{
                     type: DataTypes.STRING,
                     allowNull: true
              },
              albumQuantity:{
                     type: DataTypes.INTEGER,
                     allowNull: true
              }
       }); 
       return Vinyl
}