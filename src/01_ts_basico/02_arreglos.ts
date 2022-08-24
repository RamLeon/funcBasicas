// función que invocaremos desde nuestro proceso principal
export function ej_02_arreglos() {
    console.log("ej_02_arreglos******")
    // Arreglo de any vacio
    // any no es bueno, mejor ser estricto
    let productos = []
    productos.push("Refrigerador")
    productos.push(34)
    productos.push(false)
    console.log(productos)

    console.log("************************************")
    // Varios Objetos diferentes
    // Cuando se crea detecta number, String y un arreglo de Nros
    let productos_v1 = [1,2,'Juan',[1,2,3,4,5]]
    productos_v1.push([7634,567,334])
    // Error ya que detecta el tipo de objeto en su creación
    //productos_v1.push([true,false])
    //productos_v1.push(["no funciona","texto"])
    //productos_v1.push(true)
    console.log("productos_v1 :",productos_v1)

    console.log("************************************")
     // Detecta que es un arreglo de tipo string
     let productos_nombres = ['Zapatillas','Televisores','Cafeteras']
     productos_nombres.push("1") // puedo agregar string
     // ERRORRRRRRRRR
     //productos_nombres.push(1) // no  puedo agregar otro tipo de objeto
     console.log("productos_nombres String :",productos_nombres)

     console.log("************************************")
    // Tipo String o number
    // Detecta al inicio que existen String y Number
    let productos_nombres_mescla = ['Zapatillas','Televisores','Cafeteras',900]
    productos_nombres_mescla.push(456) // Ahora si
    console.log("productos_nombres_mescla :",productos_nombres_mescla)

    console.log("************************************")
    let productos_nombres_objetos:(Boolean|String|number)[] = ['Zapatillas','Televisores','Cafeteras',900]
    productos_nombres_objetos.push(true) // Ahora si
    console.log("productos_nombres_objetos :",productos_nombres_objetos)

    console.log("************************************")
    let lNumeros : number[] = [1, 2, 3];
    console.log("listaDeNumeros:",lNumeros)
    //lNumeros.push('a');
    let lNumerosArr: Array<number> = [1, 2, 3];
    console.log("listaDeNumerosArr:",lNumerosArr)

    
}