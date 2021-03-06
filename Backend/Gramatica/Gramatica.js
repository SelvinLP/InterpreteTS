/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var Gramatica = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[1,6],$V2=[2,5,8],$V3=[1,18],$V4=[1,11],$V5=[1,20],$V6=[1,19],$V7=[1,27],$V8=[1,21],$V9=[1,22],$Va=[1,23],$Vb=[1,24],$Vc=[1,25],$Vd=[1,26],$Ve=[1,29],$Vf=[1,30],$Vg=[1,31],$Vh=[1,32],$Vi=[1,33],$Vj=[1,34],$Vk=[1,35],$Vl=[1,36],$Vm=[1,37],$Vn=[1,38],$Vo=[1,39],$Vp=[1,40],$Vq=[1,41],$Vr=[1,42],$Vs=[1,43],$Vt=[11,19,20,21,22,23,24,25,26,29,30,31,32,33,34,35,36],$Vu=[11,19,20,21,22,29,30,31,32,33,34,35,36],$Vv=[11,19,20,21,22,23,24,29,30,31,32,33,34,35,36],$Vw=[11,19,20,33,34,35,36];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"START":3,"LInstrucciones":4,"EOF":5,"Instruccion":6,"Impresion":7,"tk_console":8,"(":9,"Expresion":10,")":11,";":12,"OpeTernario":13,"E_aritmetica":14,"E_relacional":15,"E_logica":16,"Factor":17,"E_Funcionexp":18,"?":19,":":20,"+":21,"-":22,"*":23,"/":24,"**":25,"%":26,"tk_id":27,"PosibleParametrosllamada":28,">":29,"<":30,">=":31,"<=":32,"==":33,"!=":34,"&&":35,"||":36,"!":37,"tk_entero":38,"tk_decimal":39,"tk_cadena":40,"tk_bool":41,"tk_null":42,"PosibleDireccionArray":43,".":44,"tk_length":45,"Direccionarray":46,"Incydec":47,"++":48,"--":49,"TipoDato":50,"tk_number":51,"tk_string":52,"tk_boolean":53,"tk_void":54,"Returnt":55,"tk_return":56,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"tk_console",9:"(",11:")",12:";",19:"?",20:":",21:"+",22:"-",23:"*",24:"/",25:"**",26:"%",27:"tk_id",28:"PosibleParametrosllamada",29:">",30:"<",31:">=",32:"<=",33:"==",34:"!=",35:"&&",36:"||",37:"!",38:"tk_entero",39:"tk_decimal",40:"tk_cadena",41:"tk_bool",42:"tk_null",44:".",45:"tk_length",46:"Direccionarray",48:"++",49:"--",51:"tk_number",52:"tk_string",53:"tk_boolean",54:"tk_void",56:"tk_return"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[7,5],[10,3],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[13,5],[14,3],[14,3],[14,3],[14,3],[14,3],[14,3],[14,2],[14,2],[18,4],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[16,3],[16,3],[16,2],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,4],[17,2],[43,1],[43,0],[47,2],[47,2],[50,1],[50,1],[50,1],[50,1],[50,1],[50,1],[55,2],[55,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1];
break;
case 2:
$$[$0-1].push($$[$0]); this.$ = $$[$0-1];
break;
case 3:
this.$ = [$$[$0]];
break;
case 4: case 8: case 9: case 10: case 11: case 12: case 13: case 42:
this.$=$$[$0];
break;
case 5:
CL_Error.L_Errores.push(new CN_Error.N_Error("Sintactico","Error en la Instruccion "+yytext,"",this._$.first_line,this._$.first_column));
break;
case 6:

        this.$ = new Imprimir($$[$0-2], _$[$0-4].first_line, _$[$0-4].first_column);
    
break;
case 7:
this.$=$$[$0-1];
break;
case 14:
CL_Error.L_Errores.push(new CN_Error.N_Error("Sintactico","Error en la expresion "+yytext,"",this._$.first_line,this._$.first_column));
break;
case 15:

        this.$ = new Opeternario($$[$0-4], $$[$0-2], $$[$0], _$[$0-4].first_line,_$[$0-4].first_column);
    
break;
case 16:

        this.$ = new Aritmetica($$[$0-2], $$[$0], TipoAritmetico.MAS, _$[$0-2].first_line,_$[$0-2].first_column);
    
break;
case 17:

        this.$ = new Aritmetica($$[$0-2], $$[$0], TipoAritmetico.MENOS, _$[$0-2].first_line,_$[$0-2].first_column);
    
