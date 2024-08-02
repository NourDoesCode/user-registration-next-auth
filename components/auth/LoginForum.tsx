import { Card } from "../ui/card";
import CardWrapper from "./CardWrapper";

export const LoginForum = () => {
  return (
    <CardWrapper
      headerLabel="Welcome Back!"
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account?"
      showSocial
    >
      Login Form!
    </CardWrapper>
  );
};
