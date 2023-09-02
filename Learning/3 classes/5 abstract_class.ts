//--------------------------------- CLASES ABSTRACTAS --------------------------------
//         (SIRVEN PARA DEFINIR COMPORTAMEINTOS EN COMUN, PARA SUBLCASES QUE LA HEREDEN)
//                     (UNA ABSTRACT CLASS NO SE PUEDE INSTANCIAR DIRECTAMENTE)

/*
Basicamente sirve para cuando queremos tener una clase "general" que defina el comportamiento
basico. Y queremos que salgan todas sublcases de ahi con pequeñas diferencias.

Es lo que hacemos cuando en js ponemos los metodos "p_func_name()". (los que les llamamos personales)
En estos casos nunca instanciamos directamente la clase general; sino que instanciamos
alguna de las subclases.

*/

//------ Definicion --------
//Hay que poner: abstract class Class_name{}
//Podemos poner los attrs y metodos generales que queramos(tanto privados o publicos o lo q sea)

//Y los personales los ponemos como: abstract func_name(params...)
// (pero no ponemos nada en el cuerpo)
//(el cuerpo lo deben completar si o si las subclases) (sino tira error)

//----- Ejemplo -------------------
//Tenemos una "SquareFactory" general que se encarga de manejar cuantos cuadrados se crean, agregarlos
//al dom, etc.
//Pero lo que cambia en cada implemntacion es la secuencia de colores que se usa
abstract class SquareFactory{
      pos_x:number;
      pos_y:number;

      width:number;
      height:number;


      constructor(pos_x:number,pos_y:number){
        this.pos_x=pos_x;
        this.pos_y=pos_y;

        this.width=100;
        this.height=100;

      }

      create(cant):[]{
          let new_squares:[]=[];
          for (let i=0;i<cant;i++){
             let new_square=this.__add_toDom();
             new_squares.push(new_square);
          }
          return new_squares;

      }

      private __add_toDom():void{
        let doc
        //Añade al dom
        return //supongamks que retorna un div
      }
      
      //aca tenemos el abstract, que es lo que deben implemntar las subclases como quieran
      //(le seguimo poniendo la p para entenderlo mejor)
      abstract p_define_color():string;
}

class Classic_squareFactory extends SquareFactory{
     constructor(pos_x:number,pos_y:number){
        super(pos_x,pos_y);
     }

     p_define_color(): string {
        //elije el color segun como quiera 
        return "color clasico"
     }

}

class Random_squareFactory extends SquareFactory{
    constructor(pos_x:number,pos_y:number){
        super(pos_x,pos_y);
     }

     p_define_color(): string {
        //elije el color segun como quiera 
        return "color random"
     }
}

//SI queremos instanciar la abstract no nos va a dejar
let factory=new SquareFactory(100,200)

//Tenenmos que si o si instanciar una de las subclases
let square_factory=new Classic_squareFactory(200,500);