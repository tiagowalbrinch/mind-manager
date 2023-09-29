"use client"
import { BodyWrapper } from "./partials"

export function PageBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
