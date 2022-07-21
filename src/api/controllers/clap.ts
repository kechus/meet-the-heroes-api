import { RequestHandler } from 'express';
import { clapService} from '@loaders/services';

export const incrementClapCount: RequestHandler = async (req, res, next) => {
	try {
		await clapService.incrementClapCount()
		res.status(200).json({});
	} catch (err) {
		next(err);
	}
};

export const getClapCount: RequestHandler = async (req, res, next) => {
	try {
		const count = await clapService.getClapCount()
		res.status(200).json({clapCount: count});
	} catch (err) {
		next(err);
	}
};