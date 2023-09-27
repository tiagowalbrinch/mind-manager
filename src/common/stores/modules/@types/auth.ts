import { User } from "./user"

export interface Authentication {
  loading: boolean
  userInfo: User // for user object
  userToken: any // for storing the JWT
  error: any
  success: boolean // for monitoring the registration process.
}
