//------------------------- TYPE GUARDS --------------------------------------
//(PARA SABER DE QUE TIPO ES CIERTO ELEMENTO CUANDO SU TIPO VIENE DE LA COMBINACION DE VARIOS)
//(SE SUELE UTILIZAR DENTRO DE FUNCIONES)
//(LO IDEAL ES EVITARLO IGUAL, XQ SON MEDIO PAJA)

//-------- Ejemplo -------

//Tenemos 2 clases, y luego hacemos un type que pueda ser cuaulquiera de los 2.
class Footballer{

    kick_ball():void{};
}

class Basketballer{
    throw_ball():void{}
}

type Player=Footballer|Basketballer;

//Si tenemos una funcion que tome como parametro algo de tipo "Player"
//le tenemos q dar una forma de saber, cual de los 2 se le esta pasando.
function basic_action1(player:Player){
    //Si aca queremos usar algunas de las acciones asi nomas no nos deja
    player.kick_ball() //ya que esta existe en footballer pero no en basketballer.

    //Entonces le tenemos que dar forma de saber
}


//------- Implementacion ------------

//Esta funcion devuelve si es instancia o no de Footballer.(como un true false)
function isFootballer(player:any):player is Footballer{
    return player instanceof Footballer;
}

function basic_action(player:Player){
    
    //Lo hacemos con un condicional llamando a la func de arriba
    //Ahora sabe que si entra en cierto cond, es de un tipo y sino es de otro
    if (isFootballer(player)){ //aca sabe que es footballer
        player.kick_ball();
    }
    else{ //aca sabe que es basketballer
        player.throw_ball();
    }

    //Tmb se podria hacer con instance of directo sin llamar a la func
    //onda
    //if (player instance of Footballer){}
}
