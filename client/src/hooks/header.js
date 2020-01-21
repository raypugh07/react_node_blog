// contains the links to the components and a login and logout button based on user auth state

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../utils/context';
import { Button,Segment } from 'semantic-ui-react'


const Header = () => {
  const context = useContext(Context)

    return(
        <div>
          <Segment textAlign='center'>
          <Link to='/' style={{padding: '10px'}}>
            Home
          </Link>
          <Link to='/profile' style={{padding: '10px'}}>
            Jabber
          </Link>
          <Link to='/addpost' style={{padding: '10px'}}>
            Add Gib
          </Link>
          {/* <Link to='/hooksform' style={{padding: '5px'}}>
            Hooks Form
          </Link>
          <Link to='/hookscontainer' style={{padding: '5px'}}>
            Hooks Container
          </Link> */}
          <Link to='/posts' style={{padding: '10px'}}>
            Gibber Feed
          </Link>
         
          {/* <Link to='/privateroute' style={{padding: '5px'}}>
            Private Route
          </Link> */}
          {!context.authState
            ? <Button  color='blue' onClick={() => context.authObj.login()}>Login</Button>
            : <Button  color='blue' onClick={() => context.authObj.logout()}>Logout</Button>
          }
          </Segment>
        </div>
  )};


export default Header;