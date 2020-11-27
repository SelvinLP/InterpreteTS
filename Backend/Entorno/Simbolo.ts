import { N_Tipo } from "../Otros/N_Tipo";

export class Simbolo{
    constructor(public letoconst: boolean, public id: string, public tipo: N_Tipo, public valor: any){
    }
}