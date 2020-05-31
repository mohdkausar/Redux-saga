const reducer = (state = {}, action) => {
   switch (action.type) {
     case 'GET_HOLIDAYS':
          return { ...state, loading: true };
     case 'HOLIDAY_RECEIVED':
          return { ...state, calendar: action.json, loading: false }
     default: 
          return state;
   }
  };
  export default reducer;