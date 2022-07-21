import sequelize from '@loaders/sequelize';
import { DataTypes, Model } from "sequelize";

export class Country extends Model { }

Country.init({
  id: {
    type: DataTypes.INTEGER,  
    primaryKey: true
  },
  name:{
    type: DataTypes.STRING
  }
}, {
  freezeTableName:true,
  sequelize,
  timestamps:false,
  modelName: 'Country'
});
