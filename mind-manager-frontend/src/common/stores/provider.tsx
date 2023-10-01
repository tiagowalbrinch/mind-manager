"use client"

import { store } from "./stores"
import { Provider } from "react-redux"

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}
