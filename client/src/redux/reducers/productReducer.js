import { PRODUCT_LIST,SET_PRODUCT_LIST} from '../constant'; // corrected import statement

const initialState = [];

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      return [
        ...state,
        action.data
      ];

    default:
      return state;
  }
};