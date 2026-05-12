const data = {
    "produtos": [
      {
        "id": 1,
        "nome": "Smartphone Galaxy S23",
        "preco": 3499.90,
        "categoria": "Celulares",
        "imagem": "https://imgs.extra.com.br/55058035/1g.jpg?imwidth=500",
        "descricao": "Smartphone com 128GB de armazenamento, câmera de alta resolução e excelente desempenho.",
        "emEstoque": true
      },

      {
        "id": 2,
        "nome": "Notebook Dell Inspiron 15",
        "preco": 4599.00,
        "categoria": "Notebooks",
        "imagem": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSiulTHJDw4QJPEQWLye9M9tue-OllZH79x4VlGPoEtRxe-Z-H8tBrQE8E1cwa0q_JgANlZVzEU3kFht0e0hrUj-W2PXakXkrysNKALx2F-9xjha-wL6_nuq5EoHJdjMMu5KfWlYcw5Rg&usqp=CAc",
        "descricao": "Notebook com processador Intel i7, 16GB de RAM e SSD de 512GB, ideal para trabalho e estudos.",
        "emEstoque": false
      },

      {
      id: 3,
      nome: "Notebook Gamer Dell",
      preco: 3500,
      categoria: "Notebooks",
      imagem: "https://m.media-amazon.com/images/I/61AYNZWBreL._AC_UF894,1000_QL80_.jpg",
      descricao: "Notebook ideal para estudos e trabalho.",
      emEstoque: true
    },

    {
      id: 4,
      nome: "Mouse Gamer Sem Fio",
      preco: 219.90,
      categoria: "Acessórios",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0DR9SfAdg9jQ-Nhp57ALBhz4SkgsqFCMQmQ&s",
      descricao: "Mouse com iluminação RGB.",
      emEstoque: true
    },

    {
      id: 5,
      nome: "Teclado Mecânico",
      preco: 189.99,
      categoria: "Acessórios",
      imagem: "https://images.kabum.com.br/produtos/fotos/472044/teclado-mecanico-gamer-kbm-gaming-tg600-preto-60-e-abnt2-rgb-switch-gateron-blue-kgtg600ptaz_1709825264_gg.jpg",
      descricao: "Teclado mecânico ABNT2.",
      emEstoque: false
    },

    {
      id: 6,
      nome: "Monitor 24 Polegadas",
      preco: 698,
      categoria: "Monitores",
      imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/471635/Monitor-Gamer-Mitsushiba-24-Polegadas-LED-1920-x-1080-60hz-Multim-dia-FHD-HDMI-VGA_1697837887_gg.jpg",
      descricao: "Monitor Full HD 144Hz.",
      emEstoque: true
    },

    {
      id: 7,
      nome: "Headset Gamer",
      preco: 152.90,
      categoria: "Acessórios",
      imagem: "https://images.kabum.com.br/produtos/fotos/102770/headset-gamer-havit-drivers-53mm-microfone-plugavel-3-5mm-pc-ps4-xbox-one-preto-hv-h2002d_1772477463_gg.jpg",
      descricao: "Headset com som surround.",
      emEstoque: true
    },

    {
      id: 8,
      nome: "PlayStation 5",
      preco: 3999.90,
      categoria: "Games",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjvm-RygcWDY94TE8ndQpZP-iT6lNNAAir6g&s",
      descricao: "Console de última geração.",
      emEstoque: false
    },

    {
      id: 9,
      nome: "Smartphone Samsung Galaxy A56",
      preco: 1999.90,
      categoria: "Celulares",
      imagem: "https://americanas.vtexassets.com/arquivos/ids/31266296/-SAMSUNG-GALAXY-A26-5G-256GB-PRETO.jpg?v=638854156695070000",
      descricao: "Celular com câmera de alta qualidade.",
      emEstoque: true
    },

    {
      id: 10,
      nome: "iPhone 15",
      preco: 4900,
      categoria: "Celulares",
      imagem: "https://martinelloeletrodomesticos.fbitsstatic.net/img/p/smartphone-apple-iphone-15-128gb-preto-5g-tela-6-1-cam-48mp-selfie-12mp-79535/266127-4.jpg?w=482&h=482&v=no-change&qs=ignore",
      descricao: "iPhone com alto desempenho.",
      emEstoque: true
    }
  ]
};

