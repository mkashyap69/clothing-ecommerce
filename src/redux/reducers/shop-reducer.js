const INITIAL_STATE = {
  collections: null,
  isFetching: true,
  errorMessage: '',
};

const shopDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_COLLECTIONS_START':
      return {
        ...state,
        isFetching: true,
      };
    case 'FETCH_COLLECTIONS_SUCCESS':
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
      };

    case 'FETCH_COLLECTIONS_FAILURE':
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopDataReducer;
