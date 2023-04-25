import { combineReducers } from 'redux'
import { UserReducer } from '../reducers/UserReducer'
import { productReducer } from '../reducers/productReducer'

export default combineReducers({
    product: productReducer,
    user: UserReducer
})
