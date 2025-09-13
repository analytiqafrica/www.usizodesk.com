import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IinitialState {
  appId: string;
}

// Define the initial state using that type
const initialState: IinitialState = {
  appId: "edukidspreprimary",
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setAppId: (state, action: PayloadAction<string>) => {
      state.appId = action.payload;
    },
  },
});

export const { setAppId } = configSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getAppId = (state: RootState) => state?.config.appId;

export default configSlice.reducer;
