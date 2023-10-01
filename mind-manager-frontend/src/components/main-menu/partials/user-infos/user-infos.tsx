import { User } from "@/common/stores/modules/@types"

interface Props {
  userData: User
}

export function UserInfos({ userData }: Props) {
  const { name, email } = userData
  return (
    <>
      <div>{name}</div>
      <div>{email}</div>
    </>
  )
}
