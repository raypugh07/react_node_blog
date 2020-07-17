// contains the links to the components and a login and logout button based on user auth state

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../utils/context';
import { Button,Segment } from 'semantic-ui-react'
import '../App.css'


const Header = () => {
  const context = useContext(Context)

    return(
        <div className='header1'>
          <header className='header_nav'>
          <Link  to='/' /* style={{padding: '10px'}} */ style={{color:'#5936AC'}}>
            Home
          </Link>
          <Link to='/profile' /* style={{padding: '10px'}} */style={{color:'#5936AC'}}>
            Jabber
          </Link>
          <Link to='/addpost' /* style={{padding: '10px'}} */style={{color:'#5936AC'}}>
            Add Gib
          </Link>
          {/* <Link to='/hooksform' style={{padding: '5px'}}style={{color:'#5936AC'}}>
            Hooks Form
          </Link>
          <Link to='/hookscontainer' style={{padding: '5px'}}style={{color:'#5936AC'}}>
            Hooks Container
          </Link> */}
          <Link to='/posts' /* style={{padding: '10px'}} */style={{color:'#5936AC'}}>
            Gibber Feed
          </Link>
         
          {/* <Link to='/privateroute' style={{padding: '5px'}}style={{color:'#5936AC'}}>
            Private Route
          </Link> */}
          {!context.authState
            ? <Button style={{padding:'5px',width:'75px'}}  color='violet' onClick={() => context.authObj.login()}>Login</Button>
            : <Button style={{padding:'5px'}}  color='violet' onClick={() => context.authObj.logout()}>Logout</Button>
          }
          </header>
        </div>
  )};


export default Header;