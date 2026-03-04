import { configureStore, createSlice } from '@reduxjs/toolkit';

const cart = createSlice ({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem(state, actions) {
      const index = state.findIndex((findId) => findId.id === actions.payload.id);
      if(index > -1) {
        state[index].count++;
      } else {
        state.push(actions.payload);
      }
    },

    addCount(state,action) {
      const index=state.findIndex((findId) => findId.id === action.payload);
      state[index].count++;
    },
    subCount(state,action) {
      const index=state.findIndex((findId) => findId.id === action.payload );
      if (state[index].count === 1) {
        state[index].count = 1;
      } else {
        state[index].count--;
      }
    },
    deleteItem(state,action) {
      const index = state.findIndex((findId) => findId.id === action.payload);
      state.splice(index, 1);
    },
    deleteItems(state, action) {
      return state.filter(item => !action.payload.includes(item.id));
    },
    changeCount(state, action) {
      const index = state.findIndex((findId) => findId.id === action.payload.id);
      if (index > -1) {
        state[index].count = action.payload.count;
      }
    }

  }
});

export const {addItem,addCount,subCount, deleteItem, deleteItems, changeCount} = cart.actions;

export default configureStore({
  reducer: {
   cart: cart.reducer
  }
});