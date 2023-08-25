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


//-------- Implementaciones ------------
let num:Alfanumerico=9;
num="nueve";


function handle_error(error:Error_status):void{
    //segun el tipo de error(q solo pueden ser esas opciones) hace algo
}


function create_randomPerson():Person{
    //crear cosas random
    return {id:"3123-de33-23d",name:"tute",apellido:"rodr",age:20};
}


/*
A ver:

-Props opcionales y readonly
-Union e interseccion



*/