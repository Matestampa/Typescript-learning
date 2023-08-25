//------------------------- PARAMATEROS OPCIONALES ------------

/*----- Reglas ---------
-Se pone (param_name?:param_type)

-Deben ponerse si o si a lo ultimo (osea no antes de uno obligatorio)

*/

//------ Implementacion ---------------

function multiply(a:number,b:number,c?:number):number{
    if (c){
        return a*b*c;
    }
    else{
        return a*b;
    }
}

let result=multiply(4,5,5); //da 100;
result=multiply(4,5); //da 20