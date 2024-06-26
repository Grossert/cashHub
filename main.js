(function () {
    adicionaLinhaReceita();
    adicionaLinhaReceita();
    adicionaLinhaReceita()
})();
function adicionaLinhaReceita() {
    let linhas = document.getElementById('linhasTabelaReceita')
    const codigoHtml =
    `
        <tr class="text-center"">
            <td class="menuLateralTable p-3"></td>
            <td onclick="editaCelulaReceita(event)"></td>
            <td onclick="editaCelulaReceita(event)"></td>
            <td onclick="editaCelulaReceita(event)"></td>
            <td onclick="editaCelulaReceita(event)"></td>
            <td onclick="editaCelulaReceita(event)"></td>
            <td onclick="editaCelulaReceita(event)"></td>
            <td onclick="editaCelulaReceita(event)"></td>
            <td onclick="editaCelulaReceita(event)"></td>
            <td onclick="editaCelulaReceita(event)"></td>
            <td onclick="editaCelulaReceita(event)"></td>
            <td onclick="editaCelulaReceita(event)"></td>
            <td onclick="editaCelulaReceita(event)"></td>
            <td onclick="editaCelulaReceita(event)"></td>
        </tr>
    `;
    linhas.innerHTML += codigoHtml;
}

//index.html
var celula;
function editaCelulaGeral(oEvent) {
    celula = oEvent.target;
    criaOffCanvasGeral();

    const id = criaIdCelula();
    celula.setAttribute('data-bs-toggle', 'offcanvas');
    celula.setAttribute('data-bs-target', `#cadastro${id}`);
};
function criaOffCanvasGeral() {
    const id = criaIdCelula();
    const idCadastro = document.getElementById(`cadastro${id}`)

    if (!idCadastro) {
        const codigoHtml =
            `
            <div id="cadastro${id}" class="offcanvas offcanvas-start p-3" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">CADASTRO</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div class="offcanvas-body">
                    <form class="row">
                        <div class="col-7">
                            <input type="date" class="form-control" id="dataCadastro">
                        </div>
                        <div class="col-5">
                            <button type="button" class="btn btn-primary" onclick="addCadastroGeral()">Add Local</button>
                        </div>
                        <section class="row" id="sectionCadastroGeral${id}">
                        </section>
                        <div class="col-12 mt-3">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="offcanvas"
                                onclick="addValorCelulaGeral()">Salvar</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="offcanvas">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        const cont = document.getElementById('offCanvasContainerGeral')
        cont.innerHTML += codigoHtml;
    }
}
function addCadastroGeral() {
    const id = criaIdCelula();
    let section = document.getElementById(`sectionCadastroGeral${id}`);
    const codigoHtml =
        `
            <div class="col-md-6">
                <label for="localCadastro" class="form-label">Local</label>
                <input type="text" class="form-control" value="${0}">
            </div>
            <div class="col-md-6">
                <label for="tipoCadastro" class="form-label">Tipo</label>
                <select class="form-select" >
                    <option value="0">Selecionar</option>
                    <option value="1">Renda Variavel</option>
                    <option value="2">Renda Fixa</option>
                </select>
            </div>
            <div class="input-group mb-3 col-md-12 mt-3">
                <span class="input-group-text">R$</span>
                <input type="text" class="form-control" placeholder="Valor" value="${0}">
            </div>
            <hr>

        `;
    section.innerHTML += codigoHtml;
};
function addValorCelulaGeral() {
    const id = criaIdCelula();
    let section = document.getElementById(`sectionCadastroGeral${id}`);
    let valores = section.querySelectorAll('input[placeholder="Valor"]');

    var total = 0;
    valores.forEach(valor => {
        const vl = parseFloat(valor.value);
        if (!isNaN(vl)) {
            total += vl;
        }
    });
    celula.innerHTML = 'R$ ' + total
};

//receita.html
function editaCelulaReceita(oEvent) {
    celula = oEvent.target;
    criaOffCanvasReceita();

    const id = criaIdCelula();
    celula.setAttribute('data-bs-toggle', 'offcanvas');
    celula.setAttribute('data-bs-target', `#cadastroReceita${id}`);
};
function criaOffCanvasReceita() {
    const mes = mesCelula();
    const id = criaIdCelula();
    const cont = document.getElementById(`cadastroReceita${id}`)

    if (!cont) {
        const codigoHtml =
            `
        <div id="cadastroReceita${id}" class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false"
            tabindex="-1">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">RECEITA</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>

            <div class="offcanvas-body">
                <form class="row">
                    <div class="col-md-12 input-group text-center">
                        <div class="col-md-6">
                            <input type="text" class="form-control" value="${mes}">
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" value="${2024}">
                        </div>
                    </div>

                    <div class="col-md-12 p-3">
                        <label for="desc" class="form-label">Descrição</label>
                        <input type="text" class="form-control" value="${0}" placeholder="Descricao">
                    </div>


                    <label class="text-center col-md-12">Tipo</label>
                    <div class="col-md-6">
                        <select class="form-select">
                            <option value="0">Selecionar</option>
                            <option value="1">Renda Variavel</option>
                            <option value="2">Renda Fixa</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <select class="form-select">
                            <option value="0">Selecionar</option>
                            <option value="1">AÇÕES</option>
                            <option value="2">FII's</option>
                            <option value="3">BDR's</option>
                            <option value="4">Cotas</option>
                            <option value="5">Outros</option>
                        </select>
                    </div>

                    <div class="col-md-12 pt-3">
                        <button type="button" class="btn btn-primary" onclick="addValorReceita()">Add Valor</button>
                    </div>
                    <section id="sectionValoresReceita${id}" class="p-3">
                    </section>

                    <div class="col-12">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="offcanvas"
                            onclick="addDadoReceita()">Salvar</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="offcanvas">Cancelar</button>
                    </div>

                </form>
            </div>
        </div>
        `;

        const cont = document.getElementById('offcanvasContainerReceita')
        cont.innerHTML += codigoHtml;
    }

}
function addValorReceita() {
    const id = criaIdCelula();
    let section = document.getElementById(`sectionValoresReceita${id}`);
    const codigoHtml =
        `
            <div class="input-group">
                <div class="col-md-6 text-center">
                    <label for="">Valor</label>
                    <input type="text" class="form-control" placeholder="Valor" value="${0}">
                </div>
                <div class="col-md-6 text-center">
                    <label for="">Dia</label>
                    <input type="number" class="form-control" placeholder="DIA">
                </div>
            </div>
            <hr>
        `;
    section.innerHTML += codigoHtml;
};

function addDadoReceita(){
    addValorCelulaReceita();
    addDescricaoCelulaReceita()
}
function addValorCelulaReceita() {
    const id = criaIdCelula();
    let section = document.getElementById(`sectionValoresReceita${id}`);
    let valores = section.querySelectorAll('input[placeholder="Valor"]');

    var total = 0;
    valores.forEach(valor => {
        const vl = parseFloat(valor.value);
        if (!isNaN(vl)) {
            total += vl;
        }
    });
    celula.innerHTML = 'R$ ' + total
};
function addDescricaoCelulaReceita() {
    const id = criaIdCelula();
    let cont = document.getElementById(`cadastroReceita${id}`);
    let desc = cont.querySelector('input[placeholder="Descricao"]');
    let menu = celula.parentElement.querySelector('.menuLateralTable');
    menu.innerHTML = desc.value;
};


//geral
function criaIdCelula(){
    const rowIndex = celula.parentElement.rowIndex;
    const colIndex = celula.cellIndex;
    const id = rowIndex.toString() + colIndex.toString();
    return id;
}
function mesCelula() {
    const indice = celula.cellIndex;
    const ths = celula.closest('table').querySelectorAll('th');
    const mes = ths[indice + 1].innerHTML;
    return mes;
}


