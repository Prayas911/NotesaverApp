// filepath: c:\Users\PRAYAS\OneDrive\Desktop\React\pasteApp\paste-app\src\redux\store.js
import { configureStore } from '@reduxjs/toolkit';
import { pasteSlice } from './redux/pasteSlice'

export const store = configureStore({
  reducer: {
    paste: pasteSlice.reducer, // 'paste' must match what you use in useSelector
  },
});