function calcularRaiz() {
    const numero = parseFloat(prompt("Digite o número para calcular a raiz:"));

    if (!isNaN(numero)) {
        const raiz = Math.sqrt(numero);
        document.getElementById("resultado").textContent = `A raiz quadrada de ${numero} é: ${raiz}`;
    } else {
        document.getElementById("resultado").textContent = "Número inválido.";
    }
}

function calcularExponencial() {
    const base = parseFloat(prompt("Digite a base:"));
    const expoente = parseFloat(prompt("Digite o expoente:"));

    if (!isNaN(base) && !isNaN(expoente)) {
        const exponencial = Math.pow(base, expoente);
        document.getElementById("resultado").textContent = `${base} elevado a ${expoente} é: ${exponencial}`;
    } else {
        document.getElementById("resultado").textContent = "Valores inválidos.";
    }
}

