window.onload = () => {
    listarTipoMedicamento();
}


const listarTipoMedicamento = async () => {
    paint({
        url: '/TipoMedicamento/listTipoMedicamento',
        cabeceras: ['idTipoMedicamento', 'nombre', 'descripcion'],
        propiedades: ['idMedicamento', 'nombre', 'descripcion']
    });



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

    paint({
        url: `/TipoMedicamento/filtrarTipoMedicamento?descripcion=${searchField.value}`,
        cabeceras: ['idTipoMedicamento', 'nombre', 'descripcion'],
        propiedades: ['idMedicamento', 'nombre', 'descripcion']
    });
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
