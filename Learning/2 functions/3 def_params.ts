//--------------------------- PARAMTEROS DEFAULT ----------------------------------

/*-------- Reglas -----
-Se pone dentro de la funcion (param_name:type = def_data)

-Puede aparecer antes de los params obligatorios. Pero si se hace esto y se quiere
 usar el valor default; al llamar la funcion hay que pasar explicitamente undefined


*/


//--------- Implementacion -----------

function apply_discount(price:number,discount:number=0.2):number{
    return price-price*discount;
}

let total_price=apply_discount(200); //aca le aplica el default;

total_price=apply_discount(200,0.5) //aca se lo pasamos nosotros;


//--------- Ej de ponerlo adelante ------------------------

function count_MonthDays(year:number=2023,month:number):number{
    //Se fija que mes es y los cuenta

    return 31 //just example
}


let days=count_MonthDays(2020,7); //aca le pasamos uno nuestro
days=count_MonthDays(undefined,7) //si queremos que use el defualt hay que pasarle "undefined"