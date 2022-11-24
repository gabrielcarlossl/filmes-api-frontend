import React from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'

import '../../Styles/Home.css'

import { useEffect, useState } from 'react'
import api from '../../services/api'

// /movie/now_playing?api_key=5f7ec3e3b383771eda6099c788d36eec&language=pt-BR

function Home() {

  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('/movie/now_playing', {
        params: {
          api_key: '5f7ec3e3b383771eda6099c788d36eec',
          language: 'pt-BR',
          page: 1,
        }
      })
      setFilmes(response.data.results.slice(0, 15))
      setLoading(false)
    }
    loadFilmes()
  }, [])


  if (loading) {
    return (
      <div className='loading_page'>
        <h2>Carregando Filmes...</h2>
        <div className='loading'></div>
      </div>
    )
  }

  return (

    <div>
      <Header></Header>
      <main className='Main'>

        {filmes.map((f) => (<Card id={f.id} key={f.id} title={f.title} overview={f.overview} poster_path={f.poster_path} release_date={f.release_date} vote_average={f.vote_average}></Card>))}

      </main>
    </div>
  )
}

export default Home