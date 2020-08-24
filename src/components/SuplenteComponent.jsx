import React from 'react';
import { connect } from 'react-redux';
import { quitarAJugadorSuplente } from '../redux/actions/entrenador.action';


const SuplenteComponent = ({ suplentes, quitarAJugadorSuplente }) => (
    <section>
        <h2>Suplente</h2>
        <div className="suplentes">
            {
                suplentes.map(s => (
                    <article className="suplente" key={s.id}>
                        <div>
                            <img src={s.foto} alt={s.nombre} />
                            <button onClick={() => quitarAJugadorSuplente(s)}>Quitar</button>
                        </div>
                        <p>{s.nombre}</p>
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    suplentes: state.suplentes
})

const mapDispatchToProps =  ({
    quitarAJugadorSuplente
});

export default connect(mapStateToProps, mapDispatchToProps)(SuplenteComponent);