import React from 'react'

import '../Styles/Card.css'

function generateRandomColor(){
    let maxVal = 0xFFFFFF; 
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}
console.log(generateRandomColor());

function Card({title,overview,poster_path,release_date}) {

    const cardStyle = {
        backgroundColor: generateRandomColor() ||  'rgb(139, 128, 240)',        
    }


    return (
        <div className='Card' style={cardStyle}>
            <div className="Title">
                <h3>{title}</h3>
            </div>

            <div className="Content">
                <img height={50} width={50} src={poster_path} alt="" />
                <h3>Sinopse</h3>
               <article>{overview}</article>
               <h3>Data de lançamento:</h3>
               <p>{release_date}</p> 
            </div>
        </div>
    )
}

export default Card