const Produto = ({ produto, adicionarAoCarrinho }) => {
  return (
    <div className="produto">
      <h2>{produto.nome}</h2>
      <img src={produto.imagem} alt={produto.nome} />
      <p>R$ {produto.preco.toFixed(2)}</p>
      <p>{produto.descricao}</p>
      <button onClick={() => adicionarAoCarrinho(produto)}>
        Adicionar ao Carrinho
      </button>
    </div>
  )
}

export default Produto