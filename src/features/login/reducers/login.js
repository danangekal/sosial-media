const initialState = {
    user: {},
    isLoading: false,
    isError: false
  }
  
const loginReducer = function(state=initialState, action){
  switch (action.type) {
   case "LOGIN_USER_PENDING":
      return {...state, isLoading: true, isError: false}
    case "LOGIN_USER_FULFILLED":
      return {...state, user: action.payload.data, isLoading: false, isError: false}
    case "LOGIN_USER_REJECTED":
      return {...state, isLoading: false, isError: true}
    default:
      return state
  }
}

export default loginReducer;