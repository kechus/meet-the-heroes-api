import sequelize from '@loaders/sequelize';
import { DataTypes, Model } from "sequelize";

export class Prueba extends Model { }

Prueba.init({
  id: {
    type: DataTypes.INTEGER,  
    primaryKey: true
  }
}, {
  freezeTableName:true,
  sequelize,
  timestamps:false,
  modelName: 'prueba'
});
