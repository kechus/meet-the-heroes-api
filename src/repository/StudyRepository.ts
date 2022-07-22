import { Address } from "@models/Address";
import { Country } from "@models/Country"
import { Study } from "@models/Study";
import { StudyType } from "@models/StudyType";

export class StudyRepository{
	static async filterStudiesByTypeId(idType:number){
		const studies = await Study.findAll({
			where: {
				study_type_id: idType
			}
		});
		const betterStudies = []
		for(const study of studies){
			const studyData = study.get();
			const address = await Address.findByPk(studyData.address_id); 
			const country = await Country.findByPk(studyData.country_id); 
			const studyType = await StudyType.findByPk(studyData.study_type_id); 
			betterStudies.push({
				...studyData,
				address: address!.get(),
				studyType: studyType!.get().name,
				country: country!.get().name
			})
		}
		return betterStudies;
	} 

	static async filterStudiesByCountryId(idCountry:number){
		const studies = await Study.findAll({
			where:{
				country_id: idCountry
			}
		})
		const betterStudies = []
		for(const study of studies){
			const studyData = study.get();
			const address = await Address.findByPk(studyData.address_id); 
			const country = await Country.findByPk(studyData.country_id); 
			const studyType = await StudyType.findByPk(studyData.study_type_id); 
			betterStudies.push({
				...studyData,
				address: address!.get(),
				studyType: studyType!.get().name,
				country: country!.get().name
			})
		}
		return betterStudies;
	} 
}