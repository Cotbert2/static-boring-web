//TODO:
//1) Stock disminuya DONE
//2) Descuento por categoria DONE
    //2) Creat nueva propiedad categoria en la clase producto

//3) Implementar un metodo calcularImpuesto() DONE

//4) Listar productos por precio Descendente DONE

//5) Asegurarse que los precios no sean negativos, al establecer en la clase Producto DONE


class Producto{

    static contadorProductos = 0;

    //1) Stock disminuya DONE
    constructor(nombre, precio, categoria, cantidad){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        //5) Asegurarse que los precios no sean negativos, al establecer en la clase Producto
        if (precio < 0) {
            console.log('El precio no puede ser negativo');
            throw 'El precio no puede ser negativo';
        }
        this._precio = precio;
        //2.1) Crear nueva propiedad categoria en la clase producto
        this._categoria = categoria;

        if (cantidad < 0) {
            console.log('La cantidad no puede ser negativa');
            throw 'La cantidad no puede ser negativa';
        }

        this._cantidad = cantidad;
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



    //3)metodo para calcular impuesto

    calcularImpuesto(){
        return this._precio * 0.15;
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

    //1) Stock disminuya DONE
    agregarProducto(producto, cantidad){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            if (cantidad < 0) {
                console.log('La cantidad no puede ser negativa');
                throw 'La cantidad no puede ser negativa';
            }

            if(cantidad> producto._cantidad){
                console.log('No hay suficiente stock');
                return;
            }

            producto._cantidad = producto._cantidad - cantidad;

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


    //2) Descuento por categoria
    crearDescuentoPorCategoria(categoria, descuento){
        if(descuento <= 0 || descuento > 100){
            console.log('Descuento no valido');
            return;
        }

        for(let producto of this._productos){
            if(producto._categoria === categoria){
                producto._precio = producto._precio - (producto._precio * (descuento / 100));

                console.log(`Descuento aplicado a ${producto._nombre}`);
            }
        }
    }


    listarProductosPorPrecioDescendente(){
        this._productos.sort((a, b) => b._precio - a._precio);
        console.log('Productos ordenados por precio de mayor a menor');
        this.mostrarOrden();
    }
}



// let producto1 = new Producto('Pantalon', 200);
// let producto2 = new Producto('Camisa', 100);
// console.log(producto1.toString());
// console.log(producto2.toString());


// let orden1 = new Orden();
// orden1.agregarProducto(producto1);
// orden1.agregarProducto(producto2);
// orden1.mostrarOrden();


// let orden2 = new Orden();
// let producto3 = new Producto('Zapato', 60);
// orden2.agregarProducto(producto3);
// orden2.agregarProducto(producto1);
// orden2.agregarProducto(producto2);
// orden2.agregarProducto(producto2);
// orden2.agregarProducto(producto2);
// orden2.agregarProducto(producto2);

// orden2.mostrarOrden();


let orden1 = new Orden();
let producto1 = new Producto('Pantalon', 200, 'ropa', 10);
let producto2 = new Producto('Camisa', 100, 'ropa', 10);
let producto3 = new Producto('Zapato', 60, 'calzado', 10);

orden1.agregarProducto(producto1, 2);
orden1.agregarProducto(producto2, 3);
orden1.agregarProducto(producto3, 4);

//case negative price

//let producto4 = new Producto('Pantalon', -200);

//get taxes example
console.log(producto1.calcularImpuesto());

//case in which the stock is not enough

orden1.agregarProducto(producto3, 20);

//set a discount for the category 'ropa'
orden1.crearDescuentoPorCategoria('ropa', 10);

orden1.mostrarOrden();

console.log('----------Listing Order Descending by Price----------');
orden1.listarProductosPorPrecioDescendente();