break;
case 18:

        this.$ = new Aritmetica($$[$0-2], $$[$0], TipoAritmetico.MULT, _$[$0-2].first_line,_$[$0-2].first_column);
    
break;
case 19:

        this.$ = new Aritmetica($$[$0-2], $$[$0], TipoAritmetico.DIV, _$[$0-2].first_line,_$[$0-2].first_column);
    
break;
case 20:

        this.$ = new Aritmetica($$[$0-2], $$[$0], TipoAritmetico.POT, _$[$0-2].first_line,_$[$0-2].first_column);
    
break;
case 21:

        this.$ = new Aritmetica($$[$0-2], $$[$0], TipoAritmetico.MOD, _$[$0-2].first_line,_$[$0-2].first_column);
    
break;
case 22:

        this.$ = new Aritmetica($$[$0], null, TipoAritmetico.UMENOS, _$[$0-1].first_line,_$[$0-1].first_column);
    
break;
case 23:

        this.$ = new Aritmetica($$[$0], null, TipoAritmetico.UMAS, _$[$0-1].first_line,_$[$0-1].first_column);
    
break;
case 24:

        this.$ = new Llamarfuncionexp($$[$0-3], $$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column);
    
break;
case 25:

        this.$ = new Relacional($$[$0-2], $$[$0],TipoRelacional.MAYORQUE, _$[$0-2].first_line, _$[$0-2].first_column);
    
break;
case 26:

        this.$ = new Relacional($$[$0-2], $$[$0],TipoRelacional.MENORQUE, _$[$0-2].first_line, _$[$0-2].first_column);
    
break;
case 27:

        this.$ = new Relacional($$[$0-2], $$[$0],TipoRelacional.MAYORIGUAL, _$[$0-2].first_line, _$[$0-2].first_column);
    
break;
case 28:

        this.$ = new Relacional($$[$0-2], $$[$0],TipoRelacional.MENORIGUAL, _$[$0-2].first_line, _$[$0-2].first_column);
    
break;
case 29:

        this.$ = new Relacional($$[$0-2], $$[$0],TipoRelacional.IGUAL, _$[$0-2].first_line, _$[$0-2].first_column);
    
break;
case 30:

        this.$ = new Relacional($$[$0-2], $$[$0],TipoRelacional.DIFERENCIA, _$[$0-2].first_line, _$[$0-2].first_column);
    
break;
case 31:

        this.$ = new Logica($$[$0-2], $$[$0],TipoLogica.AND, _$[$0-2].first_line, _$[$0-2].first_column);
    
break;
case 32:

        this.$ = new Logica($$[$0-2], $$[$0],TipoLogica.OR, _$[$0-2].first_line, _$[$0-2].first_column);
    
break;
case 33:

        this.$ = new Logica($$[$0], null,TipoLogica.NOT, _$[$0-1].first_line, _$[$0-1].first_column);
    
break;
case 34: case 35:
 
        this.$ = new Literal($$[$0], _$[$0].first_line, _$[$0].first_column, 0);
    
