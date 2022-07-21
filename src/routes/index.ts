import express from 'express';
import shopify from './shopify';
import clap from './clap'
import swagger from './swagger';

export default function () {
	const router = express.Router();
	shopify(router);
	clap(router);
	swagger(router)
	return router;
}
