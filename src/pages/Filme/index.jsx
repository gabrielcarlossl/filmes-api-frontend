import React from 'react'
import Header from '../../components/Header'
import '../../Styles/Filme.css'

import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import api from '../../services/api'
import Loading from '../../components/Loading'
import '../../Styles/Filme.css'
import {toast} from 'react-toastify'

function Filme() {

  const { id } = useParams()
  const navigate = useNavigate()
  const [filme, setFilme] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: '5f7ec3e3b383771eda6099c788d36eec',
          language: 'pt-BR',
        }
      })
        .then((response) => {
          setFilme(response.data)
          setLoading(false)
        })
        .catch(() => {
          navigate('/', { replace: true })
          return;
        })
    }
    loadFilme()
  }, [navigate, id])

  function salvarFilme(){
    const minhaLista = localStorage.getItem('@filmes')

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

    if(hasFilme){
      toast.warn('Filme já ná lista!')
      return
    }

    filmesSalvos.push(filme)
    localStorage.setItem('@filmes', JSON.stringify(filmesSalvos))
    toast.success('Filme salvo com sucesso!')

  }

  if (loading) {
    return <Loading titulo={'Detalhes'}></Loading>
  }
  return (

    <>
      <Header></Header>

      <div className='filme'>
        <h1>{filme.title}</h1>
        <img height={450} width={800} src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} alt={filme.title} />
        <h3>Sinopse:</h3>
        <span>{filme.overview}</span>

        <p><strong>Avaliação: {filme.vote_average + '/10'}</strong></p>

        <div className='area-buttons'>
          <button onClick={salvarFilme}>Salvar</button>
          <button className='trailer'>
            <a target='blank' rel="external noreferrer" href={`https://youtube.com/results?search_query=${filme.title} trailer`}>Trailer</a>
          </button>
        </div>
      </div>
    </>
  )
}

export default Filme