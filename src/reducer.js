// This is the data layer
// initialState
export const initialState = {
  basket: [],
};

// reducer is an action listener
const reducer = (state, action) => {
  // Checking the action
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
