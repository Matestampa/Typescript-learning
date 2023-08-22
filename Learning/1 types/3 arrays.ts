//--------------------------- Arrays --------------------------------


//---- Definicion ----
//es let array: "tipo"[]=[];

//Podemos definir arrays de un solo tipo
let string_arr:string[]=["mnau","yapu","tute","rex"];

let num_array:number[]=[4,5,6,23,2121];

//Podemos hacer combinacion
let mix_array:(number|string)[]=["tute","colo",3,4];

//Podemos hacerlo asi nomas (y typescript decide el tipo)

let def_arr=[3,4,5,6] //(en este caso va a decidir q es de tipo solo number)


//---- Acceso y modificacion --------
//Podemos hacerlo con numeros (no como en js)
string_arr[0]="jaja";
string_arr[3]="todaa";

console.log(string_arr);
