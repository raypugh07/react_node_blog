// diplays the text of home
 
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button,Container } from 'semantic-ui-react'
import Context from '../utils/context';
import '../App.css'





const Home = props => {
  const context = useContext(Context)
  return(

    <div>
      <Container text style={{padding:'10px'}} textAlign='center'>
      <h1>Welcome to Gibber.<br/>
        Social Media without Clutter...<br/>
        or Restrictions.
      </h1>
      <p>{/* {!context.authState
        ? <Button  color='violet' onClick={() => context.authObj.login()}>Login</Button>
        : <Button  color='violet' onClick={() => context.authObj.login()}>Login</Button>} or  */}<Button color='violet' onClick={() => context.authObj.login()}>Sign Up</Button>
        </p>
        <p>Once logged in click <Link style={{color:'#5936AC'}} to='/profile'>here</Link> to view your Jabber profile. *
        </p>
        <p style={{fontSize:'12px'}}>* If using Google to login you still have to sign up before being able to use your Google credentials.</p>

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