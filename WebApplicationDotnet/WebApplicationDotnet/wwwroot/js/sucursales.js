window.onload = () => {
    listarSucursales();
}


const listarSucursales = async () => {
    paint({
        url: '/sucursal/listarSucursales',
        cabeceras: ['idSucursal', 'nombre', 'direccion'],
        propiedades: ['idSucursal', 'nombre', 'direccion']
    });

};



