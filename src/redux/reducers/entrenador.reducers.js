import { AGREGAR_A_JUGADOR_TITULAR, AGREGAR_A_JUGADOR_SUPLENTE, QUITAR_A_JUGADOR_SUPLENTE, QUITAR_A_JUGADOR_TITULAR} from '../actions/entrenador.action';

const defaultState = {
    jugadores: [
        {
            id: 1,
            nombre: "Rafael Arraez",
            foto: "https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s150x150/53863058_476996819502783_2636773439121129472_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=R-JfpTLKo0kAX8i981G&oh=56bc8e9a567d8f22be25a44c79940493&oe=5F6EC139"
        },
        {
            id: 2,
            nombre: "Jajaja.ni Hernandez",
            foto: "https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s150x150/106478932_324998995347226_5434573615171462760_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=T24lGJraQDsAX-obkrk&oh=0fa831a3edfc4fe683c6597ba6a44275&oe=5F6BEDC5"
        },
        {
            id: 3,
            nombre: 'Ivan "El del Webo Grande" De Menezes',
            foto: "https://avatars2.githubusercontent.com/u/26354851?s=460&u=16270d76f5fe29776aa9c503831dcb70bceb6df3&v=4"
        },
        {
            id: 4,
            nombre: 'Jean Pier "Tipo serio" Mobayed',
            foto: "https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s150x150/14334469_1783811428541074_4473540933677219840_a.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=LhdeXntylcEAX_93KrG&oh=e9d258133592e3804e87727dc01873d4&oe=5F6CC1B4"
        },
        {
            id: 5,
            nombre: "El Torto",
            foto: "https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s150x150/69344878_662112424268703_8356456927089131520_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=TitG_5o8TKcAX--WB2k&oh=34db9043676c2975dc360b9f10765191&oe=5F6EDB93"
        },
        {
            id: 6,
            nombre: 'Juan "Narizota" Galindez',
            foto: "https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s150x150/117355080_1757437834422787_1485846315057627982_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=owfBXqOOYawAX9SgZCx&oh=124b6700965fb1bb3229ae38043c649e&oe=5F6C66F8"
        },
        {
            id: 7,
            nombre: "Yisus",
            foto: "https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s150x150/30592873_2063075430599228_626737867103666176_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=UEfnk1XLO0oAX-PiX6V&oh=a702d19eb529b54ea3eb31b34d844c45&oe=5F6ED158"
        },
        {
            id: 8,
            nombre: 'Luis "El negro" Garcia',
            foto: "https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s150x150/112642911_389057812079073_189044898429062415_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=bW6MquCtdCUAX9BPlIJ&oh=194c0958929f53403140dfefcbb39ba7&oe=5F6D39B2"
        },
        {
            id: 9,
            nombre: "Ardiman",
            foto: "https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s150x150/75360979_366461767476953_7916210942319263744_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=ar_Q9w8_rx8AX-YH825&oh=6f1f55d5df77b58ff0bc706afc063445&oe=5F6C409B"
        },
        {
            id: 10,
            nombre: 'Miguel "Come Palomas" Mendoza',
            foto: "https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s150x150/96833965_2534076800236857_3378169169043259392_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=Hk1lD_JSXIMAX8iJoaF&oh=83a8382a220fd955be969c7e6800efe4&oe=5F6C7A66"
        },
        {
            id: 11,
            nombre: "Lore",
            foto: "https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s150x150/109264606_281189586494958_6825086726312733752_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=IVsrKofgLL0AX-dcVm9&oh=ba95da52e9982a2d2f5eebebdad933c9&oe=5F6E8675"
        },
        {
            id: 12,
            nombre: "Levi",
            foto: "https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s150x150/118356219_629596581299561_3487679928916090126_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=Xq8KYrfIGMkAX_e9SZD&oh=34a3a6a04d3a26abfba8ee1358145ba7&oe=5F6E98D0"
        },
        {
            id: 13,
            nombre: "El Chaparro",
            foto: "https://scontent-mia3-2.cdninstagram.com/v/t51.2885-19/s150x150/73420523_2249863718637435_8298884398019772416_n.jpg?_nc_ht=scontent-mia3-2.cdninstagram.com&_nc_ohc=XpXFQUpfm2EAX8oFojv&oh=d4c0911028cc310b25f620b6a88c232d&oe=5F6CD735"
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