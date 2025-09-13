import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IActionProps {
  id: string;
  data?: any;
}

// Define a type for the slice state
export interface IModal {
  id: null | string;
  data?: any;
  open: boolean;
}

// Define the initial state using that type
const initialState: IModal = {
  id: null,
  data: {},
  open: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<IActionProps>) => {
      state.id = action.payload.id;
      state.data = action.payload?.data;
      state.open = true;
    },
    hideModal: (state) => {
      state.id = null;
      state.data = {};
      state.open = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getModalId = (state: RootState) => state?.modal.id;
export const getModalData = (state: RootState) => state?.modal.data;
export const isModalOpen = (state: RootState) => state?.modal.open;

export default modalSlice.reducer;
