import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  restaurant: {
    name: null,
    image: null,
    rating: null,
    type: null,
    address: null,
    short_description: null,
    dishes: null,
    _id: null,
  },
};

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = { ...action.payload };
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
