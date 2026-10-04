function mostrarMayor() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let mensaje = "";

    if (isNaN(n1) || isNaN(n2)) {
        mensaje = "Por favor, completa ambos campos con números.";
    } else if (n1 > n2) {
        mensaje = "El mayor es el primer número: " + n1;
    } else if (n2 > n1) {
        mensaje = "El mayor es el segundo número: " + n2;
    } else {
        mensaje = "Ambos números son iguales.";
    }

    document.getElementById("resultado3").innerText = mensaje;
}