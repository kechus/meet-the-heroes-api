import { Country } from "@models/Country"
import { Op } from 'sequelize';

export class StudyRepository{
    static async filterStudiesByName(studyName:string){
        await Country.findAll({
					where: {
						name: { [Op.like]: `%${studyName}%` }
					}
				});
    }

}