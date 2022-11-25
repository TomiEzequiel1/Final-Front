import '../../styles/components/layout/Header.css'

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <img src="images/Logo/logo.png" width="150" alt="logo" />
            <h1> MundoTec </h1>
            <hr></hr>
            <ul className='holder' >
                    <li> Instagram:MundoTec <img src='images/Iconos/icons8-instagram-viejo-30.png' width="20"></img> 
                     Telefono: 4300000  <img src='images/Iconos/icons8-añadir-teléfono-30.png' width="20"></img>
                     Email:tnieto025@gmail.com  <img src='images/Iconos/icons8-nuevo-post-30.png' width="20"></img>
                 </li>
                </ul>
            </div>
        </header> 
    );
}
export default Header