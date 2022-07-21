import express from 'express';
import * as controller from '@controllers/countries';

export default function (router: express.Router) {
	router.get('/countries', controller.getCountries);
}
