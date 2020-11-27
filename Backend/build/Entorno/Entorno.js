"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entorno = void 0;
var Simbolo_1 = require("./Simbolo");
var N_Error_1 = require("../Errores/N_Error");
var Entorno = /** @class */ (function () {
    function Entorno(anterior) {
        this.anterior = anterior;
        this.variables = new Map();
    }
    Entorno.prototype.guardarvar = function (letoconst, id, valor, tipo, line, column) {
        var env = this;
        //verificacion si existe en el mismo entorno
        if (env.variables.has(id)) {
            throw new N_Error_1.N_Error('Semantico', 'La variable ya existe: ' + id, '', line, column);
        }
        else {
            //sino se cumple lo guarda en el entorno actual
            this.variables.set(id, new Simbolo_1.Simbolo(true, id, tipo, valor));
        }
    };
    Entorno.prototype.obtenervar = function (id) {
        var env = this;
        while (env != null) {
            if (env.variables.has(id)) {
                return env.variables.get(id);
            }
            env = env.anterior;
        }
        return null;
    };
    Entorno.prototype.eliminarvar = function (id) {
        var env = this;
        //verificacion si existe en el mismo entorno
        if (env.variables.has(id)) {
            env.variables.delete(id);
        }
    };
    return Entorno;
}());
exports.Entorno = Entorno;
