//----------- UTILIDAES EXTRAS QUE SE PUEDEN HACER CON LOS TYPES PARA REUTILIZARLOS ------------


//------- Type indexing --------
//(Conseguir un type a partir de cierta parte de otro type)

type Hero_props={
    id:number,
    name:string,
    address:{
        planet:string,
        city:string,
    }
};

//en este caso el type de "hero_address" debe contener {planet:string y city:string}
let hero_address:Hero_props["address"]={
    planet:"esmikel",
    city:"new york"
}

//------ Type from value ------------------------
//(hacer un type a partir del type de un value)

const job={
    name:"stripper",
    position:"high"
}

//En este caso usamos la parte de "job" ya usada arriba. Lo tyomamos con el typeof
type Workerr={
   id:number,
   name:string,
   job:typeof job; //acaaaa
}


//------- Type from function return ---------------
//(hacer un type a partir del type que retorna una funcion) (medio raro que se haga igual)

function create_soccerPlayer(){
    return{
        id:12312321,
        name:"pulpo gonzales",
        foot:"left"
    }
}

//en este caso el type "SoccerPlayer" deberia tener las props del return de arriba
type SoccerPlayer=ReturnType<typeof create_soccerPlayer>;
