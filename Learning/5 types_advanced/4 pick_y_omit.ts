//----------------- CONSTRUIT TYPES A PARTIR DE SOLO CIERTOS ATTRS DE OTRO ------------
//                                   (PARECIDO AL TYPE INDEXING)


//-------------Reglas--------:
//-Se puede construir un type con esto a partir de una interface (y otro type tmb)
//-No se puede construir una interface con esto.
//-OSEA SOLO PARA CONSTURIR TYPES.


interface Person{
    name:string,
    age:number,
    direc:string,
    job:string
}


//----------- USANDO "PICK" -------------------
//(Elejimos cuales props queremos).

type Unemployed=Pick<Person,"name"|"age"|"direc">;


//--------- USANDO "OMIT" --------------------
//(elejimos cuales props no queremos)
type Homeless=Omit<Person,"direc">;