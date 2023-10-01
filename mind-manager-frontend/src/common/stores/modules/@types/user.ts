export interface User {
  name: string
  email: string
}
export interface UserState {
  loading: boolean
  userData: User // for user object
  error: boolean
  success: boolean // for monitoring the registration process.
}
