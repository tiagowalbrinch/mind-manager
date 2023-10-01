import { createSlice } from "@reduxjs/toolkit"
import MOCKEDUSER from "../../../api/mocks/user.json"
import { UserState } from "../@types"

const userInfoInitialState: UserState = {
  loading: false,
  userData: MOCKEDUSER, // for user object
  error: false,
  success: false, // for monitoring the registration process.
}

const userInfoSlice = createSlice({
  name: "user infomation",
  initialState: userInfoInitialState,
  reducers: {},
  extraReducers: {},
})

export const userInfoReducer = userInfoSlice.reducer
