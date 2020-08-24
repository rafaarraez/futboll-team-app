export const AGREGAR_A_JUGADOR_TITULAR = 'AGREGAR_A_JUGADOR_TITULAR';
export const AGREGAR_A_JUGADOR_SUPLENTE = 'AGREGAR_A_JUGADOR_SUPLENTE';
export const QUITAR_A_JUGADOR_TITULAR = 'QUITAR_A_JUGADOR_TITULAR';
export const QUITAR_A_JUGADOR_SUPLENTE = 'QUITAR_A_JUGADOR_SUPLENTE';

export const agregarAJugadorTitular = (jugador) => {
    return{
        type: AGREGAR_A_JUGADOR_TITULAR,
        jugador
    }
}

export const agregarAJugadorSuplente = (jugador) => {
    return{
        type: AGREGAR_A_JUGADOR_SUPLENTE,
        jugador
    }
}

export const quitarAJugadorTitular = (jugador) => {
    return{
        type: QUITAR_A_JUGADOR_TITULAR,
        jugador
    }
}

export const quitarAJugadorSuplente = (jugador) => {
    return{
        type: QUITAR_A_JUGADOR_SUPLENTE,
        jugador
    }
}