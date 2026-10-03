import { useState } from 'react'
import Produto from './components/Produto.jsx'
import Carrinho from './components/Carrinho.jsx'
import './App.css'

function App() {
  
  const [carrinho, setCarrinho] = useState([])
  
  const adicionarAoCarrinho = (produto) => {
    const item = carrinho.find((item) => item.nome === produto.nome)
    if (!item) {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }])
    } else {
      const novoCarrinho = carrinho.map((item) => {
        if (item.nome === produto.nome) {
          return { ...item, quantidade: item.quantidade + 1 }
        }
        return item
      })
      setCarrinho(novoCarrinho)
    }
  }

  const aumentarQuantidade = (nomeProduto) => {
    const novoCarrinho = carrinho.map((item) => {
      if (item.nome === nomeProduto) {
        return { ...item, quantidade: item.quantidade + 1 }
      }
      return item
    })
    setCarrinho(novoCarrinho)
  }

  const diminuirQuantidade = (nomeProduto) => {
    const novoCarrinho = carrinho.map((item) => {
      if (item.nome === nomeProduto && item.quantidade > 1) {
        return { ...item, quantidade: item.quantidade - 1 }
      }
      return item
    })
    setCarrinho(novoCarrinho)
  }

  const removerDoCarrinho = (nomeProduto) => {
    const novoCarrinho = carrinho.filter((item) => item.nome !== nomeProduto)
    setCarrinho(novoCarrinho)
  }

  const quantidadeTotal = carrinho.reduce((total, item) => {
    return total + item.quantidade;
  }, 0);

  const produtos = [
    {
      nome: 'Camiseta',
      imagem: '',
      preco: 49.99,
      descricao: 'Camiseta de algodão confortável e estilosa.',
      quantidade: 1
      
    },
    {
      nome: 'Calça Jeans',
      imagem: '',
      preco: 99.99,
      descricao: 'Calça jeans clássica e durável.',
      quantidade: 1
    },
    {
      nome: 'Tênis Esportivo',
      imagem: '',
      preco: 149.99,
      descricao: 'Tênis esportivo leve e respirável.',
      quantidade: 1
    },
    {
      nome: 'Jaqueta de Couro',
      imagem: '',
      preco: 199.99,
      descricao: 'Jaqueta de couro elegante e resistente.',
      quantidade: 1
    },
    {
      nome: 'Cinto de Couro',
      imagem: '',
      preco: 29.99,
      descricao: 'Cinto de couro durável e estiloso.',
      quantidade: 1
    }
  ]

  return (
    <>
      <h1>Catálogo de Produtos</h1>
      <Carrinho carrinho={carrinho} 
      aumentarQuantidade={aumentarQuantidade} 
      diminuirQuantidade={diminuirQuantidade} 
      removerDoCarrinho={removerDoCarrinho} />
      <br />
      <br />
      <p>Itens no carrinho: {quantidadeTotal}</p>
      {produtos.map((produto) => (
        <Produto 
        key={produto.nome} 
        produto={produto} 
        adicionarAoCarrinho={adicionarAoCarrinho} 
        />
      ))}
    </>
  )
}

export default App