// This is the data layer, the initialState
export const initialState = {
  basket: [],
  user:null
};

// Selector from course
// item price + current amount, with the initial amount of 0
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

// reducer is an action listener
const reducer = (state, action) => {
  // Checking the action
  // console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      // below is wrong solutions
      // return {
      //   ...state, basket: state.basket.filter(item =>item.id !== action.id)
      // };
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0 ){
        newBasket.splice(index, 1);
      } else{
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in basket!`
        )
      }

      return {
        ...state,
         basket:newBasket
      }

    case "SET_USER":
      return {
        ...state,
        user: action.user
      };

    default:
      return state;
  }
};

export default reducer;
