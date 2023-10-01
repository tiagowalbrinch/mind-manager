"use client"
import { MainMenu, PageContainer } from "@/components"
import "./globals.css"
import { StoreProvider } from "@/common/stores/provider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <StoreProvider>
          <MainMenu />
          <PageContainer>{children}</PageContainer>
        </StoreProvider>
      </body>
    </html>
  )
}
