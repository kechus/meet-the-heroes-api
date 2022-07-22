import { Address } from "@models/Address";
import { Country } from "@models/Country"
import { Study } from "@models/Study";
import { StudyType } from "@models/StudyType";
import sequelize from '@loaders/sequelize';

export class StudyRepository{
	static async filterStudiesByTypeId(idType:number){
		const studies = await Study.findAll({
			where: {
				study_type_id: idType
			},
			group:'address_id',
			order: sequelize.random()
		});
		return await StudyResource.fromBatch(studies)
	} 

	static async filterStudiesByCountryId(idCountry:number){
		const studies = await Study.findAll({
			where:{
				country_id: idCountry,
			},
			order: sequelize.random(),
			group:'address_id',
		})

		return await StudyResource.fromBatch(studies)
	}
	
	static async filterStudiesByAddress(idAddress:number){
		const studies = await Study.findAll({
			where:{
				address_id: idAddress,
			},
			order: sequelize.random(),
		})
		return await StudyResource.fromBatch(studies);
	}

	static async query(){
		sequelize.query('', { raw: true });
	}
}

class StudyResource{
	static async fromBatch(studies: Study[]){
		const resourcedStudies = []
		for(const study of studies){
			resourcedStudies.push(await StudyResource.from(study))
		}
		return resourcedStudies;
	}

	static async from(study: Study){
		const studyData = study.get();
		const address = await Address.findByPk(studyData.address_id); 
		const country = await Country.findByPk(studyData.country_id); 
		const studyType = await StudyType.findByPk(studyData.study_type_id); 

		const addressData = address!.get();
		const studyTypeName = studyType!.get().name;
		const countryName = country!.get().name;

		return {
			...studyData,
			address: addressData,
			studyType: studyTypeName,
			country: countryName,
			translated:{
				'Nombre del estudio': studyData.name,
				'Nombre Científico': studyData.c_name,
				'Tipo de estudio': studyTypeName,
				'País': countryName,
				'Dirección web': studyData.web_address,
				'Fecha de registro': studyData.date_registration,
				'Ultima fecha de acualización': studyData.date_updated,
			}
		}
	}
}