import React, { useContext } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import history from './utils/history';

import Context from './utils/context';
import AuthCheck from './utils/authcheck';

import Home from './hooks/home';
import Header from './hooks/header';
import HooksContainer1 from './hooks/hook1';
import Callback from './hooks/callback';
import HooksForm from './hooks/hooks_form1';
import PrivateComponent from './hooks/privatecomponent';
import SignUp from './hooks/signup';


import Profile from './profile/profile';
import ShowUser from './profile/showuser';
/* import SendMessage from './Profile/sendmessage';
import ShowMessages from './Profile/showmessages';
import ReplytoMessage from './Profile/replytomessage'; */

import Posts from './blog/posts';
import AddPost from './blog/addpost';
import ShowPost from './blog/showpost';
import EditPost from './blog/editpost';



const PrivateRoute = ({component: Component, auth }) => (
  <Route render={props => auth === true
    ? <Component auth={auth} {...props} />
    : <Redirect to={{pathname:'/signup'}} />
  }
  />
)



const Routes = () => {
    const context = useContext(Context)

      return(
        <div style={{background:'#fceed1'}}>
          <Router history={history} >
          <Header />
          <br />
          <br />
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/hooksform' component={HooksForm} />

              <Route path='/hookscontainer' component={HooksContainer1} />
              <Route path='/authcheck' component={AuthCheck} />
              <Route path='/signup' component={SignUp} />

              <Route path='/posts' component={Posts} />
              <Route path='/post/:pid' component={ShowPost} />
              <Route path='/editpost/:pid' component={EditPost} />
              <PrivateRoute path='/addpost' auth={context.authState} component={AddPost} />

              <Route path="/user/:name" component={ ShowUser } />

              <PrivateRoute path='/profile'
                            auth={context.authState}
                            component={Profile} />

             {/*  <PrivateRoute path="/sendmessage"
                            auth={context.authState}
                            component={ SendMessage } />

              <PrivateRoute path="/showmessages/:id"
                            auth={context.authState}
                            component={ ShowMessages } />
              <PrivateRoute path="/replytomessage"
                            auth={context.authState}
                            component={ ReplytoMessage } /> */}

              <PrivateRoute path='/privateroute'
                            auth={context.authState}
                            component={PrivateComponent} />
              <PrivateRoute path="/profile"
                            auth={context.authState}
                            component={Profile} />
              <Route path='/callback'
                     render={(props) => { context.handleAuth(props);
                                           return <Callback />}} />


            </Switch>
          </div>
          </Router>
        </div>
  )}



export default Routes;