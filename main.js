//ADD LINHA TABELA
function addLinha(oEvent) {
    const tbody = oEvent.target.parentElement.parentElement.parentElement.querySelector('tbody')
    const codigoHtml =
        `
        <tr class="text-center">
            <td class="p-3"></td>
            <td class="p-3" onclick="edCelula(event)"></td>
            <td class="p-3" onclick="edCelula(event)"></td>
            <td class="p-3" onclick="edCelula(event)"></td>
            <td class="p-3" onclick="edCelula(event)"></td>
            <td class="p-3" onclick="edCelula(event)"></td>
            <td class="p-3" onclick="edCelula(event)"></td>
            <td class="p-3" onclick="edCelula(event)"></td>
            <td class="p-3" onclick="edCelula(event)"></td>
            <td class="p-3" onclick="edCelula(event)"></td>
            <td class="p-3" onclick="edCelula(event)"></td>
            <td class="p-3" onclick="edCelula(event)"></td>
            <td class="p-3" onclick="edCelula(event)"></td>
        </tr>
    `;
    tbody.innerHTML += codigoHtml;
}

var celula;
function edCelula(oEvent) {
    celula = oEvent.target;
    const idTb = celula.parentElement.parentElement.id;
    const id = idTb + criaIdCelula();

    criaOffCanvas(idTb, id)
    celula.setAttribute('data-bs-toggle', 'offcanvas');
    celula.setAttribute('data-bs-target', `#cadastro${id}`);
};

