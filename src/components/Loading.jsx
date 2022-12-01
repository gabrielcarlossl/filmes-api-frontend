import React from 'react'

import '../../src/Styles/Loading.css'

function Loading({titulo}) {
    return (
        <div className='loading_page'>
            <h2>Carregando {titulo}...</h2>
            <div className='loading'></div>
        </div>
    )
}

export default Loading