import React, { useState } from 'react'
import Menu from '../../Components/Menu'

export default function FormVentas() {
    const [valor, setValor] = useState(0);
    const contar = (e) => {
        setValor(valor + 1);
    }
    const rest = (e) => {
        setValor(0)
    }
    const menos = (e) => {
        setValor(valor - 1)
    }
    return (
        <>
            <div><Menu /></div>
            <div>FormVentas</div>
            <div>
                <button onClick={contar}>Contar</button>
                {valor}
                <br />
                <button onClick={menos}>Menos 1</button>
                <button onClick={rest}>Restablecer</button>
            </div>
        </>
    )
}
