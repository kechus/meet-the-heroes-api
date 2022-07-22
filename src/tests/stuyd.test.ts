import chai, { expect } from 'chai';
	import chaiAsPromised from 'chai-as-promised';
	import chaiHttp from 'chai-http';
import { it, describe } from 'mocha';

chai.use(chaiAsPromised);
chai.use(chaiHttp);

import { createApp } from '../app';
import { Study } from '@models/Study';
import { StudyRepository } from '@repository/StudyRepository';

describe('Study', () => {
	let app: any;

	before(async () => {
		app = createApp();
	});

	it.skip('should read all from db', async ()=>{
		const studies = await Study.findAll()
        // console.log(studies)
	})

    it('Should read study by type id',async()=>{
        const studies = await StudyRepository.filterStudiesByTypeId(2)
    })

    it('should test get endpoint by type', async () => {
        const response = await chai.request(app).get(`/api/v1/study/type?idType=2`).send();
		expect(response).have.status(200);
    });

	it('should test get endpoint by country', async () => {
        const response = await chai.request(app).get(`/api/v1/study/country?idCountry=1290`).send();
		console.log(response.body)
		expect(response).have.status(200);
    });
});
