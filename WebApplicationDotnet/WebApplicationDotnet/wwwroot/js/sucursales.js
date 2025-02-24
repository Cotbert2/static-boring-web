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

const buscarSucursal= () => {
    let frmData = document.getElementById('formBuqueda');
    let myForm = new FormData(frmData);
    console.log(`Form data:`, myForm);
    postFetch('/Sucursal/filtrarSucursalesConDireccion', 'json', myForm, (res) => {
        console.log('reponse', res);
        document.getElementById('divtable').innerHTML = generateTable(res);
    });
}

const limpiarSucursales = () => {
    cleanData('formBuqueda');
    //document.getElementsByName("nombre")[0].value = "";
    //document.getElementsByName("direccion")[0].value = "";
    //document.getElementsByName("personacontacto")[0].value = "";

    listarSucursales();
}




const crearSucursal = () => {
    let frmGuardarTipoMedicamento = document.getElementById("frmGuardar");
    let myForm = new FormData(frmGuardarTipoMedicamento);

    postFetch("/Sucursal/guardarDatos", "text", myForm, (data) => {
        if (data == 1) {
            listarSucursales();
            limpiarTipoMedicamento();
        }
        alert(data == 1 ? 'Medicamento Guardado exitosamente' : 'No se pudo ingresar el medicamento');
        //listarTipoMedicamento();
    });
}

const limpiarTipoMedicamento = () => {
    cleanData("frmGuardar");
}