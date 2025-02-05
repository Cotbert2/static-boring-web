window.onload = () => {
    listarTipoMedicamento();
}


const listarTipoMedicamento = async () => {

    fetchget("/TipoMedicamento/listTipoMedicamento", "json", (data) => {
        alert(JSON.stringify(data));
    });

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
}