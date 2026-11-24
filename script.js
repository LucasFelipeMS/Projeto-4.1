// =====================================
// ALTERNAR TEMA CLARO E ESCURO
// =====================================

const botaoTema = document.getElementById("alternarTema");

botaoTema.addEventListener("click", () => {

    document.body.classList.toggle("escuro");

    const temaEscuro = document.body.classList.contains("escuro");

    botaoTema.textContent = temaEscuro ? "☀" : "☾";

    botaoTema.setAttribute(
        "aria-label",
        temaEscuro ? "Ativar tema claro" : "Ativar tema escuro"
    );

});


// =====================================
// AUMENTAR E DIMINUIR A FONTE
// =====================================

let tamanhoFonte = 16;

const botaoAumentar = document.getElementById("aumentarFonte");
const botaoDiminuir = document.getElementById("diminuirFonte");

function atualizarFonte() {

    document.documentElement.style.fontSize = tamanhoFonte + "px";

}

botaoAumentar.addEventListener("click", () => {

    if (tamanhoFonte < 22) {
        tamanhoFonte += 2;
        atualizarFonte();
    }

});

botaoDiminuir.addEventListener("click", () => {

    if (tamanhoFonte > 12) {
        tamanhoFonte -= 2;
        atualizarFonte();
    }

});


// =====================================
// ABRIR INFORMAÇÕES DOS DIREITOS
// =====================================

const botoesCards = document.querySelectorAll(".ler-mais");

const modal = document.getElementById("modal");

const modalTitulo = document.getElementById("modalTitulo");

const modalTexto = document.getElementById("modalTexto");

const fecharModal = document.getElementById("fecharModal");

botoesCards.forEach((botao) => {

    botao.addEventListener("click", () => {

        const titulo = botao.dataset.titulo;
        const texto = botao.dataset.texto;

        modalTitulo.textContent = titulo;
        modalTexto.textContent = texto;

        modal.showModal();

    });

});


// =====================================
// FECHAR MODAL
// =====================================

fecharModal.addEventListener("click", () => {

    modal.close();

});

modal.addEventListener("click", (evento) => {

    if (evento.target === modal) {
        modal.close();
    }

});
