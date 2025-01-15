
class Producto{

    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;

    }

    getIdProducto(){
        return this._idProducto;
    }

    getNombre(){
        return this._nombre;
    }

    setNombre(nombre){
        this._nombre = nombre;
    }

    getPrecio(){
        return this._precio;
    }

    setPrecio(precio){
        this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}`;
    }
}


class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            // this._productos[this._contadorProductosAgregados++] = producto;
        }else{
            console.log('No se pueden agregar mas productos a la orden');
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.getPrecio();
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += producto.toString() + ' \n';
        }

        console.log(`Orden: ${this._idOrden}, Total: ${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}



let producto1 = new Producto('Pantalon', 200);
let producto2 = new Producto('Camisa', 100);
console.log(producto1.toString());
console.log(producto2.toString());


let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();


let orden2 = new Orden();
let producto3 = new Producto('Zapato', 60);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto2);

orden2.mostrarOrden();

// class Calculadora{
//     static sumar(a,b){
//         return a+b;
//     }
// }


// console.log(Calculadora.sumar(3,4)); //7


// class ContadorInstancias{
//     static contadorInstancias = 0;

//     constructor(){
//         ContadorInstancias.contadorInstancias++;
//     }


//     static imprimirContador(){
//         console.log(ContadorInstancias.contadorInstancias);
//     }
// }

// let contador1 = new ContadorInstancias();
// let contador2 = new ContadorInstancias();

// ContadorInstancias.imprimirContador(); //2


//TODO:
//1) Stock disminuya
//2) Descuento por categoria
    //2) Creat nueva propiedad categoria en la clase producto

//3) Implementar un metodo calcularImpuesto()

//4) Listar productos por precio Descendente

//5) Asegurarse que los precios no sean negativos, al establecer en la clase Producto
