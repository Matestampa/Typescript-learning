//-------------------------- EXTENSIONES DE INTERFACES --------------------
//                  (ES COMO LA HERENCIA DE CLASES, PERO EN ESTO)

/*------ Reglas ------------
-Una interfaz puede extender de otra interfaz o varias.
-Una interfaz puede extender de una clase. (raro igual)

*/


//-------- Ejemplo -----------------
interface MailManager{
    send(mail:string):boolean;
    queue(mail:string):boolean;
}

//En este caso esta interfaz extiende de "MailManager" y tmb contiene los metodos "send()" y "queue()"
interface FutureMailManager extends MailManager{
    send_later(mail:string):boolean;
}

//Esta clase al implementar "FutureMailManager" tmb estaria implementando "MailManager"
//Y debera poner los metodos y attrs de todos
class Mail implements FutureMailManager{
    
    //Aca iria el constructor, otros attrs etc

    send(mail: string): boolean {
       return true        
    }

    queue(mail: string): boolean {
        return true
    }

    send_later(mail: string): boolean {
        return true;
    }
}

//------- Ejemplo herencia multiple ---------

interface A{
    //name:string
    method_a():void;
}

interface B{
    //name:number;
    method_b():void;
}

//Esta interfaz contiene todo lo de A y B
/*Si heredamos de varia que tienen algun method o attr igual, solo nos va a dejar
si son del mismo tipo. Si son de distinto tipo como "name" (que es string en una y numnerb en otra)
no nos va a dejar
*/
interface C extends A,B{
    method_c():void;
}


interface Man{
    name:string,
    age:number;
}

let manu:Man={
    name:"NASHE",
    age:5454,
}