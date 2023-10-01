import Link from "next/link"
import { ContentWrapper } from "./partials"
import { useSelector } from "react-redux"
import { StoreState } from "@/common/stores/stores"
import { UserInfos } from "./partials/user-infos"

export function MainMenu() {
  const { userData } = useSelector((state: StoreState) => state.userState)

  return (
    <ContentWrapper>
      <UserInfos userData={userData} />
      <Link href="/">Home</Link>
      <Link href="/section">Sections</Link>
      <Link href="/login">Login</Link>
    </ContentWrapper>
  )
}
