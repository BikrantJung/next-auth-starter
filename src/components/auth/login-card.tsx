/* Login Form is used inside login card */
import Link from "next/link"

import { LoginForm } from "../forms/login-form"
import { CardWrapper } from "./card-wrapper"

/**
 * A card wrapper for login box
 * @returns JSX.Element
 */
export const LoginCard = () => {
  return (
    <div className="max-w-[22rem] w-full">
      <CardWrapper
        Header={<p>Welcome Back</p>}
        Content={<LoginForm />}
        showSocialButtons
        Footer={
          <div className="mx-auto text-sm">
            <Link href="/auth/register">New user? Register</Link>{" "}
          </div>
        }
      />
    </div>
  )
}
