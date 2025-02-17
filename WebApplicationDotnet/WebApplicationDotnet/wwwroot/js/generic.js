const getElement = (id) => {
    return document.getElementById(id).value;
}

const setValues = (id, value) => {
    document.getElementById(id).value = value;
}



const fetchget = async (customUrl, responseType, customCallback) => {
    try {
        let raiz = document.getElementById("hdfOculto").value;


        let completedUrl = window.location.protocol + "//" + window.location.host + raiz + customUrl;

        //alert(completedUrl);

        const res = await fetch(completedUrl);



        let data;

        if (responseType === "json") {
            data = await res.json();
        } else if (responseType == "text") {
            data = await res.text();
        }

        customCallback(data);

    }
    catch (error) {
        console.log(error);
    }
}


//url: "", nombre columnas[], nombres propiedades[]

/**
 
        url: '/TipoMedicamento/listTipoMedicamento',
        cabeceras: ['idTipoMedicamento', 'nombre', 'descripcion'],
        propiedades: ['idMedicamento', 'nombre', 'descripcion']
 */
let objConfigurationGlobal;

const paint = (objConfiguration) => {
    objConfigurationGlobal = objConfiguration;
    fetchget(objConfiguration.url, 'json', (res) => {
        let content = "";
        content += generateTable(res);

        document.getElementById("divtable").innerHTML = content;
    });
}

const generateTable = (data) => {
    let cabeceras = objConfigurationGlobal.cabeceras;
    let keys = objConfigurationGlobal.propiedades;
    let lenRegister = data.length;
    let contenido = "";
    contenido += "<table class='table table-bordered'>";
    contenido += "<thead>";
    contenido += "<tr>";
    cabeceras.forEach(cabecera => {
        contenido += `<th>${cabecera}</th>`;
    });
    contenido += "</tr>";
    contenido += "</thead>";
    contenido += "<tbody>";

    for (let i = 0; i < lenRegister; i++) {

        contenido += "<tr>";
        keys.forEach(key => {
            contenido +=  `<td>${data[i][key]}</>`
        })
        contenido += "</tr>";
    }


    //for (let i = 0; i < lenRegister; i++) {
    //    contenido += "<tr>";
    //    contenido += "<td>" + data[i].idMedicamento + "</td>";
    //    contenido += "<td>" + data[i].nombre + "</td>";
    //    contenido += "<td>" + data[i].descripcion + "</td>";
    //    contenido += "</tr>";
    //}
    contenido += "</tbody>";
    contenido += "</table>";

    return contenido;
} 

