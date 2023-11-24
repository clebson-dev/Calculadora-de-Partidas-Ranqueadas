// script.js
document.getElementById('ranked-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const vitorias = parseInt(document.getElementById('vitorias').value);
    const derrotas = parseInt(document.getElementById('derrotas').value);
    const saldoVitorias = calcularSaldo(vitorias, derrotas);
    const nivel = determinarNivel(saldoVitorias);
    document.getElementById('resultado').textContent = `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}.`;
});

function calcularSaldo(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    return saldo;
}

function determinarNivel(saldo) {
    if (saldo < 10) {
        return "Ferro";
    } else if (saldo >= 10 && saldo <= 20) {
        return "Bronze";
    } else if (saldo >= 21 && saldo <= 50) {
        return "Prata";
    } else if (saldo >= 51 && saldo <= 80) {
        return "Ouro";
    } else if (saldo >= 81 && saldo <= 90) {
        return "Diamante";
    } else if (saldo >= 91 && saldo <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}
