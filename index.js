$(document).ready(function () {
    var contadorDespesas = 5; // Começa com 5 linhas já existentes na tabela

    $('#form-despesas').submit(function (event) {
        event.preventDefault();

        contadorDespesas++;

        var nomeProduto = $('#nome-produto').val();
        var valorDespesa = $('#valor-despesa').val();
        var dataCompra = $('#data-compra').val();

        var novaLinhaDespesa = '<tr>' +
            '<th scope="row">' + contadorDespesas + '</th>' +
            '<td>' + nomeProduto + '</td>' +
            '<td>R$' + valorDespesa + '</td>' +
            '<td>' + dataCompra + '</td>' +
            '</tr>';

        $('tbody').append(novaLinhaDespesa);

        $('#nome-produto').val('');
        $('#valor-despesa').val('');
        $('#data-compra').val('');
    });
});