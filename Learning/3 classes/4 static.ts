//----------------------------- STATIC ATTRS O METHODS --------------------------
//                (PARA PODER USARLOS SIN NECESIDAD DE INSTANCIAR UN OBJ)

//(es lit igual que js)

class Calculator{
    
    static PI:number=3.143213213;
    static E:number=4324324;

    static abs(num:number):number{
        return num*(num*-1);
    }

    static suma(a:number,b:number):number{
        return a+b;
    }

    //etccc;

}

console.log(Calculator.PI);
console.log(Calculator.E);

Calculator.suma(4,5);