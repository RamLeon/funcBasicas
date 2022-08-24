export function ej_03_funciones(){
    console.log("ej_03_funciones ***********************")
    prinSumar()
    prinSumarV2()
    prinSumarV3()
    prinMuti()
}
    
function sumar(n1 , n2){
        // dependiendo del los tipos de entrada
        // concatena o suma
        return n1 + n2
    }
   
// Proceso que utiliza la funcion sumar sin tipo    
function prinSumar(){
        // Observe que utilizamos la misma función
        //   pero con diferentes tipos de objetos
        const resultado = sumar(1,7)
        const resultado_2 = sumar('juan','perez')
        const resultado_3 = sumar('juan',72)
        const resultado_4 = sumar(10,72)
        const resultado_5 = sumar(10,'72')  // 82 1072
    
        console.log('resultado', resultado)
        console.log("resultado 2 : ",resultado_2)
        console.log("resultado 3 : ",resultado_3)
        console.log("resultado 4 : ",resultado_4)
        console.log("resultado 5 : ",resultado_5)
    }

    function prinSumarV2(){
        const resultado_55 = sumar_v2(11,72)
        console.log("resultado 55 v2 : ",resultado_55)
    }

// dos parámetros obligatorio
function sumar_v2(n1:number , n2:number){
    // dependiendo del los tipos de entrada
    // concatena o suma

    return  (n1 + n2)

    //return "el Total es :" + (n1 + n2)
    //return (n1 + n2).toString()
}

// Función que retorna un tipo de objeto 
function sumar_v3(n1:number , n2:number):number{
    // suma y retorna el resultado
    return n1 + n2
}

// Función que testea sumar_v3
function prinSumarV3(){
    const resultado_6 = sumar_v3(12,72)
    console.log("resultado 5 v3 : " + resultado_6)
}

// $1 opcional, después no puede venir un no default
// se puede agregar un valor defecto y puede pasar =10
function mulpli(n1:number ,n2?:number , base:number=10):number{
    return n1*base
}

// Testint función multi
function prinMuti(){
    const re1 = mulpli(2,9)   // debiera resulta 20
    const re2 = mulpli(2)     // debiera resulta 20
    const re3 = mulpli(2,3,4)  // debiera resulta 8
    
    console.log(re1)
    console.log(re2)
    console.log(re3)
    
    // Probamos sin utilizar variables
    console.log(mulpli(2,9))
    console.log(mulpli(2))
    console.log(mulpli(2,3,2))
}
