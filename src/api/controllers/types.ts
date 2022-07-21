import { RequestHandler } from 'express';
import { Country } from '@models/Country';
import { StudyType } from '@models/StudyType';

export const getTypes: RequestHandler = async (req, res, next) => {
	try {
        const types = await StudyType.findAll();
        const formattedTypes = []
        for(const country of types){
            formattedTypes.push(country.get())
        }
		res.status(200).json(formattedTypes);
	} catch (err) {
		next(err);
	}
};
