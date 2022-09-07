import React from 'react';

const Ad = ({children}) => {
    //Children es el contenido dinamico que vendra dentro de las etiquetas de apertura y cierre de Ad
    return (
        <div>
            {children}
        </div>
    )
}

export default Ad;