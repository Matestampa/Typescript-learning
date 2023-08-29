//---------------------------- DIFERENCIAS ENTRE INTERFACES, TYPES, ABSTRACT CLASES----------------
//                           (OSEA XQ QUERRIAMOS USAR LAS INTERFACES)


//--------- INTERFACES vs TYPES ----------------

//Las declaraciones para objs_lits son parecidas
interface ManInterface{
    name:string,
    age:number
}

type ManType={
    name:string,
    age:number,
}

/*Para definir types asi cortos: (ej type alfanum=string|number, type error='433'|3243|3434)
  -Es mejor usar TYPES

-Para objs_lits:
   -Se recomienda mas INTERFACES

-Al usar interfaces, los errores que da el compilador son mejores que con los types.
 Las interfaces pueden extenderse de forma mas simple que los types.
  (los types nevesitan intersection y eso) */

//-Las interfaces pueden redeclararse, y agregar props. Los types no:
interface ManInterface{ //si nos deja
   speed:number
}

type ManType={ //No nos deja en el caso de type
  speed:number
}


//---------- INTERFACES vs ABSTRACT CLASS ----------------