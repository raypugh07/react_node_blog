// only class in app. a vanilla js class that holds the authentication associated functions and variables

import auth0 from 'auth0-js'
import history from './history';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "dev-b7l7o2zo.auth0.com",
    clientID: 'ZSVujnyP6b1vNBhIvy3Laph4LTwScj9r',
    //redirectUri: 'http://localhost:3000/callback',  //dev
    redirectUri: 'https://gibber.netlify.com/callback',     //prod
    responseType: 'token id_token',
    scope: 'openid profile email'
  })

  userProfile = {}

  login = () => {
      this.auth0.authorize()
  }

  handleAuth = () => {
    this.auth0.parseHash((err, authResult) => {
      if(authResult) {
        localStorage.setItem('access_token', authResult.accessToken)
        localStorage.setItem('id_token', authResult.idToken)

        let expiresAt = JSON.stringify((authResult.expiresIn * 1000 + new Date().getTime()))
        localStorage.setItem('expiresAt', expiresAt)

        this.getProfile();
        setTimeout(() => { history.replace('/authcheck') }, 600);
      } else {
        console.log(err)
      }
    })
  }


  getAccessToken = () => {
    if(localStorage.getItem('access_token')) {
      const accessToken = localStorage.getItem('access_token')
      return accessToken
    } else {
      return null
    }
  }


  getProfile = () => {
    let accessToken = this.getAccessToken()
    if(accessToken) {
      this.auth0.client.userInfo(accessToken, (err, profile) => {
          if(profile) {
            this.userProfile = { profile }
          }
      } )
    }
  }


  logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expiresAt')
    setTimeout(() => { history.replace('/authcheck') }, 200);
  }

  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expiresAt'))
    return new Date().getTime() < expiresAt
  }

}