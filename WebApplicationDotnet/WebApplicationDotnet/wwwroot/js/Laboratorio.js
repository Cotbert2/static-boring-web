window.onload = () => {
    listarSucursales();
}

let objSucursalGlobal;

const listarSucursales = async () => {
    objSucursalGlobal =
    {
        url: '/laboratorio/listarSucursales',
        cabeceras: ['idLaboratorio', 'nombre', 'direccion', 'personaContacto', 'numeroContacto'],
        propiedades: ['idLaboratorio', 'nombre', 'direccion', 'personaContacto', 'numeroContacto'],
    }

    paint(objSucursalGlobal);

};



const buscar = () => {
    const searchField = document.getElementById('txtNombreBusqueda');
    objSucursalGlobal.url = `/Sucursal/filtrarSucursales?nombre=${searchField.value}`;

    paint(objSucursalGlobal);
}


const filtrarSucursalKeyUp = () => {
    const searchField = document.getElementById('txtNombreBusqueda');

    if (searchField.value == "") {
        listarSucursales();
        return;
    }


    objSucursalGlobal.url = `/Sucursal/filtrarSucursales?nombre=${searchField.value}`;
    paint(objSucursalGlobal);

}


const limpiarControl = () => {
    listarSucursales();
    const searchField = setValues('txtNombreBusqueda', "");
}

const buscarLaboratorio = () => {
    let frmData = document.getElementById('formBuqueda');
    let myForm = new FormData(frmData);
    console.log(`Form data:`, myForm);
    postFetch('/laboratorio/filtrarLaboratorio', 'json', myForm, (res) => {
        console.log('reponse', res);
        document.getElementById('divtable').innerHTML = generateTable(res);
    });

}

const limpiarLaboratorio = () => {
    cleanData('formBuqueda');
    //document.getElementsByName("nombre")[0].value = "";
    //document.getElementsByName("direccion")[0].value = "";
    //document.getElementsByName("personacontacto")[0].value = "";

    listarSucursales();
}