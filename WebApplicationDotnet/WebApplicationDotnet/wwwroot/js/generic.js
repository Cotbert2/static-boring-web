const getElement = (id) => {
    return document.getElementById(id).value;
}

const setValues = (id, value) => {
    document.getElementById(id).value = value;
}


const recuperarGenerico = (url, idFormulario) => {
    let elements = document.querySelectorAll(`#${idFormulario} [name]`);
    let nombreName;

    fetchget(url, 'json', (data) => {

        for (let i of elements) {
            nombreName = i.name;
            document.getElementsByName(nombreName)[0].value = data[nombreName];
        }
    });

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

    if (objConfiguration.isEditable == undefined) {
        objConfiguration.isEditable = false;
    }

    if (objConfiguration.isDeleteable == undefined) {
        objConfiguration.isDeleteable = false;
    }

    if (objConfiguration.idkey == undefined) {
        objConfiguration.idkey = "";
    }




    fetchget(objConfiguration.url, 'json', (res) => {
        let content = "";
        content += generateTable(res);

        document.getElementById("divtable").innerHTML = content;
    });
}

//const generateTable = (data) => {
//    let cabeceras = objConfigurationGlobal.cabeceras;
//    let keys = objConfigurationGlobal.propiedades;
//    let lenRegister = data.length;
//    let contenido = "";
//    contenido += "<table class='table table-bordered'>";
//    contenido += "<thead>";
//    contenido += "<tr>";
//    cabeceras.forEach(cabecera => {
//        contenido += `<th>${cabecera}</th>`;
//    });
//    contenido += "</tr>";
//    contenido += "</thead>";
//    contenido += "<tbody>";

//    for (let i = 0; i < lenRegister; i++) {

//        contenido += "<tr>";
//        keys.forEach(key => {
//            contenido +=  `<td>${data[i][key]}</>`
//        })
//        contenido += "</tr>";
//    }


//    //for (let i = 0; i < lenRegister; i++) {
//    //    contenido += "<tr>";
//    //    contenido += "<td>" + data[i].idMedicamento + "</td>";
//    //    contenido += "<td>" + data[i].nombre + "</td>";
//    //    contenido += "<td>" + data[i].descripcion + "</td>";
//    //    contenido += "</tr>";
//    //}
//    contenido += "</tbody>";
//    contenido += "</table>";

//    return contenido;
//}


const generateTable = (data) => {
    let cabeceras = objConfigurationGlobal.cabeceras;
    let keys = objConfigurationGlobal.propiedades;
    let lenRegister = data.length;
    let keyId = objConfigurationGlobal.idkey;

    let isEditable = objConfigurationGlobal.isEditable;
    let isDeleteable = objConfigurationGlobal.isDeleteable;


    let contenido = "";
    contenido += "<table class='table table-dark table-bordered'>";
    contenido += "<thead>";
    contenido += "<tr>";
    cabeceras.forEach(cabecera => {
        contenido += `<th>${cabecera}</th>`;
    });

    if (isEditable || isDeleteable) {
        contenido += `<th>Operaciones</th>`;
    }

    contenido += "</tr>";
    contenido += "</thead>";
    contenido += "<tbody>";

    let obj;

    for (let i = 0; i < lenRegister; i++) {
        obj = data[i];
        contenido += "<tr>";
        keys.forEach(key => {
            contenido += `<td>${data[i][key]}</>`
        })


        if (isEditable || isDeleteable) {

            contenido += "<td>";

            if (isEditable) {
                contenido += `<button class="btn btn-primary" onclick="Editar(${data[i][keyId]})"> <i class="fa-solid fa-pen"></i></button> `;
            }

            if (isDeleteable) {
                contenido += `<button class="btn btn-danger" onclick="Eliminar(${data[i][keyId]})"><i class="fa-solid fa-trash"></i></button>`;
            }

            contenido += "</td>";
        }



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





const postFetch = async (customUrl, responseType, dataToSend, callback) => {
    try {
        let raiz = document.getElementById("hdfOculto").value;



        let completedUrl = window.location.protocol + "//" + window.location.host + raiz + customUrl;


        const res = await fetch(completedUrl, {
            method: "POST",
            body: dataToSend
        });


        let data;


        if (responseType === "json") {
            data = await res.json();
        } else if (responseType == "text") {
            data = await res.text();
        }

        callback(data);


    }
    catch (e) {
        alert('something went wrong', e);
        console.log('error' , e);
    }
}


const cleanData = (formId) => {
    let elementName = document.querySelectorAll(`#${formId} [name]`);

    let currentElement;

    for (let i of elementName) {
        currentElement = i.name;
        document.getElementsByName(currentElement)[0].value = "";
    }
    console.log('elementsName', elementName);
} 