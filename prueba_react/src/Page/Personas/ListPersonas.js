import React, { useState } from 'react'
import Menu from '../../Components/Menu'

export default function ListPersonas() {
    const initPeople = [
        {
            id: 1,
            name: "Cristopher",
            lastName: "Diaz",
        },
        {
            id: 2,
            name: "Yully",
            lastName: "Soto",
        },
        {
            id: 3,
            name: "Mario",
            lastName: "Mendoza",
        },
    ];
    const [db] = useState(initPeople);

    return (
        <>
            <div><Menu /></div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                        </tr>
                    </thead>
                    <tbody>
                        {db.length > 0 ? (
                            db.map((el) => (
                                <tr key={el.id}>
                                    <td>{el.id}</td>
                                    <td>{el.name}</td>
                                    <td>{el.lastName}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">No hay datos</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}


