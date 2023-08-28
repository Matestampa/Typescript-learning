//--------------------------------  CLASES BASICO -----------------------------


class Person{
    //Hay que definir todas las variables "globales dentro de la clase" aca
    //(osea todas las que les querramos poner el this)
    //Tanto las del constructor
    name:string;
    age:number;
    direc:string;
    
    //Como otras que usemos
    status:string;

    constructor(name:string,age:number,direc:string){
      this.name=name;
      this.age=age;
      this.direc=direc;
    }

    getCombo():string{
       return this.name+this.direc;
    }
}

let person=new Person("tute",45,"lope de vegaa 2321");