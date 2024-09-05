
//Veamos un ejemplo de una funcion que se dedica a concatenar Arrays, de cualquier tipo
//Y queremos saber cuando lo devuelva de que tipo va a ser.

//##### PASANDO UN SOLO TYPE PARAM. #####


//Veamos un ejemplo de una funcion que se dedica a concatenar Arrays, de un mismo tipo
//Y queremos saber cuando lo devuelva de que tipo va a ser.
//Si no hicieramos esto de los <> en la declaracion de la func, 
//la var "numArr" seria de tipo "any" y no sabriamos q es.
function addArray<T>(arr1:T[],arr2:T[]):T[]{
    return arr1.concat(arr2);
}

let numArr=addArray<number>([1,2,4],[5,6,2]) //si no pusieramos el <type>, igual ts se da cuenta.
                                             //pero sirve ponerlo para q cuando hagamos
                                             //hover en la llamada de la func, complete
                                             //los types, si no aparecen como unknown



//##### PASANDO VARIOS TYPE PARAMS #######

//La misma func pero va a aceptar distintos tipos

function addDifArray<T,U>(arr1:T[],arr2:U[]):(T|U)[]{
    let newArr:(T|U)[]=[];
    return newArr.concat(arr1).concat(arr2);
}

let mixArr=addDifArray(["1","32","32"],[1,3,4])
let mixArr2=addDifArray([true,false,true],[{a:1,b:2}])
