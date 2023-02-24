import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    content: ''
  },
  reducers: {
    setModal: (state, action = '') => {
      state.isOpen = !state.isOpen,
      state.content = action.payload
    }
  }
});

export const { setModal } = modalSlice.actions