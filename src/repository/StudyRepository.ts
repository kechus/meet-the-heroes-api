import { Study } from "@models/Study";
import { StudyType } from "@models/StudyType";
import sequelize from '@loaders/sequelize';

export class StudyRepository{
	static async filterStudiesByTypeId(idType:number): Promise<any>{
		const studies = await sequelize.query(`
		SELECT st.id, st.name AS name, st.c_name, st.web_address, st.date_registration, 
		st.date_updated, st.study_type_id, st.address_id, st.country_id, 
		ct.name AS country, ad.contact_address, ad.lat, ad.lng, stp.name AS studyType  
		FROM Study AS st
		INNER JOIN Country AS ct
		ON ct.id = st.country_id
		INNER JOIN Address as ad
		ON ad.id = st.address_id
		INNER JOIN StudyType as stp
		ON stp.id = st.study_type_id
		WHERE st.study_type_id = ${idType}
		AND st.address_id != 1
		GROUP BY st.address_id`); 
		return StudyResource.fromBatch(studies[0])
	} 

	static async filterStudiesByCountryId(idCountry:number): Promise<any> {
		const studies = await sequelize.query(`
		SELECT st.id, st.name AS name, st.c_name, st.web_address, st.date_registration, 
		st.date_updated, st.study_type_id, st.address_id, st.country_id, 
		ct.name AS country, ad.contact_address, ad.lat, ad.lng, stp.name AS studyType  
		FROM Study AS st
		INNER JOIN Country AS ct
		ON ct.id = st.country_id
		INNER JOIN Address as ad
		ON ad.id = st.address_id
		INNER JOIN StudyType as stp
		ON stp.id = st.study_type_id
		WHERE st.country_id = ${idCountry}
		AND st.address_id != 1
		GROUP BY st.address_id`); 
		return StudyResource.fromBatch(studies[0])
	}
	
	static async filterStudiesByAddressId(idAddress:number){
		const studies = await Study.findAll({
			where:{
				address_id: idAddress,
			},
			limit: 20
		})
		return await ShortStudyResource.fromBatch(studies);
	}
}

class StudyResource{
	static fromBatch(studies: any[]){
		const resourcedStudies = []
		for(const study of studies){
			resourcedStudies.push(StudyResource.from(study))
		}
		return resourcedStudies;
	}

	static from(study: any){
		return {
			...study,
			address:{
				id: study.address_id,
				contact_address: study.contact_address,
				lat: study.lat,
				lng: study.lng
			}
		}
	}
}

class ShortStudyResource{
	static async fromBatch(studies: Study[]){
		const resourcedStudies = []
		for(const study of studies){
			const studyData = study.get();
			resourcedStudies.push(await this.from(studyData))
		}
		return resourcedStudies;
	}

	static async from(studyData: any){
		const studyType = await StudyType.findByPk(studyData.study_type_id); 
		const studyTypeName = studyType!.get().name;

		return {
			'Nombre del estudio': studyData.name,
			'Nombre Científico': studyData.c_name,
			'Tipo de estudio': studyTypeName,
			'Dirección web': studyData.web_address,
			'Fecha de registro': studyData.date_registration,
			'Ultima fecha de actualización': studyData.date_updated,
		}
	}
}