import Link from "next/link"
import { ContentWrapper } from "./partials"
export function MainMenu() {
  return (
    <ContentWrapper>
      <Link href="/">Home</Link>
      <Link href="/section">Sections</Link>
      <Link href="/login">Login</Link>
    </ContentWrapper>
  )
}
