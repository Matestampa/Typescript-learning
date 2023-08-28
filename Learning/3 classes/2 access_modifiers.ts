//-------------------------------------- ACCESS MODIFIERS -------------------------------
//            (SON LAS DISTINTAS FORMAS EN QUE PUEDEN ACCEDERSE LOS ATTRS O METODOS DE UNA CLASS)

/*----- Hay 3 ---------
- private: solo se puede acceder dentro de la misma clase
- public: se puede acceder desde cualquier lado
- protected: se puede acceder dentro de la misma clase o subclases (en caso de herencia)

-readonly :se puede acceder (onda leer) pero no se puede modificar desde ningun lado
           (ni siquiera adentro de la clase).
           (solo se le puede asignar su primer valor dentro del constructor)

(SI NO SE PONE NADA, QUEDA public POR DEFAULT)

*/


//------ Ejemplo -------------

class Square{
    //Definimos las readonly (como el id que no habria que cambiarlo)
    readonly id:number;

    //Definimos todas las propiedades para que sean privadas
    private width:number;
    private height:number;
    private x:number;
    private y:number;
    
    private color:string;

    constructor(width:number,height:number,x:number,y:number){
      this.id=432423;//Despues de aca id ya no se podra modificar mas
      this.width=width;
      this.height=height;
      this.x=x;
      this.y=y;

      this.color="red";
    }
    
    //La funcion de mover la dejamos publica
    public move(x:number,y:number):void{
       this.x=x;
       this.y=y;

       this.set_newColor(this.x,this.y);
    }
    
    //Esta de cambiar color, la dejamos privada
    private set_newColor(x:number,y:number):void{
       //calcula algo segun las coords y determina el nuevo color
       this.color="violet"
    }
}

let new_square=new Square(300,600,20,30);

/*Si queremos hacer cuaklquiera de estos nos tira error xq son privados
new_square.width=9;
new_square.x=8;
new_square.set_newColor();*/

//Al usar algo publico si nos deja
new_square.move(40,90);
