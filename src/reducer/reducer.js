export const reducer = (state,action) => {
    if(action.type === 'EMPTY'){
      return {
        ...state,
        error:true,
        message:'Please enter a value'
      }
    }else if(action.type === 'REMOVE'){
      return {
        ...state,
        error:false,
        success:false,
        message:''
      }
    }else if(action.type === 'ADD'){
      return {
        ...state,
        success:true,
        message:'Added successfully',
        names:[...state.names,action.payload]
      }
    }

    return state;
  }