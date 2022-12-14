import React from 'react'

import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import '../../Styles/Erro.css'

function Erro() {
  return (
    <>
    <Header></Header>
    <div className='not_found'>
        <h1>Erro 404</h1>
        <h2>Página não encontrada...</h2>
        <Link className='link' to='/'>Volte para a página de filmes!</Link>
    </div>
    </>
  )
}

export default Erro