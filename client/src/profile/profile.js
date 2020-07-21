import React, { useContext, useState, useEffect } from 'react';
import Context from '../utils/context';

import { Link,Router,Route} from 'react-router-dom';
import history from '../utils/history';
import axios from 'axios';
import moment from 'moment'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import '../App.css'



const Profile = () => {
  const context = useContext(Context)

  const [stateLocal, setState] = useState({ open: false,
                                            post_id: null,
                                            posts: []
                                          })

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const user_id = context.dbProfileState[0].uid
    axios.get('https://warm-island-33082.herokuapp.com/api/get/userposts', {params: { user_id: user_id}}, { cancelToken: source.token })
      .then((res) => setState({...stateLocal, posts: [...res.data] }))
      .catch((err) => console.log(err))

      return () => {
        source.cancel();
      };
    }, []);
  

  const handleClickOpen = (pid) => {
    setState({open: true, post_id: pid })
  }

  const handleClickClose = () => {
    setState({open: false, post_id: null })
  }

  const DeletePost = () => {
    const post_id = stateLocal.post_id
    axios.delete('https://warm-island-33082.herokuapp.com/api/delete/postcomments', {data: { post_id: post_id }} )
      .then(() => axios.delete('https://warm-island-33082.herokuapp.com/api/delete/post', {data: { post_id: post_id }} )
          .then(res => console.log(res) ) )
      .catch(err => console.log(err))
      .then(() => handleClickClose())
      .then(() => setTimeout(() => history.replace('/profile'), 700 ) )
  }

  const RenderProfile = (props) => {
    return(
      <div style={{textAlign:'center',padding:'5px'}}>
        <h1>Welcome {props.profile.profile.nickname}</h1>
        <br />
        {/* <img className='profile_pic' src={props.profile.profile.picture} alt="" /> */}
        <br />
        <h4>Email: {props.profile.profile.email}</h4>
        <br />
        <h5>Name: {props.profile.profile.name} </h5>
        <br />
        {/* <h6> Email Verified: </h6> */}
        {/* {props.profile.profile.email_verified ? <p>Yes</p> : <p>No</p> } */}
        <br />
      </div>

     )
   }

  const RenderPosts = post => (
   
   <Card style={{width: '100%'/* , height: '200px' */, marginBottom: '10px', paddingBottom: '80px'}}>
      <CardHeader 
        title={<Link to={{pathname:'/post/' + post.post.pid, state: {post}}} style={{color:'#5936AC'}}>
                  {post.post.title}
                </Link> }
        subheader={
            <div className="FlexColumn">
              <div className="FlexRow">
              {  moment(post.post.date_created).format('MMMM Do, YYYY | h:mm a') }
              </div>
              <div className="FlexRow">
                <Link to={{pathname:'/editpost/' + post.post.pid, state:{post} }}>
                  <button className='profilebutton'>
                   Edit
                  </button>
                </Link>
                <button className='profilebutton' onClick={() => handleClickOpen(post.post.pid) }>
                 Delete
                </button>
              </div>
            </div>
            }
          />
      <br />
      <CardContent>
        <span style={{overflow: 'hidden' }}> {post.post.body} </span>
      </CardContent>

    </Card>
  );


      return(
          <div>
            <div>
            <RenderProfile profile={context.profileState} />
            </div>
            <div>
              {stateLocal.posts
                ? stateLocal.posts.map(post =>
                  <RenderPosts post={post} key={post.pid} /> )
                : null }
            </div>
            <Dialog
              open={stateLocal.open}
             // open={handleClickOpen}
              onClose={handleClickClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title"> Confirm Delete? </DialogTitle>
                <DialogContent>
                  <DialogContentText
                    id="alert-dialog-description"
                    >
                      Deleting Post
                    </DialogContentText>
                    </DialogContent>

                    <DialogActions>
                      <Button onClick={() => DeletePost() }>
                        Agree
                      </Button>
                      <Button onClick={() => handleClickClose()}>
                        Cancel
                      </Button>
                  </DialogActions>

            </Dialog>

          </div>
  )}



export default (Profile);