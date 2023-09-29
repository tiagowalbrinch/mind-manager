"use client"
import { PageWrapper } from "./partials"

export function PageContainer({ children }: { children: React.ReactNode }) {
  return <PageWrapper>{children}</PageWrapper>
}
