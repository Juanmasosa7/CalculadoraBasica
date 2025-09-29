
// Función de cálculo
function operar(num1, num2, operador) {
    switch (operador) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : "Error (div/0)";
        default: return "Operación no válida";
    }
}

// Función que conecta con la interfaz
function calcular(op) {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const resultado = operar(n1, n2, op);

    // Mostrar en el navegador
    document.getElementById("resultado").textContent = resultado;

    // Mostrar en consola
    console.log(`Resultado de ${n1} ${op} ${n2} = ${resultado}`);
}
