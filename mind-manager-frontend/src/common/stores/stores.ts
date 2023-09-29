import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "./modules/authentication/auth"

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})
