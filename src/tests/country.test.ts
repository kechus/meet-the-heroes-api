import chai, { expect } from 'chai';
	import chaiAsPromised from 'chai-as-promised';
	import chaiHttp from 'chai-http';
import { it, describe } from 'mocha';
import { Prueba } from '@models/Prueba';

chai.use(chaiAsPromised);
chai.use(chaiHttp);

import { createApp } from '../app';
import { Country } from '@models/Country';
import exp from 'constants';

describe('Countries', () => {
	let app: any;

	before(async () => {
		app = createApp();
	});

	it('should read from db', async ()=>{
		const countries = await Country.findAll();
        expect(countries.length).to.eql(21)
	})

	it('should test endpoint', async ()=>{
		const response = await chai.request(app).get(`/api/v1/countries`).send();
		expect(response).have.status(200);
        expect(response.body.length).to.eql(21)
	})
});
