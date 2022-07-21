import express from 'express';
import * as controller from '@controllers/shopify';

export default function (router: express.Router) {
	router.get('/shopify', controller.handleOrder);
}
