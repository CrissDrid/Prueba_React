import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <>
            <div>Menu<br />
                <Link to="/">Personas</Link><br />
                <Link to="Ventas">Ventas</Link>
            </div>
        </>
    )
}
