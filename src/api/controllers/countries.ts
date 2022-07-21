import { RequestHandler } from 'express';
import { Country } from '@models/Country';

export const getCountries: RequestHandler = async (req, res, next) => {
	try {
        const countries = await Country.findAll();
        const betterCountries = []
        for(const country of countries){
            betterCountries.push(country.get())
        }
		res.status(200).json(betterCountries);
	} catch (err) {
		next(err);
	}
};
