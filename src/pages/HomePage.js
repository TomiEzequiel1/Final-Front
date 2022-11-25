import '../styles/components/pages/HomePage.css'
const HomePage = (props) => {
    return ( 
        <section className="holder">
            <div className="homeimg">
                <img src="images/Principio/luca-bravo-2.jpg" width="1000" height="400" alt="computadoras"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2> Bienvenidos </h2>
                    <p> Bienvenido a la pagina mas completa, informativa y serviciaria. Aqui encontraras todo tipo de informacion
                sobre la tecnologia del momento.</p>
                <p> Estaras informado sobre todo lo que rodea el mundo de la tecnologia, los nuevos
                celulares, computadoras y mas. daremos los mejores consejos sobre el cuidado de tus aparatos electronicos y como repararlos, con guias completas y bien explicadas   
                Brindamos reparacion de computadora, celulares, consolas, etc. donde su dispositivo tendra el mejor cuidado y reparacion posible.  </p> 
                </div>
                <div className="testimonios">
                    <h2> Testimonios </h2>
                    <div className="testimonio">
                        <span class="cita"> Simplemente Excelente, mucha profesionalidad. </span>
                        <span class="autor"> Ignacio Norte </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HomePage