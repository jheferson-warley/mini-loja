let productOne = document.querySelector(".product-01");

let produtos = [
  {
    foto: "../img/fone-01.jpg",
    descricao: "Fone KZ ZSN PRO",
    valor: 89.99,
    comprar: "Comprar",
  },
  {
    foto: "../img/fone-02.jpg",
    descricao: "Fone KZ AS16 PRO",
    valor: 362.99,
    comprar: "Comprar",
  },
  {
    foto: "../img/fone-04.jpg",
    descricao: "Fone KZ ZST",
    valor: 92.89,
    comprar: "Comprar",
  },
  {
    foto: "../img/fone-08.jpg",
    descricao: "Fone KZ FCT",
    valor: 174.89,
    comprar: "Comprar",
  },
];
produtos.map((produto) => {
  productOne.innerHTML += `
                                            <img class="img-conteudo" src= '${produto.foto}' alt='foto'>
                                            <h1>${produto.descricao}</h1>
                                            <h2>${produto.valor}
                                            <a href="#"><button>${produto.comprar}</button></a>
                                            </h2>`;
});
