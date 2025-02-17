window.onload = () => {
    listarSucursales();
}

let objSucursalGlobal;

const listarSucursales = async () => {
    objSucursalGlobal =
    {
        url: '/sucursal/listarSucursales',
        cabeceras: ['idSucursal', 'nombre', 'direccion'],
        propiedades: ['idSucursal', 'nombre', 'direccion']
    }

    paint(objSucursalGlobal);

};



const buscar = () => {
    const searchField = document.getElementById('txtNombreBusqueda');
    objSucursalGlobal.url = `/Sucursal/filtrarSucursales?nombre=${searchField.value}`;

    paint(objSucursalGlobal);
}


const limpiarControl = () => {
    listarSucursales();
    const searchField = setValues('txtNombreBusqueda', "");
}