import { SHOP_DATA } from '../../shopping-data';

const INITIAL_STATE = { collections: null };

const shopDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_COLLECTIONS':
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopDataReducer;
