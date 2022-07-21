import { ClapRepository } from "@repository";

export class ClapService{
    async getClapCount(){
        return await ClapRepository.getClapCount()
    }

    async incrementClapCount(){
        await ClapRepository.incrementClapCount()
    }
}