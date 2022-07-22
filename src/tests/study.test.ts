import chai, { expect } from 'chai';
	import chaiAsPromised from 'chai-as-promised';
	import chaiHttp from 'chai-http';
import { it, describe } from 'mocha';

chai.use(chaiAsPromised);
chai.use(chaiHttp);

import { createApp } from '../app';
import { Study } from '@models/Study';
import { StudyRepository } from '@repository/StudyRepository';

describe('Study service', () => {
	let app: any;

	before(async () => {
		app = createApp();
	});

    it('Should read study by type id, returning no repeated address_id',async()=>{
        const studies = await StudyRepository.filterStudiesByTypeId(2)
		const addressesId: number[] = []

		expect(studies.length).to.not.eql(0)
		for(const study of studies){
			expect(study).to.have.property('id')
			expect(study).to.have.property('name')
			expect(study).to.have.property('name')
			expect(study).to.have.property('country')
			expect(study).to.have.property('studyType')
			addressesId.push(study.address.id)
		}
		const found = addressesId.find((id,i)=> addressesId.indexOf(id) != i)
		expect(found).to.eql(undefined)
    })

	it('should rest by country, returning no repeated addres_id',async ()=>{
		const studies = await StudyRepository.filterStudiesByCountryId(1326)
		const addressesId: number[] = []
		expect(studies.length).to.not.eql(0)
		for(const study of studies){
			expect(study).to.have.property('id')
			expect(study).to.have.property('name')
			expect(study).to.have.property('name')
			expect(study).to.have.property('country')
			expect(study).to.have.property('studyType')
			addressesId.push(study.address.id)
		}
		const found = addressesId.find((id,i)=> addressesId.indexOf(id) != i)
		expect(found).to.eql(undefined)
	})

    it('should test get endpoint by type', async () => {
        const response = await chai.request(app).get(`/api/v1/study/type?idType=2`).send();
		expect(response).have.status(200);
		for(const study of response.body){
			expect(study).to.have.property('id')
			expect(study).to.have.property('name')
			expect(study).to.have.property('name')
			expect(study).to.have.property('country')
			expect(study).to.have.property('studyType')
		}
    });

	it('should test get endpoint by country', async () => {
        const response = await chai.request(app).get(`/api/v1/study/country?idCountry=1290`).send();
		for(const study of response.body){
			expect(study).to.have.property('id')
			expect(study).to.have.property('name')
			expect(study).to.have.property('name')
			expect(study).to.have.property('country')
			expect(study).to.have.property('studyType')
		}
		expect(response).have.status(200);
    });
});
