import { Header, PageContainer, PageBody } from "@/components"
import "./globals.css"
import { Provider } from "@/common/stores/provider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <Provider>
        <PageBody>
          <Header />
          <PageContainer>{children}</PageContainer>
        </PageBody>
      </Provider>
    </html>
  )
}
