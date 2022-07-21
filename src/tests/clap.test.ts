import { ClapRepository } from '../repository';
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import chaiHttp from 'chai-http';
import { it, describe } from 'mocha';
import { createApp } from '../app';

chai.use(chaiAsPromised);
chai.use(chaiHttp);

describe('Clap counter', ()=>{
    let app: any;
    let clapCount: number;

	before(async () => {
		app = createApp();
	});

    it('should increment counter',async ()=>{
        clapCount = await ClapRepository.getClapCount()
    })

    it('should increment clap count',async ()=>{
        await ClapRepository.incrementClapCount()
        const clapCountAfter = await ClapRepository.getClapCount()
        expect(clapCountAfter).to.eql(clapCount + 1)
        clapCount = clapCountAfter
    })

    it('should test increment endpoint', async ()=>{
        const response = await chai.request(app).put(`/api/v1/claps`).send();
		expect(response).have.status(200);
    })

    it('should test get endpoint', async () => {
        const response = await chai.request(app).get(`/api/v1/claps`).send();
		expect(response).have.status(200);
		expect(response.body.clapCount).to.eql(clapCount + 1);
    });
})