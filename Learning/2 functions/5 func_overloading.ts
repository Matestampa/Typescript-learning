//-------------------- FUNCTIONS OVERLOADINGS -------------------------------------
//        (PARA JUNTAR FUNCIONES DE MISMA ESTRUCTURA Y CUERPO PERO QUE SOLO CAMBIA EL TIPO)



//--------- EJ ---------
//Si tenemos una funcion add() la podemos usar para sumar numeros o strings

//------ La forma vieja --------

//Habria que usar nombres distintos
function add_nums(a:number,b:number):number{
    return a+b;
}

function add_strings(a:string,b:string):string{
    return a+b;
}


//------- La forma "cool" --------

//Ponemos solo la estructura de las funciones arriba (cada una con su tipo)
//EN la ultima hacemos una func igual (pero todo con type "any"); y ahi si escribimos
//el cuerpo de la funcion.

function add(a:number,b:number):number;
function add(a:string,b:string):string;
function add(a:any,b:any):any{
    return a+b;
}

let suma_nums=add(3,4);

let combo_strings=add("hola","puto");