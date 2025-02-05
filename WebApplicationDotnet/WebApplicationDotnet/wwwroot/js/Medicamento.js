window.onload = () => {
    listarMedicamento();
}


const listarMedicamento = async () => {

    fetchget("/Medicamento/numeroEntero", "text", (data) => {
        alert(JSON.stringify(data));
    });

    fetchget("/Medicamento/saludo", "text", (data) => {
        alert(JSON.stringify(data));
    });

}