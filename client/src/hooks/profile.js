// user dashboard that displays user profile data. comes from auth0 and you do not set up manually. getting prof data
// from the auth obj passed down through context.

import React, { useContext } from 'react';
import Context from '../utils/context';


const Profile = () => {
  const context = useContext(Context)


  const RenderProfile = (props) => {
    return(
      <div>
        <h1>{props.profile.profile.nickname}</h1>
        <br />
        <img src={props.profile.profile.picture} alt="" />
        <br />
        <h4> {props.profile.profile.email}</h4>
        <br />
        <h5> {props.profile.profile.name} </h5>
        <br />
        <h6> Email Verified: </h6>
        {props.profile.profile.email_verified ? <p>Yes</p> : <p>No</p> }
        <br />
      </div>
     )
   }


    return(
      <div>
        <RenderProfile profile={context.authObj.userProfile} />
      </div>
  )}



export default (Profile);