import { AGREGAR_A_JUGADOR_TITULAR, AGREGAR_A_JUGADOR_SUPLENTE, QUITAR_A_JUGADOR_SUPLENTE, QUITAR_A_JUGADOR_TITULAR} from '../actions/entrenador.action';

const defaultState = {
    jugadores: [
        {
            id: 1,
            nombre: "Rafael Arraez",
            foto: "https://img.pngio.com/persona-vector-png-portadas-shawnmendes-vectorpng-boys-persona-png-356_467.png"
        },
        {
            id: 2,
            nombre: "Jajaja.ni Hernandez",
            foto: "https://png.pngtree.com/png-clipart/20190516/original/pngtree-businessman-vector-icon-png-image_3710727.jpg"
        },
        {
            id: 3,
            nombre: 'Ivan "El del Grande" De Menezes',
            foto: "https://img.pngio.com/persona-vector-png-portadas-shawnmendes-vectorpng-boys-persona-png-356_467.png"
        },
        {
            id: 4,
            nombre: 'Jean Pier "Tipo serio" Mobayed',
            foto: "https://png.pngtree.com/png-clipart/20190516/original/pngtree-businessman-vector-icon-png-image_3710727.jpg"
        },
        {
            id: 5,
            nombre: "El Torto",
            foto: "https://img.pngio.com/persona-vector-png-portadas-shawnmendes-vectorpng-boys-persona-png-356_467.png"
        },
        {
            id: 6,
            nombre: 'Juan "Narizota" Galindez',
            foto: "https://png.pngtree.com/png-clipart/20190516/original/pngtree-businessman-vector-icon-png-image_3710727.jpg"
        },
        {
            id: 7,
            nombre: "Yisus",
            foto: "https://img.pngio.com/persona-vector-png-portadas-shawnmendes-vectorpng-boys-persona-png-356_467.png"
        },
        {
            id: 8,
            nombre: 'Luis "The N" Garcia',
            foto: "https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-business-male-icon-vector-png-image_916468.jpg"
        },
        {
            id: 9,
            nombre: "Ardiman",
            foto: "https://barcequipos.com/imgs/contactobarce.png"
        },
        {
            id: 10,
            nombre: 'Miguel Mendoza',
            foto: "https://barcequipos.com/imgs/contactobarce.png"
        },
        {
            id: 11,
            nombre: "Lore",
            foto: "https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-business-male-icon-vector-png-image_916468.jpg"
        },
        {
            id: 12,
            nombre: "Levi",
            foto: "https://barcequipos.com/imgs/contactobarce.png"
        },
        {
            id: 13,
            nombre: "El Chaparro",
            foto: "https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-business-male-icon-vector-png-image_916468.jpg"
        }
    ],
    titulares: [],
    suplentes: []
}

const entrenadorReducer = (state = defaultState, action) => {
    switch (action.type){
        case AGREGAR_A_JUGADOR_TITULAR:
            return {
                ...state,
                titulares: state.titulares.concat(action.jugador),
                jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
            }
        case AGREGAR_A_JUGADOR_SUPLENTE:            
            return {
                ...state,
                suplentes: state.suplentes.concat(action.jugador),
                jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
            }
        case QUITAR_A_JUGADOR_TITULAR:
            return {
                ...state,
                titulares: state.titulares.filter(j => j.id !== action.jugador.id),
                jugadores: state.jugadores.concat(action.jugador)
            }
        case QUITAR_A_JUGADOR_SUPLENTE:
            return {
                ...state,
                suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
                jugadores: state.jugadores.concat(action.jugador)
            }
        default:
            return state
    }    
}

export default entrenadorReducer;