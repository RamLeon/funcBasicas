export function ej_04_instancia_interface(){
    console.log("ej_04_interface ***********************")
}

// Instancia persona
// creamos una constante persona
//     con una estructura que tiene 3 campos 
const persona = {
    rut : 1,
    nombre : 'Harrys',
    apPaterno:'Ojeda'
}

// Instancia Persona1 con dos campos
const persona1 = {
    rut : 1,
    nombre : 'Harrys'
}


 persona.rut = 234
 console.log(persona)
 console.log(persona1)
 // No puedo agregar otro tipo de atributo a no ser que especifique any
 // persona.apMaterno = 'Error, no puedo agregar'
 // Instancia persona

 const persona_any:any = {
    rut : 1,
    nombre : 'Harrys'
}

    // Cuando especificamos tipo any
    //  podemos agregar atributos a la estructura
    persona_any.apPaterno="Harrys Paterno"
    persona_any.apMaterno="Harrys Materno"
    persona_any.apMaterno="PPPPPP"
    persona_any.rut=3
    console.log("persona_any : ",persona_any)

// El objetivo de una interfaz 
// es declarar la estructura que quiero utilizar siempre
// Muy similar a la clase
interface Persona{
    rut:number;  
    dv:string;
    deportes:string[];
    nombres:string;
    apPaterno?:string; // $2 es opcional
    apMaterno?:string; // $4 es opcional
}

const persona_v3:Persona = {
    rut :1 ,
    dv:'1'  ,
    deportes:['tennis','piscina','pelota'],
    nombres:'Harrys',
    apPaterno:'Ojeda'
    // Observe que apMaterno es opcional
}

console.table(persona_v3)
console.log("persona_v3 ****** : ",persona_v3)

const persona_v4:Persona=null
const persona_v5:Persona=null
let persona_v6:Persona=null
console.log("persona_v6 ************:",persona_v6)