import express from 'express';
import * as controller from '@controllers/types';

export default function (router: express.Router) {
	router.get('/types', controller.getTypes);
}
