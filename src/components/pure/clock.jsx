import React, { useEffect, useState } from 'react';

const Clock = () => {
    const [reloj, setReloj] = useState({ 
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    });

    const tick = () =>{           
        setReloj(prevReloj =>({
            fecha: new Date(),
            edad: prevReloj.edad + 1,
            nombre: prevReloj.nombre,
            apellidos: prevReloj.apellidos
        }))
    }
     

    useEffect(() => {
        const timerID = setInterval (() => {
            tick()
        }, 1000);

        return () => {
            clearInterval(timerID)
        };
    }, []);
    
    return (
        <div>
        <h2>
           Hora Actual:
           {reloj.fecha.toLocaleTimeString()}
        </h2>
        <h3>{reloj.nombre} {reloj.apellidos}</h3>
        <h1>Edad: {reloj.edad}</h1>
     </div>
    );
}

export default Clock;
