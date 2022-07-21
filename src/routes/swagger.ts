import express from 'express';
import { join } from 'path';
import swaggerUI from 'swagger-ui-express';
import yaml from 'yamljs';

export default async function (router: express.Router) {
	const swaggerDocument = await new Promise((resolve) => {
		resolve(yaml.load(join(__dirname, '../../docs/swagger.yml')));
	});

	router.use('/docs', swaggerUI.serve);
	router.get('/docs', swaggerUI.setup(swaggerDocument as any));
}
