import { createStore } from 'redux';
import entrenadorReducer from './reducers/entrenador.reducers';

const store = createStore(entrenadorReducer);

export default store;