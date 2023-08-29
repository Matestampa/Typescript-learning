//------------------------------ INTERFACES BASICO-----------------------------------

//Son como los types, pero se suelen usar para obj_lits y clases.
//En el caso de las clases lo que hacen es definir un "contrato en comun" entre las que 
//la implementan:

/*----- Que es este contrato -----------

-En la interface se definen un conjuno de attrs y metodos, que las clases que las implementan
deben tener si o si.

//------ Como se construyen -----------------------------
-En la interface, los metodos solo se pone la parte del header.(si se pone el cuerpo tira error)
-Luego la class debe completar el cuerpo de los metodos si o si; y tmb tener los attrs si o si.

*/
interface PersonInt{
    name:string;

    saludo(words:string):string;

    move(x:number,y:number):void;
}


//----------- Implementaciones -------------------------
class Tute implements PersonInt{
     name="eweqwe"

     //Aca iria el constrcutor, etccc
    
     saludo(words:string): string {
        return "holaaa"
    }

     move(x: number, y: number): void {
        
     }

     //otras funciones propias, etc
     defender(pos:number):void{}
}

//
class Manu implements PersonInt{
    name="tu vieja"

    saludo(words: string): string {
        return "putooo";
    }

    move(x: number, y: number): void {
        
    }

    //otras funciones propias,etccc
    hacer_joda(ubi:string):void{

    }
}