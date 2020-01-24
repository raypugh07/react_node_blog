// root component will import and display context_state_config.js component
import React from 'react';
import ContextState from './context_state_config';
import './App.css'

const App = () => {

    return(
      <div className='app'>
     	 <ContextState />
      </div>
    )
}

export default App;