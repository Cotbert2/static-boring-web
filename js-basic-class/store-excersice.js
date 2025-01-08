//@authors: Mateo Garcia

class Producto {
    constructor(nombre, precio, cantidad){
        if (cantidad < 0 || precio < 0){
            console.log("[-] Cantidad o precio no válidos");
            this.cantidad = 0;
            this.precio = 0;
            return;
        }
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

class Inventario{
    constructor(productos){
        this.productos = productos;
    }

    sellProduct(productName, quantity){
        let product = this.productos.find(product => product.nombre === productName);
        if(product){
            if(product.cantidad >= quantity){
                product.cantidad -= quantity;
                console.log(`[+] Se vendieron ${quantity} unidades de '${productName}'`);
                return true;
            }
        }
        console.log(`[-] No se pudo vender el producto '${productName}', no hay suficiente cantidad, o no existe el producto`);
        return false;
    }

    setADiscountToAllProducts(discount){
        if (discount < 0 || discount > 100){
            console.log("[-] Descuento no válido");
            return;
        }
        this.productos.forEach(product => {
            product.precio -= product.precio * discount / 100;
        });
    }

    printInventory(){
        console.log("Inventario:");
        this.productos.forEach(product => {
            console.log(`- ${product.nombre}, Precio: $${product.precio}, Cantidad: ${product.cantidad}`);
        });
    }
}

let myInventory = new Inventario([
    new Producto("Manzanas", 2, 5),
    new Producto("Peras", 3, 10),
    new Producto("Naranjas", 1, 15),
    new Producto("Platanos", 2, 20)
]);


Object.seal(myInventory);


//Usando las funiones creadas

console.log("Inventario Inicial:");
myInventory.printInventory();

myInventory.sellProduct("Manzanas", 3);
myInventory.sellProduct("Peras", 1);
myInventory.sellProduct("Naranjas", 20);

console.log("Inventario después de vender productos:");
myInventory.printInventory();

myInventory.setADiscountToAllProducts(10);

console.log("Inventario después de aplicar descuento:");
myInventory.printInventory();