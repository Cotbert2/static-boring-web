window.onload = () => {
    listarTipoMedicamento();
}

let objTipoMedicamentoGlobal;

const listarTipoMedicamento = async () => {


    objTipoMedicamentoGlobal =
    {
        url: '/TipoMedicamento/listTipoMedicamento',
        cabeceras: ['idTipoMedicamento', 'nombre', 'descripcion'],
        propiedades: ['idMedicamento', 'nombre', 'descripcion'],
        isEditable: true,
        isDeleteable: true,
        idkey: 'idMedicamento'
    }

    paint(objTipoMedicamentoGlobal);



    //fetchget("/TipoMedicamento/listTipoMedicamento", "json", (data) => {
    //    let lenRegister = data.length;
    //    let contenido = "";
    //    contenido += "<table class='table table-bordered'>";
    //    contenido += "<thead>";
    //    contenido += "<tr>";
    //    contenido += "<th>Id</th>";
    //    contenido += "<th>Nombre</th>";
    //    contenido += "<th>Descripcion</th>";
    //    contenido += "</tr>";
    //    for (let i = 0; i < lenRegister; i++) {
    //        contenido += "<tr>";
    //        contenido += "<td>" + data[i].idMedicamento + "</td>";
    //        contenido += "<td>" + data[i].nombre + "</td>";
    //        contenido += "<td>" + data[i].descripcion + "</td>";
    //        contenido += "</tr>";
    //    }
    //    contenido += "</table>";

    //    document.getElementById("divtable").innerHTML = contenido;


    //    alert(JSON.stringify(data));


};


const buscar = () => {
    const searchField = document.getElementById('txtNombreBusqueda');

    objTipoMedicamentoGlobal.url = `/TipoMedicamento/filtrarTipoMedicamento?descripcion=${searchField.value}`
    paint(objTipoMedicamentoGlobal);

    //paint({
    //    url: `/TipoMedicamento/filtrarTipoMedicamento?descripcion=${searchField.value}`,
    //    cabeceras: ['idTipoMedicamento', 'nombre', 'descripcion'],
    //    propiedades: ['idMedicamento', 'nombre', 'descripcion']
    //});
    /*
        const searchField = document.getElementById('txtNombreBusqueda');
    objSucursalGlobal.url = `/Sucursal/filtrarSucursales?nombre=${searchField.value}`;

    paint(objSucursalGlobal);
    */
}


const filtrarTipoMedicamentoKeyUp = () => {
    const searchField = document.getElementById('txtNombreBusqueda');

    if (searchField.value == "") {
        listarTipoMedicamento();
        return;
    }


    objTipoMedicamentoGlobal.url = `/TipoMedicamento/filtrarTipoMedicamento?descripcion=${searchField.value}`
    paint(objTipoMedicamentoGlobal);

}


    //try {
    //    let raiz = document.getElementById("hdfOculto").value;


    //    let completedUrl = window.location.protocol + "//" + window.location.host + raiz + "/TipoMedicamento/listTipoMedicamento";

    //    //alert(completedUrl);

    //    const res = await fetch(completedUrl);
    //    const data = await res.json();

    //    alert(JSON.stringify(data));
    //}
    //catch (error) {
    //    console.log(error);
    //}


const guardarTipoMedicamento = () => {
    let frmGuardarTipoMedicamento = document.getElementById("frmGuardar");
    let myForm = new FormData(frmGuardarTipoMedicamento);

    postFetch("/Tipomedicamento/guardarDatos", "text", myForm, (data) => {
        if (data == 1) {
            listarTipoMedicamento();
            limpiarTipoMedicamento();
        }
        alert(data == 1 ? 'Medicamento Guardado exitosamente' : 'No se pudo ingresar el medicamento');
        //listarTipoMedicamento();
    });
}

const limpiarTipoMedicamento = () => {
    cleanData("frmGuardar");
}

const Editar = (idToEdit) => {
    //fetchget(`/TipoMedicamento/recuperarTipoMedicamento?idMedicamento=${idToEdit}`, "json", (data) => {
    //    document.getElementsByName("idMedicamento")[0].value = data.idMedicamento;
    //    document.getElementsByName("nombre")[0].value = data.nombre;
    //    document.getElementsByName("descripcion")[0].value = data.descripcion;

    //});

    recuperarGenerico(`/TipoMedicamento/recuperarTipoMedicamento?idMedicamento=${idToEdit}`, "frmGuardar");
}


const editarTipoMedicamento = () => {
    let frmGuardarTipoMedicamento = document.getElementById("frmGuardar");
    let myForm = new FormData(frmGuardarTipoMedicamento);

    //validate for all fields written

    if (myForm.get("idMedicamento") == "" || myForm.get("nombre") == "" || myForm.get("descripcion") == "") {
        alert("Debe llenar todos los campos");
        return;
    }

    postFetch("/TipoMedicamento/updateTipoMedicamento", "text", myForm, (data) => {
        console.log(data);
        if (data == 1) {
            listarTipoMedicamento();
            limpiarTipoMedicamento();
        }
        alert(data == 1 ? 'Medicamento Editado exitosamente' : 'No se pudo editar el medicamento');
    });
}

const Eliminar = (idToDelete) => {
    alert( idToDelete);
}