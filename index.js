function encriptar() {
    let texto = document.getElementById ("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/e/gi,"enter")
        .replace(/i/gi,"imes")
        .replace(/a/gi,"ai")
        .replace(/o/gi,"ober")
        .replace(/u/gi,"ufat");

    if (texto.length != 0) {
        texto = textoCifrado;
        tituloMensaje.textContent="Texto encriptado con exito";
        parrafo.textContent= "";
        muñeco.src="./banner/lookingfor.gif";
    }
    else {
        muñeco.src = "./banner/edited.jpeg";
        alert("Debes ingresar algun texto");
    }
}