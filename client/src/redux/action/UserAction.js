import * as types from '../constant'

export const loginUserAction = ({ username, password }) => {
    return {
        type: types.LOGIN_USER,
        creds: { username, password }
    }
}


export const userLoggedIn = ({ username,password  }) => {
    return {
        type: types.USER_LOGGEDIN,
        user: { username, password }
    }
}

export const logoutUserAction = () => {
    return {
        type: types.LOGOUT_USER
    }
}

export const userLoggedOut = () => {
    return {
        type: types.USER_LOGGEDOUT
    }
}
