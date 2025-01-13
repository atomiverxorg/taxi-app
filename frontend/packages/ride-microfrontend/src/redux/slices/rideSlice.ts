import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  rideList: string[];
}

const init: InitialState = {
  rideList: [],
}

const rideSlice = createSlice({
  name: 'rides',
  initialState: init,
  reducers: {
    addRide: (state, action) => {
      state.rideList.push(action.payload);
    },
  },
});

export const { addRide } = rideSlice.actions;
export default rideSlice.reducer;
