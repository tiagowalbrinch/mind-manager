import { createSlice } from "@reduxjs/toolkit"
import { Authentication } from "../@types"

const authInitialState: Authentication = {
  loading: false,
  userInfo: { name: "", email: "" }, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {},
  extraReducers: {},
})

export const authReducer = authSlice.reducer
