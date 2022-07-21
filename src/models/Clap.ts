import sequelize from '../loaders/sequelize';
import { DataTypes, Model } from "sequelize";

export class Clap extends Model { }

Clap.init({
  id: {
    type: DataTypes.INTEGER,  
    primaryKey: true
  },
  counter:{
    type: DataTypes.BIGINT.UNSIGNED
  }
}, {
  freezeTableName:true,
  sequelize,
  timestamps:false,
  modelName: 'clap'
});
