"use client"

import { store } from "./stores"
import { Provider as ReduxProvider } from "react-redux"

export function Provider({ children }: { children: React.ReactNode }) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>
}