// CRIA OFFCANVAS CADASTRO
function criaOffCanvas(idTb, id) {
    if (idTb === 'linhaGeral') {
        canvasInicio(id);
    }
    else if (idTb === 'linhaReceita') {
        canvasReceita(id);
        addDescCanvas(id);
    }
    else if (idTb === 'linhaDespesa') {
        canvasDespesa(id);
        addDescCanvas(id);
    }
    else if (idTb === 'linhaInvestimento') {
        canvasInvestimento(id);
        addDescCanvas(id);
    }
};
function canvasInicio(id) {
    if (!document.getElementById(`cadastro${id}`)) {
        const codigoHtml =
            `
        <div id="cadastro${id}" class="offcanvas offcanvas-start p-3" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">SALDO DO MÊS</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body">
                <form class="row">
                    <div class="col-7">
                        <input type="date" class="form-control" id="dataCadastro">
                    </div>
                    <div class="col-5">
                        <button type="button" class="btn btn-primary" onclick="addSecInicio()">Add Local</button>
                    </div>
                    <section id="secInicio${id}">
                    </section>
                    <div class="col-12 mt-3">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="offcanvas"
                            onclick="salvaDados()">Salvar</button>
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
function canvasReceita(id) {
    const mes = mesCelula();
    if (!document.getElementById(`cadastro${id}`)) {
        const codigoHtml =
            `
        <div id="cadastro${id}" class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false"
            tabindex="-1">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">RECEITA</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>

            <div class="offcanvas-body">
                <form class="row">
                    <div class="col-md-12 input-group text-center">
                        <div class="form-check form-switch col-md-8 mb-1">
                            <input class="form-check-input" type="checkbox" role="switch" onclick="alteraStatusInpt(event)" checked>
                        </div>
                        <div class="col-md-2">
                            <input type="text" class="form-control" value="${mes}" Disabled>
                        </div>
                        <div class="col-md-2">
                            <input type="text" class="form-control" value="${2024}" Disabled>
                        </div>
                    </div>

                    <div class="col-md-12 p-3">
                        <label for="desc" class="form-label">Descrição</label>
                        <input type="text" class="form-control" value="${0}" placeholder="Descricao" Disabled>
                    </div>


                    <label class="text-center col-md-12">Tipo</label>
                    <div class="col-md-6">
                        <select class="form-select" Disabled>
                            <option value="0">Selecionar</option>
                            <option value="Renda_Variavel">Renda Variavel</option>
                            <option value="Renda_Fixa">Renda Fixa</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <select class="form-select" Disabled>
                            <option value="0">Selecionar</option>
                            <option value="Salario">Salario</option>
                            <option value="Aluguel">Aluguel</option>
                            <option value="Acoes">AÇÕES</option>
                            <option value="BDRs">BDR's</option>
                            <option value="FIIs">FII's</option>
                            <option value="Outros">Outros</option>
                        </select>
                    </div>

                    <div class="col-md-12 pt-3">
                        <button type="button" class="btn btn-primary" onclick="addSecReceita()" Disabled>Add Valor</button>
                    </div>
                    <section id="secReceita${id}" class="p-3">
                    </section>

                    <div class="col-12">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="offcanvas"
                            onclick="salvaDados()">Salvar</button>
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
function canvasDespesa(id) {
    const mes = mesCelula();
    if (!document.getElementById(`cadastro${id}`)) {
        const codigoHtml =
            `
        <div id="cadastro${id}" class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false"
            tabindex="-1">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Despesa</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>

            <div class="offcanvas-body">
                <form class="row">
                    <div class="col-md-12 input-group text-center">
                        <div class="form-check form-switch col-md-8 mb-1">
                            <input class="form-check-input" type="checkbox" role="switch" onclick="alteraStatusInpt(event)" checked>
                        </div>
                        <div class="col-md-2">
                            <input type="text" class="form-control" value="${mes}" Disabled>
                        </div>
                        <div class="col-md-2">
                            <input type="text" class="form-control" value="${2024}" Disabled>
                        </div>
                    </div>

                    <div class="col-md-12 p-3">
                        <label for="desc" class="form-label">Descrição</label>
                        <input type="text" class="form-control" value="${0}" placeholder="Descricao" Disabled>
                    </div>

                    <div class="col-md-6">
                        <label class="form-label">Tipo</label>
                        <select class="form-select" Disabled>
                            <option value="0">Selecionar</option>
                            <option value="Despesa_Variavel">Despesa Variavel</option>
                            <option value="Despesa_Fixa">Despesa Fixa</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Status</label>
                        <input type="data" class="form-control" value="Pago" Disabled>
                    </div>

                    <div class="col-md-12 pt-3">
                        <button type="button" class="btn btn-primary" onclick="addSecDespesa()" Disabled>Add Valor</button>
                    </div>
                    <section id="secDespesa${id}" class="p-3">
                    </section>

                    <div class="col-12">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="offcanvas"
                            onclick="salvaDados()">Salvar</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="offcanvas">Cancelar</button>
                    </div>

                </form>
            </div>
        </div>
        `;
        const cont = document.getElementById('offcanvasContainerDespesa')
        cont.innerHTML += codigoHtml;
    }

}
function canvasInvestimento(id) {
    const mes = mesCelula();
    if (!document.getElementById(`cadastro${id}`)) {
        const codigoHtml =
            `
        <div id="cadastro${id}" class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false"
            tabindex="-1">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Investimento</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>

            <div class="offcanvas-body">
                <form class="row">
                    <div class="col-md-12 input-group text-center">
                        <div class="form-check form-switch col-md-8 mb-1">
                            <input class="form-check-input" type="checkbox" role="switch" onclick="alteraStatusInpt(event)" checked>
                        </div>
                        <div class="col-md-2">
                            <input type="text" class="form-control" value="${mes}" Disabled>
                        </div>
                        <div class="col-md-2">
                            <input type="text" class="form-control" value="${2024}" Disabled>
                        </div>
                    </div>

                    <div class="col-md-12 p-3">
                        <label for="desc" class="form-label">Descrição</label>
                        <input type="text" class="form-control" value="${0}" placeholder="Descricao" Disabled>
                    </div>

                    <label class="text-center col-md-12">Tipo</label>
                    <div class="col-md-6">
                        <select class="form-select" Disabled>
                            <option value="0">Selecionar</option>
                            <option value="Renda_Variavel">Renda Variavel</option>
                            <option value="Renda_Fixa">Renda Fixa</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <select class="form-select" Disabled>
                            <option value="0">Selecionar</option>
                            <option value="Acoes">AÇÕES</option>
                            <option value="FIIs">FII's</option>
                            <option value="BDRs">BDR's</option>
                            <option value="Tesouro_Selic">Tesouro Selic</option>
                            <option value="CDB">CDB</option>
                            <option value="LCI">LCI</option>
                            <option value="LCA">LCA</option>
                            <option value="Poupanca">Poupança</option>
                        </select>
                    </div>

                    <div class="col-md-6 p-3">
                        <label for="desc" class="form-label">Empresa</label>
                        <input type="text" class="form-control" value="${0}" placeholder="Descricao" Disabled>
                    </div>
                    <div class="col-md-6 p-3">
                        <label for="desc" class="form-label">Setor</label>
                        <input type="text" class="form-control" value="${0}" placeholder="Descricao" Disabled>
                    </div>

                    <div class="col-md-12 pt-3">
                        <button type="button" class="btn btn-primary" onclick="addSecInvestimento()" Disabled>Add Valor</button>
                    </div>
                    <section id="secInvestimento${id}" class="p-3">
                    </section>

                    <div class="col-12">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="offcanvas"
                            onclick="salvaDados()">Salvar</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="offcanvas">Cancelar</button>
                    </div>

                </form>
            </div>
        </div>
        `;

        const cont = document.getElementById('offcanvasContainerInvestimento')
        cont.innerHTML += codigoHtml;
    }

}

//ADICIONA SEÇÕES NO OFFCANVAS  
function addSecInicio() {
    const idTb = celula.parentElement.parentElement.id;
    const id = idTb + criaIdCelula();
    let section = document.getElementById(`secInicio${id}`);
    const codigoHtml =
        `
        <div class="row">
            <div class="col-md-6">
                <label for="localCadastro" class="form-label">Local</label>
                <input type="text" class="form-control" value="${0}">
            </div>
            <div class="col-md-6">
                <label for="tipoCadastro" class="form-label">Tipo</label>
                <select class="form-select" >
                    <option value="Selecionar">Selecionar</option>
                    <option value="Renda_Variavel">Renda Variavel</option>
                    <option value="Renda_Fixa">Renda Fixa</option>
                </select>
            </div>
            <div class="input-group mb-3 col-md-12 mt-3">
                <span class="input-group-text">R$</span>
                <input type="text" class="form-control" placeholder="Valor" value="${0}">
            </div>
            <hr>
        </div>
        `;
    section.innerHTML += codigoHtml;
};
function addSecReceita() {
    const idTb = celula.parentElement.parentElement.id;
    const id = idTb + criaIdCelula();
    let section = document.getElementById(`secReceita${id}`);
    const codigoHtml =
        `
        <div class="input-group">
            <div class="col-md-9 text-center">
                <label for="">Valor</label>
                <input type="text" class="form-control" placeholder="Valor">
            </div>
            <div class="col-md-3 text-center">
                <label for="">Dia</label>
                <input type="number" class="form-control" placeholder="DIA">
            </div>
        </div>
        `;
    section.innerHTML += codigoHtml;
};
function addSecDespesa() {
    const idTb = celula.parentElement.parentElement.id;
    const id = idTb + criaIdCelula();
    let section = document.getElementById(`secDespesa${id}`);
    const codigoHtml =
        `
        <div class="input-group">
            <div class="col-md-9 text-center">
                <label for="">Valor</label>
                <input type="text" class="form-control" placeholder="Valor">
            </div>
            <div class="col-md-3 text-center">
                <label for="">Dia</label>
                <input type="number" class="form-control" placeholder="DIA">
            </div>
        </div>
        `;
    section.innerHTML += codigoHtml;
};
function addSecInvestimento() {
    const idTb = celula.parentElement.parentElement.id;
    const id = idTb + criaIdCelula();
    let section = document.getElementById(`secInvestimento${id}`);
    const codigoHtml =
        `
        <div class="input-group">
            <div class="col-md-5 text-center">
                <label for="">Valor</label>
                <input type="text" class="form-control" placeholder="Valor">
            </div>
            <div class="col-md-3 text-center">
                <label for="">Dia</label>
                <input type="number" class="form-control" placeholder="DIA">
            </div>
            <div class="col-md-4 text-center">
                <label for="">Operação</label>
                <select class="form-select">
                    <option value="Compra">Compra</option>
                    <option value="Venda">Venda</option>
                </select>                
            </div>
        </div>

        `;
    section.innerHTML += codigoHtml;
};

//SALVA DADOS
function salvaDados() {
    const idTb = celula.parentElement.parentElement.id;
    const id = idTb + criaIdCelula();
    if (idTb === 'linhaGeral') {
        salvaDadoInicio(id)
    }
    else if (idTb === 'linhaReceita') {
        salvaDadoReceita(id)
    }
    else if (idTb === 'linhaDespesa') {
        salvaDadoDespesa(id);
    }
    else if (idTb === 'linhaInvestimento') {
        salvaDadoInvestimento(id)
    }
}
function salvaDadoInicio(id) {
    let section = document.getElementById(`secInicio${id}`);
    let sec = Array.from(section.children);

    let total = 0;
    for (let i = 0; i < sec.length; i++) {
        let data = {
            "Data": document.getElementById(`cadastro${id}`).querySelectorAll('input')[0].value,
            "Local": sec[i].querySelectorAll('input')[0].value,
            "Tipo": sec[i].querySelectorAll('select')[0].value,
            "Valor": sec[i].querySelectorAll('input')[1].value
        }

        const vl = parseFloat(data.Valor);
        if (!isNaN(vl)) {
            total += vl;
        }
    }
    celula.innerHTML = 'R$ ' + total
};
function salvaDadoReceita(id) {
    let section = document.getElementById(`secReceita${id}`);
    let sec = Array.from(section.children);
    let container = document.getElementById(`cadastro${id}`);

    let total = 0;
    for (let i = 0; i < sec.length; i++) {
        var data = {
            "Descricao": container.querySelectorAll('input')[3].value,
            "Tipo": container.querySelectorAll('select')[0].value,
            "Categoria": container.querySelectorAll('select')[1].value,
            "Valor": sec[i].querySelectorAll('input')[0].value,
            "Dia": sec[i].querySelectorAll('input')[1].value
        }

        const vl = parseFloat(data.Valor);
        if (!isNaN(vl)) {
            total += vl;
        }
    }
    celula.innerHTML = 'R$ ' + total
    addDescLinha(data.Descricao);
};
function salvaDadoDespesa(id) {
    let section = document.getElementById(`secDespesa${id}`);
    let sec = Array.from(section.children);
    let container = document.getElementById(`cadastro${id}`);

    let total = 0;
    for (let i = 0; i < sec.length; i++) {
        var data = {
            "Descricao": container.querySelectorAll('input')[3].value,
            "Tipo": container.querySelectorAll('select')[0].value,
            "Status": container.querySelectorAll('input')[4].value,
            "Valor": sec[i].querySelectorAll('input')[0].value,
            "Dia": sec[i].querySelectorAll('input')[1].value
        }

        const vl = parseFloat(data.Valor);
        if (!isNaN(vl)) {
            total += vl;
        }
    }
    celula.innerHTML = 'R$ ' + total
    addDescLinha(data.Descricao);
};
function salvaDadoInvestimento(id) {
    let section = document.getElementById(`secInvestimento${id}`);
    let sec = Array.from(section.children);
    let container = document.getElementById(`cadastro${id}`);

    let total = 0;
    for (let i = 0; i < sec.length; i++) {
        var data = {
            "Descricao": container.querySelectorAll('input')[3].value,
            "Tipo": container.querySelectorAll('select')[0].value,
            "Categoria": container.querySelectorAll('select')[1].value,
            "Empresa": container.querySelectorAll('input')[4].value,
            "Setor": container.querySelectorAll('input')[5].value,
            "Valor": sec[i].querySelectorAll('input')[0].value,
            "Dia": sec[i].querySelectorAll('input')[1].value,
            "Operacao": sec[i].querySelectorAll('select')[0].value
        }

        const vl = parseFloat(data.Valor);
        if (!isNaN(vl)) {
            if (data.Operacao === 'Compra') {
                total += vl;
            } else {
                total -= vl;
            }
        }
    }
    celula.innerHTML = 'R$ ' + total
    addDescLinha(data.Descricao);
};

//ADD DESCRIÇÃO LINHA
function addDescLinha(desc) {
    let menu = celula.parentElement.querySelectorAll('td')[0];
    menu.innerHTML = desc;
};

//ADD DESCRICAO OFFCANVAS
function addDescCanvas(id) {
    let cont = document.getElementById(`cadastro${id}`);
    let desc = cont.querySelector('input[placeholder="Descricao"]');
    let ofc = celula.parentElement.querySelectorAll('td')[0].innerHTML;
    desc.value = ofc;
};

//ALTERA STATUS INPUTS (ENABLES/DISABLED)
function alteraStatusInpt(oEvent) {
    const idTb = celula.parentElement.parentElement.id;
    const id = idTb + criaIdCelula();
    let cont = document.getElementById(`cadastro${id}`);

    let inputs = cont.querySelectorAll('input');
    let inpts = Array.from(inputs).slice(3);
    inpts.forEach(input => {
        if (!oEvent.target.checked) {
            input.removeAttribute('disabled');
        } else {
            input.setAttribute('disabled', 'true');
        }
    });

    let selects = cont.querySelectorAll('select');
    selects.forEach(select => {
        if (!oEvent.target.checked) {
            select.removeAttribute('disabled');
        } else {
            select.setAttribute('disabled', 'true');
        }
    });
    let btns = cont.querySelectorAll('button');
    btns.forEach(btn => {
        if (!btn.getAttribute('data-bs-dismiss')) {
            if (!oEvent.target.checked) {
                btn.removeAttribute('disabled');
            } else {
                btn.setAttribute('disabled', 'true');
            }
        }
    });
}

//USO GERAL
function criaIdCelula() {
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

//GRAFICOS
google.charts.load('current', { 'packages': ['bar', 'line'] });
google.charts.setOnLoadCallback(totalAnualReceitaChart);
google.charts.setOnLoadCallback(totalAnualDespesaChart);
google.charts.setOnLoadCallback(totalAnualInvestimentoChart);
google.charts.setOnLoadCallback(totalMensalChart);

function totalAnualReceitaChart() {
    var data = google.visualization.arrayToDataTable([
        ['', 'Salario', 'Proventos (Ações)', 'Proventos (FIIs)', 'Proventos (BDRs)', 'Extras'],
        ['Receita (2024)', 18000, 3000, 3500, 1000, 5000],
    ]);

    var options = {
        backgroundColor: 'transparent',
        chartArea: {
            backgroundColor: 'transparent'
        },
        legend: { position: 'none' },
        vAxis: {
            minValue: 0,
            ticks: [0, .3, .6, .9, 1]
        },
        colors: ['#1B5E20', '#2E7D32', '#388E3C', '#43A047', '#4CAF50', '#66BB6A']
    };

    var chart = new google.charts.Bar(document.getElementById('totalAnualReceita'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}
function totalAnualDespesaChart() {
    var data = google.visualization.arrayToDataTable([
        ['', 'Fixas (Obrigatórias)', 'Variaveis (Opcionais)'],
        ['Despesa (2024)', 18000, 5000],
    ]);

    var options = {
        backgroundColor: 'transparent',
        chartArea: {
            backgroundColor: 'transparent'
        },
        legend: { position: 'none' },
        vAxis: {
            minValue: 0,
            ticks: [0, .3, .6, .9, 1]
        },
        colors: ['#B71C1C', '#C62828', '#D32F2F', '#E53935', '#F44336', '#FF5252']
    };

    var chart = new google.charts.Bar(document.getElementById('totalAnualDespesa'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}
function totalAnualInvestimentoChart() {
    var data = google.visualization.arrayToDataTable([
        ['', 'Renda Variaveis', 'Renda Fixas',],
        ['Investimentos (2024)', 1000, 5000],
    ]);

    var options = {
        backgroundColor: 'transparent',
        chartArea: {
            backgroundColor: 'transparent'
        },
        legend: { position: 'none' },
        vAxis: {
            minValue: 0,
            ticks: [0, .3, .6, .9, 1]
        },
        colors: ['#FF8F00', '#FFA000', '#FFB300', '#FFC107', '#FFD54F', '#FFE082']
    };

    var chart = new google.charts.Bar(document.getElementById('totalAnualInvestimento'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}

function totalMensalChart() {
    var data = google.visualization.arrayToDataTable([
        ['', 'Receita', 'Despesa', 'Investimento'],
        ['JAN', 3368.44, 2005.78, 732.96],
        ['FEV', 2657.93, 2083.08, 1358.83],
        ['MAR', 3415.15, 3295.22, 364.37],
        ['ABR', 3424.29, 1380.07, 2352.04],
        ['MAI', 5141.11, 2085.90, 3163.02],
        ['JUN', 5071.78, 1087.15, 3536.00],
        ['JUL', 0, 0, 0],
        ['AGO', 0, 0, 0],
        ['SET', 0, 0, 0],
        ['OUT', 0, 0, 0],
        ['NOV', 0, 0, 0],
        ['DEC', 0, 0, 0]
    ]);

    var options = {
        backgroundColor: 'transparent',
        chartArea: {
            backgroundColor: 'transparent'
        },
        legend: { position: 'none' },
        colors: ['#1B5E20', '#B71C1C', '#FF8F00'] 
    };
    var chart = new google.charts.Bar(document.getElementById('totalMensal'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
}