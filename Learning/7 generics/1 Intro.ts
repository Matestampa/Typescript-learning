
//ES COMO PASAR ARGS A UNA FUNCION, TYPE, CLASS, PERO USANDO TIPOS.
//OSEA LO QUE ESTA ENTRE "< >" ES EL TIPO Q SE VA A USAR DENTRO DE LA FUNCION, TYPE, CLASS.
//Y HAY Q PASARLO CUANDO SE LO LLAMA, CREA, ETC.

//------------------------------- Ejemplo creando types ---------------------------------
//EJ tenemos un type mail, y queremos q el typo de una de sus props "content", se
//pueda elejir libremente al crear o instanciar un nuevo Mail de estos..

type Mail<ContentType>={ //"ContentType" es nuestro generic para la prop "content"
    content:ContentType,
    important:boolean
}


//Haciendo un type "Mail" con su content con type {name:string,age:number}
const mail:Mail<{name:string,age:number}>={
   content:{
     name:"puto",
     age:58
   },
   important:true
}

//Haciendo un type "Mail" con su content con type {name:string,age:number}
const mail2:Mail<{message:string,asunto:"string"}>={
   content:{
    message:"dsdsd",
    asunto:"string"
   },
   important:false
}

//------------------------------ PONER UN GEN TYPE DEFAULT -------------------------------

//<GenType=valor default>

type Car < featuresType={luces:boolean,rgb:boolean} > = {
    features:featuresType,
    city:string
}

//Ahora si quiza queremos hacer un auto con ese type default y no agregarle nada
//no le pasamos un gentype propio, y toma el default
const CarNashe:Car={
    features:{
        luces:true,
        rgb:false
    },
    city:"CABA"
}

//Y si queremos hacer uno propio se puede hacer tmb
const CarNashe2:Car<{rgb:boolean,bajito:boolean,stereo:boolean}>={
    features:{
        rgb:true,
        bajito:true,
        stereo:false
    },

    city:"AMBA"
}

//------------------------------ Solo permitir ciertos types ------------------------

//Ej queremos q el generic type solo pueda ser de tipo "LandAnimal" (osea heredar de ese)

//Tenemos la clase padre
class LandAnimal{
    constructor(){}

    run(){
        return true
    }
}

//Las clases q heredan
class Lion extends LandAnimal{
}

class Tiger extends LandAnimal{
}

//Un type mascota virtual, q toma solo clases q hereden de "LandAnimal"
type MascotaVirtual<AnimalType extends LandAnimal>={
    animal:AnimalType,
    life:number,
    popularity:number
}

//Creamos nuestra mascota con el type especifico de Lion
const mascota:MascotaVirtual<Lion>={
    animal:new Lion(),
    life:4343,
    popularity:3232
}

//(Es un poco rebuscado el ejemplo q puse pero igual sirve)
//Quiza este de abajo se entiende mas
//Creamos un type cuya prop "data" es un genType q solo acepta types de tipo object lit

type ApiResponse<Data extends object> = {
    data: Data
    isError: boolean
}

const response: ApiResponse<{ name: string }> = {
    data: {
      name: "sdf"
    },
    isError: false,
}