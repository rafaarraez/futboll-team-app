import React, { useEffect, createRef } from "react"
import { connect } from 'react-redux';
import { agregarAJugadorTitular, agregarAJugadorSuplente } from '../redux/actions/entrenador.action';

const JugadoresComponent = ({ jugadores, titulares, agregarAJugadorTitular, agregarAJugadorSuplente }) => {

    const gridJugadores = createRef()

    useEffect(() => {
        setScrollContainer()
        document.addEventListener('click', setScrollContainer)
    }) 
    
    // Función que fija el tamaño del grid de los jugadores
    const setScrollContainer = (desktop = true) => {
        let container = gridJugadores.current
        if (container) {
        const generatedGrid = () => {
            let items = container.getElementsByClassName('jugador')
            let itemsLength = items.length
            let bp = window.matchMedia("(min-width: 640px)").matches ? window.matchMedia("(min-width: 1024px)").matches ? 4 : 2 : 1

            const getWidth = () => {
            let n = bp + (itemsLength > bp ? 0.3 : 0)
            return (itemsLength / n) * 100
            }
            return `
                    display: grid;
                    grid-template-columns: repeat(${itemsLength}, 225px);
                    grid-gap: 1rem;
                    width : ${getWidth()}%;
                `
        }
        let styles = !desktop && window.matchMedia("(min-width: 1024px)").matches ? `display: grid; grid-row-gap: 1rem;` : generatedGrid()
        container.setAttribute('style', styles)
        }
    }


    return(
        <section>
            <h1>jugadores</h1>
            <div className="contenedor-jugadores">
                <div ref={gridJugadores} onClick={() => setScrollContainer.bind(this)}>
                    {
                        jugadores.map(j => (
                            <article className="jugador" key={j.id}>
                                <img src={j.foto} alt={j.nombre} />
                                <h3>{j.nombre}</h3>
                                <div>
                                    {titulares.length < 11 && <button onClick={() => agregarAJugadorTitular(j) }>Titular</button>}
                                    <button onClick={() => agregarAJugadorSuplente(j) }>Suplente</button>
                                </div>
                            </article>
                        ))
                    }
                </div>
            </div>
        </section>
    )
    
}

const mapStateToProps = state => ({
    jugadores: state.jugadores,
    titulares: state.titulares
});

const mapDispatchToProps = {
    agregarAJugadorTitular,
    agregarAJugadorSuplente
}


export default connect(mapStateToProps, mapDispatchToProps)(JugadoresComponent);