//--------------------- ASERCIONES DE TIPO ----------------------------------
//      (PARA DECIRLE A TS QUE IMPLICITAMENTE ALGO DEBE TENER CIERTO TIPO)

//Se suele dar cuando typescript no puede saber por si solo que tipo va a devolver algo.
//Como al traer un elemento del dom, donde al ser en tiempo de ejecucuion, thypescript
//no puede saber que tipo especifico es.
//O tmb se puede dar al traer data de una api. Donde es impsible que ts sepa por si solo
//que verga estamos trayendo.

//-------- EJEMPLO DEL DOM ----------
//Queremos traer un canvas del dom por su id.
//Sin embargo,esta funcion de buscar el elemento se hace en tiempo de ejecucion. Y por lo tanto
//en ts no puede saber exactamente que tipo va a devolver. Por eso devuelve siempre 
//de forma general un "HTMLElement". Cuando en realidad lo que queremos especificamente
//es un "HTMLCanvasElement"

const canvas=document.getElementById("canvas"); //con esto "canvas" es un "HTMLElement"

//Si queremos acceder a props particulares de "HTMLCanvasElement" no nos va a dejar
canvas.getContext("2d");


//----- SOLUCION CON ASERCION --------

//con esto "canvas_2" si es un "HTMLCanvasElement"
const canvas_2=document.getElementById("canvas") as HTMLCanvasElement;

//y podemos usar sus funciones
canvas_2.getContext("2d");

//----- Otra Forma -------
//(convertir el tipo al usar cada propiedad)

const canvas_3=document.getElementById("canvas");

(canvas_3 as HTMLCanvasElement).getContext("2d");

//---- Asegurarse que exista ---------
//Ej si nos equivocamos y enbes de buscar "canvas" buscamos "p".
//Ts va a compilar igual, pero se va a romper cuando se este ejecutando en js
//ya que la func getcontext() no existe en p.

const canvas_4=document.getElementById("p");

//Aca ya en tiempo de ejecucion se va a dar cuenta que lo que trajimos
//no pertenece a "HTMLCanvasElement" y no va a entrar ahi
if (canvas_4 instanceof HTMLCanvasElement){
    canvas_4.getContext("2d");
}