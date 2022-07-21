import express from 'express';
import * as controller from '@controllers/clap';

export default function (router: express.Router) {
	router.put('/claps', controller.incrementClapCount);
	router.get('/claps', controller.getClapCount);
}
