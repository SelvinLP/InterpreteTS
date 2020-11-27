
%{
    const CL_Error = require('../build/Errores/L_Error');
    const CN_Error = require('../build/Errores/N_Error');

%}

/*------------------------------------------------PARTE LEXICA--------------------------------------------------- */
%lex

%%

//Comentarios
\s+											// se ignoran espacios en blanco
"//".*										// comentario de una linea
"/*""/"*([^*/]|[^*]"/"|"*"[^/])*"*"*"*/"  /*Comentario multilinea*/

//Tipos de Datos
"let"               return 'tk_let'
"const"             return 'tk_const'
"string"            return 'tk_string'
"number"            return 'tk_number'
"boolean"           return 'tk_boolean'
"void"              return 'tk_void'
"null"              return 'tk_null'


//Palabras Reservadas
"if"                return 'tk_if'
"else"              return 'tk_else'
"switch"            return 'tk_switch'
"case"              return 'tk_case'
"default"           return 'tk_default'
"while"             return 'tk_while'
"do"                return 'tk_do'
"for"               return 'tk_for'
"continue"          return 'tk_continue'
"return"            return 'tk_return'
"break"             return 'tk_break'
"function"          return 'tk_function'
"console.log"       return 'tk_console'
"graficar_ts"       return 'tk_graficar_ts'
"type"              return 'tk_type'
"Array"             return 'tk_array'
"push"              return 'tk_push'
"pop"               return 'tk_pop'
"length"            return 'tk_length'
"in"                return 'tk_in'
"of"                return 'tk_of'

//Relacionales
"=="    return '=='
"!="    return '!='
">="    return '>='
">"     return '>'
"<="    return '<='
"<"     return '<' 


//Logicas
"&&"    return '&&'
"||"    return '||'
"!"     return '!'

//Unarias de Incremento y Decremento
"++"    return '++'
"--"    return '--'


//Otros
"{"     return '{'
"}"     return '}'
";"     return ';'
"="     return '='
"("     return '('
")"     return ')'
","     return ','
":"     return ':'
"."     return '.'
"["     return '['
"]"     return ']'
"?"     return '?'


