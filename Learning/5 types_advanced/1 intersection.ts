//---------------------------   INTERSECCION DE TYPES O INTERFACES TMB ----------
//           (PARA QUE UN TYPE/INTERFACE TENGA LAS PROPS DE VARIOS OTROS)

//(LO CIERTO IGUAL ES QUE ESTO INTERFACE YA LO PUEDE HACER CON EXTEND)

//--------------- IMPLEMENTACION -----------------
//Ponemos los types que querramos combnar separados por "&"

type Identity={
    id:number,
    name:string
};

type Contact={
    id:number;
    phone:number,
    mail:string
};
//Ahora employee tiene las propiedades de ambos
type Employee=Identity&Contact;

let emp:Employee={
    id:32132,
    name:"432423",
    phone:234234,
    mail:"paredpiso5@gmail.com"
}