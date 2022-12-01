import React from 'react'
import Header from '../../components/Header'

import { useEffect, useState } from 'react'

import '../../Styles/Favoritos.css'
import { Link } from 'react-router-dom'
import {toast} from 'react-toastify'

function Favoritos() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        const favoritos = localStorage.getItem("@filmes")
        setFilmes(JSON.parse(favoritos) || [])
    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter( (filme)=>{
            return (filme.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem('@filmes', JSON.stringify(filtroFilmes))
        toast.warn('Filme removido dos favoritos!')

    }

    return (
        <div>
            <Header></Header>
            <div className='main'>

                <h1>Meus Favoritos</h1>

                {filmes.length === 0 && <h3>Você não tem nenhum filme favorito...</h3>}

                <ul>
                    {filmes.map((filme) => {

                        
                        return (
                            
                            <li className='lista' key={filme.id}>
                                <h3>{filme.title}</h3>
                                <div className='botoes'>
                                    <Link className='detalhes' to={`/filme/${filme.id}`}>Ver detalhes</Link>
                                    <button onClick={() => excluirFilme(filme.id)} className='excluir'>Excluir</button>
                                </div>
                            </li>

                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Favoritos