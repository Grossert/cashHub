var celula;
function editaCelulaGeral(oEvent) {
    celula = oEvent;
};

function addCadastroGeral() {
    let section = selecionaSectionOffCancvas();
    const codigoHtml =
        `
            <div class="col-md-6">
                <label for="localCadastro" class="form-label">Local</label>
                <input type="text" class="form-control">
            </div>
            <div class="col-md-6">
                <label for="tipoCadastro" class="form-label">Tipo</label>
                <select class="form-select">
                    <option value="0">Selecionar</option>
                    <option value="1">Renda Variavel</option>
                    <option value="2">Renda Fixa</option>
                </select>
            </div>
            <div class="input-group mb-3 col-md-12 mt-3">
                <span class="input-group-text">R$</span>
                <input type="text" class="form-control" placeholder="Valor">
            </div>
            <hr>

        `;
    section.innerHTML += codigoHtml;
};

function addValorCelula() {
    let section = selecionaSectionOffCancvas();
    let valores = section.querySelectorAll('input[placeholder="Valor"]');

    var total = 0;
    valores.forEach(valor => {
        const vl = parseFloat(valor.value);
        if (!isNaN(vl)) {
            total += vl;
        }
    });
    celula.target.innerHTML = 'R$ ' + total
};

function selecionaSectionOffCancvas(){
    const element = celula.target;
    const indice = element.cellIndex;
    const ths = element.closest('table').querySelectorAll('th');
    const mes = ths[indice+1].id;

    let section = document.getElementById(`sectionCadastroGeral${mes}`);
    return section;
    
}