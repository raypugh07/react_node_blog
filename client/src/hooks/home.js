// diplays the text of home
 
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button,Container } from 'semantic-ui-react'
import Context from '../utils/context';





const Home = props => {
  const context = useContext(Context)
  return(

    <div>
      <Container text style={{padding:'10px'}} textAlign='center'>
      <h1>Welcome to Gibber.</h1>
      <p>Please {!context.authState
        ? <Button  color='blue' onClick={() => context.authObj.login()}>Login</Button>
        : <Button  color='blue' onClick={() => context.authObj.login()}>Login</Button>} or <Button><Link to='/signup'>Sign Up</Link></Button>
        </p>
        <p>Once logged in click <Link to='/profile'>here</Link> to view your Jabber profile.
        </p>

        </Container>

    </div>
);

}

export default Home;

/* import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Home = props => {
    useEffect(() => {
      axios.get('/api/hello')
        .then(res => setState(res.data))
    }, [])

    const [state, setState] = useState('')

  return(
    <div>
      Home
      <p>{state}</p>
    </div>
 )
};

export default Home; */