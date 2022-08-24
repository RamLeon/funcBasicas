export function xx(){
    console.log("Clases")
}

// Creamos una interface
interface Persona_v15{
    rut:145; // Valor por obligacion
    dv:String;
    nombres:String;
}

// Creamos una estructura por medio de la interfaz
const iPersona:Persona_v15={
    rut:145, // No puedo cambiar el original
    dv:'9',
    nombres:'Juanito Perez'

}
// Revisamos el resultado
console.log("iPersona:",iPersona)

//****************************************** */
// Clase Persona
//Private, Public, Protected
class PersonaV10 {
    // si coloco los accesos(public ,private,protected) las variables 
    // pasan a ser de las clases
    // Signo de Pregnta => opcional
    // Constructor inicia automáticamente
    constructor( 
        public nombre: string, 
        public direccion?: string  //$2 signo de Pregunta
    )  {
        // Se ejecuta cuando se realiza un new
        console.log("Persona v10:",nombre,direccion)
    }
    
}
const p1 = new PersonaV10('Harrys', 'Alcantara  nnnn');
console.log("primea persona",p1)

//****************************************** */
// Clase Heroe Herencia de PersonaV10
class Heroe extends PersonaV10 {
    // Constructor
    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        // invocamos a nuestro padre
        super( nombreReal, 'New York, USA' );
    }

}

// Instanciamos  la clase de Heroe
const ironman = new Heroe('Ironman',45, 'Tony');

console.log('ironman', ironman);