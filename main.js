var celula;
function editaCelulaGeral(oEvent) {
    celula = oEvent;
    criaOffCanvasGeral();
    const mes = mesCelula();
    celula.target.setAttribute('data-bs-toggle', 'offcanvas');
    celula.target.setAttribute('data-bs-target', `#cadastro${mes}`);
};
function criaOffCanvasGeral() {
    const mes = mesCelula();
    const idCadastro = document.getElementById(`cadastro${mes}`)

    if (!idCadastro) {
        const codigoHtml =
            `
            <div id="cadastro${mes}" class="offcanvas offcanvas-start p-3" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1">
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
                        <section class="row" id="sectionCadastroGeral${mes}">
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
    let mes = mesCelula();
    let section = document.getElementById(`sectionCadastroGeral${mes}`);
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
    let mes = mesCelula();
    let section = document.getElementById(`sectionCadastroGeral${mes}`);
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

function editaCelulaReceita(oEvent) {
    celula = oEvent;
    criaOffCanvasReceita();
    const mes = mesCelula();
    celula.target.setAttribute('data-bs-toggle', 'offcanvas');
    celula.target.setAttribute('data-bs-target', `#cadastroReceita${mes}`);
};
function criaOffCanvasReceita() {
    const mes = mesCelula();
    const idCadastro = document.getElementById(`cadastroReceita${mes}`)

    if (!idCadastro) {
        const codigoHtml =
            `
        <div id="cadastroReceita${mes}" class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false"
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
                        <input type="text" class="form-control" value="${0}">
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
                    <section id="sectionValoresReceita${mes}" class="p-3">
                    </section>
                    <div class="col-12">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="offcanvas"
                            onclick="addValorCelulaReceita()">Salvar</button>
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
    let mes = mesCelula();
    let section = document.getElementById(`sectionValoresReceita${mes}`);
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


function mesCelula() {
    const element = celula.target;
    const indice = element.cellIndex;
    const ths = element.closest('table').querySelectorAll('th');
    const mes = ths[indice+1].innerHTML;

    return mes;

}