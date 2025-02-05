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