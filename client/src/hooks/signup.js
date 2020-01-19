import React, { useContext } from 'react';
// import Button from '@material-ui/core/Button';
import Context from '../utils/context';
import {Button} from 'semantic-ui-react'


const SignUp = (props) => {
  const context = useContext(Context)
  return (
    <div className="FlexRowMain">
    <div style={{textAlign:'center'}}>
    <h1>Signup and Create an Account</h1>
      <Button color="blue"
              size="large"
              variant="contained"
              onClick={() => context.authObj.login()}>
        Signup
      </Button>
    </div>
    </div>
  )
}

export default (SignUp);