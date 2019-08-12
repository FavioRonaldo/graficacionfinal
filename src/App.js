import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';

import './App.css';



import Usuarios from './componentes/administrador/usuarios';
import MostrarUsuario from './componentes/administrador/mostrarusuario';
import EditarUsuario from './componentes/administrador/editarusuario';
import NuevoUsuario from './componentes/administrador/nuevousuario';
import Navbar from './componentes/layout/navbar';

import horario from './componentes/horario/horarios';
import ra from './componentes/realidad/ar';

import login from './componentes/auth/login';
import {UserIsAuthenticated,UserIsNotAuthenticated} from './helpers/auth';

function App() {
  return (
    
    <Provider store={store}>
    <Router>
    <Navbar />
    <div className="container">
    <Switch>

    <Route exact path="/login" component={login}/>

      <Route exact path="/usuario" component={UserIsAuthenticated(Usuarios)}/>
      <Route exact path="/usuario/nuevo" component={UserIsAuthenticated(NuevoUsuario)}/>
      <Route exact path="/usuario/editar/:id" component={UserIsAuthenticated(EditarUsuario)}/>
      <Route exact path="/usuario/:id" component={UserIsAuthenticated(MostrarUsuario)}/>


      <Route exact path="/horarios" component={UserIsAuthenticated(horario)}/>
      <Route exact path="/realidadaumentada" component={UserIsAuthenticated(ra)}/>
      
    </Switch>
    </div>
  </Router>
  </Provider>
  );
}

export default App;