break;
case 36:

        this.$ = new Literal($$[$0].replace(/\"|\'/g,""), _$[$0].first_line, _$[$0].first_column, 1);
    
break;
case 37:
 
        this.$ = new Literal($$[$0], _$[$0].first_line, _$[$0].first_column, 2);
    
break;
case 38:

        this.$ = new Literal($$[$0], _$[$0].first_line, _$[$0].first_column, 3);
    
break;
case 39:

        this.$ = new Id($$[$0], _$[$0].first_line, _$[$0].first_column);
    
break;
case 40:

        this.$ = new AsignacionArrayExp($$[$0-3], $$[$0-2], _$[$0-3].first_line, _$[$0-3].first_column);
    
break;
case 41:

        this.$ = new Obtenervalorarray($$[$0-1], $$[$0], _$[$0-1].first_line, _$[$0-1].first_column);
    
break;
case 44:

        this.$ = new Asignacion($$[$0-1], null, TipoAritmetico.INC,_$[$0-1].first_line, _$[$0-1].first_column);
    
break;
case 45:

        this.$ = new Asignacion($$[$0-1], null, TipoAritmetico.DEC, _$[$0-1].first_line, _$[$0-1].first_column);
    
break;
case 46:
this.$ = "number";
break;
case 47:
this.$ = "string";
break;
case 48:
this.$ = "boolean";
break;
case 49:
this.$ = "void";
break;
case 50:
this.$ = $$[$0];
break;
case 51:
CL_Error.L_Errores.push(new CN_Error.N_Error("Sintactico","Error al definir tipo "+yytext,"",this._$.first_line,this._$.first_column))
break;
case 52:

        this.$=new Returnt(null,_$[$0-1].first_line, _$[$0-1].first_column);
    
break;
case 53:

        this.$=new Returnt($$[$0-1],_$[$0-2].first_line, _$[$0-2].first_column);
    
break;
}
},
table: [{2:$V0,3:1,4:2,6:3,7:4,8:$V1},{1:[3]},{2:$V0,5:[1,7],6:8,7:4,8:$V1},o($V2,[2,3]),o($V2,[2,4]),o($V2,[2,5]),{9:[1,9]},{1:[2,1]},o($V2,[2,2]),{2:$V3,9:$V4,10:10,13:12,14:13,15:14,16:15,17:16,18:17,21:$V5,22:$V6,27:$V7,37:$V8,38:$V9,39:$Va,40:$Vb,41:$Vc,42:$Vd},{11:[1,28],19:$Ve,21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk,29:$Vl,30:$Vm,31:$Vn,32:$Vo,33:$Vp,34:$Vq,35:$Vr,36:$Vs},{2:$V3,9:$V4,10:44,13:12,14:13,15:14,16:15,17:16,18:17,21:$V5,22:$V6,27:$V7,37:$V8,38:$V9,39:$Va,40:$Vb,41:$Vc,42:$Vd},o($Vt,[2,8]),o($Vt,[2,9]),o($Vt,[2,10]),o($Vt,[2,11]),o($Vt,[2,12]),o($Vt,[2,13]),o($Vt,[2,14]),{2:$V3,9:$V4,10:45,13:12,14:13,15:14,16:15,17:16,18:17,21:$V5,22:$V6,27:$V7,37:$V8,38:$V9,39:$Va,40:$Vb,41:$Vc,42:$Vd},{2:$V3,9:$V4,10:46,13:12,14:13,15:14,16:15,17:16,18:17,21:$V5,22:$V6,27:$V7,37:$V8,38:$V9,39:$Va,40:$Vb,41:$Vc,42:$Vd},{2:$V3,9:$V4,10:47,13:12,14:13,15:14,16:15,17:16,18:17,21:$V5,22:$V6,27:$V7,37:$V8,38:$V9,39:$Va,40:$Vb,41:$Vc,42:$Vd},o($Vt,[2,34]),o($Vt,[2,35]),o($Vt,[2,36]),o($Vt,[2,37]),o($Vt,[2,38]),o($Vt,[2,39],{43:48,9:[1,50],44:[2,43],46:[1,49]}),{12:[1,51]},{2:$V3,9:$V4,10:52,13:12,14:13,15:14,16:15,17:16,18:17,21:$V5,22:$V6,27:$V7,37:$V8,38:$V9,39:$Va,40:$Vb,41:$Vc,42:$Vd},{2:$V3,9:$V4,10:53,13:12,14:13,15:14,16:15,17:16,18:17,21:$V5,22:$V6,27:$V7,37:$V8,38:$V9,39:$Va,40:$Vb,41:$Vc,42:$Vd},{2:$V3,9:$V4,10:54,13:12,14:13,15:14,16:15,17:16,18:17,21:$V5,22:$V6,27:$V7,37:$V8,38:$V9,39:$Va,40:$Vb,41:$Vc,42:$Vd},{2:$V3,9:$V4,10:55,13:12,14:13,15:14,16:15,17:16,18:17,21:$V5,22:$V6,27:$V7,37:$V8,38:$V9,39:$Va,40:$Vb,41:$Vc,42:$Vd},{2:$V3,9:$V4,10:56,13:12,14:13,15:14,16:15,17:16,18:17,21:$V5,22:$V6,27:$V7,37:$V8,38:$V9,39:$Va,40:$Vb,41:$Vc,42:$Vd},{2:$V3,9:$V4,10:57,13:12,14:13,15:14,16:15,17:16,18:17,21:$V5,22:$V6,27:$V7,37:$V8,38:$V9,39:$Va,40:$Vb,41:$Vc,42:$Vd},{2:$V3,9:$V4,10:58,13:12,14:13,15:14,16:15,17:16,18:17,21:$V5,22:$V6,27:$V7,37:$V8,38:$V9,39:$Va,40:$Vb,41:$Vc,42:$Vd},{2:$V3,9:$V4,10:59,13:12,14:13,15:14,16:15,17:16,18:17,21:$V5,22:$V6,27:$V7,37:$V8,38:$V9,39:$Va,40:$Vb,41:$Vc,42:$Vd},{2:$V3,9:$V4,10:60,13:12,14:13,15:14,16:15,17:16,18:17,21:$V5,22:$V6,27:$V7,37:$V8,38:$V9,39:$Va,40:$Vb,41:$Vc,42:$Vd},{2:$V3,9:$V4,10:61,13:12,14:13,15:14,16:15,17:16,18:17,21:$V5,22:$V6,27:$V7,37:$V8,38:$V9,39:$Va,40:$Vb,41:$Vc,42:$Vd},{2:$V3,9:$V4,10:62,13:12,14:13,15:14,16:15,17:16,18:17,21:$V5,22:$V6,27:$V7,37:$V8,38:$V9,39:$Va,40:$Vb,41:$Vc,42:$Vd},{2:$V3,9:$V4,10:63,13:12,14:13,15:14,16:15,17:16,18:17,21:$V5,22:$V6,27:$V7,37:$V8,38:$V9,39:$Va,40:$Vb,41:$Vc,42:$Vd},{2:$V3,9:$V4,10:64,13:12,14:13,15:14,16:15,17:16,18:17,21:$V5,22:$V6,27:$V7,37:$V8,38:$V9,39:$Va,40:$Vb,41:$Vc,42:$Vd},{2:$V3,9:$V4,10:65,13:12,14:13,15:14,16:15,17:16,18:17,21:$V5,22:$V6,27:$V7,37:$V8,38:$V9,39:$Va,40:$Vb,41:$Vc,42:$Vd},{2:$V3,9:$V4,10:66,13:12,14:13,15:14,16:15,17:16,18:17,21:$V5,22:$V6,27:$V7,37:$V8,38:$V9,39:$Va,40:$Vb,41:$Vc,42:$Vd},{11:[1,67],19:$Ve,21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk,29:$Vl,30:$Vm,31:$Vn,32:$Vo,33:$Vp,34:$Vq,35:$Vr,36:$Vs},o($Vt,[2,22]),o($Vt,[2,23]),o($Vt,[2,33]),{44:[1,68]},o($Vt,[2,41],{44:[2,42]}),{28:[1,69]},o($V2,[2,6]),{19:$Ve,20:[1,70],21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk,29:$Vl,30:$Vm,31:$Vn,32:$Vo,33:$Vp,34:$Vq,35:$Vr,36:$Vs},o($Vu,[2,16],{23:$Vh,24:$Vi,25:$Vj,26:$Vk}),o($Vu,[2,17],{23:$Vh,24:$Vi,25:$Vj,26:$Vk}),o($Vv,[2,18],{25:$Vj,26:$Vk}),o($Vv,[2,19],{25:$Vj,26:$Vk}),o($Vt,[2,20]),o($Vt,[2,21]),o($Vw,[2,25],{21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk}),o($Vw,[2,26],{21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk}),o($Vw,[2,27],{21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk}),o($Vw,[2,28],{21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk}),o($Vw,[2,29],{21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk,29:$Vl,30:$Vm,31:$Vn,32:$Vo}),o($Vw,[2,30],{21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk,29:$Vl,30:$Vm,31:$Vn,32:$Vo}),o([11,19,20,35,36],[2,31],{21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk,29:$Vl,30:$Vm,31:$Vn,32:$Vo,33:$Vp,34:$Vq}),o([11,19,20,36],[2,32],{21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk,29:$Vl,30:$Vm,31:$Vn,32:$Vo,33:$Vp,34:$Vq,35:$Vr}),o($Vt,[2,7]),{45:[1,71]},{11:[1,72]},{2:$V3,9:$V4,10:73,13:12,14:13,15:14,16:15,17:16,18:17,21:$V5,22:$V6,27:$V7,37:$V8,38:$V9,39:$Va,40:$Vb,41:$Vc,42:$Vd},o($Vt,[2,40]),o($Vt,[2,24]),o([11,19,20],[2,15],{21:$Vf,22:$Vg,23:$Vh,24:$Vi,25:$Vj,26:$Vk,29:$Vl,30:$Vm,31:$Vn,32:$Vo,33:$Vp,34:$Vq,35:$Vr,36:$Vs})],
defaultActions: {7:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};

    const CL_Error = require('../build/Errores/L_Error');
    const CN_Error = require('../build/Errores/N_Error');

