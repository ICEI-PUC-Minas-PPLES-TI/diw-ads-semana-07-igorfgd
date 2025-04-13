const receitas = [
    {
      id: 1,
      titulo: "Omelete Simples",
      descricao: "Uma omelete rápida e fácil com ovos, queijo e temperos.",
      imagem: "imagens/omelete.jpg",
      conteudo: "Bata os ovos, adicione queijo, sal e pimenta. Cozinhe numa frigideira até dourar.",
      categoria: "Café da Manhã"
    },
    {
      id: 2,
      titulo: "Salada de Frutas",
      descricao: "Uma salada refrescante com frutas da estação.",
      imagem: "imagens/salada de frutas.jpg",
      conteudo: "Corte frutas como maçã, banana e morango. Misture com suco de laranja e sirva gelada.",
      categoria: "Sobremesa"
    },
    {
      id: 3,
      titulo: "Sanduíche de Atum",
      descricao: "Um sanduíche clássico com atum, maionese e salada.",
      imagem: "imagens/sanduiche.jpg",
      conteudo: "Misture atum com maionese, coloque em fatias de pão com alface e tomate.",
      categoria: "Lanche"
    },
    {
      id: 4,
      titulo: "Iogurte com Granola",
      descricao: "Um café da manhã nutritivo com iogurte e granola.",
      imagem: "imagens/granola.jpg",
      conteudo: "Sirva iogurte natural com granola e mel. Adicione frutas para mais sabor.",
      categoria: "Café da Manhã"
    }
  ];
  
  // Página Home
  const container = document.getElementById('receitas-container');
  
  if (container) {
    receitas.forEach((receita) => {
      container.innerHTML += `
        <article class="col-md-3 mb-4">
          <h2>${receita.titulo}</h2>
          <a href="detalhes.html?id=${receita.id}">
            <img src="${receita.imagem}" alt="${receita.titulo}" class="img-fluid">
          </a>
          <p>${receita.descricao}</p>
        </article>
      `;
    });
  }
  
  // Página de Detalhes
  function getParametroUrl(nome) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nome);
  }
  
  const detalhesContainer = document.getElementById('detalhes-receita');
  
  if (detalhesContainer) {
    const id = getParametroUrl('id');
    const receita = receitas.find(r => r.id == id);
  
    if (receita) {
      detalhesContainer.innerHTML = `
        <h1>${receita.titulo}</h1>
        <img src="${receita.imagem}" alt="${receita.titulo}" class="img-fluid mb-3">
        <p><strong>Categoria:</strong> ${receita.categoria}</p>
        <p>${receita.conteudo}</p>
      `;
    } else {
      detalhesContainer.innerHTML = `<p>Receita não encontrada.</p>`;
    }
  }
  