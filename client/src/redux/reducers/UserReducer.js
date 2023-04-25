import { USER_LOGGEDIN, USER_LOGGEDOUT } from '../constant'

const initialState = null

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGEDIN:
            return action.user

        case USER_LOGGEDOUT:
            return initialState

        default:
            return state
    }
}