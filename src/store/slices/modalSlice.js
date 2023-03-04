import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    content: '',
    message: ''
  },
  reducers: {
    setModal: (state, action) => {
      state.isOpen =  action.payload.isOpen
      state.content = action.payload.content
      state.message = action.payload.message
    }
  }
});

export const { setModal } = modalSlice.actions