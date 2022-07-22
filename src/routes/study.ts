import express from 'express';
import * as controller from '@controllers/study';

export default function (router: express.Router) {
	router.get('/study/type', controller.getStudiesByType);
	router.get('/study/country', controller.getStudiesByCountry);
}
