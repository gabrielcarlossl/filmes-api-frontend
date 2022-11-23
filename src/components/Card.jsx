import React from 'react'

import '../Styles/Card.css'

function Card({title,overview,poster_path,release_date}) {
    return (
        <div className='Card'>
            <div className="Title">
                <h3>{title}</h3>
            </div>

            <div className="Content">
                <img height={50} width={50} src={poster_path} alt="" />
                <h3>Sinopse</h3>
               <p>{overview}</p>
               <h3>Data de lançamento:</h3>
               <p>{release_date}</p> 
            </div>
        </div>
    )
}

export default Card