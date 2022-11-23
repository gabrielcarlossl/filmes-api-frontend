import React from 'react'
import { Link } from 'react-router-dom';

import '../Styles/Card.css'

function generateRandomColor() {
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`
}

function Card({ title, overview, poster_path, release_date, vote_average }) {

    const cardStyle = {
        backgroundColor: generateRandomColor() || '#000000',
    }

    return (
        <div className='Card' style={cardStyle}>
            <div className="Title">
                <h3>{title}</h3>
            </div>

            <div className="Content">

                <div className='img_nota'>

                    <img className='img' height={100} width={100} src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" />
                    <div>
                        <h4>Nota:</h4>
                        <span>{vote_average}/10</span>

                        <h3>Data de lançamento:</h3>
                        <p>{release_date}</p>
                    </div>
                </div>

                {overview && (
                    <>

                        <h3>Sinopse:</h3>
                        <article>{overview}</article>
                    </>
                )}

                <div className='div_botao'>

                    <Link>
                        <button className='botao'>Acessar</button>
                    </Link>
                </div>


            </div>
        </div>
    )
}

export default Card