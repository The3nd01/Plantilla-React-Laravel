import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function PrincipalFilter({ icono, titulo, ruta, categoria, ciudad }) {

    const [hover, setHover] = useState(false)
    let fullRuta = ruta;
    if (categoria && ciudad) {
        fullRuta = `${ruta}/${categoria}/${ciudad}`;
    } else if (categoria) {
        fullRuta = `${ruta}/${categoria}`;
    } else if (ciudad) {
        fullRuta = `${ruta}/${ciudad}`;
    }

    return (
        <section className='flex flex-col items-center font-semibold'>
            <Link to={fullRuta}>
                <div className="w-24 h-24 text-colorFuente rounded-full border-[1px] cursor-pointer border-blue-200 hover:bg-blue-50  flex flex-col items-center justify-center hover:text-blue-500"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}>
                    {icono}
                </div>
                <p className={hover ? 'text-blue-500 text-sm max-w-28 overflow-hidden text-center' : 'text-sm  max-w-28 overflow-hidden text-center text-colorFuente'}>{titulo}</p>
            </Link>
        </section>
    )
}

export default PrincipalFilter