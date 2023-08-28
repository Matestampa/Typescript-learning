//------------------------------- HERENCIA DE CLASES --------------------------------------
//                                 (PARECIDO AL JS)

//--------- Clase Padre ---------
class Personn{
    name:string;
    surname:string;
    age:number;
    
    constructor(name:string,surname:string,age:number){
        this.name=name;
        this.surname=surname;
        this.age=age;
    }
    
    //Le ponemos protected para que solo se puede usar dentro, o lo pueda usar el hijo
    //(es para el ejemplo nomas; la verdad que seria al pedo)
    protected full_name():string{
       return this.name+" "+this.surname;
    }
}

//------ Clase Hija --------
class Ciudadano extends Personn{
    address:string;
    
    //Hay que volver a poner todo lo del padre en el constructor, mas lo nuevo del hijo
    constructor(name:string,surname:string,age:number,address:string){
        super(name,surname,age);
        
        this.address=address;
    }
    
    //Aca hacemos uso de el metodo "full_name" de la clase padre.
    //Podrmos usarlo ya que esta como "protected", y esta clase es hija.
    //Lo podemos usar tanto con super. como con this.
    get_direc():string{
        return super.full_name()+" vive en "+this.address;
    }
}

let citizen=new Ciudadano("matias","yapu",19,"floresta 5454");

//Podemos usar este metodo
citizen.get_direc();

//Pero no podemos usar directo el que pusimos protected
citizen.full_name();