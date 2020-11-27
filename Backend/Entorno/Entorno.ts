import { TipoDato, Tipo } from "../Abstracto/Retorno";
import { Simbolo } from "./Simbolo";
import { N_Error } from "../Errores/N_Error";
import { N_Tipo } from "../Otros/N_Tipo";

export class Entorno{
    
    private variables : Map<string,Simbolo>;

    constructor(public anterior : Entorno | null){
        this.variables = new Map();
    }

    public guardarvar(letoconst: TipoDato,id: string, valor: any, tipo: N_Tipo, line : number, column: number){
        let env : Entorno | null = this;
        //verificacion si existe en el mismo entorno
        if(env.variables.has(id)){
            throw new N_Error('Semantico','La variable ya existe: '+id,'', line, column);  
        }else{
            //sino se cumple lo guarda en el entorno actual
            this.variables.set(id, new Simbolo(true,id, tipo, valor));
        }
    }

    public obtenervar(id: string) : Simbolo | undefined | null{
        let env : Entorno | null = this;
        while(env != null){
            if(env.variables.has(id)){
                return env.variables.get(id);
            }
            env = env.anterior;
        }
        return null;
    } 

    public eliminarvar(id:string){
        let env : Entorno | null = this;
        //verificacion si existe en el mismo entorno
        if(env.variables.has(id)){
            env.variables.delete(id);
        }
    }

}