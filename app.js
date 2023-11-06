function comprar(){
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipo.value == 'pista'){
        comprarpista(qtd);
    } else if(tipo.value == 'superior'){
        comprarsuperior(qtd);
    } else {
        comprarinferior(qtd);
    }
}


function comprarpista(qtd){
    let qtdpista = parseInt(document.getElementById('qtd-pista').textContent);

    if(qtd > qtdpista){
        alert('nao');
    } else{
        qtdpista = qtdpista - qtd;
        document.getElementById('qtd-pista').textContent = qtdpista;
        alert('comprou');
    }
}


function comprarsuperior(qtd){
    let qtdsuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if(qtd > qtdsuperior){
        alert('nao');
    } else{
        qtdsuperior = qtdsuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdsuperior;
        alert('comprou');
    }
}

function comprarinferior(qtd){
    let qtdinferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(qtd > qtdinferior){
        alert('nao');
    } else{
        qtdinferior = qtdinferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdinferior;
        alert('comprou');
    }
}