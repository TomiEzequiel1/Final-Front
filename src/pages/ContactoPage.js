import '../styles/components//pages/ContactoPage.css'
import {useState} from 'react';
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje:'',
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData , setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData (oldData => ({
            ...oldData,
            [name]: value //forma dinamica
                
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post(`${procces.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }
 
    return (
        <main className="holder contacto">
            <div>
                <h2> Contacto Rápido </h2>
                <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                    <p>
                        <label for="nombre"> Nombre </label>
                        <input type="text" name="nombre" value={formData.nombre} onChange= {handleChange} placeholder='Nombre'/>
                    </p>
                    <p>
                        <label for="email"> Email </label>
                        <input type="text" name="email" value={formData.email} onChange= {handleChange} placeholder='Email'/>
                    </p>
                    <p>
                        <label for="telefono"> Telefono </label>
                        <input type="text" name="telefono" value={formData.telefono} onChange= {handleChange} placeholder='Telefono'/>
                    </p>
                    <p>
                        <label for="mensaje"> Mensaje </label>
                        <textarea name="mensaje" value={formData.mensaje} onChange= {handleChange} placeholder='Mensaje'></textarea>
                    </p>
                    <p className='acciones'>
                        <input type="submit" value="enviar"/>
                    </p>
                
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                
                </form>
            
            </div>
            <div class="datos">
                <h2> Otras vias de comunicacion </h2>
                <p> Tambien puede contactarse con nosotros por los siguientes medios: </p>
                <ul>
                    <li> <img src='/images/Iconos/icons8-añadir-teléfono-30.png' width="20"></img> Telefono: 430000000 </li>
                    <li> <img src='/images/Iconos/icons8-nuevo-post-30.png' width="20"></img> Email: tnieto025@gmail.com </li>
                    <li> <img src='/images/Iconos/icons8-instagram-viejo-30.png' width="20"></img> Instagram: MundoTec </li>
                    <li> <img src='/images/Iconos/icons8-facebook-30.png' width="20"></img> Facebook: MundoTec </li>
                    <li> <img src='/images/Iconos/icons8-twitter-30.png' width="20"></img> Twitter: MundoTec </li>
                </ul>
            </div>
        </main>
    )
}
export default ContactoPage;