//----------------------------- ARROW FUNCTIONS ------------------------------


//------- Implementacion ------

const arr_func=(param:string):string=>{
    return param+"manu";
}

arr_func("putoo");


//------- Definicion de type ---------
type ArrFunc_Type=(param:number)=>boolean;

//Ahora podemos asignarle este type a distintas funciones.

let func_x:ArrFunc_Type=(param:number)=>{
    return true;
}

//Mas que nada si en una func pasamos un callback como param, para especificar de q type
//debe ser. ---------------

function execute_callback(callback:ArrFunc_Type){
    callback(4343);
    console.log("forro")
}