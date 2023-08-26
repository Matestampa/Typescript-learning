//--------------------- Definiciond de tipos (onda el typedef de c++ con huge) --------------

//Podemos definir tipos que pueden usar las variables despues.

//----- Definicion -----
//Es type "nombre":"tipo o tipos"

//Aca creamos un type que acepte string y numeros
type Alfanumerico=string|number;

//Aca creamos uno que solo acete ciertos string (podemos hacer lo mismo con numeros)
type Error_status="Fatal"|"Critical"|"Disaster"|"Omaaaa";

//Tmb se pueden establecer formatos de strings (ej para un uuid)
type Uuid=`${string}-${string}-${string}`;

//Aca creamos un object type
type Person={
    id:Uuid; //usamos uno de los types de arriba
    name:string,
    apellido:string,
    age:number
};


//Aca creamos un type de matriz de 2 dimensiones. (pero cada row puede tener elementos variables)
//(en este caso lo hariamos con un array)
type Matrix_var=number[][];

//Aca creamos un type de matriz fija (en este caso 3x3 y seria una tupla)
type Matrix_3x3=[
    [number,number,number],
    [number,number,number],
    [number,number,number]
];


//-------- Implementaciones ------------
let num:Alfanumerico=9;
num="nueve"; //Se puede pasar a stinrg xq le pusimo un combo de los 2 types


function handle_error(error:Error_status):void{
    //segun el tipo de error(q solo pueden ser esas opciones) hace algo
}


function create_randomPerson():Person{
    //crear cosas random
    return {id:"3123-de33-23d",name:"tute",apellido:"rodr",age:20};
}


//Como vemos esta puede tener distinta cant de elements en cada row
let matrix_ex1:Matrix_var=[
    [2132,43243,324234,2343],
    [123213,123213],
    [234],
    [234,122,343,23]
]

//Esta debe ser toda igual
let matrix_ex2:Matrix_3x3=[
    [213,43,54],
    [123,2132,23],
    [232,23,23]
]


/*
A ver:

-Props opcionales y readonly
-Union e interseccion



*/