// SELEÇÃO DE ELEMENTOS DOM

const productList = document.getElementById("product-list");

const productDetails = document.getElementById("product-details");

const searchInput = document.querySelector("#search");

const categorySelect = document.querySelector("#category");

const btnRender = document.getElementById("btnRender");


// FUNÇÃO FORMATAR PREÇO

function formatPrice(preco) {
  return preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}


// CRIAR CARD

function createProductCard(produto) {

  const card = document.createElement("div");
  card.classList.add("card");

  card.setAttribute("data-id", produto.id);

  // style obrigatório
  card.style.boxShadow = "0px 2px 5px rgba(0,0,0,0.2)";

  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}">
    <h3 class="card-title">${produto.nome}</h3>
    <p>${formatPrice(produto.preco)}</p>
    <p>${produto.categoria}</p>

    <button class="details-btn">
      Ver detalhes
    </button>

    <button class="highlight-btn">
      Destacar
    </button>
  `;

  // BOTÃO DETALHES

  const detailsButton = card.querySelector(".details-btn");

  detailsButton.addEventListener("click", () => {
    showProductDetails(produto);
  });

  // BOTÃO DESTACAR

  const highlightButton = card.querySelector(".highlight-btn");

  highlightButton.addEventListener("click", () => {
    card.classList.toggle("highlight");
  });

  return card;
}


// RENDERIZAR PRODUTOS

function renderProducts(produtos) {

  productList.innerHTML = "";

  produtos.forEach((produto) => {

    const card = createProductCard(produto);

    productList.appendChild(card);

  });

  // querySelectorAll obrigatório

  const todosCards = document.querySelectorAll(".card");

  todosCards.forEach((card) => {
    console.log("Card renderizado ID:", card.dataset.id);
  });

}


// RENDERIZAR CATEGORIAS

function renderCategories() {

  const categorias = [];

  data.produtos.forEach((produto) => {

    if (!categorias.includes(produto.categoria)) {
      categorias.push(produto.categoria);
    }

  });

  categorias.forEach((categoria) => {

    const option = document.createElement("option");

    option.value = categoria;

    option.textContent = categoria;

    categorySelect.appendChild(option);

  });

}


// MOSTRAR DETALHES

function showProductDetails(produto) {

  productDetails.innerHTML = `
    <h2>${produto.nome}</h2>

    <img src="${produto.imagem}" width="250">

    <p><strong>Preço:</strong> ${formatPrice(produto.preco)}</p>

    <p><strong>Categoria:</strong> ${produto.categoria}</p>

    <p>
      <strong>Status:</strong>
      ${produto.emEstoque ? "Em estoque" : "Fora de estoque"}
    </p>

    <p><strong>Descrição:</strong> ${produto.descricao}</p>
  `;

}


// FILTRAR PRODUTOS

function filterProducts() {

  const textoBusca = searchInput.value.toLowerCase();

  const categoriaSelecionada = categorySelect.value;

  const produtosFiltrados = data.produtos.filter((produto) => {

    const bateTexto = produto.nome
      .toLowerCase()
      .includes(textoBusca);

    const bateCategoria =
      categoriaSelecionada === "Todas" ||
      produto.categoria === categoriaSelecionada;

    return bateTexto && bateCategoria;

  });

  renderProducts(produtosFiltrados);

}


// EVENTOS

searchInput.addEventListener("input", filterProducts);

categorySelect.addEventListener("change", filterProducts);

btnRender.addEventListener("click", () => {
  renderProducts(data.produtos);
});


// INICIALIZAÇÃO

renderProducts(data.produtos);

renderCategories();