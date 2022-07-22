import { StudyRepository } from '@repository/StudyRepository';
import { RequestHandler } from 'express';

export const getStudiesByType: RequestHandler = async (req, res, next) => {
	try {
        const idType = req.query.idType! as string
        const studies = await StudyRepository.filterStudiesByTypeId(parseInt(idType))
		res.status(200).json(studies);
	} catch (err) {
		next(err);
	}
};

export const getStudiesByCountry: RequestHandler = async (req, res, next) => {
	try {
        const idCountry = req.query.idCountry! as string
        const studies = await StudyRepository.filterStudiesByCountryId(parseInt(idCountry))
		res.status(200).json(studies);
	} catch (err) {
		next(err);
	}
};

export const getStudiesByAddress: RequestHandler = async (req, res, next) => {
	try {
        const idAddress = req.query.idAddress! as string
        const studies = await StudyRepository.filterStudiesByAddressId(parseInt(idAddress))
		res.status(200).json(studies);
	} catch (err) {
		next(err);
	}
};
