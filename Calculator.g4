grammar Calculator;

// Reglas de parser (sintaxis)
programa: instruccion+ ;

instruccion: seleccion ;

seleccion:
    'segun' expresion 'hacer' '{' caso* caso_defecto? '}' 'finsegun'
    ;

caso:
    'caso' constante ':' sentencia*
    ;

caso_defecto:
    'defecto' ':' sentencia*
    ;

sentencia:
      salida
    | terminar
    ;

salida:
    'imprimir' '(' cadena ')' ';'
    ;

terminar:
    'salir' ';'
    ;

expresion:
    constante
    ;

constante:
      cadena
    | numero
    ;

cadena:
    APOSTROFE caracter* APOSTROFE
    ;

numero:
    DIGITO+
    ;

caracter:
      LETRA
    | DIGITO
    | SIMBOLO
    ;

// Reglas léxicas (tokens)

APOSTROFE: '\'' ;

LETRA: [a-zA-Z] ;
DIGITO: [0-9] ;
SIMBOLO: [.,!?:;] ;

WS: [ \t\r\n]+ -> skip ;
