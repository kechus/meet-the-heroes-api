import chai, { expect } from 'chai';
	import chaiAsPromised from 'chai-as-promised';
	import chaiHttp from 'chai-http';
import { it, describe } from 'mocha';
import { Prueba } from '@models/Prueba';

chai.use(chaiAsPromised);
chai.use(chaiHttp);

import { createApp } from '../app';

describe('first test', () => {
	let app: any;

	before(async () => {
		app = createApp();
	});

	it('should test', async () => {
		const response = await chai.request(app).get(`/api/v1/shopify`).send();
		expect(response).have.status(200);
		expect(response.body.text).to.eql('hola');
	});

	it('should read from db', async ()=>{
		const pruebas = await Prueba.findAll();
	})
});
