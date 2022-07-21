import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import Boom from 'boom';
import morgan from 'morgan';
import 'module-alias/register';
import { NODE_ENV } from '@config/environment';

import routes from '@routes';

export const createApp = () => {
	const app = express();
	app.use(express.urlencoded({ extended: false }));
	app.use(express.json());
	app.use(cors());
	if (NODE_ENV !== 'travis') app.use(morgan('combined'));

	app.use('/api/v1', routes());

	app.use(<T extends Error>(error: T | Boom, req: Request, res: Response, next: NextFunction) => {
		if (error) {
			if (Boom.isBoom(error)) {
				return res.status(error.output.statusCode).json({
					message: error.message,
					...(error.data || {})
				});
			}
		}

		return res.status(500).json({
			statusCode: 500,
			error: 'Internal Server Error',
			message: 'An internal server error ocurred'
		});
	});

	return app;
};
