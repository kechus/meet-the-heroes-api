import { Clap } from "../models/Clap";

export class ClapRepository{
    static async incrementClapCount(){
        const clap = await Clap.findByPk(0)
        await clap!.increment('counter', { by: 1 });
    }

    static async getClapCount(): Promise<number>{
        const clap = await Clap.findByPk(0);
        return clap!.get().counter
    }
}