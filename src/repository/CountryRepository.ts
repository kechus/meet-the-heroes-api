import { Country } from "@models/Country"
import { Op } from 'sequelize';

export class CountryRepository{
    static async listCountriesByName(countryName:string){
        await Country.findAll({
					where: {
						name: { [Op.like]: `%${countryName}%` }
					}
				});
    }

    static async findCountryById(countryId: number): Promise<Country>{
        return await Country.findByPk(countryId) as Country
    }
}