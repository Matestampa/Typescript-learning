//------------------------------- PARAMTEROS REST -----------------------------------------
//             (PARA MANDAR UNA CANTIDAD ILIMITADA DE PARAMS, SIN NECESIDAD DE QUE SEA UN ARRAY)

/*------ Reglas ----
-Se pone dentro de la function (...param_name: type [])

-El type del rest param es un array(pero no se manda como tal)

-Una funcion solo puede tener uno solo de estos

-Si o si va ultimo

*/


//----- Implementacion ---------

function apply_discountAll(discount:number, ...nums: number[]):number{
    let sum=0;

    nums.forEach((num)=>{
        sum+= (num-num*discount);
    })

    return sum;
}

let total=apply_discountAll(0.2,40,50,200,400,343); //el primero es el discount y luego podemos
                                                  //mandar todos los que queramos(mientras cumplan con el type)