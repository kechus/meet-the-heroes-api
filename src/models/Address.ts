import sequelize from '@loaders/sequelize';
import { DataTypes, Model } from "sequelize";

export class Address extends Model { }

Address.init({
  id: {
    type: DataTypes.INTEGER,  
    primaryKey: true
  },
  contact_address: {
    type: DataTypes.STRING,
  },
  lat:{
    type: DataTypes.DOUBLE
  },
  lng:{
    type:DataTypes.DOUBLE
  }
}, {
  freezeTableName:true,
  sequelize,
  timestamps:false,
  modelName: 'Address'
});
