// component auth0 will redirect here after the user authenticates. from here user is redirected to the authcheck page
// then home page

import React from 'react'
import {Icon} from 'semantic-ui-react'

const Callback = props => (
    <div style={{textAlign:'center'}}>
      <Icon loading name='spinner' size='large'></Icon>
    </div>
);

export default Callback;