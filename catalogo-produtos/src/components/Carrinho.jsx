const Carrinho = ({ carrinho, aumentarQuantidade, diminuirQuantidade, removerDoCarrinho }) => {
  const total = carrinho.reduce((total, item) => {
    return total + item.preco * item.quantidade;
  }, 0);

  return (
    <div className="carrinho">
      {carrinho.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <>
          {carrinho.map((item) => (
            <div key={item.nome}>
              <h3>{item.nome}</h3>
              <p>Preço: R$ {item.preco.toFixed(2)}</p>
              <p>Quantidade: {item.quantidade}</p>
              <button onClick={() => diminuirQuantidade(item.nome)}>−</button>
              <button onClick={() => aumentarQuantidade(item.nome)}>+</button>
              <button onClick={() => removerDoCarrinho(item.nome)}>Remover</button>
            </div>
          ))}
          <p>Total: R$ {total.toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default Carrinho;