//Expresiones Regulares
"true"|"false"                     return 'tk_bool'
[0-9]+"."[0-9]+                    return 'tk_decimal'
[0-9]+                             return 'tk_entero'
[\"|\']([^\"\n]|(\\\"))*[\"|\']    return 'tk_cadena'
([a-zA-Z])[a-zA-Z0-9_ñÑ]*	       return 'tk_id';


//Operaciones Aritmeticas
"**"    return '**'
"+"     return '+'
"-"     return '-'
"*"     return '*'
"/"     return '/'
"%"     return '%'

[ \t\r\n\f]                    %{ /*se ignoran*/ %}

<<EOF>>                        %{  return 'EOF';   %}

.                               {CL_Error.L_Errores.push(new CN_Error.N_Error("Lexico",yytext,"",yylineno,yylloc.first_column));}

/lex
%left '?'
%left '++' '--'
%left '||'
%left '&&'
%left '==', '!='
%nonassoc '>=', '<=', '<', '>'
%left '+' '-'
%left '*' '/'
%left '**' '%'
%right '!'



%right UMENOS UMAS

/*------------------------------------------------PARTE SINTACTICA--------------------------------------------------- */

%start START
%% 

START:
    LInstrucciones EOF                  {return $1;}            
;

LInstrucciones:
    LInstrucciones Instruccion          {$1.push($2); $$ = $1;}
    | Instruccion                       {$$ = [$1];}
;

Instruccion:
    Impresion             {$$=$1;}
    | error {CL_Error.L_Errores.push(new CN_Error.N_Error("Sintactico","Error en la Instruccion "+yytext,"",this._$.first_line,this._$.first_column));}
;

Impresion:
    tk_console '(' Expresion ')' ';'
    {
        $$ = new Imprimir($3, @1.first_line, @1.first_column);
    }
;

Expresion:
    '(' Expresion ')'       {$$=$2;}
    | OpeTernario           {$$=$1;}
    | E_aritmetica          {$$=$1;}
    | E_relacional          {$$=$1;}
    | E_logica              {$$=$1;}
    | Factor                {$$=$1;}
    | E_Funcionexp          {$$=$1;}
    | error {CL_Error.L_Errores.push(new CN_Error.N_Error("Sintactico","Error en la expresion "+yytext,"",this._$.first_line,this._$.first_column));}
;

OpeTernario:
    Expresion '?' Expresion ':' Expresion 
    {
        $$ = new Opeternario($1, $3, $5, @1.first_line,@1.first_column);
    }
;

E_aritmetica:
    Expresion '+' Expresion
    {
        $$ = new Aritmetica($1, $3, TipoAritmetico.MAS, @1.first_line,@1.first_column);
    }
    | Expresion '-' Expresion
    {
        $$ = new Aritmetica($1, $3, TipoAritmetico.MENOS, @1.first_line,@1.first_column);
    }
    | Expresion '*' Expresion
    {
        $$ = new Aritmetica($1, $3, TipoAritmetico.MULT, @1.first_line,@1.first_column);
    }
    | Expresion '/' Expresion
    {
        $$ = new Aritmetica($1, $3, TipoAritmetico.DIV, @1.first_line,@1.first_column);
    }
    | Expresion '**' Expresion
    {
        $$ = new Aritmetica($1, $3, TipoAritmetico.POT, @1.first_line,@1.first_column);
    }
    | Expresion '%' Expresion
    {
        $$ = new Aritmetica($1, $3, TipoAritmetico.MOD, @1.first_line,@1.first_column);
    }
    | '-' Expresion %prec UMENOS
    {
        $$ = new Aritmetica($2, null, TipoAritmetico.UMENOS, @1.first_line,@1.first_column);
    }
    | '+' Expresion %prec UMAS
    {
        $$ = new Aritmetica($2, null, TipoAritmetico.UMAS, @1.first_line,@1.first_column);
    }
;

E_Funcionexp:
    tk_id '(' PosibleParametrosllamada ')'
    {
        $$ = new Llamarfuncionexp($1, $3, @1.first_line, @1.first_column);
    }
;

E_relacional:
    Expresion '>' Expresion
    {
        $$ = new Relacional($1, $3,TipoRelacional.MAYORQUE, @1.first_line, @1.first_column);
    }
    | Expresion '<' Expresion
    {
        $$ = new Relacional($1, $3,TipoRelacional.MENORQUE, @1.first_line, @1.first_column);
    }
    | Expresion '>=' Expresion
    {
        $$ = new Relacional($1, $3,TipoRelacional.MAYORIGUAL, @1.first_line, @1.first_column);
    }
    | Expresion '<=' Expresion
    {
        $$ = new Relacional($1, $3,TipoRelacional.MENORIGUAL, @1.first_line, @1.first_column);
    }
    | Expresion '==' Expresion
    {
        $$ = new Relacional($1, $3,TipoRelacional.IGUAL, @1.first_line, @1.first_column);
    }
    | Expresion '!=' Expresion
    {
        $$ = new Relacional($1, $3,TipoRelacional.DIFERENCIA, @1.first_line, @1.first_column);
    }
;

E_logica:
    Expresion '&&' Expresion
    {
        $$ = new Logica($1, $3,TipoLogica.AND, @1.first_line, @1.first_column);
    }
    | Expresion '||' Expresion
    {
        $$ = new Logica($1, $3,TipoLogica.OR, @1.first_line, @1.first_column);
    }
    | '!' Expresion
    {
        $$ = new Logica($2, null,TipoLogica.NOT, @1.first_line, @1.first_column);
    }
;

Factor:
    tk_entero
    { 
        $$ = new Literal($1, @1.first_line, @1.first_column, 0);
    }
    | tk_decimal
    { 
        $$ = new Literal($1, @1.first_line, @1.first_column, 0);
    }
    | tk_cadena
    {
        $$ = new Literal($1.replace(/\"|\'/g,""), @1.first_line, @1.first_column, 1);
    }
    | tk_bool
    { 
        $$ = new Literal($1, @1.first_line, @1.first_column, 2);
    }
    | tk_null
    {
        $$ = new Literal($1, @1.first_line, @1.first_column, 3);
    }
    | tk_id
    {
        $$ = new Id($1, @1.first_line, @1.first_column);
    }
    | tk_id PosibleDireccionArray '.' tk_length 
    {
        $$ = new AsignacionArrayExp($1, $2, @1.first_line, @1.first_column);
    }
    | tk_id Direccionarray 
    {
        $$ = new Obtenervalorarray($1, $2, @1.first_line, @1.first_column);
    }
;

PosibleDireccionArray:
    Direccionarray                  {$$=$1;}
    | %empty                        {$$=null;}
;

Incydec:
    tk_id '++'
    {
        $$ = new Asignacion($1, null, TipoAritmetico.INC,@1.first_line, @1.first_column);
    }
    | tk_id '--'
    {
        $$ = new Asignacion($1, null, TipoAritmetico.DEC, @1.first_line, @1.first_column);
    }
;

TipoDato:
    tk_number                       {$$ = "number";}
    | tk_string                     {$$ = "string";}
    | tk_boolean                    {$$ = "boolean";}
    | tk_void                       {$$ = "void";}
    | tk_id                         {$$ = $1;}
    | error {CL_Error.L_Errores.push(new CN_Error.N_Error("Sintactico","Error al definir tipo "+yytext,"",this._$.first_line,this._$.first_column))}
;

Returnt:
    tk_return ';'
    {
        $$=new Returnt(null,@1.first_line, @1.first_column);
    }
    | tk_return Expresion ';'
    {
        $$=new Returnt($2,@1.first_line, @1.first_column);
    }
;