/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:// se ignoran espacios en blanco
break;
case 1:// comentario de una linea
break;
case 2:/*Comentario multilinea*/
break;
case 3:return 'tk_let'
break;
case 4:return 'tk_const'
break;
case 5:return 52
break;
case 6:return 51
break;
case 7:return 53
break;
case 8:return 54
break;
case 9:return 42
break;
case 10:return 'tk_if'
break;
case 11:return 'tk_else'
break;
case 12:return 'tk_switch'
break;
case 13:return 'tk_case'
break;
case 14:return 'tk_default'
break;
case 15:return 'tk_while'
break;
case 16:return 'tk_do'
break;
case 17:return 'tk_for'
break;
case 18:return 'tk_continue'
break;
case 19:return 56
break;
case 20:return 'tk_break'
break;
case 21:return 'tk_function'
break;
case 22:return 8
break;
case 23:return 'tk_graficar_ts'
break;
case 24:return 'tk_type'
break;
case 25:return 'tk_array'
break;
case 26:return 'tk_push'
break;
case 27:return 'tk_pop'
break;
case 28:return 45
break;
case 29:return 'tk_in'
break;
case 30:return 'tk_of'
break;
case 31:return 33
break;
case 32:return 34
break;
case 33:return 31
break;
case 34:return 29
break;
case 35:return 32
break;
case 36:return 30 
break;
case 37:return 35
break;
case 38:return 36
break;
case 39:return 37
break;
case 40:return 48
break;
case 41:return 49
break;
case 42:return '{'
break;
case 43:return '}'
break;
case 44:return 12
break;
case 45:return '='
break;
case 46:return 9
break;
case 47:return 11
break;
case 48:return ','
break;
case 49:return 20
break;
case 50:return 44
break;
case 51:return '['
break;
case 52:return ']'
break;
case 53:return 19
break;
case 54:return 41
break;
case 55:return 39
break;
case 56:return 38
break;
case 57:return 40
break;
case 58:return 27;
break;
case 59:return 25
break;
case 60:return 21
break;
case 61:return 22
break;
case 62:return 23
break;
case 63:return 24
break;
case 64:return 26
break;
case 65: /*se ignoran*/ 
break;
case 66:  return 5;   
break;
case 67:CL_Error.L_Errores.push(new CN_Error.N_Error("Lexico",yy_.yytext,"",yy_.yylineno,yy_.yylloc.first_column));
break;
}
},
rules: [/^(?:\s+)/,/^(?:\/\/.*)/,/^(?:\/\*\/*([^*/]|[^*]\/|\*[^/])*\**\*\/)/,/^(?:let\b)/,/^(?:const\b)/,/^(?:string\b)/,/^(?:number\b)/,/^(?:boolean\b)/,/^(?:void\b)/,/^(?:null\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:switch\b)/,/^(?:case\b)/,/^(?:default\b)/,/^(?:while\b)/,/^(?:do\b)/,/^(?:for\b)/,/^(?:continue\b)/,/^(?:return\b)/,/^(?:break\b)/,/^(?:function\b)/,/^(?:console\.log\b)/,/^(?:graficar_ts\b)/,/^(?:type\b)/,/^(?:Array\b)/,/^(?:push\b)/,/^(?:pop\b)/,/^(?:length\b)/,/^(?:in\b)/,/^(?:of\b)/,/^(?:==)/,/^(?:!=)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:!)/,/^(?:\+\+)/,/^(?:--)/,/^(?:\{)/,/^(?:\})/,/^(?:;)/,/^(?:=)/,/^(?:\()/,/^(?:\))/,/^(?:,)/,/^(?::)/,/^(?:\.)/,/^(?:\[)/,/^(?:\])/,/^(?:\?)/,/^(?:true|false\b)/,/^(?:[0-9]+\.[0-9]+)/,/^(?:[0-9]+)/,/^(?:[\"|\']([^\"\n]|(\\"))*[\"|\'])/,/^(?:([a-zA-Z])[a-zA-Z0-9_ñÑ]*)/,/^(?:\*\*)/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:\/)/,/^(?:%)/,/^(?:[ \t\r\n\f])/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = Gramatica;
exports.Parser = Gramatica.Parser;
exports.parse = function () { return Gramatica.parse.apply(Gramatica, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}