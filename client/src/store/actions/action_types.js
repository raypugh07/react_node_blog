// holds all the string action types in variables. allows easy modifying of action types since you
// will only have to change them here


export const SUCCESS = "SUCCESS"
                                        // boiler plate actions
export const FAILURE = "FAILURE"

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
                                        // updates auth state of user
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const ADD_PROFILE = "ADD_PROFILE"
                                        // saves profile data from Auth0 to the global state
export const REMOVE_PROFILE = "REMOVE_PROFILE"

export const USER_INPUT_CHANGE = "USER_INPUT_CHANGE"
                                        // tracks changes and submits user submitted text of the form
export const USER_INPUT_SUBMIT = "USER_INPUT_SUBMIT"

//

export const SET_DB_PROFILE = "SET_DB_PROFILE"

export const REMOVE_DB_PROFILE = "REMOVE_DB_PROFILE"

export const FETCH_DB_POSTS = "FETCH_DB_POSTS"

export const REMOVE_DB_POSTS = "REMOVE_DB_POSTS"