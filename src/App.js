import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import JugadoresComponent from './components/JugadoresComponent';
import EquipoSeleccionadoComponent from './components/EquipoSeleccionadoComponent';
import './styles/styles.scss';
const App = () => (
  <Provider store={store}>
    <main>
      <h1>Jugadores</h1>
      <JugadoresComponent />
      <EquipoSeleccionadoComponent />
    </main>
  </Provider>
)

export default App;
