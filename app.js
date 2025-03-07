let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Digite o nome de algum amigo!");
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado, digite outro!");
        return;
    }

    amigos.push(nomeAmigo);
    document.getElementById("amigo").value = "";
    atualizarlista();
}

function atualizarlista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo adicionado");
    } else if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    } else {
        let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`;

        let limparlista = document.getElementById("listaAmigos");
        limparlista.innerHTML = "";
        amigos = [];
    }
}

