// Lista de doramas para exibir
const doramas = [
    {
        titulo: "Doramania",
        descricao: "Uma série emocionante sobre aventuras e romance.",
        imagem: "https://via.placeholder.com/150",
    },
    {
        titulo: "Romance no Ar",
        descricao: "Um romance épico entre dois mundos.",
        imagem: "https://via.placeholder.com/150",
    },
    {
        titulo: "O Destino de Junho",
        descricao: "A jornada de autodescoberta de uma jovem.",
        imagem: "https://via.placeholder.com/150",
    }
];

// Função para carregar doramas na página
function carregarDoramas() {
    const doramaList = document.getElementById("doramaList");

    doramas.forEach(dorama => {
        const doramaItem = document.createElement("div");
        doramaItem.classList.add("dorama-item");

        doramaItem.innerHTML = `
            <img src="${dorama.imagem}" alt="${dorama.titulo}">
            <h2>${dorama.titulo}</h2>
            <p>${dorama.descricao}</p>
            <button onclick="assistirDorama('${dorama.titulo}')">Assistir</button>
        `;

        doramaList.appendChild(doramaItem);
    });
}

// Função para abrir um alert com o título do dorama (simulando o clique para assistir)
function assistirDorama(titulo) {
    alert(`Você escolheu assistir: ${titulo}`);
}

// Carregar doramas ao abrir a página
document.addEventListener("DOMContentLoaded", carregarDoramas);
