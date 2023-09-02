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
interface ManInterface{ //si nos deja en el caso de interface
   speed:number
}

type ManType={ //No nos deja en el caso de type
  speed:number
}


//---------- INTERFACES vs ABSTRACT CLASS ----------------

//La interfaz no desarrolla nada dentro de si misma. Solo define que cosas debe contener
//la clase si o si.
//La ABSTRACT CLASS si desarrolla logica dentro, y actua como base, para que sus sublclases
//hagan los distintos destalles de forma diferente.

//Osea se podria decir que la INTERFACE no esta completamente ligada a una class. Onda le
//chupa un huevo que haga dentro, siempre y cuando implemente sus cosas.
//Mientras que la ABSTRACT CLASS esta muy relacionada con la class que la hereda, ya que
//debe seguir su logica y comportamiento.

//Una INTERFACE podria implementarse en clases que no tienen nada que ver.
//Ej una interface Shooter que dispara, podria ser heredada por una class Person
//o por una class Car.
//Una ABSTRACT CLASS es heredada si o si por clases que algo tiene en comun.

//Una clase puede implementar varias INTERFACES
//Pero solo puede heredar de 1 ABSTRACT CLASS