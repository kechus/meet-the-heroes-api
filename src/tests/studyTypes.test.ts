import chai, { expect } from 'chai';
	import chaiAsPromised from 'chai-as-promised';
	import chaiHttp from 'chai-http';
import { it, describe } from 'mocha';
import { Prueba } from '@models/Prueba';

chai.use(chaiAsPromised);
chai.use(chaiHttp);

import { createApp } from '../app';
import { StudyType } from '@models/StudyType';

describe('Study type', () => {
	let app: any;

	before(async () => {
		app = createApp();
	});

	it('should read from db', async ()=>{
		const types = await StudyType.findAll();
        expect(types.length).to.eql(21)
	})

	it('should test endpoint', async ()=>{
		const response = await chai.request(app).get(`/api/v1/types`).send();
		expect(response).have.status(200);
        expect(response.body.length).to.eql(21)
	})
});
