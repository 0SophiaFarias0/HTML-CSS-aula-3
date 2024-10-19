function mostrarHora() {
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    // Adiciona zero à esquerda se os minutos ou segundos forem menores que 10
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    var horaAtual = horas + ":" + minutos + ":" + segundos;
    document.getElementById("relogio").textContent = horaAtual;
}

// Atualiza o relógio a cada segundo
setInterval(mostrarHora, 1000);
