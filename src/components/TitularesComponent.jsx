import React from 'react';
import { connect } from 'react-redux';
import { quitarAJugadorTitular } from '../redux/actions/entrenador.action';
import cancha from '../cancha.svg'

const TitularesComponent = ({ titulares, quitarAJugadorTitular }) => (
    <section>
        <h2>Titulares</h2>
        <div className="cancha">
            {
                titulares.map(t => (
                    <article className="titular" key={t.id}>
                        <div>
                            <img src={t.foto} alt={t.nombre} />
                            <button onClick={()=>quitarAJugadorTitular(t)}>Quitar</button>
                        </div>
                        <p>{t.nombre}</p>
                    </article>
                ))
            }
            <img src={cancha} alt="Cancha"/>
        </div>
    </section>
)

const mapStateToProps = state => ({
    titulares: state.titulares
})

const mapDispatchToProps = {
    quitarAJugadorTitular
}

export default connect(mapStateToProps, mapDispatchToProps)(TitularesComponent);