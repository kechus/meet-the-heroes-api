import express from 'express';
import shopify from './shopify';
import clap from './clap'
import swagger from './swagger';
import countries from './countries';
import studyTypes from './studyTypes';

export default function () {
	const router = express.Router();
	shopify(router);
	clap(router);
	swagger(router);
	countries(router)
	studyTypes(router)
	return router;
}
