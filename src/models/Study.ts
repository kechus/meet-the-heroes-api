import sequelize from '@loaders/sequelize';
import { DataTypes, Model } from "sequelize";
import { StudyType } from './StudyType';

export class Study extends Model { }

Study.init({
  id: {
    type: DataTypes.INTEGER,  
    primaryKey: true
  },
  name:{
    type: DataTypes.STRING
  },
  c_name:{
    type:DataTypes.STRING
  },
  web_address:{
    type:DataTypes.STRING
  },
  date_registration:{
    type: DataTypes.DATEONLY
  },
  study_type_id:{
    type: DataTypes.INTEGER,
    references: 'StudyType',
  },
  address_id:{
    type: DataTypes.BIGINT,
    references: 'Address',
  },
  country_id:{
    type: DataTypes.INTEGER,
    references: 'Country',
  }
}, {
  freezeTableName:true,
  sequelize,
  timestamps:false,
  modelName: 'Study'
});