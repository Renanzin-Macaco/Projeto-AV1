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
      quantidade: 1,
      imagem: "./src/assets/camiseta.jpg"
    },
    {
      nome: 'Calça Jeans',
      imagem: '',
      preco: 99.99,
      descricao: 'Calça jeans clássica e durável.',
      quantidade: 1,
      imagem: "./src/assets/calca-jeans.jpg"
    },
    {
      nome: 'Tênis Esportivo',
      imagem: '',
      preco: 149.99,
      descricao: 'Tênis esportivo leve e respirável.',
      quantidade: 1,
      imagem: "./src/assets/tenis-esportivo.jpg"
    },
    {
      nome: 'Jaqueta de Couro',
      imagem: '',
      preco: 199.99,
      descricao: 'Jaqueta de couro elegante e resistente.',
      quantidade: 1,
      imagem: "./src/assets/jaqueta-couro.jpg"
    },
    {
      nome: 'Cinto de Couro',
      imagem: '',
      preco: 29.99,
      descricao: 'Cinto de couro durável e estiloso.',
      quantidade: 1,
      imagem: "./src/assets/cinto-couro.jpg"
    },
    {
      nome: 'Moletom',
      imagem: '',
      preco: 119.99,
      descricao: 'Moletom confortável e quentinho para os dias frios.',
      quantidade: 1,
      imagem: "./src/assets/moletom.jpg"
    },
    {
      nome: 'Boné',
      imagem: '',
      preco: 39.99,
      descricao: 'Boné casual ajustável para completar o visual.',
      quantidade: 1,
      imagem: "./src/assets/bone.jpg"
    },
    {
      nome: 'Camisa Social',
      imagem: '',
      preco: 89.99,
      descricao: 'Camisa social elegante para ocasiões especiais.',
      quantidade: 1,
      imagem: "./src/assets/camisa-social.jpg"
    },
    {
      nome: 'Bermuda',
      imagem: '',
      preco: 59.99,
      descricao: 'Bermuda leve e confortável para o dia a dia.',
      quantidade: 1,
      imagem: "./src/assets/bermuda.jpg"
    },
    {
      nome: 'Mochila',
      imagem: '',
      preco: 129.99,
      descricao: 'Mochila espaçosa e resistente para estudos e viagens.',
      quantidade: 1,
      imagem: "./src/assets/mochila.jpg"
    }
  ]

  return (
    <>
      <h1>Urbanza: Seu Estilo, Sua Marca</h1>
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