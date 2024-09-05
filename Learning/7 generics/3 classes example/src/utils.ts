
//### CLASE GENERAL NODE ###

class Node{
    
    value:any;
    neighs:{};

    constructor(value:any){
        this.value=value;
        this.neighs={};
    }

    connect(value:any,height:number){
        //this.neighs.append(value,height);
    }

    disconnect(value:any){
        //this.neighs.remove(value);
    }
    
    get_neigh(value:any){
        //return this.neighs.get(value);
        return "neigh"
    }

    get_neighs(only_values=false){
        /*let neighs=this.neighs.get_all();
        if (only_values==true){
            let values=[];
            for (let i of neighs){
                values.push(i.value);
            }
            return values;
        }
        else{
            return neighs;
        }*/
       return [];
    }
}


//### GENERIC MAP TYPE Q ACEPTA SOLO SUBTYPES DE NODE ####
type NodesMap_type<T extends Node>={
    [key:string]:T
}


//### CLASE GENERAL GRAPH #####

class Graph<T extends Node>{
    
    nodes:NodesMap_type<T> //Hacemos q el map sea con el type de "Node", q se le pase
                           //a la clase

    constructor(){
        this.nodes={};
    }
    
    //el node_obj debe ser del tipo del generic.
    add_node(value:string,node_obj:T){
        if (this.nodes[value]==undefined){
            if (node_obj){
                this.nodes[value]=node_obj;
            }
            else{
                this.nodes[value]=new Node(value) as T; //Por default, si decice usarse
                                          //la clase Graph directo, y no se quiere
                                          //pasar un "Node", se instancia un "Node"
                                          //y hay q hacerlo asi como esta para q lo acepte
                                          //el comp.
            }
        }
        else{
            throw new Error(`Node: '${value}' already exists`);
        }
    }

    remove_node(value:string){
        let neighs=this.nodes[value].get_neighs();

        /*for (let i of neighs){
            this.nodes[i.value].disconnect(value);
        }*/

        delete this.nodes[value];
    }

    get_node(value:string):T{
        if (this.nodes[value]==undefined){
            throw new Error(`Node: '${value}' doesnt exist`)
        }
        return this.nodes[value];
    }
}


export {Node,Graph}