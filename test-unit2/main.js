//@authors: Mateo Garcia

//classes definitions

//product with atributes nombre, precio, cantidad, y categoría

class Producto{
    constructor(nombre, precio, cantidad, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }


    imprimirProducto(){
        console.log(`Nombre: ${this.nombre}, Precio: $${this.precio}, Cantidad: ${this.cantidad}, Categoría: ${this.categoria}`);
    }




}

//class inventory with atribute productos
//Inventory has methods to add products, list products, sort products, filter products by category, apply discount by category
//besides it has a private method to sort products with bubble sort

class Inventory{
    productos = [];
    constructor(){
        this.productos = [];
    }

    printInventory(){
        this.productos.forEach(producto => producto.imprimirProducto());
    }

    addNewProduct(name, price, quantity, category){
        this.productos.push(new Producto(name, price, quantity, category));
    }


    /*
    @param ascOrDesc: string, "asc" or "desc"
    */

    listAscOrDescProducts(ascOrDesc){
        const listedProducts = [];
        if(ascOrDesc === "asc"){
            this.#sortArrayWithBubbleSortAsc();
            this.printInventory();
        }else if(ascOrDesc === "desc"){
            this.#sortArrayWithBubbleSortDesc();
            this.printInventory();
        }
    }


    //private methods using oop encapsulation principle
    #sortArrayWithBubbleSortAsc(){
        let n = this.productos.length;
        for (let i = 0; i < n-1; i++){
            for (let j = 0; j < n-i-1; j++){
                if (this.productos[j].precio > this.productos[j+1].precio){
                    let temp = this.productos[j];
                    this.productos[j] = this.productos[j+1];
                    this.productos[j+1] = temp;
                }
            }
        }
    }

    #sortArrayWithBubbleSortDesc(){
        let n = this.productos.length;
        for (let i = 0; i < n-1; i++){
            for (let j = 0; j < n-i-1; j++){
                if (this.productos[j].precio < this.productos[j+1].precio){
                    let temp = this.productos[j];
                    this.productos[j] = this.productos[j+1];
                    this.productos[j+1] = temp;
                }
            }
        }
    }

    filterProductByCategory(category){
        return this.productos.filter(producto => producto.categoria === category);
    }

    applyDiscountByCategory(category, discount){
        if (discount < 0 || discount > 100){
            console.log("[-] Descuento inválido");
            return;
        }
        this.productos.filter(producto => producto.categoria === category).forEach(producto => producto.precio -= producto.precio * (discount/100));
    }

    //getters

    get productos(){
        return this.productos;
    }

    //setters

    set productos(newProductos){
        this.productos = newProductos;
    }
}


//class ventas with atributes ventas and inventory
//ventas has methods to make a sale, print sales, get profits, get most sold product

class Ventas{
    ventas = [];

    constructor(Inventory){
        this.inventory = Inventory;
        this.ventas = [];
    }

    realizarVenta(nombreProducto,cantidad){
        //check if product exists and if there is enough quantity
        const product = this.inventory.productos.filter(producto => producto.nombre === nombreProducto)[0];
        if(product === undefined){
            console.log("[-] producto inexistente");
            return;
        }
        if(product.cantidad < cantidad){
            console.log("[-]cantidad insuficiente");
            return;
        }

        //update quantity
        product.cantidad -= cantidad;

        //add to sales
        this.ventas.push({
            productsSell: product,
            cuantity: cantidad,
            total: product.precio * cantidad,
            timestamp: new Date()
        });

        //print sale
        console.log(`[+]Venta realizada, producto: ${product.nombre}, cantidad: ${cantidad}, total: ${product.precio * cantidad}`);
    }

    imprimirVentas(){
        console.log("Ventas realizadas");
        this.ventas.forEach((item) => {

            console.log(`Producto: ${item.productsSell.nombre}, Cantidad: ${item.cuantity}, Total: ${item.total}, Fecha: ${item.timestamp}`);
        })
    }

    get ganacias(){
        return this.ventas.reduce((acc, item) => acc + item.total, 0);
    }

    get productoMasVendido(){
        const products = this.ventas.map(item => item.productsSell);
        const productsCount = products.reduce((acc, product) => {
            if(acc[product.nombre] === undefined){
                acc[product.nombre] = 1;
            }else{
                acc[product.nombre]++;
            }
            return acc;
        }, {});
        const maxProduct = Object.keys(productsCount).reduce((a, b) => productsCount[a] > productsCount[b] ? a : b);
        return maxProduct;
    }


}

///execution

//Into de following lines there is a test of the system you could comment them if you want se only the report


let inventario = new Inventory();
//adding products
//categories frutas. verduras, carnes, lacteos

inventario.addNewProduct("Manzana", 1, 10, "frutas");
inventario.addNewProduct("Pera", 2, 20, "frutas");
inventario.addNewProduct("Berengena", 3, 30, "verduras");
inventario.addNewProduct("Papa", 4, 40, "verduras");
inventario.addNewProduct("Pollo", 5, 50, "carnes");
inventario.addNewProduct("Res", 6, 60, "carnes");
inventario.addNewProduct("Leche", 7, 70, "lacteos");
inventario.addNewProduct("Queso", 8, 80, "lacteos");

//printing inventory
inventario.printInventory();

//filter carnes
console.log("Filtering carnes");
inventario.filterProductByCategory("carnes").forEach(producto => producto.imprimirProducto());

//list asc
console.log("Listing asc invenotry");
inventario.listAscOrDescProducts("asc");

//list desc
console.log("Listing desc inventory");
inventario.listAscOrDescProducts("desc");

//create sales
let ventas = new Ventas(inventario);
ventas.realizarVenta("Manzana", 5);
ventas.realizarVenta("Pera", 10);
ventas.realizarVenta("Berengena", 15);


//imposible sale
ventas.realizarVenta("Pera", 100);

//inventory after sales
console.log("Inventory after sales");
inventario.printInventory();


//apply discount of 10% to carnes
console.log("Applying 10% discount to carnes");
inventario.applyDiscountByCategory("carnes", 10);
console.log("Inventory after discount");
inventario.printInventory();


//report as a autocallfunction

//end of the test


(function(){
    console.log("-----------------------------------------------");
    console.log("             Informe de la Tienda");
    console.log("-----------------------------------------------");
    console.log("a) Inventario");
    console.log("-----------------------------------------------");
    inventario.printInventory();
    console.log("-----------------------------------------------");
    console.log("b) Ventas");
    console.log("-----------------------------------------------");
    ventas.imprimirVentas();
    console.log("-----------------------------------------------");
    console.log("c) Ganancias");
    console.log("-----------------------------------------------");
    console.log(`Total vendido en el dia: $${ventas.ganacias}`);
    console.log("d) Producto más vendido");
    console.log(`El producto más vendido es: ${ventas.productoMasVendido}`);

})();