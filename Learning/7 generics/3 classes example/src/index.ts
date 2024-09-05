
/*
Tenemos unas utils en "utils.js"(ver) que contienen clases para trabajar con grafos.
Tenemos una clase "Graph", y una clase "Node".

La clase "Graph" por defecto, utiliza para sus nodos instancias de tipo "Node".

La idea de esta clase "Graph" es que otras puedan heredar de ella, y puedan usar
sus propios tipos de nodos. Pero estos nodos deben tener una particularidad, y es que deben
heredar de la clase "Node". (ACA ESTA EL GENERIC)

(AHORA DARLE UNA MIRADA A "utils.js")

Necesitamos el generic, para q la clase haga los types de sus estructuras
con el generic type q se les pase. Ej la clase general "Graph" guarda
los nodos en un map de tipo NodesMap_type (verlo en utils). Y el value de este
va a ser del type del generic. (Osea el tipo de "Node" que se pase)

Lo mismo pasa para la funcion "add_node" q tiene un param de node_obj: T.
Y en cada clase q herede de Graph, segun q type de "Node" usen, se va a mostrar uno
distinto.

*/

import {Node,Graph} from "./utils.js";


//Clase que hereda de "Graph" y utiliza como nodos "RandNode" (la q esta abajo)
class DivisionGraph extends Graph<RandNode>{
    constructor(){
        super();
    }

    get_nodes():RandNode[]{
        return Object.values(this.nodes)
    }
}

//Clse RandNode q hereda de "Node"
class RandNode extends Node{
    value:string  
    x_cor:number
    y_cor:number
      
      constructor(value,x_cor,y_cor){
        super(value);
        this.value=`${x_cor},${y_cor}`
        this.x_cor=x_cor;
        this.y_cor=y_cor;
        if (this.x_cor<0 || this.y_cor<0){console.log(`negativo ${value}`)};
      }  
}

//Creamos una instancia
let m=new DivisionGraph();

//Si hacemos hover en la func "add_node", nos va a aparecer como el type 
//de "node_obj" -> "RandNode"
m.add_node("dsds",new RandNode("dsd",4,4))
