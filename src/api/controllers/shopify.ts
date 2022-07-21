import { RequestHandler } from 'express';
import { shopifyService } from '@loaders/services';

export const handleOrder: RequestHandler = async (req, res, next) => {
	try {
		const result = shopifyService.handleOrder();
		res.status(200).json(result);
	} catch (err) {
		next(err);
	}
};
