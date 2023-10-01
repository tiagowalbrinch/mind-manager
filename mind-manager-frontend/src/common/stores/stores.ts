import { configureStore } from "@reduxjs/toolkit"
import { userInfoReducer } from "./modules/user-info/userinfo-slice"
import { UserState } from "./modules/@types"
export interface StoreState {
  userState: UserState
}

export const store = configureStore({
  reducer: {
    userState: userInfoReducer,
  },
})
