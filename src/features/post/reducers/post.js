const initialState = {
    post: {},
    isLoading: false,
    isError: false
  }
  
const postReducer = function(state=initialState, action){
  switch (action.type) {
    case "READ_POST_PENDING":
      return {...state, isLoading: true, isError: false}
    case "READ_POST_FULFILLED":
      return {...state, post: action.payload.data, isLoading: false, isError: false}
    case "READ_POST_REJECTED":
      return {...state, isLoading: false, isError: true}
    default:
      return state
  }
}

export default postReducer;