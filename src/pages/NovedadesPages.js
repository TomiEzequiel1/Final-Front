import { useState, useEffect } from 'react';
import axios from 'axios';
import Novedaditem from '../components/layout/novedades/Novedaditem';




import '../styles/components/pages/Novedadespage.css'
import React from "react";
const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async() => {
            setLoading(true)
            //const response = await axios.get('${process.env.REACT_APP_API_URL}/api/novedades');
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    },[]);

    return (
        <section className="holder">
            <h2> Novedades </h2>
            {
                loading ? (
                    <p> Cargando... </p>
                ) : (
                    novedades.map(item => <Novedaditem key={item.id}
                        title = {item.titulo} subtitle = {item.subtitulo}
                        imagen = {item.imagen} body = {item.cuerpo} />)
                )
            }
        </section>
    )
};
export default NovedadesPage;