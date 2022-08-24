// Recordar que export nos permite que la 
// función sea invocada desde fuera este archivo
export function ej_01_variables_basicas() {
    console.log('Hola Ramon!JAJAJAJJAJ');
     // Invocamos la función
    variables_tipo_por_asignacion()
    console.log('¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡');
    // Invocamos la función
    variables_tipo_declarado()
    console.log('¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡');
     // Invocamos la función
     nuestroTipo()

     console.log('¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡');
    ambitoVariable()
}

// let     ==> Variable que puede cambiar en el tiempo
// const   ==> constante

// Creamos Variables dependiendo del dato asignado
// Observe que no hay export, por lo cual es local
function variables_tipo_por_asignacion(){
    const IVA = 19.8
    // Variable Numérica
    let edad = 19
    // Variable String
    let nombre = "Harrys"
    let apPaterno = "Ojera"

    // podemos concatenar variables string
    let nombreCompleto = nombre + " " + apPaterno

    console.log("edad     :",edad)
    console.log("edad * 3 :",edad * 3)
    console.log("nombre   :",nombre)
    //console.log("nombre * 3 :",nombre * 3) <== no se puede
    console.log("paterno  :",apPaterno)
    console.log("nombreCompleto :",nombreCompleto)
}

// Variables definiendo explicitamente el tipo
function variables_tipo_declarado(){
    // Constante tipo numérico con decimal
    const IVA:number = 19.8

    // Variable tipo String
    let apPaterno:String = "Ojeda"
    const apMaterno:String = "Escalante"

    // Variable numéricas
    let edad:number = 98

    // Permite ambos tipos de objetos  <<<<<<=========
    let edadSt:number| String = 98
    let edat_sumar =  edadSt + 234
    edadSt = "prueba de texto"
    //let edat_sumar_texto_error =  edadSt + 234
    let edat_sumar_texto =  edadSt + " 234"
    let esMujer:Boolean = true

    // Any la variable puede ser de cualquier tipo
    let variableDeCualquierTipo: any = 10;
    console.log("Cualquier Tipo 10 : ", variableDeCualquierTipo)
    variableDeCualquierTipo = "20 corazones rotos";
    console.log("Cualquier Tipo 20 : ", variableDeCualquierTipo)


    // Revisamos todos los valores
    console.log("apPaterno : ", apPaterno)
    console.log("apMaterno : ", apMaterno)
    console.log("edad : ", edad)
    console.log("IVA : ", IVA)
    console.log("edadSt : ", edadSt)
    console.log("esMujer : ", esMujer)
    console.log("edat_sumar_texto : ", edat_sumar_texto)
    console.log("edat_sumar : ", edat_sumar)
}

// Definiendo nuestro propio tipo
function nuestroTipo(){
    // Definiremos un tipo 
    type cedulaIdent = string| number|boolean;
    // Creamos nuestra variable del tipo recien creado
    // Observe que nuestro tipo acepta tres tipo diferente
    let numeroCedula: cedulaIdent = 'DNSUYUE-4';
    numeroCedula = false;
    numeroCedula = 10334459;
    console.log("numeroCedula : ",numeroCedula)
}

// Definir el ambito de una variable
function ambitoVariable(){
    // Nivel 0
    let nroGral = 1
    {// Nivel 1
        let nroGral = 10
        {// Nivel 2
            let nroGral = 20
            {// Nivel 3
                let nroGral = 30
                let varNiv3 = 300
                console.log(" nro Nivel 3: ", nroGral)
                console.log(" varNiv3 Nivel 3: ", varNiv3)
            }
            // Error no existe afuera del las llaves que la contienen
            //console.log(" varNiv3 Nivel 3: ", varNiv3)
            console.log(" nro Nivel 2: ", nroGral)
        }
        console.log(" nro Nivel 1: ", nroGral)
    }
    console.log(" nro Nivel 0: ", nroGral)
}